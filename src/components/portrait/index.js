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
        <div class={style.portrait__heading}>
          <h4 class={style.portrait__title}>{person.name}</h4>
          <h5 class={style.portrait__subtitle}>{person.job}</h5>
          <p class={style.portrait__text}>{person.info}</p>
        </div>
      </figcaption>
    </figure>
  );
};
