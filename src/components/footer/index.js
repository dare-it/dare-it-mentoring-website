import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';
import Button from './../button';
import transitionEvent from '../../helpers/transitionEventHelper';
import requestAnimationFrame from 'raf';

export default class Footer extends Component {
  state = {
    isFixed: false
  }

  getContentRef = ref => this.content = ref;
  getInnerContentRef = ref => this.innerContent = ref;

  handleScroll = () => {
    if (window.scrollY > 700 && (window.innerHeight + window.scrollY) !== document.body.offsetHeight) {
      this.setState({ isFixed: true });
    }
    else {
      this.setState({ isFixed: false });
    }

    requestAnimationFrame(() => {
      this.content.style.height = this.state.isFixed ? 0 : `${this.innerContent.offsetHeight}px`;
    });
  }

  componentDidMount() {
    this.content.addEventListener(transitionEvent, () => {
      if (this.state.isFixed) {
        this.content.style.height = '0px';
      }
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { className } = this.props;
    const footerClass = classNames([style.footer, className], this.state.isFixed ? style['footer--fixed']: null );

    return (
      <footer class={footerClass}>
        <div class={style.footer__content}>
          <h2 class={classNames(style.footer__text, style['footer__text--lg'])}>
            Czekamy na aplikacje <span class={style['footer__text--color']}>do 23 maja</span>
          </h2>

          <h2 class={classNames(style.footer__text, style['footer__text--sm'])}>
            Aplikacje <span class={style['footer__text--color']}>do 23 maja</span>
          </h2>

          <h3 class={style.footer__subtitle}>Zrób pierwszy krok!</h3>

          <Button text="Aplikuj do programu" type="action" className={style['footer__action--lg']} />

          <Button text="Aplikuj" type="action" className={style['footer__action--sm']} />

          <div class={style.footer__copyright} ref={this.getContentRef}>
            <small ref={this.getInnerContentRef}>
             go for IT <span class={style['footer__text--color']}>·</span> Wszelkie prawa zastrzeżone.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}
