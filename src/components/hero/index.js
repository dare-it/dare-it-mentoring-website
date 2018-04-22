import { Component } from 'preact';
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
          <span class={style['hero__title--color']}>Program mentorski</span> dla dziewczyn: Start w branży tech
        </h1>

        <p class={style.hero__text}>
          Chciałabyś projektować, kodować, prowadzić projekty digitalowe? Na własnych przykładach pokażemy Ci, że ta branża jest dla każdej. Pomożemy Ci postawić pierwsze kroki lub rozwijać umiejętności poprzez dzielenie się naszą wiedzą i doświadczeniem #grupawsparcia
        </p>

        <p class={style.hero__hint}>Pomożemy jak mozemy!</p>

        <Button text="Aplikuj do programu" type="action" />
      </div>

      <img src="../../assets/hero-image.png" alt="" class={style.hero__image} />
    </header>
  );
};
