import { Color, colors } from '../../consts/colors';
import { Size, sizes } from '../../consts/sizes';
import { classNames } from '../../utils/classNames';
import './Button.css';

interface ButtonProps {

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
* Basic Button UI component
*/
export const Button = ({
  className,
  size = 'medium',
  backgroundColor = 'blue',
  color = 'white',
  label,
  ...props
}: ButtonProps) => {

  return (
    <button
      className={classNames([
        'aru-btn',
        `aru-btn--${sizes.get(size)}`,
        `bg-${colors.get(backgroundColor)?.className}`,
        `cl-${colors.get(color)?.className}`,
        className
      ])}
      {...props}
    >
      {label}
    </button>
  );
};
