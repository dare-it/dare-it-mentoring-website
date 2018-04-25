import { h } from 'preact';
import style from './style.scss';

export default () => (
  <div class={style.grid}>
    <div class={style.grid__column} />
    <div class={style.grid__column} />
    <div class={style.grid__column} />
    <div class={style.grid__column} />
    <div class={style.grid__column} />
  </div>
);
