import { type ThemeColors } from 'cwl-ui-colors'

type Sizes = 'xsmall' | 'small' | 'standard' | 'large'
type TextSizes = Sizes
type HeadingSizes = Omit<Sizes, 'xsmall'>

interface AtomicProperties {
  /**
   * Represents the alignment of the Text.
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Represents main colors from our color system.
   */
  color?: keyof ThemeColors

  /**
   * An optional description to be rendered within the input field.
   */
  description?: React.ReactNode

  /**
   * An optional label to describe the input field.
   */
  label?: React.ReactNode

  /**
   * Represents the disabled state of the input field.
   */
  disabled?: boolean

  /**
   * Optional helper text that should be rendered below the input field.
   */
  helperText?: React.ReactNode

  /**
   * Represents whether or not the input field is required.
   */
  required?: boolean

  /**
   * An optional slot to go before the input field.
   */
  leadingAccessory?: React.ReactNode

  /**
   * An optional slot to go after the input field.
   */
  trailingAccessory?: React.ReactNode
}

interface TypographyProperties {
  /**
   * Represents the alignment of the Text.
   */
  align?: AtomicProperties['align']

  /**
   * Represents the color of the Text.
   */
  color?: AtomicProperties['color']

  /**
   * Represents the children of the Text.
   */
  children: React.ReactNode

  /**
   * Optional class to add to the Text.
   */
  className?: string

  /**
   * Truncate the number of lines of the Text.
   */
  truncate?: 1 | 2 | 3
}

interface TextProperties extends TypographyProperties {
  /**
   * Represents the tag of the Text.
   */
  Tag?: 'p' | 'span' | 'div'

  /**
   * Represents the size of the Text.
   */
  size?: TextSizes
}

interface HeadingProperties extends TypographyProperties {
  /**
   * Represents the tag of the Text.
   */
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Represents the size of the Heading.
   */
  size?: HeadingSizes
}

export type { TextSizes, HeadingSizes, AtomicProperties }
export type { TypographyProperties, TextProperties, HeadingProperties }
