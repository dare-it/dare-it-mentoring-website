import style from './style.scss';
import classNames from 'classnames';

export default ({ content }) => {
  const partClassnamesTop = classNames(style.timeline__part, style['timeline__part--top']);
  const partClassnamesBottom = classNames(style.timeline__part, style['timeline__part--bottom']);
  const partClassnamesMiddle = classNames(style.timeline__part, style['timeline__part--middle']);

  const generateSteps = (steps, className) => (
    steps.map(step => (
      <div class={classNames(style.timeline__step, className && className)}>
        <h4 class={style.timeline__title}>{step.title}</h4>
        <p class={style.timeline__time}>{step.date}</p>
      </div>
    ))
  );

  return (
    <section class={style.timeline}>
      <article class={style.timeline__container}>
        <div class={style.timeline__content}>
          <section class={partClassnamesTop}>
            {generateSteps(content.top.steps)}
          </section>

          <section class={partClassnamesMiddle}>
            {generateSteps(content.middle.steps, style['timeline__step--bottom'])}
          </section>

          <section class={partClassnamesBottom}>
            <div class={style.timeline__stepWrapper}>
              {generateSteps(content.bottom.steps)}
            </div>

            <ul class={style.timeline__details}>
              {content.bottom.details.map(detail => <p class={style.timeline__text}>{detail}</p>)}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
};
