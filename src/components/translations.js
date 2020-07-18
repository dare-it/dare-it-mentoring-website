const translations = {
  home: {
    hero: {
      title: 'Program mentorski',
      title2: 'dla kobiet:',
      title3: 'zmień branżę na IT',
      text: 'Chciałabyś projektować, kodować, zarządzać projektami technologicznymi? Pomożemy Ci to osiągnąć korzystając z własnych doświadczeń.',
      subtitle: 'Zapisy do kolejnej edycji programu są już zamknięte.',
      cta: {
        text: 'Zapisz się na listę oczekujących',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeFRGBwcCVjWxEOQ34L4F3m5meYBOsik6qMK5qU0VEZypXqXA/viewform?usp=sf_link'
      }
    },

    about: {
      title: 'O co chodzi?',
      subtitle1: 'Dare IT to inicjatywa stworzona przez Aleksandrę Bis i Natalie Pilling w celu ułatwienia kobietom startu w branży IT.',
      subtitle2: 'Wspólnie z grupą mentorek pomożemy Ci postawić pierwsze kroki w IT lub rozwinąć posiadane już umiejętności.',
      quotation: {
        text: 'Technologia zmienia i będzie zmieniać to, w jaki sposób funkcjonuje świat. Chcemy, by kobiety były częścią tych zmian i miały na nie realny wpływ. Wierzymy, że poprzez dawanie przykładu, wsparcia oraz dzielenie się wiedzą możemy zachęcić więcej dziewczyn do kształtowania naszej codzienności.',
        cite: 'Aleksandra i Natalie'
      },
      listTitle1: 'W ramach programu będziesz mogła',
      listTitle2: ' bezpłatnie ',
      listTitle3: 'zgłębiać wiedzę w wybranym obszarze:',
      list: [
        'Data Science',
        'UX Research & UX Design',
        'UX Writing',
        'UI & Visual Design',
        'Project Management',
        'Digital Marketing',
        'Tech/IT Law',
        'Business Strategy',
        'Frontend & Backend Development',
        'DevOps',
        'iOS Development',
      ],
      background: 'User Experience Design UI & Visual Design Web Development Project Management Digital Marketing User Experience Design UI & Visual Design Web Development Project Management Digital Marketing'
    },

    work: {
      title: 'Jak będziemy pracować',
      subtitle: 'My też byłyśmy kiedyś na Twoim miejscu, dlatego wiemy, jak trudne może być zrobienie pierwszego kroku. Chcemy Ci w tym pomóc.',
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
            date: ''
          },
          {
            title: 'Ogłoszenie uczestniczek',
            date: ''
          }
        ]
      },
      middle: {
        steps: [
          {
            title: 'Potwierdzenie udziału od uczestniczek',
            date: ''
          }
        ]
      },
      bottom: {
        steps: [
          {
            title: 'Start programu',
            date: ''
          },
          {
            title: 'Zakończenie programu',
            date: ''
          }
        ],
        details: [
          'Min. 5 indywidualnych sesji mentorskich',
          'Konsultacje HR',
          "Otwarte meetup'y raz w miesiącu"
        ]
      }
    },

    mentors: {
      title: 'Mentorki Dare IT 2019',
      people: [
        {
          name: 'Joanna Erd',
          job: 'EL Passion | Warszawa',
          path: 'Frontend Development',
          info: 'Pixel-perfekcyjna pani domu. Pukam w klawiaturę, aż stanie się coś dobrego.',
          image: '../../assets/mentors/joanna-erd.jpg',
          alt: 'Joanna Erd photo'
        },
        {
          name: 'Aleksandra Bis',
          job: 'EL Passion | Warszawa',
          path: 'UX Design',
          info: 'Zamieniam pomysły w użyteczne produkty. Aktywistka i projektantka. Wiecznie w biegu, ale w słusznej sprawie!',
          image: '../../assets/mentors/aleksandra-bis.jpg',
          alt: 'Aleksandra Bis photo'
        },
        {
          name: 'Kasia Łaszczewska',
          job: 'EL Passion | Warszawa',
          path: 'Backend Development',
          info: 'Piszę backend aplikacji internetowych.',
          image: '../../assets/mentors/kasia-laszczewska.jpg',
          alt: 'Kasia Łaszczewska photo'
        },
        {
          name: 'Ula Kowalska',
          job: 'EL Passion | Warszawa',
          path: 'Backend Development',
          info: 'Fanka kotów, pand i durnych żartów. Możesz ze mną pogadać nie tylko o web devie, ale też o dobrej muzyce i wszelkiej maści serialach.',
          image: '../../assets/mentors/ula-kowalska.jpg',
          alt: 'Ula Kowalska photo'
        },
        {
          name: 'Natalie Pilling',
          job: 'EL Passion | Warszawa',
          path: 'Business Strategy',
          info: 'I believe in leading by example. I would like to see more women in leadership roles.',
          image: '../../assets/mentors/natalie-pilling.jpg',
          alt: 'Natalie Pilling photo'
        },
        {
          name: 'Kinga Sieminiak',
          job: 'Intive | Szczecin',
          path: 'Frontend Development',
          info: 'Piszę kolorowe internety.',
          image: '../../assets/mentors/kinga-sieminiak.jpg',
          alt: 'Kinga Sieminiak'
        },
        {
          name: 'Agnieszka Sobańska',
          job: 'EL Passion | Warszawa',
          path: 'HR',
          info: 'Poluję na ludzi, a potem dbam o to, żeby dobrze się im było w jednym w warszawskich software housów.',
          image: '../../assets/mentors/agnieszka-sobanska.jpg',
          alt: 'Agnieszka Sobańska photo'
        },
        {
          name: 'Weronika Szczepanik',
          job: 'iProspect | Warszawa',
          path: 'Project Management',
          info: 'Spinam projekty digitalowe (performance marketing/ analityka), a po 17:00 myślę nad blogiem kulinarnym i nowym serialem kryminalnym!',
          image: '../../assets/mentors/weronika-szczepanik.jpg',
          alt: 'Weronika Szczepanik'
        },
        {
          name: 'Ela Kumela',
          job: 'EL Passion | Warszawa',
          path: 'UI & Visual Design',
          info: 'Projektuję.',
          image: '../../assets/mentors/ela-kumela.jpg',
          alt: 'Ela Kumela photo'
        },
        {
          name: 'Julia Szewczyk',
          job: 'Deloitte | Warszawa',
          path: 'UX Design',
          info: 'Wierzę, że dobrym projektowaniem możemy zbawić świat. Dla zachowania balansu zakładam wrotki, albo czytam książki w parku.',
          image: '../../assets/mentors/julia-maczka.jpg',
          alt: 'Julia Szewczyk'
        },
        {
          name: 'Aga Naplocha',
          job: 'Adobe | Warszawa',
          path: 'Frontend Development',
          info: 'Najwięcej frajdy sprawia mi praca na styku dwóch obszarów – designu i frontend developmentu. Po godzinach rozwijam The Awwwesomes – organizuje wydarzenia, konferencje (m.im Element UX Talks), prowadzę warszty i wykłady.',
          image: '../../assets/mentors/aga-naplocha.jpg',
          alt: 'Aga Naplocha'
        },
        {
          name: 'Agata Kumela',
          job: 'infinIT Codelab | Wrocław',
          path: 'Backend Development',
          info: 'Koduję',
          image: '../../assets/mentors/agata-kumela.jpg',
          alt: 'Agata Kumela'
        },
        {
          name: 'Agnieszka Zwolińska',
          job: 'Demant | Warszawa',
          path: 'UX Research',
          info: 'Antropolożka, fanka badań etnograficznych w UXie. Całe życie coś studiuje, od niedawna uczy innych.',
          image: '../../assets/mentors/agnieszka-zwolinska.jpg',
          alt: 'Agnieszka Zwolińska'
        },
        {
          name: 'Angelika Losko',
          job: ' Laboratorium EE | Warszawa',
          path: 'UX Design',
          info: 'Absolwentka Interaction Design w Malmö i kognitywistka. Po godzinach badam mózgi.',
          image: '../../assets/mentors/angelika-losko.jpg',
          alt: 'Angelika Losko'
        },
        {
          name: 'Estera Kot',
          job: 'Procter & Gamble | Warszawa',
          path: 'Backend Development',
          info: 'Piszę kod. Lubię też pobiegać i pójść na cross-fit.',
          image: '../../assets/mentors/estera-kot.jpg',
          alt: 'Estera Kot'
        },
        {
          name: 'Gosia Heba',
          job: 'EL Passion | Warszawa',
          path: 'Frontend Development',
          info: 'Uwielbiam układać kolorowe puzzelki kodu na froncie, uczyć się i zachłannie eksplorować. Wierzę w ciekawość i w uśmiech.',
          image: '../../assets/mentors/gosia-heba.jpg',
          alt: 'Gosia Heba'
        },
        {
          name: 'Joanna Cymkiewicz',
          job: 'Demant | Warszawa',
          path: 'UI & Visual Design',
          info: 'Na dizajn patrzę szeroko, tak jak szeroko patrzę na świat. Projektuję rozwiązania dostępne starając się nikogo nie wykluczać.',
          image: '../../assets/mentors/joanna-cymkiewicz.jpg',
          alt: 'Joanna Cymkiewicz'
        },
        {
          name: 'Joanna Żaboklicka',
          job: 'Demant | Warszawa',
          path: 'UX Research',
          info: 'Lubię kompleksowe i złożone projekty, głównie w zakresie produktów medycznych i usług publicznych.',
          image: '../../assets/mentors/joanna-zaboklicka.jpg',
          alt: 'Joanna Żaboklicka'
        },
        {
          name: 'Kaja Toczyska',
          job: 'InFullMobile | Warszawa',
          path: 'UX Design',
          info: 'Projektantka UX z pasją i wykształceniem neuropsychologicznym. Sportowy freak',
          image: '../../assets/mentors/kaja-toczyska.jpg',
          alt: 'Kaja Toczyska'
        },
        {
          name: 'Karina Ślęzak',
          job: 'Google | Warszawa',
          path: 'UX Writing',
          info: 'Pasjonatka prostej komunikacji budująca świat wolny od skomplikowanego języka',
          image: '../../assets/mentors/karina-slezak.jpg',
          alt: 'Karina Ślęzak'
        },
        {
          name: 'Karolina Rosół',
          job: 'Polidea | Warszawa',
          path: 'Project Management',
          info: 'Sprawiam, że dzieją się rzeczy. Optymalizacja, kotyfikacja, książka, moda, siłka.',
          image: '../../assets/mentors/karolina-rosol.jpg',
          alt: 'Karolina Rosół'
        },
        {
          name: 'Katarzyna Zerka',
          job: 'Google | Warszawa',
          path: 'UX Research',
          info: 'Po pierwsze ludzie :)',
          image: '../../assets/mentors/katarzyna-zerka.jpg',
          alt: 'Katarzyna Zerka'
        },
        {
          name: 'Katarzyna Janota',
          job: 'Edisonda | Kraków',
          path: 'UX Design',
          info: 'Projektuję interakcje, eksperymentuję z platformami i przyglądam się światu. Po godzinach dużo czytam i współtworzę grupa.robocza.org.',
          image: '../../assets/mentors/katarzyna-janota.jpg',
          alt: 'Katarzyna Janota'
        },
        {
          name: 'Joanna Rodo',
          job: '',
          path: 'UX Design',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Joanna Rodo'
        },
        {
          name: 'Katarzyna Kończalska',
          job: 'Norian | Toruń',
          path: 'Backend Development',
          info: 'Piszę softwarowe roboty, które robią nudną pracę za ludzi.',
          image: '../../assets/mentors/katarzyna-konczalska.jpg',
          alt: 'Katarzyna Kończalska'
        },
        {
          name: 'Katarzyna Kubalska',
          job: 'Growbots | Warszawa',
          path: 'UX Design',
          info: 'Pasjonatka dobrego designu, roślin i muzyki. W wolnych chwilach haftuje i gra na basie.',
          image: '../../assets/mentors/katarzyna-kubalska.jpg',
          alt: 'Katarzyna Kubalska'
        },
        {
          name: 'Sona Kerim',
          job: 'EL Passion | Warszawa',
          path: 'Digital Marketing',
          info: 'I was a history teacher for 6 years and needed a change. I now work as a Digital Marketing Specialist at EL Passion, run educational workshops in other IT companies, and write freelance.',
          image: '../../assets/mentors/sona-kerim.jpg',
          alt: 'Sona Kerim'
        },
        {
          name: 'Katarzyna Siedlarek',
          job: 'Accenture Technologu | Warszawa',
          path: 'DevOps',
          info: 'Cloud devops, współorganizatorka Django Girls i PyLigh',
          image: '../../assets/mentors/katarzyna-siedlarek.jpg',
          alt: 'Katarzyna Siedlarek'
        },
        {
          name: 'Kasia Jarmołkowicz',
          job: 'Rebased | Kraków',
          path: 'Backend Development',
          info: 'Ruby on Rails, Javascript, Elm. Rails Girls. Kawa, koty i spanko.',
          image: '../../assets/mentors/kasia-jarmolkowicz.jpg',
          alt: 'Kasia Jarmołkowicz'
        },
        {
          name: 'Klaudia Bęczkowska',
          job: 'EL Passion | Warszawa',
          path: 'Frontend Development',
          info: 'Z wykształcenia medyk, z wyboru Front-end Developer :) Lubię podróże małe i duże, a mój ulubiony serial to Przyjaciele.',
          image: '../../assets/mentors/klaudia-beczkowska.jpg',
          alt: 'Klaudia Bęczkowska'
        },
        {
          name: 'Klaudyna Bańczerowska',
          job: 'Bank BGŻ BNP Paribas | Warszawa',
          path: 'UI & Visual Design',
          info: 'Fanka nowych technologii, dobrego kina i podróży, przy okazji projektuję ładne i funkcjonalne rzeczy ;)',
          image: '../../assets/mentors/klaudyna-banczerowska.jpg',
          alt: 'Klaudyna Bańczerowska'
        },
        {
          name: 'Magda Sroka',
          job: 'eRecruiter.pl | Warszawa',
          path: 'UX Design',
          info: 'Poruszam się na styku projektowania i biznesu,  a baterie ładuję na CrossFit MGW <3',
          image: '../../assets/mentors/magda-sroka.jpg',
          alt: 'Magda Sroka'
        },
        {
          name: 'Paulina Wardęga',
          job: '',
          path: 'Digital Marketing',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Paulina Wardęga'
        },
        {
          name: 'Małgorzata Ksionek',
          job: 'GitLab | Warszawa',
          path: 'Backend Development',
          info: 'Z wyboru i pasji web-developer, z wykształcenia psycholog. W programowaniu najbardziej lubi ciągłe wyzwania.W wolnym czasie czyta lub bezskutecznie walczy z uzależnieniem od Netflixa. Fanka kolorowych skarpetek.',
          image: '../../assets/mentors/malgorzata-ksionek.jpg',
          alt: 'Małgorzata Ksionek'
        },
        {
          name: 'Marta Klimowicz',
          job: 'Monterail | Warszawa',
          path: 'Digital Marketing',
          info: 'Doktorka socjologii od ponad 10 lat zajmująca się marketingiem internetowym.',
          image: '../../assets/mentors/marta-klimowicz.jpg',
          alt: ' Marta Klimowicz'
        },
        {
          name: 'Marzena Wojtkowiak',
          job: 'Nethone | Warszawa',
          path: 'Data Science',
          info: 'Miłośniczka biegów ulicznych, skandynawskich kryminałów i dalekich podróży. Na co dzień analizuje dane jako data scientistka.',
          image: '../../assets/mentors/marzena-wojtkowiak.jpg',
          alt: 'Marzena Wojtkowiak'
        },
        {
          name: 'Monika Jagodyńska',
          job: 'eRecruiter.pl | Warszawa',
          path: 'Project Management',
          info: 'Spełniałam się w roli Testera, później Projektanta UX, a aktualnie jestem Product Ownerem. Początek dnia tylko z dobrą kawą :)',
          image: '../../assets/mentors/monika-jagodynska.jpg',
          alt: 'Monika Jagodyńska'
        },
        {
          name: 'Maria Guzewska',
          job: '',
          path: 'Prawo Tech/IT',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Maria Guzewska'
        },
        {
          name: 'Natalia Pelcer',
          job: 'Daftcode | Warszawa',
          path: 'Business Strategy',
          info: "Wspieram zespół Venture Building, między innymi przy nawiązywaniu współpracy z inwestorami i pozyskiwaniu finansowania dla venture'ów.",
          image: '../../assets/mentors/natalia-pelcer.jpg',
          alt: 'Natalia Pelcer'
        },
        {
          name: 'Olka Fiszbak-Biernat',
          job: 'HTDevelopers | Łódź',
          path: 'UI & Visual Design',
          info: 'Na co dzień rozwijam produkty związane z branżą healthcare dla klientów z USA."Po godzinach miłośniczka roślin, mopsów i mocnej kawy :) ',
          image: '../../assets/mentors/ola-fiszbak.jpg',
          alt: 'Ola Fiszbak'
        },
        {
          name: 'Ola Pazio',
          job: 'Packhelp | Warszawa',
          path: 'Backend Development',
          info: '',
          image: '../../assets/mentors/ola-pazio.jpg',
          alt: 'Ola Pazio'
        },
        {
          name: 'Joanna Sitkowska',
          job: '',
          path: 'Project Management',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Joanna Sitkowska'
        },
        {
          name: 'Anna Wszeborowska',
          job: '',
          path: 'Backend Development',
          info: '',
          image: '../../assets/mentors/placeholder.png',
          alt: 'Anna Wszeborowska'
        },
        {
          name: 'Michalina Dąbek',
          job: 'Performante | Warszawa',
          path: ' HR',
          info: 'Cześć, jestem Michalina i od 6 lat zajmuję się rekrutacją i rozwojem pracowników w branży Digital Marketingu i IT. Prywatnie jestem podróżnikiem amatorem i nieprawną psiarą żyjącą ze świnką morską Walterem White.',
          image: '../../assets/mentors/michalina-dabek.jpg',
          alt: 'Michalina Dąbek'
        },
        {
          name: 'Kamila Harasik',
          job: 'Fundacja TechSoup | Warszawa',
          path: ' HR',
          info: 'Fanka nowych technologii i kotów. Od poniedziałku do piątku HRówa od zadań międzyludzkich.',
          image: '../../assets/mentors/kamila-harasik-smolinska.jpg',
          alt: 'Kamila Harasik'
        }
      ]
    },

    testimonials: {
      title: 'Uczestniczki o Dare IT',
      label: 'Edycja 2018',
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
        'Myślisz o podjęciu pierwszej pracy w branży IT',
        'Wiesz, w jakim kierunku chcesz się rozwijać',
        'Szukasz kogoś, kto pomoże Ci znaleźć pierwszą pracę',
        'Szukasz społeczności wspierających się kobiet, mających podobne doświadczenia',
      ]
    },

    cta: {
      title: 'Nie tylko dla programistek i projektantek',
      subtitle: 'Możesz pracować w IT niezależnie od Twoich zainteresowań, umiejętności czy mocnych stron.',
      text: [
        'Zastanawiasz się, czy to branża dla Ciebie?',
        'Masz pytania dotyczące pracy w IT?',
        'Dołącz do naszej grupy na'
      ],
      link: {
        text: "facebook'u",
        href: 'https://www.facebook.com/groups/2029087700497738/'
      }
    },

    partners: {
      main: {
        title: 'Partner',
        partners: [
          {
            src: 'elpassion-logo',
            alt: 'EL Passion logo'
          }
        ]
      },
      support: {
        title: 'Wspierają nas',
        partners: [
          {
            src: 'dribbble-logo',
            alt: 'Dribbble Meetup Warsaw'
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
            src: 'theawwwesomes-logo',
            alt: 'The Awwwesomes'
          },
          {
            src: 'futuredesign-logo',
            alt: 'Future Design logo'
          },
          {
            src: 'tipiux-logo',
            alt: 'Tipi UX'
          },
          {
            src: 'inkubator-logo',
            alt: 'Inkubator uw logo'
          },
          {
            src: 'elementtalks-logo',
            alt: 'Element Talks'
          },
          {
            src: 'coderslab-logo',
            alt: 'Coders Lab'
          },
          {
            src: 'warsawjs-logo',
            alt: 'WarsawJS'
          },
          {
            src: 'girlsgonetech-logo',
            alt: 'Girsl Gone Tech'
          },
          {
            src: 'techleaders-logo',
            alt: 'Tech Leaders'
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
          title: 'Koszt uczestnictwa',
          text: 'Udział w programie jest całkowicie bezpłatny. Wszystkim uczestniczkom zapewniamy wspólny obiad inauguracyjny, minimum sześć indywidualnych sesji mentorskich, konsultacje z rekruterką HR oraz imprezę na zakończenie programu.'
        },
        {
          title: 'Ograniczenia wiekowe',
          text: 'Do aplikowania zapraszamy pełnoletnie kobiety zainteresowane zmianą kariery i podjęciem pierwszej pracy w IT lub rozwinięciem posiadanych już umiejętności.'
        },
        {
          title: 'Wymagane umiejętności',
          text: 'Program jest zaprojektowany tak, by umożliwić uczestnictwo również dziewczynom bez umiejętności projektowania, programowania czy doświadczenia w branży IT'
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
      title: 'Dołącz do newslettera Dare IT',
      'title-sm': 'Newsletter Dare IT',
      title2: '',
      'title2-sm': '',
      title3: '',
      subtitle: 'Zrób pierwszy krok!',
      copyright: 'dareit.org ',
      copyright2: 'Wszelkie prawa zastrzeżone.',
      cta: {
        text: 'Zapisz się',
        'text-sm': 'Zapisz się',
        link: 'https://mailchi.mp/f6cabc174f15/dareitnewsletter'
      }
    }
  }
};

export default translations;
