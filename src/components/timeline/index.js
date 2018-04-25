import style from './style.scss';
import classNames from 'classnames';

export default ({ data, className, type }) => {
  const timelineClass = classNames(style.timeline, className, style[`timeline--${type}`]);
  const partClassnamesTop = classNames(style.timeline__part, style['timeline__part--top']);
  const partClassnamesBottom = classNames(style.timeline__part, style['timeline__part--bottom']);

  return (
    <article class={timelineClass}>
      <div class={style.timeline__content}>

        <section class={partClassnamesTop}>
          <div class={style.timeline__step}>
            <h4 class={style.timeline__title}>Aplikacja</h4>
            <p class={style.timeline__time}>do 23.05</p>
          </div>

          <div class={style.timeline__step}>
            <h4 class={style.timeline__title}>Aplikacja</h4>
            <p class={style.timeline__time}>do 23.05</p>
          </div>
        </section>

        <section class={partClassnamesBottom}>
          <div class={style.timeline__stepWrapper}>
            <div class={style.timeline__step}>
              <h4 class={style.timeline__title}>Aplikacja</h4>
              <p class={style.timeline__time}>do 23.05</p>
            </div>
            <div class={style.timeline__step}>
              <h4 class={style.timeline__title}>Aplikacja</h4>
              <p class={style.timeline__time}>do 23.05</p>
            </div>
          </div>

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
        </section>

      </div>
    </article>
  );
};
