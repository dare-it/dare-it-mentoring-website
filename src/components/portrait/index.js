import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';
import root from 'window-or-global';

import { SLIDER_CONSTS } from './../../consts/index';
import debounce from '../../helpers/debounce';
class Portrait extends Component {
  getInfoRef = ref => this.info = ref;
  getPortraitRef = ref => this.portrait = ref;
  getHeadingRef = ref => this.heading = ref;

  binShowAction = this.showInfo.bind(this);
  binHideAction = this.hideInfo.bind(this);

  handleResize = debounce(() => {
    if (root.innerWidth > SLIDER_CONSTS.breakpointMD) {
      this.hideInfo();
      this.attachEventListeners();
    }
    else {
      this.showInfo();
      this.removeEventListeners();
    }
  }, 300);

  attachEventListeners() {
    this.portrait.addEventListener('mouseover', this.binShowAction);
    this.portrait.addEventListener('mouseout', this.binHideAction);
  }

  removeEventListeners() {
    this.portrait.removeEventListener('mouseover', this.binShowAction);
    this.portrait.removeEventListener('mouseout', this.binHideAction);
  }

  showInfo() {
    this.heading.style.transform = `translateY(0)`;
  }

  hideInfo() {
    this.heading.style.transform = `translateY(${this.info.offsetHeight}px)`;
  }

  componentDidMount() {
    if (root.innerWidth > SLIDER_CONSTS.breakpointMD) {
      setTimeout(() => {
        this.hideInfo();
        this.attachEventListeners();
      }, 1000);
    }

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    if (root.innerWidth > SLIDER_CONSTS.breakpointMD) {
      this.removeEventListeners();
    }

    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { className, person, variant } = this.props;
    const portraitClass = classNames(style.portrait, className, style[`portrait--${variant}`]);

    return (
      <figure class={portraitClass} ref={this.getPortraitRef}>
        <div class={style.portrait__imageWrapper}>
          <img src={person.image} alt={person.alt} class={style.portrait__image} />
        </div>

        <figcaption class={style.portrait__description}>
          <div class={style.portrait__heading} ref={this.getHeadingRef}>
            <h4 class={style.portrait__title}>{person.name}</h4>
            <h5 class={style.portrait__subtitle}>{person.path}</h5>
            <h5 class={style.portrait__subtitle}>{person.job}</h5>
            <p class={style.portrait__text} ref={this.getInfoRef}>{person.info}</p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Portrait;
