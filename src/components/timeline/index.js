import style from './style.scss';
import classNames from 'classnames';

export default ({ data, className, type, content }) => {
  const timelineClass = classNames(style.timeline, className, style[`timeline--${type}`]);
  const partClassnamesTop = classNames(style.timeline__part, style['timeline__part--top']);
  const partClassnamesBottom = classNames(style.timeline__part, style['timeline__part--bottom']);

  const generateSteps = (steps) => {
    return (
      steps.map(step => {
        return (
          <div class={style.timeline__step}>
            <h4 class={style.timeline__title}>{step.title}</h4>
            <p class={style.timeline__time}>{step.date}</p>
          </div>
        )
      })
    );
  }

  const generateDetails = (details) => {
    return (
      details.map(detail => <li class={style.timeline__detail}>{detail.items.map(item => <p>{item}</p>)}</li>)
    )
  }

  return (
    <article class={timelineClass}>
      <div class={style.timeline__content}>
        <section class={partClassnamesTop}>
          {generateSteps(content.top.steps)}
        </section>

        <section class={partClassnamesBottom}>
          <div class={style.timeline__stepWrapper}>
            {generateSteps(content.bottom.steps)}
          </div>

          <ul class={style.timeline__details}>
            {generateDetails(content.bottom.details)}
          </ul>
        </section>

      </div>
    </article>
  );
};
