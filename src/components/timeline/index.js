import { Component } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ data, className, type }) => {
  const timelineClass = classNames(style.timeline, className, style[`timeline--${type}`]);

  return (
    <article class={timelineClass}>
      <div class={style.timeline__content}>
        <div class={style.timeline__part}>
          <div class={style.timeline__step}>Aplikacja</div>
          <div class={style.timeline__step}>Ogłoszenie uczestników</div>
        </div>

        <div class={style.timeline__part}>
          <div class={style.timeline__step}>Aplikacja</div>
          <div class={style.timeline__step}>Ogłoszenie uczestników</div>

          <ul class={style.timeline__details}>
            <div class={style.timeline__detail}>
              <p>Obiad inauguracyjny</p>
            </div>
            <div class={style.timeline__detail}>
              <p>Spotkania min. co 2 tygodnie</p>
              <p>Praca z Mentorką</p>
              <p>Konsultacje HR</p>
            </div>
            <div class={style.timeline__detail}>
              <p>Podsumowanie programu</p>
              <p>Afterparty</p>
            </div>
          </ul>
        </div>
      </div>
    </article>
  );
};
