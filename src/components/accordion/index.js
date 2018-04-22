import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';
import debounce from './../../helpers/debounde';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      contentHeight: ''
    };
  }

  componentDidMount() {
    this.setState({ contentHeight: this.content.clientHeight });
    window.addEventListener('resize', this.handleResize);
  }

  togglecollapsible = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  handleResize = debounce(() => {
    this.setState({ contentHeight: this.content.clientHeight });
  }, 400);

  render() {
    const { state } = this;
    const { question, answer } = this.props;
    const accordionClass = classNames(style.accordion__item, state.isOpen ? style['accordion__item--active'] : null);

    return (
      <li class={accordionClass}>
        <div class={style.accordion__header} onClick={this.togglecollapsible}>
          <button type="button" class={style.accordion__button} />

          <p>{question}</p>
        </div>

        <div class={style.accordion__body} style={{ height: `${state.isOpen && state.contentHeight ? state.contentHeight : 0}px` }}>
          <div class={style['accordion__body-content']} ref={content => this.content = content}>
            {answer}
          </div>
        </div>
      </li>
    );
  }
}
