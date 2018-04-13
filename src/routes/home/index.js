
import { h, Component } from 'preact';
import Hero from '../../components/hero';
import Button from '../../components/button';
import Heading from '../../components/heading';
import style from './style.scss';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Hero />
				<section class={style.home__section}>
					<div  class={style.home__container}>
						<Heading text='O nas' />

						<div>
							<p>
								Jak zacząć, jeśli nie wiesz od czego? 
								Jak wybrać lub zmienić zawód? 
								Co jeśli słyszysz, że branża która Cię interesuje jest “męska”? 
							</p>

							<p>
								Wszystkie kiedyś zaczynałyśmy, więc dlaczego nie pomóc tym, które dopiero startują? 
							</p>
						</div>

						<ul>
							<li>#know-how</li>
							<li>Spotkania z rekruterką</li>
							<li>#community</li>
							<li>Narzędzia</li>
							<li>Wiedza</li>
							<li>Pierwsze CV</li>
							<li>Spotkania z mentorką 1:1</li>
							<li>Branża tech od kuchni</li>
							<li>Przygotowanie portfolio</li>
						</ul>
					</div>

				</section>

				<section class={style.home__section}>
					<div  class={style.home__container}>
						<Heading text='Nie tylko dla chłopaków' />

						<div>
							<p>
								Jak zacząć, jeśli nie wiesz od czego? 
								Jak wybrać lub zmienić zawód? 
								Co jeśli słyszysz, że branża która Cię interesuje jest “męska”? 
							</p>

							<p>
								Wszystkie kiedyś zaczynałyśmy, więc dlaczego nie pomóc tym, które dopiero startują? 
							</p>
						</div>

						<ul>
							<li>#know-how</li>
							<li>Spotkania z rekruterką</li>
							<li>#community</li>
							<li>Narzędzia</li>
							<li>Wiedza</li>
							<li>Pierwsze CV</li>
							<li>Spotkania z mentorką 1:1</li>
							<li>Branża tech od kuchni</li>
							<li>Przygotowanie portfolio</li>
						</ul>
					</div>

				</section>
			</div>
		);
	}
}
