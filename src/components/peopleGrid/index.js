import style from './style.scss';
import Portrait from './../portrait';
import classNames from 'classnames';

export default ({ text, className, type, people, id }) => {
  const peopleGridClass = classNames(style.peopleGrid, className);

  return (
    <ul class={peopleGridClass} id={id}>
      {people.map( person => <li class={style.peopleGrid__column}><Portrait person={person} /></li>)}
    </ul>
  );
};
