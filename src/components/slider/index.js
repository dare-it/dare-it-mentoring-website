import { Component } from 'preact';
import style from './style.scss';
import Portrait from './../portrait';
import classNames from 'classnames';
import debounce from '../../helpers/debounce';
import Arrow from '../../assets/arrow.svg';
import root from 'window-or-global';

import { SLIDER_CONSTS } from './../../consts/index';
import Heading from '../heading';
export default class Slider extends Component {
  state = {
    activeIndex: 0,
    translate: 0,
    slideWidth: undefined,
    sliderLength: undefined,
    childrenLength: undefined,
    touchstartx: undefined,
    touchmovex: undefined,
    movex: undefined
  }

  handleResize = debounce(() => {
    root.innerWidth < SLIDER_CONSTS.breakpointMD ? this.setSliderMobile() : this.setSliderDesktop();
  }, 300);

  slide(reverse = false) {
    let index = this.state.activeIndex;
    const { childrenLength, slideWidth } = this.state;

    index += reverse ? 1 : -1;
    if (index < 0) { index = 0; }

    let offset = offset = -slideWidth * index;

    if (index == childrenLength - Math.floor(root.innerWidth / slideWidth)) {
      offset += (root.innerWidth % slideWidth);
    }

    this.setState({ activeIndex: index, translate: `${offset}` });
  }

  onTouchStart(e) {
    this.setState({ touchstartx: e.touches[0].pageX });
  }

  onTouchMove(e) {
    let touchmovex = event.touches[0].pageX;
    let movex = this.state.touchstartx - touchmovex;

    if (Math.abs(movex) > 50) {
      this.setState({
        touchmovex: event.touches[0].pageX,
        translate: -(this.state.activeIndex * this.state.slideWidth + (this.state.touchstartx - touchmovex)),
        movex
      });
    }
  }

  onTouchEnd(e) {
    const { slideWidth, activeIndex, translate, movex, childrenLength } = this.state;
    let index = activeIndex;

    if (Math.abs(movex) > 50) {
      if (translate < (activeIndex * -slideWidth) && activeIndex < (childrenLength - 2)) {
        index++;
      }
      else if (translate > (activeIndex * -slideWidth) && activeIndex > 0) {
        index--;
      }

      this.setState({ activeIndex: index, translate: `${-slideWidth * index}` });
    }
  }

  setSliderMobile() {
    let index = this.state.activeIndex;
    const { people } = this.props.content;

    this.setState({
      activeIndex: index,
      childrenLength: people.length,
      slideWidth: `${parseInt(root.innerWidth, 10) / 2.2}`,
      translate: (-parseInt(root.innerWidth, 10) / 2.2) * index
    });
  }

  setSliderDesktop() {
    let index = this.state.activeIndex;
    const { people } = this.props.content;

    this.setState({
      activeIndex: index,
      childrenLength: people.length,
      slideWidth: SLIDER_CONSTS.slider_size_lg,
      translate: -SLIDER_CONSTS.slider_size_lg * index
    });
  }

  componentDidMount() {
    root.innerWidth < SLIDER_CONSTS.breakpointMD ? this.setSliderMobile() : this.setSliderDesktop();
    root.addEventListener('resize', this.handleResize);
  }

  render() {
    const sliderClass = classNames(style.slider, className);
    const { className, content, id } = this.props;

    const isSliderEnd = Math.abs(this.state.translate) >= ((this.state.childrenLength* this.state.slideWidth) - root.innerWidth);

    return (
      <div class={sliderClass} id={id}>
        <div class={style.slider__header}>
          <Heading text={content.title} />

          <div class={style.slider__actions}>
            <button class={style.slider__button} onClick={() => this.slide(false)} disabled={this.state.activeIndex === 0}>
              <Arrow class={classNames(style.slider__arrow, style['slider__arrow--left'])} />
            </button>

            <button class={style.slider__button} onClick={() => this.slide(true)} disabled={isSliderEnd}>
              <Arrow class={style.slider__arrow} />
            </button>
          </div>
        </div>

        <div class={style.slider__content}>
          <ul
            class={style.slider__grid}
            style={`transform: translate3d(${this.state.translate}px, 0px, 0px); transition-duration: 200ms`}
            onTouchStart={(event) => this.onTouchStart(event)}
            onTouchMove={(event) => this.onTouchMove(event)}
            onTouchEnd={(event) => this.onTouchEnd(event)}
          >
            {content.people.map(person => <li class={style.slider__column}><Portrait person={person} /></li>)}
          </ul>
        </div>
      </div>
    );
  }
}
