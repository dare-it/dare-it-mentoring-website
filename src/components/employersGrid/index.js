import classNames from 'classnames';

import Subtitle from '../subtitle';

import style from './style.scss';

export default ({ className, employers, moreText }) => {
  const employersGridClass = classNames(style.employersGrid, className);

  return (
    <ul class={employersGridClass}>
      {employers.map(employer => <li class={style.employersGrid__item}><img alt={employer.name} src={employer.logo} /></li>)}

      <Subtitle text={moreText} variant="primary" />
    </ul>
  );
};
