import { Component } from 'preact';
import style from './style.scss';
import Accordion from './../accordion';

export default class AccordionList extends Component {
  render() {
    return (
      <ul class={style.accordion} onClick={this.checkActive}>
        <Accordion question="Czy uczestnictwo jest płatne?" answer="No wszędzie. Technologia zmienia i będzie zmieniać to, w jaki sposób funkcjonuje świat. Chcemy, by kobiety były częścią tych zmian i miały na nie realny wpływ. Wierzymy, że poprzez dawanie przykładu, wsparcia oraz dzielenie się wiedzą możemy zachęcić więcej dziewczyn do kształtowania naszej codzienności.”" />
        <Accordion question="Czy uczestnictwo jest płatne?" answer="No wszędzie. Technologia zmienia i będzie zmieniać to, w jaki sposób funkcjonuje świat. Chcemy, by kobiety były częścią tych zmian i miały na nie realny wpływ. Wierzymy, że poprzez dawanie przykładu, wsparcia oraz dzielenie się wiedzą możemy zachęcić więcej dziewczyn do kształtowania naszej codzienności.”" />
        <Accordion question="Czy uczestnictwo jest płatne?" answer="No wszędzie. Technologia zmienia i będzie zmieniać to, w jaki sposób funkcjonuje świat. Chcemy, by kobiety były częścią tych zmian i miały na nie realny wpływ. Wierzymy, że poprzez dawanie przykładu, wsparcia oraz dzielenie się wiedzą możemy zachęcić więcej dziewczyn do kształtowania naszej codzienności.”" />
      </ul>
    );
  }
}
