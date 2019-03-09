import style from './style.scss';
import classNames from 'classnames';

export default ({ background, className, children }) => {
  const patternClass = classNames(style.pattern, className);

  return (
    <section class={patternClass}>
      <p class={style.pattern__background}>{background}</p>

      {children}
    </section>
  );
};
