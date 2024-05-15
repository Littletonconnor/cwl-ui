import Link from 'next/link'

export default function Page(): JSX.Element {
  return (
    <main className="h-full">
      <div className="container mx-auto px-4 pb-8 pt-20">
        <section className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold">
            An Accessible
            <br className="hidden lg:inline" />
            Design System for React.
          </h1>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-lg text-zinc-600">
              CWL UI is a collection of React components that have been built to be highly
              composable with one another. It is built on top of Tailwind CSS and React-Aria
              Components.
            </p>
          </div>
          <p className="mt-20 text-zinc-600">
            Built with{' '}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-medium text-zinc-800 hover:underline"
              rel="noopener"
            >
              TailwindCSS
            </a>{' '}
            and{' '}
            <a
              href="https://react-spectrum.adobe.com/react-aria/components.html"
              className="font-medium text-zinc-800 hover:underline"
              target="_blank"
              rel="noopener"
            >
              React-Aria Components.
            </a>
          </p>
        </section>
      </div>
      <section className="w-full bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">10+ Components</h2>
          <div className="mt-12 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link className="rounded-md border bg-white p-4 md:col-span-2" href="/docs/avatar">
              Avatar
            </Link>
            <Link href="/docs/badge" className="rounded-md border bg-white p-4 md:col-span-1">
              Badge
            </Link>
            <Link href="/docs/breadcrumbs" className="rounded-md border bg-white p-4 md:col-span-1">
              Breadcrumbs
            </Link>
            <Link href="/docs/checkbox" className="rounded-md border bg-white p-4 md:col-span-1">
              Checkbox
            </Link>
            <Link
              href="/docs/checkbox-group"
              className="rounded-md border bg-white p-4 md:col-span-2"
            >
              Checkbox Group
            </Link>
            <Link href="/docs/label" className="rounded-md border bg-white p-4 md:col-span-1">
              Label
            </Link>
            <Link href="/docs/spinner" className="rounded-md border bg-white p-4 md:col-span-1">
              Spinner
            </Link>
            <Link href="/docs/table" className="rounded-md border bg-white p-4 md:col-span-1">
              Table
            </Link>
            <Link href="/docs/tabs" className="rounded-md border bg-white p-4 md:col-span-1">
              Tabs
            </Link>
            <Link href="/" className="rounded-md border bg-white p-4 md:col-span-1">
              Coming soon
            </Link>
            <Link href="/" className="rounded-md border bg-white p-4 md:col-span-1">
              Coming soon
            </Link>
            <Link href="/" className="rounded-md border bg-white p-4 md:col-span-1">
              Coming soon
            </Link>
            <Link href="/" className="rounded-md border bg-white p-4 md:col-span-1">
              Coming soon
            </Link>
            <Link href="/" className="rounded-md border bg-white p-4 md:col-span-1">
              Coming soon
            </Link>
          </div>
        </div>
      </section>
      <footer className="container mx-auto px-6 py-8">
        <p className="mb-4 text-sm text-zinc-600 md:mb-0">
          Built by{' '}
          <a
            href="https://github.com/Littletonconnor"
            target="_blank"
            rel="noopener"
            className="font-medium text-zinc-800 underline"
          >
            Connor Littleton
          </a>{' '}
          and heavily inspired by {'   '}
          <a
            href="https://draft-ui.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-zinc-800 underline"
          >
            Draft UI
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
