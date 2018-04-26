import classNames from 'classnames';
import style from './style.scss';
import Nav from './../nav';
import Button from './../button';

export default ({ content, className, ...otherProps }) => {
  const heroClass = classNames(style.hero, className);

  return (
    <header class={heroClass}>
      <Nav />

      <div class={style.hero__container}>
        <h1 class={style.hero__title}>
          {content.title}
          <br />
          {content.title2}
          <br />
          <span class={style['hero__title--color']}>{content.title3}</span>
        </h1>

        <p class={style.hero__text}>{content.text}</p>

        <p class={style.hero__hint}>{content.subtitle}</p>

        <Button text={content.cta.text} type="action" href={content.cta.link} target="blank" />
      </div>

      <img src="../../assets/hero-image.png" alt="" class={style['hero__image-md']} />
      <img src="../../assets/hero-image-xs.svg" alt="" class={style['hero__image-xs']} />
    </header>
  );
};
