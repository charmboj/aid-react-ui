import { Color, colors } from '../../consts/colors';
import { Size, sizes } from '../../consts/sizes';
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
  * Label to indicate which field the user is trying to fill in
  */
  label: string;

  /**
  * Textbox size
  */
  size?: Size;

  /**
  * Button contents
  */
  placeholder?: string;

  /**
  * Textbox field type
  */
  type?: 'text' | 'password' | 'date';
  

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
  label,
  size = 'medium',
  backgroundColor = 'white',
  color = 'black',
  ...props
}: TextboxProps) => {
  return (
    <div
      className={classNames([
        'aru-tbx', 
        `aru-tbx--${sizes.get(size)}`,
        className
      ])}
    >
      <div className='aru-tbx--label'>{label}</div>
      <input
        className={classNames([
          'aru-tbx--input',
          `bg-${colors.get(backgroundColor)?.className}`,
          `cl-${colors.get(color)?.className}`
        ])}
        {...props}
      />
    </div>
  )
}