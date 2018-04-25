
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

export default () => {
  return (
    <main>
      <section class={style.home__section}>
        <div class={style.home__container}>
          <div class={style['home__row--flex']}>
            <div class={style['col-6']}>
              <Heading text={text.home.about.title} />

              <Subtitle text={text.home.about.subtitle1} />
            </div>

            <div class={style['col-6']}>
              <Quotation text={text.home.about.quotation.text} cite={text.home.about.quotation.cite} />
            </div>
          </div>

          <div class={style['home__row--flex']}>
            <div class={style['col-6']}>
              <Subtitle text={text.home.about.subtitle2} />
            </div>

            <div class={style['col-6']}>
              <p class={style.home__text}>W ramach programu będziesz mogła bezpłatnie zgłębiać wiedzę w wybranym obszarze:</p>

              <List className={style.home__column} items={text.home.about.list} />
            </div>
          </div>
        </div>
      </section>

      <section class={classNames(style['home__section--with-waves'], style.home__section)}>
        <div class={style.home__container}>
          <Heading text={text.home.work.title} />

          <div class={style['home__row--flex']}>
            <div class={style['col-6']}>
              <p class={style.home__text}>{text.home.work.text}</p>

              <Subtitle text={text.home.work.subtitle} />
            </div>

            <List className={style['col-6']} items={text.home.about.list} />
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
              <Heading text="Program" />
            </div>

            <div class={style['col-7']}>
              <Subtitle text="Twoje wykształcenie, zawód i wiek nie mają znaczenia!" />

              <p class={style.home__text}>W ramach programu możesz wybrać dwie ścieżki: poszukująca i początkująca.</p>
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
          <Timeline />
        </div>
      </section>

      <section class={style.home__section}>
        <Pattern items={text.home.about.list} />

        <div class={style.home__container}>
          <div class={style['home__row--flex']}>
            <div class={style['col-6']}>
              <Heading text="Nie tylko dla programistek i projektantek" type="white" />
            </div>

            <div class={style['col-6']}>
              <Subtitle text="Niezależnie od Twoich zainteresowań, umiejętności czy mocnych stron, możesz rozwijać się w branży tech w wielu kierunkach" type="secondary" />
              <Subtitle text="Zastanawiasz się, czy to branża dla Ciebie? Czekamy na Twoje pytania: girls@gmail.com" type="white" />
            </div>
          </div>
        </div>
      </section>

      <section class={style.home__section}>
        <div class={style.home__container}>
          <div class={style['home__row--flex']}>
            <div class={style['col-5']}>
              <Heading text="Główny partner" />

              <img src="../../assets/elpassion-logo.png" alt="" />
            </div>

            <div class={style['col-7']}>
              <Heading text="Wspierają nas" />

              <img src="../../assets/elpassion-logo.png" alt="" />
              <img src="../../assets/elpassion-logo.png" alt="" />
              <img src="../../assets/elpassion-logo.png" alt="" />
              <img src="../../assets/elpassion-logo.png" alt="" />
              <img src="../../assets/elpassion-logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class={style.home__section}>
        <div class={classNames(style.home__container, style['home__container--no-spacing'])}>
          <Card double size="big" type="bottom-right">
            <div class={style['home__row--flex']}>
              <div class={style['col-6']}>
                <Heading text="Pomagaj z nami" />

                <p class={style.home__text}>Jest wiele sposobów w jakie możesz się zaangażować. Zostań mentorką, partnerem lub po prostu powiedz innym o programie!</p>
              </div>

              <div class={style['col-6']}>
                <div class={style.home__row}>
                  <Subtitle text="Podoba Ci się nasza inicjatywa i chcesz się przyłączyć?" />
                </div>

                <div class={style.home__row}>
                  <Button text="Napisz do nas" type="action" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section class={style.home__section}>
        <div class={style.home__container}>
          <Heading text="Częste pytania" type="dark" />

          <AccordionList />
        </div>
      </section>
    </main>
  );
};
