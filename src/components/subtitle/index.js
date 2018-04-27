import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, variant }) => {
  const subtitleClass = classNames(style.subtitle, className, style[`subtitle--${variant}`]);

  return (
    <h3 class={subtitleClass}>
      {text}
    </h3>
  );
};
