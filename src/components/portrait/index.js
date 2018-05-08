import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, person, variant }) => {
  const portraitClass = classNames(style.portrait, className, style[`portrait--${variant}`]);

  return (
    <figure class={portraitClass}>
      <div class={style.portrait__imageWrapper}>
        <img src={person.image} alt={person.alt} class={style.portrait__image} />
      </div>

      <figcaption class={style.portrait__description}>
        <h4 class={style.portrait__title}>{person.name}</h4>

        <p class={classNames(style.portrait__text, style['portrait__text--bold'])}>{person.job}</p>

        <p class={style.portrait__text}>{person.info}</p>
      </figcaption>
    </figure>
  );
};
