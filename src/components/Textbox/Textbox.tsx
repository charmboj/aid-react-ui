import { Color, colors } from '../../consts/colors';
import { Size } from '../../consts/sizes';
import { classNames } from '../../utils/classNames';
import './Textbox.css';

interface TextboxProps {

  /**
   * Classname assigned to this component
   */
  className?: string;

  /**
   * Text color
   */
  color?: Color;

  /**
   * Background color
   */
  backgroundColor?: Color;

  /**
   * Textbox size
   */
  size?: Size;

  /**
   * Button contents
   */
  placeholder?: string;

  /**
   * Click handler
   */
  onFocus?: () => void;
}

/**
 * Basic Textbox input UI component
 */
export const Textbox = ({
  className,
  size = 'medium',
  backgroundColor = 'white',
  color = 'black',
  ...props
}: TextboxProps) => {
  return (
    <input
      className={classNames([
        'aru-tbx',
        `bg-${colors.get(backgroundColor)?.className}`,
        `cl-${colors.get(color)?.className}`,
        className
      ])}
      {...props}
    />
  )
}