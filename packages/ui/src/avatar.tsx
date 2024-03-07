import * as React from 'react'

import { cn, getInitials } from './lib/utils'

type Variants = 'gray' | 'green' | 'yellow' | 'red'

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Represents the initials displayed on the Avatar.
   * - Supports single characters, two characters, or full words.
   * - For full words, initials will be derived from
   *   the first letter of the first and last word.
   */
  initials?: string

  /**
   * Represents the image source displayed on the Avatar.
   */
  src?: string

  /**
   * Represents the alternate text for the image displayed on the Avatar.
   */
  alt?: string

  /**
   * Represents the class name of the Avatar.
   */
  className?: string

  /**
   * Represents the size of the Avatar.
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * An optional prop to apply a notification to the Avatar.
   */
  notification?: Variants

  /**
   * An optional prop to apply a status to the Avatar.
   */
  status?: Variants
}

const AvatarRoot = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { children, initials, alt, className, size = 'sm', src, notification, status, ...props },
    ref,
  ) => {
    return (
      <span
        className={cn(className, 'relative inline-grid rounded-full', {
          'w-8 h-8 [--notification-size:8px]': size === 'sm',
          'w-12 h-12 [--notification-size:12px]': size === 'md',
          'w-16 h-16 [--notification-size:16px]': size === 'lg',
        })}
        data-slot="avatar"
        ref={ref}
        {...props}
      >
        {initials && (
          <svg
            className="select-none fill-current text-[48px] font-medium uppercase"
            viewBox="0 0 100 100"
            aria-hidden={alt ? undefined : 'true'}
          >
            {alt && <title>{alt}</title>}
            <text
              x="50%"
              y="50%"
              alignmentBaseline="middle"
              dominantBaseline="middle"
              textAnchor="middle"
              dy=".125em"
            >
              {getInitials(initials)}
            </text>
          </svg>
        )}
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="aspect-square h-full w-full rounded-full object-cover object-center"
            src={src}
            alt={alt}
          />
        )}
        {notification && <Notification status={notification} />}
        {status && <Status status={status} />}
        {children}
      </span>
    )
  },
)

const Status = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> & Pick<AvatarProps, 'status'>
>(({ status }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'absolute right-0 top-0 h-[--notification-size] w-[--notification-size] rounded-full ring-2 ring-white',
        {
          'bg-gray-500': status === 'gray',
          'bg-green-500': status === 'green',
          'bg-yellow-500': status === 'yellow',
          'bg-red-500': status === 'red',
        },
      )}
    />
  )
})

const Notification = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> & Pick<AvatarProps, 'status'>
>(({ status, className }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'absolute bottom-0 right-0 h-[--notification-size] w-[--notification-size] rounded-full ring-2 ring-white',
        {
          'bg-gray-500': status === 'gray',
          'bg-green-500': status === 'green',
          'bg-yellow-500': status === 'yellow',
          'bg-red-500': status === 'red',
        },
        className,
      )}
    />
  )
})

AvatarRoot.displayName = 'AvatarRoot'
Status.displayName = 'AvatarStatus'
Notification.displayName = 'AvatarNotification'

export const Avatar = Object.assign(AvatarRoot, {
  Status,
  Notification,
})
