import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, type }) => {
  const headingClass = classNames(style.heading, className, style[`heading--${type}`]);

  return (
    <h2 class={headingClass}>
      {text}
    </h2>
  );
};
