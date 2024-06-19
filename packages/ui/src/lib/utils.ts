import * as React from 'react'

import { clsx, type ClassValue } from 'clsx'
import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2',
    },
  },
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}

/**
 * Prevents unnecessary Tailwind classes and merge classes to prevent class duplication.
 * @param inputs - Any number of class names or class name arrays to merge.
 * @returns A string of merged class names.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs))
}

/**
 * Checks if the given element is a React element.
 * @param element - The element to check
 * @returns Whether the element is a React element.
 */
export const isReactElement = (element: React.ReactNode): element is React.ReactElement => {
  return React.isValidElement(element)
}

/**
 * Returns the initials of a name.
 * - If the string is empty, it will return an empty string.
 * - If the string is one character, it will return the first character.
 * - If the name string is two characters, it will return the first two characters.
 * - If the name is more than two characters, it will return the first and last characters.
 *
 * @param name - The name to derive the initials from.
 * @returns The initials of the name.
 */
export const getInitials = (name: string) => {
  const trimmedName = name.trim()

  if (trimmedName.length === 0 || trimmedName.length === 1 || trimmedName.length === 2) {
    return trimmedName
  }

  const nameArray = trimmedName.split(' ')
  if (nameArray.length === 1) {
    return nameArray[0]?.charAt(0).toUpperCase() ?? ''
  } else if (nameArray.length > 1) {
    const firstName = nameArray[0]?.charAt(0).toUpperCase() ?? ''
    const lastName = nameArray[nameArray.length - 1]?.charAt(0).toUpperCase() ?? ''

    return firstName + lastName
  }

  return trimmedName
}
