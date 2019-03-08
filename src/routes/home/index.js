import text from '../../components/translations';
import style from './style.scss';
import classNames from 'classnames';

import AccordionList from '../../components/accordionList';
import Button from '../../components/button';
import Card from '../../components/card';
import Footer from '../../components/footer';
import Grid from '../../components/grid';
import Heading from '../../components/heading';
import Hero from '../../components/hero';
import List from '../../components/list';
import Pattern from '../../components/pattern';
import PeopleGrid from '../../components/peopleGrid';
import Quotation from '../../components/quotation';
import Subtitle from '../../components/subtitle';
import Timeline from '../../components/timeline';
import Slider from '../../components/slider';

export default () => (
  <div>
    <Grid />

    <Hero content={text.home.hero} />

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
              <p class={classNames(style.home__text, style['home__text--spaced'])}>
                {text.home.about.listTitle1}
                <strong>{text.home.about.listTitle2}</strong>
                {text.home.about.listTitle3}
              </p>

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
              <p class={style.home__text}>{text.home.work.text1}</p>

              <p class={classNames(style.home__text, style['home__text--spaced'])}>{text.home.work.text2}</p>

              <Subtitle text={text.home.work.subtitle} />
            </div>

            <List className={style['col-6']} items={text.home.work.list} />
          </div>
        </div>
      </section>

      <section class={classNames(style['home__section--dark'], style.home__section)}>
        <div class={classNames(style.home__container, style['home__container--no-spacing'])}>
          <Heading text={text.home.mentors.title} />
        </div>

        <PeopleGrid people={text.home.mentors.people} id={style['home-screen-sm']} />
      </section>

      <section class={style.home__section}>
        <div class={style.home__container}>
          <Heading text={text.home.info.title} />

          <div class={style['home__row--flex']}>
            <div class={style['col-3']}>
              <Subtitle text={text.home.info.subtitle} variant="primary" />
            </div>

            <div class={style['col-9']}>
              <List triple items={text.home.info.list} />
            </div>

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
              <Subtitle text={text.home.cta.subtitle} variant="secondary" />
              <Subtitle text={text.home.cta.text} variant="white" />
            </div>
          </div>
        </div>
      </section>

      <section class={style.home__section}>
        <div class={style.home__container}>
          <div class={style['home__row--flex']}>
            <Heading text={text.home.testimonials.title} />
          </div>

          <div class={style['home__row--flex']}>
            {text.home.testimonials.items.map((item, i) => (
                <div class={style['col-4']} key={i}>
                  <Card type={item.type} double>
                    <p class={style.home__text}>{item.text}</p>
                    <p class={classNames(style.home__text, style['home__text--bold'])}>{item.author}</p>
                  </Card>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section class={style.home__section}>
        <div class={style.home__container}>
          <div class={style['home__row--flex']}>
            <div class={style['col-4']}>
              <Heading text={text.home.partners.main.title} type="small" />

              {text.home.partners.main.partners.map(partner => <img src={`../../assets/logos/${partner.src}.png`} alt={partner.alt} />)}
            </div>

            <div class={style['col-8']}>
              <Heading text={text.home.partners.support.title} type="small" />
              <figure class={style.home__images}>
                {text.home.partners.support.partners.map(partner => (
                  <img src={`../../assets/logos/${partner.src}.png`} alt={partner.alt} class={style.home__image} />
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

    <Footer content={text.home.footer} />
  </div>
);

