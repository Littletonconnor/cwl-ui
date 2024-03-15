import { cx } from './lib/cva.config'

export const colors = {
  red: 'bg-red-500/15 text-red-700',
  blue: 'bg-blue-500/15 text-blue-700',
  gray: 'bg-gray-500/15 text-gray-700',
  green: 'bg-green-500/15 text-green-700',
  orange: 'bg-orange-500/15 text-orange-700',
  pink: 'bg-pink-400/15 text-pink-700',
  purple: 'bg-purple-500/15 text-purple-700',
  yellow: 'bg-yellow-400/20 text-yellow-700',
}

interface BadgeProps extends React.ComponentPropsWithRef<'span'> {
  color?: keyof typeof colors
}

export const Badge = ({ children, color = 'gray', ...props }: BadgeProps) => {
  return (
    <span
      {...props}
      className={cx(
        'gap-x-1.5 font-medium inline-flex items-center rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5',
        colors[color],
      )}
    >
      {children}
    </span>
  )
}
