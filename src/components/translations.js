const translations = {
  home: {
    hero: {
      title: 'Program mentorski',
      title2: 'dla dziewczyn:',
      title3: 'pierwsze kroki w IT',
      text: 'Chciałabyś projektować, kodować, zarządzać projektami technologicznymi? Pomożemy Ci to osiągnąć korzystając z własnych doświadczeń.',
      subtitle: 'Zgłoszenia do 23 maja!',
      cta: {
        text: 'Aplikuj do programu',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdwDnTVgybaOs00vsItYtsxGdoeHb9SB3gPU_XfeLKwpZpc2Q/viewform?usp=sf_link'
      }
    },

    about: {
      title: 'O co chodzi?',
      subtitle1: 'go for IT to inicjatywa stworzona przez Aleksandrę Bis i Natalie Pilling w celu ułatwienia kobietom startu w branży IT.',
      subtitle2: 'Wspólnie z grupą mentorek pomożemy Ci postawić pierwsze kroki w IT lub rozwinąć posiadane już umiejętności.',
      quotation: {
        text: 'Technologia zmienia i będzie zmieniać to, w jaki sposób funkcjonuje świat. Chcemy, by kobiety były częścią tych zmian i miały na nie realny wpływ. Wierzymy, że poprzez dawanie przykładu, wsparcia oraz dzielenie się wiedzą możemy zachęcić więcej dziewczyn do kształtowania naszej codzienności.',
        cite: 'Aleksandra i Natalie'
      },
      listTitle1: 'W ramach programu będziesz mogła',
      listTitle2: ' bezpłatnie ',
      listTitle3: 'zgłębiać wiedzę w wybranym obszarze:',
      list: [
        'User Experience Design',
        'UI & Visual Design',
        'Web Development',
        'Project Management',
        'Digital Marketing'
      ]
    },

    work: {
      title: 'Jak będziemy pracować',
      subtitle: 'My też byłyśmy kiedyś na Twoim miejscu, dlatego wiemy, jak trudne może być zrobienie pierwszego kroku. Chcemy Ci w tym pomóc.',
      text1: 'Jak wybrać lub zmienić zawód?',
      text2:'Jak zacząć, jeśli nie wiesz od czego?',
      list: [
        'Jedna z nas będzie Twoją mentorką przez 3 miesiące',
        'Skonsultujesz się z rekruterką IT na temat ścieżki kariery',
        'Pokażemy Ci, jak wygląda branża IT od kuchni',
        'Poznasz nasze codzienne narzędzia pracy',
        'Podzielimy się z Tobą teorią i praktyką',
        'Pomożemy z CV, portfolio i rozmową rekrutacyjną',
        'Podpowiemy, co czytać i gdzie szukać',
        'Spotkania z mentorką 1:1',
        'Poznasz grupę fajnych, ogarniętych dziewczyn z IT!'
      ]
    },

    program: {
      title: 'Program',
      subtitle: 'Twoje wykształcenie, zawód i wiek nie mają znaczenia!',
      text: 'W ramach programu możesz wybrać dwie ścieżki: poszukująca i początkująca.',
      cards: [
        {
          type: 'top-left',
          title: 'Poszukująca',
          icon: '../../assets/icon-magnifier.svg',
          list: [
            'Stoisz przed wyborem ścieżki zawodowej lub myślisz o zmianie;',
            'Jesteś zainteresowana branżą tech, ale nie masz doświadczenia;',
            'Chcesz się dowiedzieć, czy dany kierunek (np. UX, UI) jest dla Ciebie;',
            'Chcesz zacząć, ale nie wiesz jak i gdzie.'
          ]
        },
        {
          type: 'top-right',
          title: 'Początkująca',
          icon: '../../assets/icon-graduation.svg',
          list: [
            'Już wiesz, w jakim kierunku chcesz się rozwijać;',
            'Masz już podstawową wiedzę teoretyczną i/lub doświadczenie;',
            'Szukasz kogoś, od kogo mogłabyś się uczyć;',
            'Myślisz o podjęciu pierwszej pracy w branży IT.'
          ]
        }
      ]
    },

    timeline: {
      top: {
        steps: [
          {
            title: 'Aplikacja',
            date: 'do 23.05'
          },
          {
            title: 'Ogłoszenie uczestniczek',
            date: '01.06'
          }
        ]
      },
      bottom: {
        steps: [
          {
            title: 'Start programu',
            date: '14.06'
          },
          {
            title: 'Zakończenie programu',
            date: '06.09'
          }
        ],
        details: [
          {
            items: [
              'Obiad inauguracyjny'
            ]
          },
          {
            items: [
              'Min. 6 indywidualnych sesji mentorskich',
              'Konsultacje HR'
            ]
          },
          {
            items: [
              'Podsumowanie programu',
              'Afterparty'
            ]
          }
        ]
      }
    },

    mentors: {
      title: 'Mentorki',
      people: [
        {
          name: 'Joanna Erd',
          job: 'Frontend Developer',
          info: 'Pixel-perfekcyjna pani domu. Puka w klawiaturę, aż stanie się coś dobrego.',
          image: '../../assets/joanna-erd.jpg',
          alt: 'Joanna Erd photo'
        },
        {
          name: 'Aleksandra Bis',
          job: 'Pomysłodawczyni, UX Designer',
          info: 'Zamieniam pomysły w użyteczne produkty. Jak nie w pracy, to na koncercie.',
          image: '../../assets/ola-bis.jpg',
          alt: 'Aleksandra Bis photo'
        },
        {
          name: 'Dorota Badzian',
          job: 'Project Manager',
          info: 'Ogarniam projekty.',
          image: '../../assets/dorota-badzian.jpg',
          alt: 'Dorota Badzian photo'
        },
        {
          name: 'Kasia Łaszczewska',
          job: 'Backend Developer',
          info: 'Piszę backend aplikacji internetowych.',
          image: '../../assets/kasia-laszczewska.jpg',
          alt: 'Kasia Łaszczewska photo'
        },
        {
          name: 'Ulyana Yasinovska',
          job: 'Customer Success Specialist',
          info: 'Po latach w marketingu wylądowałam w biznes developmencie. Teraz płacą mi za to, że gadam z ludźmi i pomagam realizować ich projekty.',
          image: '../../assets/ulyana-yasinovska.jpg',
          alt: 'Ulyana Yasinovska photo'
        },
        {
          name: 'Ula Kowalska',
          job: 'Backend Developer',
          info: 'Fanka kotów, pand i durnych żartów. Możesz ze mną pogadać nie tylko o web devie, ale też o dobrej muzyce i wszelkiej maści serialach.',
          image: '../../assets/ula-kowalska.jpg',
          alt: 'Ula Kowalska photo'
        },
        {
          name: 'Natalie Pilling',
          job: 'CEO',
          info: 'I believe in leading by example. I would like to see more women in leadership roles.',
          image: '../../assets/natalie-pilling.jpg',
          alt: 'Natalie Pilling photo'
        },
        {
          name: 'Kinga Sieminiak',
          job: 'Frontend Developer',
          info: 'Piszę kolorowe internety.',
          image: '../../assets/kinga-sieminiak.jpg',
          alt: 'Kinga Sieminiak'
        },
        {
          name: 'Agnieszka Dunin',
          job: 'Digital Marketing Manager',
          info: 'Ściemniam w internecie.',
          image: '../../assets/agnieszka-dunin.jpg',
          alt: 'Agnieszka Dunin photo'
        },
        {
          name: 'Agnieszka Sobańska',
          job: 'People Operations Manager',
          info: 'Poluję na ludzi, a potem dbam o to, żeby dobrze się im było w jednym w warszawskich software housów.',
          image: '../../assets/agnieszka-sobanska.jpg',
          alt: 'Agnieszka Sobańska photo'
        },
        {
          name: 'Ela Kumela',
          job: 'UI Designer',
          info: 'Projektuję.',
          image: '../../assets/ela-kumela.jpg',
          alt: 'Ela Kumela photo'
        }
      ]
    },

    cta: {
      title: 'Nie tylko dla programistek i projektantek',
      subtitle: 'Możesz pracować w IT niezależnie od Twoich zainteresowań, umiejętnościczy mocnych stron.',
      text: 'Zastanawiasz się, czy to branża dla Ciebie? Czekamy na Twoje pytania: girls@gofor-it.org'
    },

    partners: {
      main: {
        title: 'Główny partner',
        partners: [
          {
            src: 'elpassion-logo',
            alt: 'El Passion logo'
          }
        ]
      },
      support: {
        title: 'Wspierają nas',
        partners: [
          {
            src: 'coderslab-logo',
            alt: 'Coders Lab logo'
          },
          {
            src: 'girlscodefun-logo',
            alt: 'Girls Code Fun logo'
          },
          {
            src: 'futuredesign-logo',
            alt: 'Future Design logo'
          },
          {
            src: 'ladiesthatux-logo',
            alt: 'Ladies that Ux logo'
          },
          {
            src: 'theawwwesomes-logo',
            alt: 'The Awwwesomes logo'
          }
        ]
      }
    },

    getInvolved: {
      title: 'Pomagaj z nami',
      subtitle: 'Podoba Ci się nasza inicjatywa i chcesz się przyłączyć?',
      text: 'Jest wiele sposobów w jakie możesz się zaangażować. Zostań mentorką, partnerem lub po prostu powiedz innym o programie!',
      cta: {
        text: 'Napisz do nas',
        link: `mailto:girls@gofor-it.org?subject=go for IT`
      }
    },

    faq: {
      title: 'Ograniczenia wiekowe',
      questions: [
        {
          title: 'Koszt uczestnictwa',
          text: 'Udział w programie jest całkowicie bezpłatny. Wszystkim uczestniczkom zapewniamy wspólny obiad inauguracyjny, minimum sześć indywidualnych sesji mentorskich, konsultacje z rekruterką HR oraz imprezę na zakończenie programu.'
        },
        {
          title: 'Ograniczenia wiekowe',
          text: 'Do aplikowania zapraszamy pełnoletnie dziewczyny zainteresowane postawieniem pierwszych kroków w IT lub rozwinięciem posiadanych już umiejętności.'
        },
        {
          title: 'Wymagane umiejętności',
          text: "Program jest zaprojektowany tak, by umożliwić uczestnictwo również dziewczynom bez umiejętności projektowania, programowania czy doświadczenia w branży IT. Mogą zaaplikować do go for IT w ramach ścieżki 'Początkująca'."
        },
        {
          title: 'Kryteria wyboru',
          text: 'Podstawą wyboru uczestniczek będzie formularz aplikacyjny oraz nasze możliwość zaspokojenia ich oczekiwań względem programu. Będziemy pracować nad tym, by zwiększać liczbę mentorek oraz zakres ich kompetencji tak, by pomóc jak największej liczbie dziewczyn :)'
        },
        {
          title: 'Aplikantki spoza Warszawy',
          text: 'Bardzo zależy nam na obecności wszystkich uczestniczek w spotkaniu inauguracyjnym i pożegnalnym. Jeśli jest to dla Ciebie problem, napisz o tym w formularzu zgłoszeniowym. Sesje z mentorką mogą odbywać się online.'
        },
        {
          title: 'Spotkania z mentorką',
          text: 'Miejsca spotkań z mentorką nie są z góry narzucone i zależą od Was. Może to być kawiarnia albo przestrzeń coworkingowa - ważne żebyś czuła się w niej swobodnie. Spotkania mogą odbyć się również online.'
        },
        {
          title: 'Rezygnacja z programu',
          text: 'Zaaplikuj do programu jeśli jesteś gotowa brać w nim aktywny udział przez cały czas jego trwania. Oczywiście w wyjątkowych okolicznościach postaramy się wspólnie znaleźć jakieś rozwiązanie ;)'
        },
        {
          title: 'Zakończenie programu',
          text: 'W ramach zakończenia programu odbędzie się spotkanie wszystkich uczestniczek wraz z mentorkami i podsumowanie tej edycji. Koniec programu nie oznacza jednak końca naszej znajomości :)'
        }
      ]
    },

    footer: {
      title: 'Czekamy na aplikacje ',
      'title-sm': 'Aplikacje ',
      title2: 'do 23 maja',
      subtitle: 'Zrób pierwszy krok!',
      copyright: 'go for It ',
      copyright2: 'Wszelkie prawa zastrzeżone.',
      cta: {
        text: 'Aplikuj do programu',
        'text-sm': 'Aplikuj',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdwDnTVgybaOs00vsItYtsxGdoeHb9SB3gPU_XfeLKwpZpc2Q/viewform?usp=sf_link'
      }
    }
  }
};

export default translations;
