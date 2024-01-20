import { cx } from './lib/cva.config'

export const colors = {
  red: 'bg-red-500/15 text-red-700',
  orange: 'bg-orange-500/15 text-orange-700',
  amber: 'bg-amber-400/20 text-amber-700',
  yellow: 'bg-yellow-400/20 text-yellow-700',
  lime: 'bg-lime-500/20 text-lime-700',
  green: 'bg-green-500/15 text-green-700',
  emerald: 'bg-emerald-500/15 text-emerald-700',
  teal: 'bg-teal-500/15 text-teal-700',
  cyan: 'bg-cyan-400/20 text-cyan-700',
  sky: 'bg-sky-500/15 text-sky-700',
  blue: 'bg-blue-500/15 text-blue-700',
  indigo: 'bg-indigo-500/15 text-indigo-700',
  violet: 'bg-violet-500/15 text-violet-700',
  purple: 'bg-purple-500/15 text-purple-700',
  fuchsia: 'bg-fuchsia-400/15 text-fuchsia-700',
  pink: 'bg-pink-400/15 text-pink-700',
  rose: 'bg-rose-400/15 text-rose-700',
  zinc: 'bg-zinc-600/10 text-zinc-700',
}

interface BadgeProps extends React.ComponentPropsWithRef<'span'> {
  color?: keyof typeof colors
}

export const Badge = ({ children, color = 'zinc', ...props }: BadgeProps) => {
  return (
    <span
      {...props}
      className={cx(
        'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5',
        colors[color],
      )}
    >
      {children}
    </span>
  )
}
