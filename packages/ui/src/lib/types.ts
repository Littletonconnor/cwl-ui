type Sizes = 'xsmall' | 'small' | 'standard' | 'large'
type TextSizes = Sizes

interface AtomicProperties {
  /**
   * Represents the alignment of the Text.
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Represents main colors from our color system.
   */
  color?: 'neutral' | 'secondary' | 'promote' | 'info' | 'positive' | 'critical'
}

export type { TextSizes, AtomicProperties }
