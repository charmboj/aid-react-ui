import { classNames } from '../../utils/classNames';
import './Flex.css';

interface FlexProps {

  /**
  * Classname assigned to this component
  */
  className?: string;

  /**
  * Items inside the flexbox
  */
  children?: React.ReactNode;

  /**
  * Direction and arrangement of items inside the flexbox
  */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
  * Distribution of space among items along the main axis
  */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' 
      | 'space-around' | 'space-between' | 'space-evenly';

  /**
  * Sets the reference line to where the items shall align along the cross axis
  */
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' 
      | 'center' | 'baseline';
}

export const Flex = ({
  className,
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch'
}: FlexProps) => {
  return (
    <div
      className={classNames([
        'aru-flx', 
        className
      ])}
      style={{
        flexDirection,
        justifyContent,
        alignItems
      }}
    >
      {children}
    </div>
  )
}