
import style from './style.scss';

import Card from '../card';
import Heading from '../heading';

export default ({ content }) => (
  <section class={style.testimonials}>
    <div class={style.testimonials__container}>
      <div class={style.testimonials__heading}>
        <Heading text={content.title} />
        <div class={style.testimonials__label}>{content.label}</div>
      </div>

      <ul class={style.testimonials__list}>
        {content.items.map((item, i) => (
          <li class={style.testimonials__item} key={i}>
            <Card type={item.type} double>
              <p class={style.testimonials__text}>{item.text}</p>
              <p class={style.testimonials__subtitle}>{item.author}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
