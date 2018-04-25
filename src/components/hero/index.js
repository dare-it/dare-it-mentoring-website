import { h } from 'preact';
import classNames from 'classnames';
import style from './style.scss';
import Nav from './../nav';
import Button from './../button';

export default ({ text, title, action, className, ...otherProps }) => {
  const heroClass = classNames(style.hero, className);

  return (
    <header class={heroClass}>
      <Nav />

      <div class={style.hero__container}>
        <h1 class={style.hero__title}>
          Program mentorski
          <br />
          dla dziewczyn:
          <br />
          <span class={style['hero__title--color']}>Pierwsze kroki w IT</span>
        </h1>

        <p class={style.hero__text}>
          Chciałabyś projektować, kodować, zarządzać projektami technologicznymi? Pomożemy Ci to osiągnąć korzystając z własnych doświadczeń.
        </p>

        <p class={style.hero__hint}>Zgłoszenia do 23 maja!</p>

        <Button text="Aplikuj do programu" type="action" />
      </div>

      <img src="../../assets/hero-image.png" alt="" class={style['hero__image-md']} />
      <img src="../../assets/hero-image-xs.svg" alt="" class={style['hero__image-xs']} />
    </header>
  );
};
