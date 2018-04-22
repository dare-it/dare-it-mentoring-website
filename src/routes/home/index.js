
import { h, Component } from 'preact';
import text from '../../assets/translation/text.json';
import style from './style.scss';

import Hero from '../../components/hero';
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

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <section class={style.home__section}>
          <div class={style.home__container}>
            <Heading text={text.home.about.title} />

            <div class={style['home__row--flex']}>
              <div class={style.home__column}>
                <Subtitle text={text.home.about.subtitle1} />

                <Subtitle text={text.home.about.subtitle2} />
              </div>

              <div class={style.home__column}>
                <div class={style.home__row}>
                  <Quotation text={text.home.about.quotation.text} cite={text.home.about.quotation.cite} />
                </div>

                <List className={style.home__column} items={text.home.about.list} />
              </div>
            </div>
          </div>
        </section>

        <section class={style['home__section--with-waves']}>
          <div class={style.home__container}>
            <Heading text={text.home.work.title} />

            <div class={style['home__row--flex']}>
              <div class={style.home__column}>
                <p class={style.home__text}>{text.home.work.text}</p>

                <Subtitle text={text.home.work.subtitle} />
              </div>

              <List className={style.home__column} items={text.home.about.list} />
            </div>
          </div>
        </section>

        <section class={style['home__section--gradient']}>
          <Heading text={text.home.mentors.title} type="pushed" />

          <PeopleGrid people={text.home.mentors.people} />
        </section>

        <section class={style.home__section}>
          <div class={style.home__container}>
            <Heading text="Program" />
            
            <div class={style['home__row--flex']}>
              {text.home.program.cards.map(card => (
                <div class={style.home__column}>
                  <Card card={card} type={card.type} double={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section class={style['home__section--dark']}>
          <div class={style.home__container}>
            <Timeline />
          </div>
        </section>

        <section class={style['home__section--dark']}>
          <div class={style.home__container}>
            <Card double className="card-double" type="bottom-right">
              <div class={style['home__row--flex']}>
                <div class={style.home__column}>
                  <Heading text="Pomagaj z nami" />

                  <p class={style.home__text}>Jest wiele sposobów w jakie możesz się zaangażować. Zostań mentorką, partnerem lub po prostu powiedz innym o programie!</p>
                </div>

                <div class={style.home__column}>
                  <div class={style.home__row}>
                    <Subtitle text={text.home.about.subtitle1} />
                  </div>

                  <div class={style.home__row}>
                    <Button text="Napisz do nas" type="action" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section class={style['home__section--dark']}>
          <div class={style.home__container}>
            <Heading text="Faq" />

            <AccordionList />
          </div>
        </section>

        <section class={style.home__section}>
          <Pattern items={text.home.about.list} />

          <div class={style.home__container}>
            <div class={style['home__row--flex']}>
              <div class={style.home__column}>
                <Heading text="Nie tylko dla programistek i projektantek" type="white" />
              </div>

              <div class={style.home__column}>
                <p>Niezależnie od Twoich zainteresowań, umiejętności czy mocnych stron, możesz rozwijać się w branży tech w wielu kierunkach</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
