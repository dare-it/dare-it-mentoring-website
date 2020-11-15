const translations = {
  home: {
    hero: {
      title: 'Program mentorski',
      title2: 'dla 100 kobiet:',
      title3: 'pierwsza praca w IT',
      text: 'Jesteś gotowa projektować, kodować, zarządzać projektami technologicznymi? Wesprzemy Cię w wejściu do branży korzystając z własnych doświadczeń.',
      subtitle: 'Przyjmujemy zgłoszenia do 6 grudnia',
      cta: {
        text: 'Aplikuj do programu',
        link: 'https://forms.gle/dSSuiwZ81SKY7izk6'
      }
    },

    about: {
      title: 'O co chodzi?',
      subtitle1: 'Dare IT to inicjatywa stworzona przez Aleksandrę Bis i Natalie Pilling w celu ułatwienia kobietom startu w branży IT.',
      subtitle2: 'Wspólnie z grupą mentorek pomożemy Ci rozwinąć posiadane już umiejętności, by zdobyć pierwszą pracę w IT.',
      quotation: {
        text: 'Technologia zmienia i będzie zmieniać to, w jaki sposób funkcjonuje świat. Chcemy, by kobiety były częścią tych zmian i miały na nie realny wpływ. Wierzymy, że poprzez dawanie przykładu, wsparcia oraz dzielenie się wiedzą możemy zachęcić więcej dziewczyn do kształtowania naszej codzienności.',
        cite: 'Aleksandra i Natalie'
      },
      listTitle1: 'W ramach programu będziesz mogła',
      listTitle2: ' bezpłatnie ',
      listTitle3: 'zgłębiać wiedzę w wybranym obszarze:',
      list: [
        'UX Design',
        'UX Research',
        'UX Writing',
        'UI & Visual Design',
        'Frontend Development',
        'Backend Development',
        'DevOps',
        'Data Science',
        'Data & Product Analysis',
        'Project Management',
        'Product Management',
        'Digital Marketing',
        'Content Marketing',
      ],
      background: 'User Experience Design UI & Visual Design Web Development Project Management Digital Marketing User Experience Design UI & Visual Design Web Development Project Management Digital Marketing'
    },

    work: {
      title: 'Jak będziemy pracować',
      subtitle: 'My też byłyśmy kiedyś na Twoim miejscu, dlatego wiemy, jak trudne może być zrobienie tego ostatniego kroku i dostanie pracy. Chcemy Ci w tym pomóc.',
      list: [
        'Jedna z nas będzie Twoją mentorką przez 3 miesiące (online)',
        'Pomożemy z CV, portfolio i rozmową rekrutacyjną',
        'Podpowiemy do których drzwi pukać, gdzie szukać, jak pytać',
        'Będziesz mogła zadać swoje pytania rekruterkom IT na temat obranej ścieżki kariery',
        'Podzielimy się z Tobą teorią, praktyką i kulisami naszego zawodu',
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
            date: 'do 06.12.2020'
          },
          {
            title: 'Ogłoszenie uczestniczek',
            date: '16.12.2020'
          }
        ]
      },
      middle: {
        steps: [
          {
            title: 'Potwierdzenie udziału od uczestniczek',
            date: '20.12.2020'
          }
        ]
      },
      bottom: {
        steps: [
          {
            title: 'Start programu',
            date: '12.01.2021'
          },
          {
            title: 'Zakończenie programu',
            date: '15.04.2021'
          }
        ],
        details: [
          'Min. 6 indywidualnych sesji mentorskich',
          'Konsultacje HR'
        ]
      }
    },

    mentors: {
      title: 'Mentorki Dare IT',
      people: [
        {
          name: 'Aleksandra Bis',
          job: 'AirHelp',
          path: 'UX Design',
          info: 'Zamieniam pomysły w użyteczne produkty. Aktywistka i projektantka. Wiecznie w biegu, ale w słusznej sprawie!',
          image: '../../assets/mentors/aleksandra-bis.jpg',
          alt: 'Aleksandra Bis photo'
        },
        {
          name: 'Natalie Pilling',
          job: 'EL Passion',
          path: 'Business Strategy',
          info: 'I believe in leading by example. I would like to see more women in leadership roles.',
          image: '../../assets/mentors/natalie-pilling.jpg',
          alt: 'Natalie Pilling photo'
        },
        {
          name: 'Joanna Erd',
          job: 'Goldman Sachs',
          path: 'Frontend Development',
          info: 'Pixel-perfekcyjna pani domu. Pukam w klawiaturę, aż stanie się coś dobrego.',
          image: '../../assets/mentors/joanna-erd.jpg',
          alt: 'Joanna Erd photo'
        },
        {
          name: 'Kasia Łaszczewska',
          job: 'EL Passion',
          path: 'Backend Development',
          info: 'Piszę backend aplikacji internetowych.',
          image: '../../assets/mentors/kasia-laszczewska.jpg',
          alt: 'Kasia Łaszczewska photo'
        },
        {
          name: 'Ula Kowalska',
          job: 'EL Passion',
          path: 'Backend Development',
          info: 'Fanka kotów, pand i durnych żartów. Możesz ze mną pogadać nie tylko o web devie, ale też o dobrej muzyce i wszelkiej maści serialach.',
          image: '../../assets/mentors/ula-kowalska.jpg',
          alt: 'Ula Kowalska photo'
        },
        {
          name: 'Weronika Szczepanik',
          job: 'dentsu Polska',
          path: 'Project Management',
          info: 'Spinam projekty digitalowe (performance marketing/ analityka), a po 17:00 myślę nad blogiem kulinarnym i nowym serialem kryminalnym!',
          image: '../../assets/mentors/weronika-szczepanik.jpg',
          alt: 'Weronika Szczepanik photo'
        },
        {
          name: 'Ela Kumela',
          job: 'Fresha',
          path: 'UI & Visual Design',
          info: 'Projektuję.',
          image: '../../assets/mentors/ela-kumela.jpg',
          alt: 'Ela Kumela photo'
        },
        {
          name: 'Julia Szewczyk',
          job: 'Empik',
          path: 'UX Design',
          info: 'Wierzę, że dobrym projektowaniem możemy zbawić świat. Dla zachowania balansu zakładam wrotki, albo czytam książki w parku.',
          image: '../../assets/mentors/julia-maczka.jpg',
          alt: 'Julia Szewczyk photo'
        },
        {
          name: 'Agata Kumela',
          job: 'Roche',
          path: 'Backend Development',
          info: 'Koduję',
          image: '../../assets/mentors/agata-kumela.jpg',
          alt: 'Agata Kumela photo'
        },
        {
          name: 'Agnieszka Zwolińska',
          job: 'Kozminski University',
          path: 'UX Research',
          info: 'Antropolożka, fanka badań etnograficznych w UXie. Całe życie coś studiuje, od niedawna uczy innych.',
          image: '../../assets/mentors/agnieszka-zwolinska.jpg',
          alt: 'Agnieszka Zwolińska photo'
        },
        {
          name: 'Angelika Losko',
          job: 'Laboratorium EE | Warszawa',
          path: 'UX Design',
          info: 'Absolwentka Interaction Design w Malmö i kognitywistka. Po godzinach badam mózgi.',
          image: '../../assets/mentors/angelika-losko.jpg',
          alt: 'Angelika Losko photo'
        },
        {
          name: 'Estera Kot',
          job: 'Procter & Gamble | Warszawa',
          path: 'Backend Development',
          info: 'Piszę kod. Lubię też pobiegać i pójść na cross-fit.',
          image: '../../assets/mentors/estera-kot.jpg',
          alt: 'Estera Kot photo'
        },
        {
          name: 'Gosia Heba',
          job: 'Citi',
          path: 'Frontend Development',
          info: 'Uwielbiam układać kolorowe puzzelki kodu na froncie, uczyć się i zachłannie eksplorować. Wierzę w ciekawość i w uśmiech.',
          image: '../../assets/mentors/gosia-heba.jpg',
          alt: 'Gosia Heba photo'
        },
        {
          name: 'Joanna Cymkiewicz',
          job: 'Demant',
          path: 'UI & Visual Design',
          info: 'Na dizajn patrzę szeroko, tak jak szeroko patrzę na świat. Projektuję rozwiązania dostępne starając się nikogo nie wykluczać.',
          image: '../../assets/mentors/joanna-cymkiewicz.jpg',
          alt: 'Joanna Cymkiewicz photo'
        },
        {
          name: 'Joanna Żaboklicka',
          job: 'Demant',
          path: 'UX Research',
          info: 'Lubię kompleksowe i złożone projekty, głównie w zakresie produktów medycznych i usług publicznych.',
          image: '../../assets/mentors/joanna-zaboklicka.jpg',
          alt: 'Joanna Żaboklicka photo'
        },
        {
          name: 'Karina Ślęzak',
          job: 'Google',
          path: 'UX Writing',
          info: 'Pasjonatka prostej komunikacji budująca świat wolny od skomplikowanego języka',
          image: '../../assets/mentors/karina-slezak.jpg',
          alt: 'Karina Ślęzak photo'
        },
        {
          name: 'Karolina Rosół',
          job: 'Polidea',
          path: 'Project Management',
          info: 'Sprawiam, że dzieją się rzeczy. Optymalizacja, kotyfikacja, książka, moda, siłka.',
          image: '../../assets/mentors/karolina-rosol.jpg',
          alt: 'Karolina Rosół photo'
        },
        {
          name: 'Katarzyna Zerka',
          job: 'Google',
          path: 'UX Research',
          info: 'Po pierwsze ludzie :)',
          image: '../../assets/mentors/katarzyna-zerka.jpg',
          alt: 'Katarzyna Zerka photo'
        },
        {
          name: 'Katarzyna Janota',
          job: 'Edisonda | Kraków',
          path: 'UX Design',
          info: 'Projektuję interakcje, eksperymentuję z platformami i przyglądam się światu. Po godzinach dużo czytam i współtworzę grupa.robocza.org.',
          image: '../../assets/mentors/katarzyna-janota.jpg',
          alt: 'Katarzyna Janota photo'
        },
        {
          name: 'Joanna Rodo',
          job: 'Devsdata',
          path: 'UX Design',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Joanna Rodo photo'
        },
        {
          name: 'Katarzyna Kończalska',
          job: 'Norian',
          path: 'Backend Development',
          info: 'Piszę softwarowe roboty, które robią nudną pracę za ludzi.',
          image: '../../assets/mentors/katarzyna-konczalska.jpg',
          alt: 'Katarzyna Kończalska photo'
        },
        {
          name: 'Katarzyna Kubalska',
          job: 'Growbots | Warszawa',
          path: 'UX Design',
          info: 'Pasjonatka dobrego designu, roślin i muzyki. W wolnych chwilach haftuje i gra na basie.',
          image: '../../assets/mentors/katarzyna-kubalska.jpg',
          alt: 'Katarzyna Kubalska photo'
        },
        {
          name: 'Sona Kerim',
          job: 'EL Passion | Warszawa',
          path: 'Digital Marketing',
          info: 'I was a history teacher for 6 years and needed a change. I now work as a Digital Marketing Specialist at EL Passion, run educational workshops in other IT companies, and write freelance.',
          image: '../../assets/mentors/sona-kerim.jpg',
          alt: 'Sona Kerim photo'
        },
        {
          name: 'Katarzyna Siedlarek',
          job: 'Accenture',
          path: 'DevOps',
          info: 'Cloud devops, współorganizatorka Django Girls i PyLigh',
          image: '../../assets/mentors/katarzyna-siedlarek.jpg',
          alt: 'Kasia Siedlarek photo'
        },
        {
          name: 'Kasia Jarmołkowicz',
          job: 'Rebased',
          path: 'Backend Development',
          info: 'Ruby on Rails, Javascript, Elm. Rails Girls. Kawa, koty i spanko.',
          image: '../../assets/mentors/kasia-jarmolkowicz.jpg',
          alt: 'Kasia Jarmołkowicz photo'
        },
        {
          name: 'Klaudia Bęczkowska',
          job: 'EL Passion',
          path: 'Frontend Development',
          info: 'Z wykształcenia medyk, z wyboru Front-end Developer :) Lubię podróże małe i duże, a mój ulubiony serial to Przyjaciele.',
          image: '../../assets/mentors/klaudia-beczkowska.jpg',
          alt: 'Klaudia Bęczkowska photo'
        },
        {
          name: 'Klaudyna Bańczerowska',
          job: 'Bank BGŻ BNP Paribas | Warszawa',
          path: 'UI & Visual Design',
          info: 'Fanka nowych technologii, dobrego kina i podróży, przy okazji projektuję ładne i funkcjonalne rzeczy ;)',
          image: '../../assets/mentors/klaudyna-banczerowska.jpg',
          alt: 'Klaudyna Bańczerowska photo'
        },
        {
          name: 'Magda Sroka',
          job: 'Accenture',
          path: 'UX Design',
          info: 'Poruszam się na styku projektowania i biznesu,  a baterie ładuję na CrossFit MGW <3',
          image: '../../assets/mentors/magda-sroka.jpg',
          alt: 'Magda Sroka photo'
        },
        {
          name: 'Paulina Wardęga',
          job: 'Testiga',
          path: 'Digital Marketing',
          info: '',
          image: '../../assets/mentors/paulina-wardega.jpg',
          alt: 'Paulina Wardęga photo'
        },
        {
          name: 'Małgorzata Ksionek',
          job: 'GitLab',
          path: 'Backend Development',
          info: 'Z wyboru i pasji web-developer, z wykształcenia psycholog. W programowaniu najbardziej lubi ciągłe wyzwania.W wolnym czasie czyta lub bezskutecznie walczy z uzależnieniem od Netflixa. Fanka kolorowych skarpetek.',
          image: '../../assets/mentors/malgorzata-ksionek.jpg',
          alt: 'Małgorzata Ksionek photo'
        },
        {
          name: 'Marta Klimowicz',
          job: 'Monterail',
          path: 'Digital Marketing',
          info: 'Doktorka socjologii od ponad 10 lat zajmująca się marketingiem internetowym.',
          image: '../../assets/mentors/marta-klimowicz.jpg',
          alt: ' Marta Klimowicz photo'
        },
        {
          name: 'Monika Jagodyńska',
          job: 'eRecruiter.pl | Warszawa',
          path: 'Project Management',
          info: 'Spełniałam się w roli Testera, później Projektanta UX, a aktualnie jestem Product Ownerem. Początek dnia tylko z dobrą kawą :)',
          image: '../../assets/mentors/monika-jagodynska.jpg',
          alt: 'Monika Jagodyńska photo'
        },
        {
          name: 'Olka Fiszbak-Biernat',
          job: 'HTDevelopers | Łódź',
          path: 'UI & Visual Design',
          info: 'Na co dzień rozwijam produkty związane z branżą healthcare dla klientów z USA."Po godzinach miłośniczka roślin, mopsów i mocnej kawy :) ',
          image: '../../assets/mentors/ola-fiszbak.jpg',
          alt: 'Ola Fiszbak photo'
        },
        {
          name: 'Ola Pazio',
          job: 'Packhelp | Warszawa',
          path: 'Backend Development',
          info: '',
          image: '../../assets/mentors/ola-pazio.jpg',
          alt: 'Ola Pazio photo'
        },
        {
          name: 'Joanna Sitkowska',
          job: '',
          path: 'Project Management | Warszawa',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Joanna Sitkowska photo'
        },
        {
          name: 'Anna Wszeborowska',
          job: 'Ableton',
          path: 'Backend Development',
          info: '',
          image: '../../assets/mentors/anna-wszeborowska.jpg',
          alt: 'Anna Wszeborowska photo'
        },
        {
          name: 'Aleksandra Dziewulska',
          job: 'Divante',
          path: 'UX Design',
          info: '',
          image: '../../assets/mentors/aleksandra-dziewulska.jpg',
          alt: 'Aleksandra Dziewulska photo'
        }
      ]
    },

    employers: {
      title: 'Ucz się od kobiet pracujących w:',
      items: [
        {
          name: 'Allegro',
          logo: 'logo-allegro.svg',
        },
        {
          name: 'Google',
          logo: 'logo-google.svg',
        },
        {
          name: 'Microsoft',
          logo: 'logo-microsoft.svg',
        },
        {
          name: 'Accenture',
          logo: 'logo-accenture.svg',
        },
        {
          name: 'EL Passion',
          logo: 'logo-el-passion.svg',
        },
        {
          name: 'Polidea',
          logo: 'logo-polidea.svg',
        },
        {
          name: 'Monterail',
          logo: 'logo-monterail.svg',
        }, 
        {
          name: 'Adobe',
          logo: 'logo-adobe.svg',
        },
        {
          name: 'Goldman Sachs',
          logo: 'logo-goldman-sachs.svg',
        },
        {
          name: 'Booksy',
          logo: 'logo-booksy.svg',
        },
        {
          name: 'Demant',
          logo: 'logo-demant.svg',
        },
        {
          name: 'Brainly',
          logo: 'logo-brainly.svg',
        },
        {
          name: 'Acoustic',
          logo: 'logo-acoustic.svg',
        },
        {
          name: 'Olx',
          logo: 'logo-olx.svg',
        },
        {
          name: 'iProspect',
          logo: 'logo-iprospect.svg',
        },
        {
          name: 'Alior Bank',
          logo: 'logo-alior-bank.svg',
        },
        {
          name: 'Fresha',
          logo: 'logo-fresha.svg',
        },
        {
          name: 'Empik',
          logo: 'logo-empik.svg',
        },
        {
          name: 'AirHelp',
          logo: 'logo-airhelp.svg',
        },
      ],
      moreText: 'i więcej',
    },

    testimonials: {
      title: 'Uczestniczki o Dare IT',
      label: 'Poprzednie edycje',
      items: [
        {
          text: 'Kontakt z mentorem face to face – to jest bezcenne. Spotkania były wspaniałe i bardzo inspirujące.',
          author: 'Jowita, Web Development',
          type: 'top-left'
        },
        {
          text: 'Dare IT to duża dawka wiedzy i dobrej energii, najlepszy program mentorski w jakim brałam udział.',
          author: 'Kasia, Visual Design',
          type: 'bottom-left-action'
        },
        {
          text: 'Ogromne wsparcie mentorki dało mi motywację i pozwoliło uwierzyć, że się uda.',
          author: 'Ania, UX Design',
          type: 'top-left'
        }
      ]
    },

    info: {
      title: 'Ten program jest dla Ciebie',
      subtitle: 'Twoje wykształcenie, zawód i wiek nie mają znaczenia',
      list: [
        'Szukasz kogoś, od kogo mogłabyś się uczyć',
        'Chcesz podjąć pierwszą pracę w branży IT',
        'Wiesz, w jakim kierunku chcesz się rozwijać',
        'Szukasz kogoś, kto pomoże Ci znaleźć pierwszą pracę',
        'Szukasz społeczności wspierających się kobiet, mających podobne doświadczenia',
      ]
    },

    cta: {
      title: 'Dołącz do społeczności Dare IT',
      subtitle: 'Możesz pracować w IT niezależnie od Twoich zainteresowań, umiejętności czy mocnych stron.',
      text: [
        'Zastanawiasz się, czy to branża dla Ciebie?',
        'Masz pytania dotyczące pracy w IT?',
        'Dołącz do naszej grupy na',
      ],
      link: {
        text: "facebook'u",
        href: 'https://www.facebook.com/groups/2029087700497738/'
      }
    },

    partners: {
      main: {
        title: '',
        partners: [
          {
            logo: '',
            name: ''
          }
        ]
      },
      support: {
        title: 'Wspierają nas',
        partners: [
          {
            logo: 'girlscodefun-logo.png',
            name: 'Girls Code Fun logo'
          },
          {
            logo: 'theawwwesomes-logo.png',
            name: 'The Awwwesomes'
          },
          {
            logo: 'inkubator-logo.png',
            name: 'Inkubator uw logo'
          },
          {
            logo: 'elementtalks-logo.png',
            name: 'Element Talks'
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
        link: `mailto:girls@dareit.org?subject=DareIT`
      }
    },

    faq: {
      title: 'Ograniczenia wiekowe',
      questions: [
        {
          title: 'Kryteria wyboru',
          text: 'Podstawą wyboru uczestniczek będzie formularz aplikacyjny oraz nasza możliwość zaspokojenia ich oczekiwań względem programu. Będziemy pracować nad tym, by zwiększać liczbę mentorek oraz zakres ich kompetencji tak, by pomóc jak największej liczbie dziewczyn :)'
        },
        {
          title: 'Koszt uczestnictwa',
          text: 'Udział w programie jest całkowicie bezpłatny. Wszystkim uczestniczkom zapewniamy wspólny obiad inauguracyjny, minimum sześć indywidualnych sesji mentorskich, konsultacje z rekruterką HR oraz imprezę na zakończenie programu.'
        },
        {
          title: 'Ograniczenia wiekowe',
          text: 'Do aplikowania zapraszamy pełnoletnie kobiety zainteresowane zmianą kariery i podjęciem pierwszej pracy w IT lub rozwinięciem posiadanych już umiejętności.'
        },
        {
          title: 'Wymagane umiejętności',
          text: 'Program zaprojektowany jest z myślą o dziewczynach, które posiadają już podstawowe umiejętności w wybranych dziedzinach i są gotowe podjąć pierwszą pracę w branży.'
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
          title: 'Spotkania i networking',
          text: 'W ramach programu będziesz miała dostęp do dedykowanej grupy na Slacku, gdzie poznasz pozostałe uczestniczki i mentorki, a także społeczność Dare IT. Inauguracja oraz zakończenie programu będą miały formę spotkań on-line. Koniec programu nie oznacza jednak końca naszej znajomości :)'
        }
      ]
    },

    footer: {
      title: 'Czekamy na aplikacje do 6 grudnia',
      'title-sm': 'Czekamy na aplikacje do 6 grudnia',
      title2: '',
      'title2-sm': '',
      title3: '',
      subtitle: 'Dołącz do IT!',
      copyright: 'dareit.org ',
      copyright2: 'Wszelkie prawa zastrzeżone.',
      cta: {
        text: 'Aplikuj do programu',
        'text-sm': 'Aplikuj do programu',
        link: 'https://forms.gle/dSSuiwZ81SKY7izk6'
      }
    }
  }
};

export default translations;
