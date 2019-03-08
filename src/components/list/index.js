import style from './style.scss';
import classNames from 'classnames';

export default ({ className, items, triple }) => {
  const listClass = classNames(style.list, className, style.list, triple ? style['list--triple']: null);

  return (
    <ul class={listClass}>
      {items.map(item => <li class={style.list__item}>{item}</li>)}
    </ul>
  );
};
