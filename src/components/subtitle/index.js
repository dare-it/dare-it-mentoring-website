import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, type }) => {
  const subtitleClass = classNames(style.subtitle, className, style[`subtitle--${type}`]);

  return (
    <h3 class={subtitleClass}>
      {text}
    </h3>
  );
};
