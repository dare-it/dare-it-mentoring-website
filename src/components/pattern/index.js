import { h } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ items, className }) => {
  const patternClass = classNames(style.pattern, className);

  return (
    <div class={patternClass}>
      <ul class={style.pattern__container}>
        {items.map(item => <li class={style.pattern__item}>{item}</li>)}
        {items.map(item => <li class={style.pattern__item}>{item}</li>)}
        {items.map(item => <li class={style.pattern__item}>{item}</li>)}
        {items.map(item => <li class={style.pattern__item}>{item}</li>)}
      </ul>
    </div>
  );
};
