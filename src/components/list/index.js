import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ className, items }) => {
  const listClass = classNames(style.list, className);

  return (
    <ul class={listClass}>
      {items.map(item => <li class={style.list__item}>{item}</li>)}
    </ul>
  );
};
