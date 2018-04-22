import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ className, double, type, children, card }) => {
  const cardClass = classNames(style.card, className, style[`card--${type}`]);

  const singleContent = () => (
    <div>
      <h3>
        <img src={card.icon} alt="icon" />
        <span>{card.title}</span>
      </h3>

      <ul>{card.list.map(item => <li>{item}</li>)}</ul>
    </div>
  );

  return (
    <div class={cardClass}>
      {double ? children : singleContent()}
    </div>
  );
};
