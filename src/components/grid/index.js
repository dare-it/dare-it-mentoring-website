import { Component } from 'preact';
import style from './style.scss';

export default class Grid extends Component {
	render() {
		return (
			<div class={style.grid}>
				<div class={style.grid__column} />
				<div class={style.grid__column} />
				<div class={style.grid__column} />
				<div class={style.grid__column} />
				<div class={style.grid__column} />
			</div>
		);
	}
}
