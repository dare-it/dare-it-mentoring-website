import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className }) => {
  const subtitleClass = classNames(style.subtitle, className);

  return (
    <h3 class={subtitleClass}>
      {text}
    </h3>
  );
};
