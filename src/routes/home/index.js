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
import Slider from '../../components/slider';
import Quotation from '../../components/quotation';
import Subtitle from '../../components/subtitle';
import Timeline from '../../components/timeline';
import Testimonials from '../../components/testimonials';

export default () => (
  <div>
    <Grid />

    <Hero content={text.home.hero} />

    <main class={style.home}>
      <section class={style.home__section}>
        <div class={style.home__container}>
          <div class={classNames(style.home__row, style['home__row--flex'])}>
            <div class={classNames(style['col-6'], style['col-narrow'])}>
              <Heading text={text.home.about.title} />

              <Subtitle text={text.home.about.subtitle1} />
            </div>

            <div class={style['col-6']}>
              <Quotation text={text.home.about.quotation.text} cite={text.home.about.quotation.cite} />
            </div>
          </div>

          <div class={classNames(style.home__row, style['home__row--flex'])}>
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

          <div class={classNames(style.home__row, classNames(style.home__row, style['home__row--flex']))}>
            <div class={classNames(style['col-6'], style['col-narrow'])}>
              <p class={style.home__text}>{text.home.work.text1}</p>

              <p class={classNames(style.home__text, style['home__text--spaced'])}>{text.home.work.text2}</p>

              <Subtitle text={text.home.work.subtitle} />
            </div>

            <List className={style['col-6']} items={text.home.work.list} />
          </div>
        </div>
      </section>

      <section class={classNames(style['home__section--gradient'], style.home__section)}>
        <Slider people={text.home.mentors.people} />
      </section>

      <section class={style.home__section}>
        <div class={style.home__container}>
          <Heading text={text.home.info.title} />

          <div class={classNames(style.home__row, style['home__row--flex'])}>
            <div class={style['col-3']}>
              <Subtitle text={text.home.info.subtitle} variant="primary" />
            </div>

            <div class={style['col-9']}>
              <List triple items={text.home.info.list} />
            </div>
          </div>
        </div>
      </section>

      <Timeline content={text.home.timeline} />

      <Pattern background={text.home.about.background}>
        <div class={style.home__container}>
          <div class={classNames(style.home__row, classNames(style.home__row, style['home__row--flex']))}>
            <div class={style['col-6']}>
              <Heading text={text.home.cta.title} type="white" />
            </div>

            <div class={style['col-6']}>
              <Subtitle text={text.home.cta.subtitle} variant="secondary" />
              <Subtitle text={text.home.cta.text[0]} variant="no-spacing" />
              <Subtitle text={text.home.cta.text[1]} variant="no-spacing" />
              <Subtitle
                text={text.home.cta.text[2]}
                variant="no-spacing"
                link={<a href={text.home.cta.link.href} target="_blank" rel="noopener">{text.home.cta.link.text}</a>}
              />
            </div>
          </div>
        </div>
      </Pattern>

      <Testimonials content={text.home.testimonials} />

      <section class={style.home__section}>
        <div class={style.home__container}>
          <div class={classNames(style.home__row, style['home__row--flex'])}>
            <div class={style['col-4']}>
              <Heading text={text.home.partners.main.title} type="small" />

              {text.home.partners.main.partners.map(partner => (
                <img src={`../../assets/logos/${partner.src}.png`} alt={partner.alt} />
              ))}
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

      <section class={classNames(style.home__section, style['home__section--pushed'])}>
        <div class={classNames(style.home__container, style['home__container--no-spacing'])}>
          <Card double size="big" type="bottom-left">
            <div class={classNames(style.home__row, style['home__row--flex'])}>
              <div class={classNames(style['col-6'], style['col-narrow'])}>
                <Heading text={text.home.getInvolved.title} />

                <p class={style.home__text}>{text.home.getInvolved.text}</p>
              </div>

              <div class={style['col-6']}>
                <div class={style.home__row}>
                  <Subtitle text={text.home.getInvolved.subtitle} />
                </div>

                <div class={style.home__row}>
                  <Button
                    text={text.home.getInvolved.cta.text}
                    href={text.home.getInvolved.cta.link}
                    type="action"
                  />
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
