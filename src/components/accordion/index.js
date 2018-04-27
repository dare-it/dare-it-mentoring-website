import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';
import transitionEvent from '../../helpers/transitionEventHelper';

export default class Accordion extends Component {
  state = {
    isOpened: false
  }

  getContentRef = ref => this.content = ref;
  getInnerContentRef = ref => this.innerContent = ref;

  handleCollapsibleClick = () => {
    this.content.style.height = `${this.content.offsetHeight}px`;

    requestAnimationFrame(() => {
      this.setState({ isOpened: !this.state.isOpened });
      this.content.style.height = this.state.isOpened ? `${this.innerContent.offsetHeight}px` : 0;
    });
  }

  componentDidMount() {
    this.content.addEventListener(transitionEvent, () => {
      if (this.state.isOpened) {
        this.content.style.height = 'auto';
      }
    });
  }

  render() {
    const { isOpened } = this.state.isOpened;
    const { question, answer } = this.props;
    const accordionClass = classNames(style.accordion__item, isOpened ? style['accordion__item--active'] : null);

    return (
      <li class={accordionClass}>
        <div class={style.accordion__header} onClick={this.handleCollapsibleClick}>
          <button type="button" class={style.accordion__button} />

          <p>{question}</p>
        </div>

        <div class={style.accordion__body} ref={this.getContentRef} >
          <div class={style['accordion__body-content']} ref={this.getInnerContentRef} >
            {answer}
          </div>
        </div>
      </li>
    );
  }
}
