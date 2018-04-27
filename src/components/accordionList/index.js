import { Component } from 'preact';
import style from './style.scss';
import Accordion from './../accordion';

export default class AccordionList extends Component {
  render() {
    return (
      <ul class={style.accordion} onClick={this.checkActive}>
        {this.props.items.map(item => <Accordion question={item.title} answer={item.text} />)}
      </ul>
    );
  }
}
