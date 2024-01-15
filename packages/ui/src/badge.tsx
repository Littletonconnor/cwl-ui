import { cx } from '@/lib/cva.config'

const colors = {
  red: 'bg-red-500/15 text-red-700',
  zinc: '',
}

interface BadgeProps extends React.ComponentPropsWithRef<'span'> {
  color?: keyof typeof colors
}

export const Badge = ({ children, color = 'zinc' }: BadgeProps) => {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5',
        colors[color],
      )}
    >
      {children}
    </span>
  )
}
