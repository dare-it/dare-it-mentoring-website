import { Component } from 'preact';
import classNames from 'classnames';
import style from './style.scss';
import Logo from '../../assets/logo.svg';

export default () => (
  <nav class={style.navbar}>
    <Logo />
  </nav>
);
