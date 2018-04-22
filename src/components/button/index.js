import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, type, ...otherProps }) => {
  const buttonClass = classNames(style.button, className, style[`button--${type}`]);

  return (
    <button class={buttonClass} {...otherProps} type="button">
      {text}
    </button>
  );
};
