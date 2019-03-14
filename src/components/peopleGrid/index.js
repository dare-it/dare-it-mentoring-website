import style from './style.scss';
import Portrait from './../portrait';
import classNames from 'classnames';

export default ({ text, className, type, people, id }) => {
  const peopleGridClass = classNames(style.peopleGrid, className);

  return (
    <div class={peopleGridClass}>
      <div class={style.peopleGrid__container}>
        <ul class={style.peopleGrid__list} id={id}>
          {people.map( person => <li class={style.peopleGrid__column}><Portrait person={person} /></li>)}
        </ul>
      </div>
    </div>
  );
};
