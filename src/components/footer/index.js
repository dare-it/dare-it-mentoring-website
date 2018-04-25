import style from './style.scss';
import classNames from 'classnames';
import Button from './../button';

export default ({ className, id, ...otherProps }) => {
  const footerClass = classNames([style.footer, className]);

  return (
    <footer class={footerClass} id={id}>
      <div class={style.footer__content}>
        <h2 class={style.footer__text}>Czekamy na aplikacje <span class={style['footer__text--color']}>do 23 maja</span></h2>

        <h3 class={style.footer__text}>Zrób pierwszy krok!</h3>

        <Button text="Aplikuj do programu" type="action" />

        <small class={style.footer__copyright}>lalazdigitala.pl Wszelkie prawa zastrzeżone.</small>
      </div>
    </footer>
  );
};
