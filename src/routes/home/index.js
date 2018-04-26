
import text from '../../assets/translation/text.json';
import style from './style.scss';
import classNames from 'classnames';

import Button from '../../components/button';
import Heading from '../../components/heading';
import PeopleGrid from '../../components/peopleGrid';
import List from '../../components/list';
import Subtitle from '../../components/subtitle';
import Pattern from '../../components/pattern';
import Timeline from '../../components/timeline';
import Quotation from '../../components/quotation';
import Card from '../../components/card';
import AccordionList from '../../components/accordionList';

export default () => (
  <main class={style.home}>
    <section class={style.home__section}>
      <div class={style.home__container}>
        <div class={style['home__row--flex']}>
          <div class={classNames(style['col-6'], style['col-narrow'])}>
            <Heading text={text.home.about.title} />

            <Subtitle text={text.home.about.subtitle1} />
          </div>

          <div class={style['col-6']}>
            <Quotation text={text.home.about.quotation.text} cite={text.home.about.quotation.cite} />
          </div>
        </div>

        <div class={style['home__row--flex']}>
          <div class={classNames(style['col-6'], style['col-narrow'])}>
            <Subtitle text={text.home.about.subtitle2} />
          </div>

          <div class={style['col-6']}>
            <p class={style.home__text}>{text.home.about.listTitle}</p>

            <List className={style.home__column} items={text.home.about.list} />
          </div>
        </div>
      </div>
    </section>

    <section class={classNames(style['home__section--with-waves'], style.home__section)}>
      <div class={style.home__container}>
        <Heading text={text.home.work.title} />

        <div class={style['home__row--flex']}>
          <div class={classNames(style['col-6'], style['col-narrow'])}>
            {text.home.work.text.map(text => <p class={style.home__text}>{text}</p>)}

            <Subtitle text={text.home.work.subtitle} />
          </div>

          <List className={style['col-6']} items={text.home.work.list} />
        </div>
      </div>
    </section>

    <section class={style['home__section--gradient']}>
      <Heading text={text.home.mentors.title} type="pushed" />

      <PeopleGrid people={text.home.mentors.people} />
    </section>

    <section class={style.home__section}>
      <div class={style.home__container}>
        <div class={style['home__row--flex']}>
          <div class={style['col-5']}>
            <Heading text={text.home.program.title} />
          </div>

          <div class={style['col-7']}>
            <Subtitle text={text.home.program.subtitle} />

            <p class={style.home__text}>{text.home.program.text}</p>
          </div>
        </div>

        <div class={style['home__row--flex']}>
          {text.home.program.cards.map(card => (
            <div class={classNames(style['col-6'], style.home__column)}>
              <Card card={card} type={card.type} double={false} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section class={style['home__section--dark']}>
      <div class={style.home__container}>
        <Timeline content={text.home.timeline} />
      </div>
    </section>

    <section class={style.home__section}>
      <Pattern items={text.home.about.list} />

      <div class={style.home__container}>
        <div class={style['home__row--flex']}>
          <div class={style['col-6']}>
            <Heading text={text.home.cta.title} type="white" />
          </div>

          <div class={style['col-6']}>
            <Subtitle text={text.home.cta.subtitle} type="secondary" />
            <Subtitle text={text.home.cta.text} type="white" />
          </div>
        </div>
      </div>
    </section>

    <section class={style.home__section}>
      <div class={style.home__container}>
        <div class={style['home__row--flex']}>
          <div class={style['col-5']}>
            <Heading text={text.home.partners.main.title} type="small" />

            {text.home.partners.main.partners.map(partner => <img src={`../../assets/${partner.src}.png`} alt={partner.alt} class={style.home__image} />)}
          </div>

          <div class={style['col-7']}>
            <Heading text={text.home.partners.support.title} type="small" />
            <figure class={style.home__images}>
              {text.home.partners.support.partners.map(partner => (
                <img src={`../../assets/${partner.src}.png`} alt={partner.alt} class={style.home__image} />
              ))}
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class={style.home__section}>
      <div class={classNames(style.home__container, style['home__container--no-spacing'])}>
        <Card double size="big" type="bottom-left">
          <div class={style['home__row--flex']}>
            <div class={classNames(style['col-6'], style['col-narrow'])}>
              <Heading text={text.home.getInvolved.title} />

              <p class={style.home__text}>{text.home.getInvolved.text}</p>
            </div>

            <div class={style['col-6']}>
              <div class={style.home__row}>
                <Subtitle text={text.home.getInvolved.subtitle} />
              </div>

              <div class={style.home__row}>
                <Button text={text.home.getInvolved.cta.text} href={text.home.getInvolved.cta.link} type="action" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <section class={style.home__section}>
      <div class={style.home__container}>
        <Heading text="Częste pytania" type="dark" />

        <AccordionList items={text.home.faq.questions} />
      </div>
    </section>
  </main>
);
