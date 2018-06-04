import style from './style.scss';
import classNames from 'classnames';

const renderSectionItem = ({ type, content }) => {
  switch (type) {
  case 'title':
    return (<h1 class={style.info__title}>{content}</h1>);

  case 'subtitle':
    return (<h2 class={style.info__subtitle}>{content}</h2>);

  case 'paragraph':
    return (<p class={style.info__paragraph}>{content}</p>);

  case 'ordered-list':
    return (
      <ol class={classNames(style.info__list, style['info__list--ordered'])}>
        {content.length && content.map(point => (<li class={style['info__list-item']}>{point}</li>))}
      </ol>
    );
  case 'unordered-list':
    return (
      <ul class={classNames(style.info__list, style['info__list--unordered'])}>
        {content.length && content.map(point => (<li class={style['info__list-item']}>{point}</li>))}
      </ul>
    );
  default:
    return null;
  }
};

export default ({ sections = [] }) => (
  <main class={style.info}>
    { sections.map(section => (
      <section class={style.info__section}>
        { section.map(renderSectionItem)}
      </section>
    )) }
  </main>
);
