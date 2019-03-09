const translations = {
  home: {
    hero: {
      title: 'Program mentorski',
      title2: 'dla dziewczyn:',
      title3: 'pierwsze kroki w IT',
      text: 'Chciałabyś projektować, kodować, zarządzać projektami technologicznymi? Pomożemy Ci to osiągnąć korzystając z własnych doświadczeń. Aplikuj do drugiej edycji programu mentorskiego dateIT!',
      subtitle: 'Zgłoszenia do 14 marca!',
      cta: {
        text: 'Aplikuj do programu',
        link: 'https://goo.gl/forms/B3yaGhCMc2BF1u7r1'
      }
    },

    about: {
      title: 'O co chodzi?',
      subtitle1: 'dareIT to inicjatywa stworzona przez Aleksandrę Bis i Natalie Pilling w celu ułatwienia kobietom startu w branży IT.',
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
      ],
      background: 'User Experience Design UI & Visual Design Web Development Project Management Digital Marketing User Experience Design UI & Visual Design Web Development Project Management Digital Marketing'
    },

    work: {
      title: 'Jak będziemy pracować',
      subtitle: 'My też byłyśmy kiedyś na Twoim miejscu, dlatego wiemy, jak trudne może być zrobienie pierwszego kroku. Chcemy Ci w tym pomóc.',
      text1: 'Jak wybrać lub zmienić zawód?',
      text2: 'Jak zacząć, jeśli nie wiesz od czego?',
      list: [
        'Jedna z nas będzie Twoją mentorką przez 3 miesiące',
        'Podzielimy się z Tobą teorią i praktyką',
        'Skonsultujesz się z rekruterką IT na temat ścieżki kariery',
        'Pomożemy z CV, portfolio i rozmową rekrutacyjną',
        'Pokażemy Ci, jak wygląda branża IT od kuchni',
        'Podpowiemy, co czytać i gdzie szukać',
        'Poznasz nasze codzienne narzędzia pracy',
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
            title: 'Aplikacje',
            date: 'do 04.04'
          },
          {
            title: 'Ogłoszenie uczestniczek',
            date: '18.04'
          }
        ]
      },
      middle: {
        steps: [
          {
            title: 'Potwierdzenie udziału od uczestniczek',
            date: '22.04'
          }
        ]
      },
      bottom: {
        steps: [
          {
            title: 'Start programu',
            date: '26.04'
          },
          {
            title: 'Zakończenie programu',
            date: '05.07'
          }
        ],
        details: [
          'Min. 6 indywidualnych sesji mentorskich',
          'Konsultacje HR',
          "Otwarte meetup'y raz w miesiący"
        ]
      }
    },

    mentors: {
      title: 'Mentorki',
      people: [
        {
          name: 'Joanna Erd',
          job: 'Frontend Developer',
          info: 'Pixel-perfekcyjna pani domu. Pukam w klawiaturę, aż stanie się coś dobrego.',
          image: '../../assets/mentors/joanna-erd.jpg',
          alt: 'Joanna Erd photo'
        },
        {
          name: 'Aleksandra Bis',
          job: 'Pomysłodawczyni, UX Designer',
          info: 'Zamieniam pomysły w użyteczne produkty. Jak nie w pracy, to na koncercie.',
          image: '../../assets/mentors/ola-bis.jpg',
          alt: 'Aleksandra Bis photo'
        },
        {
          name: 'Dorota Badzian',
          job: 'Project Manager',
          info: 'Etnolożka, miłośniczka lasu i staroci. Na co dzień ogarniam projekty.',
          image: '../../assets/mentors/dorota-badzian.jpg',
          alt: 'Dorota Badzian photo'
        },
        {
          name: 'Kasia Łaszczewska',
          job: 'Backend Developer',
          info: 'Piszę backend aplikacji internetowych.',
          image: '../../assets/mentors/kasia-laszczewska.jpg',
          alt: 'Kasia Łaszczewska photo'
        },
        {
          name: 'Ulyana Yasinovska',
          job: 'Customer Success Specialist',
          info: 'Po latach w marketingu wylądowałam w biznes developmencie. Teraz płacą mi za to, że gadam z ludźmi i pomagam realizować ich projekty.',
          image: '../../assets/mentors/ulyana-yasinovska.jpg',
          alt: 'Ulyana Yasinovska photo'
        },
        {
          name: 'Ula Kowalska',
          job: 'Backend Developer',
          info: 'Fanka kotów, pand i durnych żartów. Możesz ze mną pogadać nie tylko o web devie, ale też o dobrej muzyce i wszelkiej maści serialach.',
          image: '../../assets/mentors/ula-kowalska.jpg',
          alt: 'Ula Kowalska photo'
        },
        {
          name: 'Natalie Pilling',
          job: 'Co-Founder and CEO',
          info: 'I believe in leading by example. I would like to see more women in leadership roles.',
          image: '../../assets/mentors/natalie-pilling.jpg',
          alt: 'Natalie Pilling photo'
        },
        {
          name: 'Kinga Sieminiak',
          job: 'Frontend Developer',
          info: 'Piszę kolorowe internety.',
          image: '../../assets/mentors/kinga-sieminiak.jpg',
          alt: 'Kinga Sieminiak'
        },
        {
          name: 'Agnieszka Dunin',
          job: 'Digital Marketing Manager',
          info: 'Tłumaczę programistyczne rozkminy na słowa i teksty. Zwiedzam świat z plecakiem.',
          image: '../../assets/mentors/agnieszka-dunin.jpg',
          alt: 'Agnieszka Dunin photo'
        },
        {
          name: 'Agnieszka Sobańska',
          job: 'People Operations Manager',
          info: 'Poluję na ludzi, a potem dbam o to, żeby dobrze się im było w jednym w warszawskich software housów.',
          image: '../../assets/mentors/agnieszka-sobanska.jpg',
          alt: 'Agnieszka Sobańska photo'
        },
        {
          name: 'Ela Kumela',
          job: 'UI Designer',
          info: 'Projektuję.',
          image: '../../assets/mentors/ela-kumela.jpg',
          alt: 'Ela Kumela photo'
        },
        {
          name: 'Julia Mączka',
          job: 'UX Designer',
          info: 'Wierzę, że dobrym projektowaniem możemy zbawić świat. Dla zachowania balansu zakładam wrotki, albo czytam książki w parku.',
          image: '../../assets/mentors/julia-maczka.jpg',
          alt: 'Julia Maczka'
        }
      ]
    },

    testimonials: {
      title: 'Uczestniczki o dareIT',
      label: 'Edycja 2018',
      items: [
        {
          text: "Kontakt z mentorem face to face – to jest bezcenne. Spotkania były wspaniałe i bardzo inspirujące.",
          author: 'Jowita, Web Development',
          type: 'top-left'
        },
        {
          text: 'DareIT to duża dawka wiedzy i dobrej energii, najlepszy program mentorski w jakim brałam udział',
          author: 'Kasia, Visual Design',
          type: 'bottom-left-action'
        },
        {
          text: "Ogromne wsparcie mentorki dało mi motywację i pozwoliło uwierzyć, że się uda.",
          author: 'Ania, UX Design',
          type: 'top-left'
        }
      ]
    },

    info: {
      title: 'Ten program jest dla Ciebie',
      subtitle: 'Twoje wykształcenie, zawód i wiek nie mają znaczenia',
      list: [
        'Jedna z nas będzie Twoją mentorką przez 3 miesiące',
        'Pomożemy z CV, portfolio i rozmową rekrutacyjną',
        'Poznasz nasze codzienne narzędzia pracy',
        'Jedna z nas będzie Twoją mentorką przez 3 miesiące',
        'Pomożemy z CV, portfolio i rozmową rekrutacyjną',
        'Poznasz nasze codzienne narzędzia pracy',
      ]
    },

    cta: {
      title: 'Nie tylko dla programistek i projektantek',
      subtitle: 'Możesz pracować w IT niezależnie od Twoich zainteresowań, umiejętności czy mocnych stron.',
      text: 'Zastanawiasz się, czy to branża dla Ciebie? Czekamy na Twoje pytania: girls@dareit.org'
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
            src: 'inkubator-logo',
            alt: 'Inkubator uw logo'
          },
          {
            src: 'girlscodefun-logo',
            alt: 'Girls Code Fun logo'
          },
          {
            src: 'ladiesthatux-logo',
            alt: 'Ladies that Ux logo'
          },
          {
            src: 'coderslab-logo',
            alt: 'Coders Lab logo'
          },
          {
            src: 'futuredesign-logo',
            alt: 'Future Design logo'
          },
          {
            src: 'mindspace-logo',
            alt: 'Mindspace logo'
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
        link: `mailto:girls@dareit.org?subject=dareIT`
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
          text: "Program jest zaprojektowany tak, by umożliwić uczestnictwo również dziewczynom bez umiejętności projektowania, programowania czy doświadczenia w branży IT. Mogą zaaplikować do dareIT w ramach ścieżki 'Początkująca'."
        },
        {
          title: 'Kryteria wyboru',
          text: 'Podstawą wyboru uczestniczek będzie formularz aplikacyjny oraz nasza możliwość zaspokojenia ich oczekiwań względem programu. Będziemy pracować nad tym, by zwiększać liczbę mentorek oraz zakres ich kompetencji tak, by pomóc jak największej liczbie dziewczyn :)'
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
      title2: 'do 4 kwietnia',
      'title2-sm': 'do 4.04',
      title3: '',
      subtitle: 'Zrób pierwszy krok!',
      copyright: 'dareit.org ',
      copyright2: 'Wszelkie prawa zastrzeżone.',
      cta: {
        text: 'Aplikuj do programu',
        'text-sm': 'Aplikuj',
        link: 'https://goo.gl/forms/B3yaGhCMc2BF1u7r1'
      }
    }
  }
};

export default translations;
