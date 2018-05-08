import { Component } from 'preact';
import style from './style.scss';
import Portrait from './../portrait';
import classNames from 'classnames';
import debounce from '../../helpers/debounce';
import Arrow from '../../assets/arrow.svg';
import root from 'window-or-global';

export default class Slider extends Component {
  state = {
    activeIndex: 0,
    translate: 11,
    slideWidth: `${parseInt(root.innerWidth, 10) / 2.2}`,
    children: undefined,
    touchstartx: undefined,
    touchmovex: undefined,
    movex: undefined,
    sliderLength: undefined
  }

  getContentRef = ref => this.content = ref;

  handleResize = debounce(() => {
    this.setState({
      activeIndex: this.state.activeIndex,
      slideWidth: `${parseInt(root.innerWidth, 10) / 2.2}`,
      translate: (-parseInt(root.innerWidth, 10) / 2.2) * this.state.activeIndex
    });
  }, 300);

  slide(reverse = false) {
    let index = this.state.activeIndex;

    index += reverse ? 1 : -1;

    if (index < 0) { index = 0; }

    this.setState({
      activeIndex: index,
      translate: `${-this.state.slideWidth * index}`
    });
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
        translate: -(this.state.activeIndex * (this.state.slideWidth) + (this.state.touchstartx - touchmovex)),
        movex
      });
    }
  }

  onTouchEnd(e) {
    const { slideWidth, activeIndex, translate, movex, children } = this.state;
    let index = activeIndex;

    if (Math.abs(movex) > 50) {
      if (translate < (activeIndex * -slideWidth) && activeIndex < (children - 2)) {
        index++;
      }
      else if (translate > (activeIndex * -slideWidth) && activeIndex > 0) {
        index--;
      }

      this.setState({
        activeIndex: index,
        translate: `${-slideWidth * index}`
      });
    }
  }

  componentDidMount() {
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      children: this.content.children.length,
      sliderLength: (this.content.children.length - 1) * this.state.slideWidth
    });

    root.addEventListener('resize', this.handleResize);
  }

  render() {
    const sliderClass = classNames(style.slider, className);
    const { className, people, id } = this.props;

    return (
      <div class={sliderClass} id={id}>
        <div class={style.slider__actions}>
          <button class={style.slider__button} onClick={() => this.slide(false)} disabled={this.state.activeIndex === 0}>
            <Arrow class={classNames(style.slider__arrow, style['slider__arrow--left'])} />
          </button>

          <button class={style.slider__button} onClick={() => this.slide(true)} disabled={this.state.activeIndex === 9}>
            <Arrow class={style.slider__arrow} />
          </button>
        </div>

        <ul
          class={style.slider__content}
          ref={this.getContentRef}
          style={`transform: translate3d(${this.state.translate}px, 0px, 0px); transition-duration: 200ms`}
          onTouchStart={(event) => this.onTouchStart(event)}
          onTouchMove={(event) => this.onTouchMove(event)}
          onTouchEnd={(event) => this.onTouchEnd(event)}
        >
          {people.map( person => <li class={style.slider__column}><Portrait variant="double" person={person} /></li>)}
        </ul>
      </div>
    );
  }
}
