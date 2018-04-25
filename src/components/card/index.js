import { h } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ className, double, type, size, children, card }) => {
  const cardClass = classNames(style.card, className, style[`card--${type}`], style[`card--${size}`]);

  const singleContent = () => (
    <article>
      <header class={style.card__header}>
        <img src={card.icon} alt="icon" class={style.card__icon} />
        <h3 class={style.card__title}>{card.title}</h3>
      </header>

      <ul class={style.card__list}>{card.list.map(item => <li class={style.card__item}>{item}</li>)}</ul>
    </article>
  );

  return (
    <div class={cardClass}>
      {double ? children : singleContent()}
    </div>
  );
};
