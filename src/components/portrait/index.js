import { h } from 'preact';
import style from './style.scss';
import classNames from 'classnames';

export default ({ text, className, person }) => {
  const portraitClass = classNames(style.portrait, className);

  return (
    <figure class={portraitClass}>
      <div class={style.portrait__imageWrapper}>
        <img src={person.image} alt={person.alt} class={style.portrait__image} />
      </div>

      <figcaption class={style.portrait__description}>
        <h4 class={style.portrait__title}>{person.name}</h4>

        <p class={style.portrait__text}>{person.job}</p>

        <p class={style.portrait__text}>{person.info}</p>
      </figcaption>
    </figure>
  );
};
