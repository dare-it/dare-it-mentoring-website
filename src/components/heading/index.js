import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, type, centered }) => {
  const headingClass = classNames(style.heading, className, style[`heading--${type}`], { [style[`heading--centered`]]: centered });

  return (
    <h2 class={headingClass}>
      {text}
    </h2>
  );
};
