import classNames from 'classnames';

import Subtitle from '../subtitle';

import style from './style.scss';

export default ({ className, items, moreText, centered }) => {
  const logosGridClass = classNames(style.logosGrid,  { [style[`logosGrid--centered`]]: centered }, className);

  return (
    <ul class={logosGridClass}>
      {items.map(item => <li class={style.logosGrid__item}><img alt={item.name} src={item.src} /></li>)}

      {moreText && <Subtitle text={moreText} className={style.logosGrid__item} variant="primary" />}
    </ul>
  );
};
