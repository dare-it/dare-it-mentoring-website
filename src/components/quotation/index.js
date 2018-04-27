import style from './style.scss';
import classNames from 'classnames';

export default ({ text, cite, className, imageSrc }) => {
  const quotationClass = classNames(style.quotation, className);

  return (
    <blockquote class={quotationClass}>
      <q class={style.quotation__text}>{text}</q>

      <cite class={style.quotation__cite}>{cite}</cite>
    </blockquote>
  );
};
