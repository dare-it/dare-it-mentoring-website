import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({text, className}) => {
  const headingClass = classNames(style.heading, className);

  return (
    <h2 class={headingClass}>
      {text}
    </h2>
  );
};
