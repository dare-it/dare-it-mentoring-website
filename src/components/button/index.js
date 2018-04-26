import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, type, href }) => {
  const buttonClass = classNames(style.button, className, style[`button--${type}`]);

  return (
    <a class={buttonClass} href={href} target='blank'>
      {text}
    </a>
  );
};
