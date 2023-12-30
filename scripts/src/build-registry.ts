import { dirname, join } from 'path'

import { findUpSync } from 'find-up'
import { outputFile, remove } from 'fs-extra'
import { Project } from 'ts-morph'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = dirname(findUpSync('pnpm-lock.yaml')!)
process.chdir(join(root, 'apps', 'storybook'))

const project = new Project({})
project.addSourceFilesAtPaths('src/**/stories/*.tsx')

const sourceFiles = project.getSourceFiles()

// ----------------------------------------------------------------------------
// Build __registry__/index.tsx.
// ----------------------------------------------------------------------------
type ComponentRegistry = Record<
  string,
  Record<
    string,
    {
      name: string
      story: string
      component: string
      file: string
    }
  >
>

function generateNested(registry: ComponentRegistry): string {
  let nestedStory = '{\n'
  for (const component in registry) {
    nestedStory += `  "${component}": {\n`
    for (const story in registry[component]) {
      const entry = registry[component][story]
      nestedStory += `    "${story}": {\n`
      nestedStory += `      name: "${entry.name}",\n`
      nestedStory += `      story: "${entry.story}",\n`
      nestedStory += `      component: ${entry.component},\n`
      nestedStory += `      file: "${entry.file}"\n`
      nestedStory += '    },\n'
    }
    nestedStory += '  },\n'
  }
  nestedStory += '}'
  return nestedStory
}

const buildRegistryIndex = async () => {
  const registry: ComponentRegistry = {}

  sourceFiles.forEach((file) => {
    const component = file.getDirectory().getParent()?.getBaseName()
    if (!component) {
      console.log('Component not found')
      return
    }
    const story = file.getBaseNameWithoutExtension()
    if (!story) {
      console.log(`Story not found for: ${component}`)
      return
    }

    if (!registry[component]) {
      registry[component] = {}
    }

    registry[component][story] = {
      name: `${component}-${story}`,
      story,
      component: `React.lazy(() => import("@/registry/${component}/${story}"))`,
      file: `registry/${component}/${story}.tsx`,
    }
  })

  const index = `/* eslint-disable prettier/prettier */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

type ComponentRegistry = Record<
  string,
  Record<
    string,
    {
      name: string
      story: string
      component: string
      file: string
    }
  >
>

export const Index: ComponentRegistry = ${generateNested(registry)};
`

  const outPath = join(root, 'apps', 'docs', '__registry__', 'index.tsx')
  await remove(outPath)
  await outputFile(outPath, index)
}

// ----------------------------------------------------------------------------
// Build registry/[component]/[variant].tsx.
// ----------------------------------------------------------------------------

const copyDemoComponents = async () => {
  const registryDir = join(root, 'apps', 'docs', 'registry')
  await remove(registryDir)

  await Promise.all(
    sourceFiles.map(async (file) => {
      const component = file.getDirectory().getParent()?.getBaseName()
      if (!component) {
        console.log('Component baseName not found')
        return
      }
      const variant = file.getBaseNameWithoutExtension()
      if (!variant) {
        console.log(`Variant not found for: ${component}`)
        return
      }

      const fileContents = file.getText()
      const newPath = join(registryDir, `${component}`, `${variant}.tsx`)

      await outputFile(newPath, fileContents.replace(/\n$/, ''))
    }),
  )
}

// ----------------------------------------------------------------------------
// Run
// ----------------------------------------------------------------------------

buildRegistryIndex().catch((err) => {
  console.error(err.message)
  process.exit(1)
})

copyDemoComponents().catch((err) => {
  console.error(err.message)
  process.exit(1)
})

console.log('✅ Done!')
