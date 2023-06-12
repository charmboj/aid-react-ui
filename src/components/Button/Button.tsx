import { Color, colors } from '../../consts/colors';
import { Size, sizes } from '../../consts/sizes';
import { classNames } from '../../utils/classNames';
import './Button.css';

interface ButtonProps {

  /**
   * Text color
   */
  color?: Color;

  /**
   * Background color
   */
  backgroundColor?: Color;

  /**
   * Button size
   */
  size?: Size;

  /**
   * Button contents
   */
  label: string;

  /**
   * Click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  backgroundColor = 'blue',
  color = 'white',
  label,
  ...props
}: ButtonProps) => {

  return (
    <button
      className={classNames([
        'aru-btn', `aru-btn--${sizes.get(size)}`
      ])}
      style={{ 
        backgroundColor: colors.get(backgroundColor),
        color: colors.get(color)
      }}
      {...props}
    >
      {label}
    </button>
  );
};
