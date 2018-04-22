import { Component } from 'preact';
import style from './style.scss';
import Portrait from './../portrait';
import classNames from 'classnames';

export default ({ text, className, type, people }) => {
  const peopleGridClass = classNames(style.peopleGrid, className);

  return (
    <ul class={peopleGridClass}>
      {people.map( person => <li class={style.peopleGrid__column}><Portrait person={person} /></li>)}
    </ul>
  );
};
