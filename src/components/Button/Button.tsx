import { styleConst } from '../../consts/classConsts';
import { classNames } from '../../utils/classNames';
import './Button.css';

interface ButtonProps {
  /**
   * Use primary theme
   */
  primary?: boolean;
  /**
   * Text color in hex
   */
  color?: string;
  /**
   * Background color in hex
   */
  backgroundColor?: string;
  /**
   * Button size
   */
  size?: 'sml' | 'med' | 'lrg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'med',
  backgroundColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 
      `${styleConst.BG_BLUE} ${styleConst.CL_WHITE}` : 
      `${styleConst.BG_LIGHT_GRAY} ${styleConst.CL_BLACK}`;
  return (
    <button
      className={classNames([
        'aru-btn', `aru-btn--${size}`, mode
      ])}
      style={{ 
        backgroundColor, 
        color 
      }}
      {...props}
    >
      {label}
    </button>
  );
};
