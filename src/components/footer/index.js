import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';
import Button from './../button';
import root from 'window-or-global';

export default class Footer extends Component {
  state = {
    isFixed: false
  }

  getContentRef = ref => this.content = ref;
  getInnerContentRef = ref => this.innerContent = ref;

  handleScroll = () => {
    console.log(root.innerHeight);
    if (root.scrollY > root.innerHeight) {
      this.setState({ isFixed: true });
    }
    else {
      this.setState({ isFixed: false });
    }
  }

  componentDidMount() {
    root.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    root.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { className, content } = this.props;
    const footerClass = classNames([style.footer, className], this.state.isFixed ? style['footer--fixed']: null );

    return (
      <footer class={footerClass}>
        <div class={style.footer__content}>
          <h2 class={classNames(style.footer__text, style['footer__text--lg'])}>
            {content.title} <span class={style['footer__text--color']}>{content.title2}</span>
          </h2>

          <h2 class={classNames(style.footer__text, style['footer__text--sm'])}>
            {content['title-sm']} <span class={style['footer__text--color']}>{content.title2}</span>
          </h2>

          <h3 class={style.footer__subtitle}>{content.subtitle}</h3>

          <Button text={content.cta.text} type="action" href={content.cta.link} className={style['footer__action--lg']} target="blank" />

          <Button text={content.cta['text-sm']} href={content.cta.link} type="action" className={style['footer__action--sm']} target="blank" />

          <div class={style.footer__copyright} ref={this.getContentRef}>
            <small ref={this.getInnerContentRef}>
              {content.copyright} <span class={style['footer__text--color']}>·</span> {content.copyright2}
            </small>
          </div>
        </div>
      </footer>
    );
  }
}
