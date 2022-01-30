document.addEventListener('DOMContentLoaded', () => {

  //theme, questions, answers
  let questions = [

    //anime
    { theme: "anime", question: "How did Elliot die in Pandora Hearts ?", answers: ["Killed by OZ", "Killed by Vincent", "He didn't die", "Killed himself"], answer: "Killed himself" },
    { theme: "anime", question: "Où est-ce que Kaneki décide de travailler ?", answers: ["Dans un bar", "Dans un café appelé l’Antique", "Dans un restaurant pour Goule", 'À l’université'], answer: "Dans un café appelé l’Antique" },
    { theme: "anime", question: "Qui est l’étudiant qui dépasse certain héro pro dans My Héro Academia ?", answers: ["Lemillion", "Endevor", "Hawks", 'Stain'], answer: "Lemillion" },
    { theme: "anime", question: "Comment s’appelle l’auteur que Kaneki aime beaucoup ?", answers: ["Takatsuki Sen", "Tachibana Sen", "Takatsuki Seido", 'Akira Mado'], answer: "Takatsuki Seido" },
    { theme: "anime", question: "Dans quel manga ou anime, le héros est un petit robot ?", answers: ["Yume Senshi", "Wingman", "Astro Boy", 'Gundam Wing, Gundam Seed et Gundam 00 Mazinger'], answer: "Astro Boy" },
    { theme: "anime", question: "Lors du combat final contre Buu buu , Vegeta déclare que ?", answers: ["Goku est un imbécile", "Goku est le numéro 1", "Goku est le plus gentil des sayan", 'Goku est son plus grand rival'], answer: "Goku est le numéro 1" },
    { theme: "anime", question: "Quel est le surnom du héros Midoriya dans My Hero Academia ?", answers: ["Izuku", "Deku", "Haiku", "Il n'a pas de surnoms"], answer: "Deku" },
    { theme: "anime", question: "Dans death note où L va-t-il se présenter de lui-même à Light Yagami ?", answers: ["A une cafétéria", "A l’université de Todai", "Dans la rue sur un banc", "Dans un café"], answer: "A l’université de Todai" },
    { theme: "anime", question: "Qui a arraché l'oeil de Break dans Pandora Hearts ?", answers: ["La volonté des abysses", "Cheshire", "Sa propre chaine", "Il se l'est arraché lui même"], answer: "La volonté des abysses" },
    { theme: "anime", question: "Dans Pandora Hearts avec quelle chain Oz a-t-il conclu un pacte ?", answers: ["Mad Hatter", "B-rabbit", "Eques", "Humpty Dumpty"], answer: "B-rabbit" },

    //gaming
    { theme: "gaming", question: "Quelle est l'année de sortie de la Super Nintendo en France ?", answers: ["1990", "1991", "1992", "1993"], answer: "1991" },
    { theme: "gaming", question: "Dans quelle ville est né Altaïr, le héros du premier Assassin's Creed ?", answers: ["Jérusalemen", "Rome", "Masyaf", "Sparte"], answer: "Masyaf" },
    { theme: "gaming", question: "Comment s’appel le puissant héro de God of war ?", answers: ["Credos", "Démios", "Kratos", "Sakrot"], answer: "Kratos" },
    { theme: "gaming", question: "De quels jeux Franklin Michael Trevor sont-ils  issus ?", answers: ["Red dead rédemption 2", "The last of us", "Grand Theft Auto 5", "Grand Theft Auto 4"], answer: "Grand Theft Auto 5" },
    { theme: "gaming", question: "Quel studio a développé Call of Duty: Advanced Warfare ?", answers: ["Treyarch studio", "Sledge Hammer Games", "Rockstar Games", "Infinity Ward"], answer: "Sledge Hammer Games" },
    { theme: "gaming", question: "Quel est le nom du créateur de Mario ?", answers: ["Akira Toriyama", "Shigeru Miyamoto", "Zang Yamoto", "Dashan Wang"], answer: "Shigeru Miyamoto" },
    { theme: "gaming", question: "Quel moteur graphique utilisé dans les jeux battlefield ?", answers: ["Unity", "Unreal Engine", "Rage", "Frostbite"], answer: "Frostbite" },
    { theme: "gaming", question: "Dans the last of us comment appelle t’on le champignon responsable de l’infection ?", answers: ["Cordyceps", "Coprin", "Amanite Phalloïde", "Lactarius Amirus"], answer: "Cordyceps" },
    { theme: "gaming", question: "Dans Apex Legend comment se nomme le héros possédant un corbeau ?", answers: ["Wraith", "Sombra", "Bloodhound", "Mirage"], answer: "Bloodhound" },
    { theme: "gaming", question: "Quel est le studio qui a crée la licence Assassin’s Creed ?", answers: ["Valve", "Bethesda", "Criterion", "Ubisoft"], answer: "Ubisoft" },

    //cinema
    { theme: "cinema", question: "De quel film est issu la musique culte « Now we are free »?", answers: ["Gladiator", "Star Wars", "Le seigneur des Anneaux", "Il faut sauver le soldat Rayan"], answer: "Gladiator" },
    { theme: "cinema", question: "Dans le film « La Chute du Faucon noir » quel est la force d’intervention à pied ?", answers: ["Mac V SOG", "Les Marines", "La Delta Force", "Les Spetsnaz"], answer: "Les Marines" },
    { theme: "cinema", question: "Dans le film gladiator qui assassine Marc Aurèle ?", answers: ["Spartacus", "Octave", "Comode", "Maximus"], answer: "Comode" },
    { theme: "cinema", question: "En quel lieu Frodon se fait-il blesser par l'un des neuf cavaliers noirs ?", answers: ["Amon sûl", "Le mont Ventoux", "Le Gué de Bruinen", "Le mont Valérien"], answer: "Amon sûl" },
    { theme: "cinema", question: "A travers quel artefact possédé par Saroumane voit-on luire l'oeil de Sauron ?", answers: ["Le miroir Galadriel", "Le bâton de pouvoir", "Le Palantir ", "Le Tesseract"], answer: "Le Palantir" },
    { theme: "cinema", question: "Dans intouchable, qu’elle est l’handicape de Phillipe ?", answers: ["Il est paraplégique", "Il est tétraplégique", "Il est hémiplégique", "Il est polyphylétique"], answer: "Il est tétraplégique" },
    { theme: "cinema", question: "Dans The Amazing Spiderman quel est la vraie identité d’électro ?", answers: ["Arthur Parks", "Steeve Rogers", "Max Dillon", "Curtis Connors"], answer: "Max Dillon" },
    { theme: "cinema", question: "Dans X men origins Wolwerine Logan se prend une explosion de quel type ? ", answers: ["Incident industrielle", "Une explosion", "Une Explosion atomique", "Un tir de mortier"], answer: "Une explosion" },
    { theme: "cinema", question: "Comment s’appelle le méchant qui a copié la technologie Stark lors du grand prix à Monaco ?", answers: ["Enton Vanko", "Ivan Vanko", "Jin Khan", "Raymon Barkov"], answer: "Ivan Vanko" },
    { theme: "cinema", question: "Dans Transformers comment appel t’on l’élément pouvant réanimer un transformers ?", answers: ["La Matrice de commandement", "Le All Spark", "Le cube de commandement", "Le tesseract commandement"], answer: "La Matrice de commandement" },

    //tech
    { theme: "tech", question: "Que veut dire High tech ?", answers: ["Technologie", "La petite technologie", "La haute technologie", "La techno"], answer: "La haute technologie" },
    { theme: "tech", question: "Que veut dire RAM ?", answers: ["Random Access Memory", "Right Acces Mobile", "Rainbow Acces Memory", "Random Admin Memory"], answer: "Random Access Memory" },
    { theme: "tech", question: "Quel est le rôle d’un processeur ?", answers: ["D’exécuter des fréquences d’images", "D’échanger des données entre les différents composants informatique ", "De stocker des données", "De centraliser la prise en charge de la RAM"], answer: "D’échanger des données entre les différents composants informatique" },
    { theme: "tech", question: "Où se trouve le siège d’Intel Corporation ?", answers: ["Santa Monica", "Santa Clara ", "Santa Barbara", "Santa Clause"], answer: "Santa Clara" },
    { theme: "tech", question: "Que veut dire CPL ?", answers: ["Courant porteur de liens", "Couverture pérméable de ligne", "Courant porteur de ligne", "Courant paramétrable de ligne"], answer: "Courant porteur de liens" },
    { theme: "tech", question: "Quel est le le classement juste  des stockages les plus rapides ?", answers: ["HDD<SSD<SD<Flash Memory", "Flash Memory <SD< HDD<SSD", "SD<SSD<Flash Memory<HDD", "SSD<HDD<Flash Memory<SD"], answer: "Flash Memory <SD< HDD<SSD" },
    { theme: "tech", question: "Quel type de connexion est la plus rapide ?", answers: ["VDSL2", "Modem", "ADSL", "Fibre"], answer: "Fibre" },
    { theme: "tech", question: "Quel débit est le plus rapide ?", answers: ["Terabits/s", "Gigabyte /s", "Mégabyte/s", "Mégabyte/s"], answer: "Terabits/s" },
    { theme: "tech", question: "Quel est le nouveau nom de Facebook ?", answers: ["Méta", "Messenger", "Discord", "Zétaverse"], answer: "Méta" },
    { theme: "tech", question: "Qui est le successeur de Steve Jobs ?", answers: ["Tim Cook", "Mark Zuckerberg", "Richard Branson", "Ragnar Lothbrok"], answer: "Tim Cook" }

  ];

  //variables
  let freeQuestion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let pages = 0;
  let tryScore = document.getElementById('tryScore');
  tryScore.style.display = 'none';
  let actualPage = document.getElementById('page');
  actualPage.textContent = pages + '/10';
  let niquesamere = false;
  let previousQuestion;
  let currentInput = Array.from(document.getElementsByTagName('input'));
  let currentLabel = document.getElementsByTagName('label');
  let score = document.getElementById('score');
  let replay = document.getElementById('replay');
  replay.style.display = 'none';
  let countScore = 0;
  let random;
  let theme = questions.filter(q => q.theme == 'anime');
  quizz()

  Array.from(document.getElementsByClassName('themes')).forEach(i => {
    i.addEventListener('click', () => {
      theme = questions.filter(q => q.theme == i.dataset.info);
      reset()
      quizz()
    })
  })

  //what the button load is for
  document.getElementById('load').addEventListener('click', () => {


    quizz();
  });


  //function that generate random question & print it
  function quizz() {

    //to get out of the function
    if (niquesamere) {
      return;
    }

    //add pages at each click
    pages += 1
    actualPage.textContent = pages + '/10'

    //check if there's a previousquestion
    if (previousQuestion) {

      //check if selectionned answer is the right answer
      currentInput.forEach(y => {
        if (y.value == previousQuestion.answer && y.checked == true) {
          countScore += 1
          console.log(countScore)
        }
      })
      //reseting the selectionned answer
      for (var t = 0; t < 4; t++) {
        document.getElementsByName('idk')[t].checked = false
      }
    }

    random = Math.floor(Math.random() * freeQuestion.length);

    previousQuestion = theme[freeQuestion[random]];


    document.getElementById('currentQuestion').textContent = pages + ') ' + theme[freeQuestion[random]].question;
    for (i = 0; i < 4; i++) {
      //put random question && answers associated to the questions
      currentInput[i].value = theme[freeQuestion[random]].answers[i];
      currentLabel[i].innerHTML = currentInput[i].value;
    };


    freeQuestion.splice(random, 1)



    //stop function when pages == 10
    if (pages == 10) {
      niquesamere = true;
      load.style.display = 'none';
      tryScore.style.display = 'flex';
      return;
    }
  };

  //reset button
  function reset() {
    pages = 0;
    actualPage.textContent = pages + '/10';
    score.textContent = '';
    countScore = 0;
    tryScore.style.display = 'none';
    freeQuestion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    niquesamere = false;
    replay.style.display = 'none';
  }


  //replay button
  replay.addEventListener('click', () => {
    reset();
    quizz();
    load.style.display = 'initial';
  });

  //to check the score
  tryScore.addEventListener('click', () => {

    //check the last answer
    currentInput.forEach(y => {
      if (y.value == previousQuestion.answer && y.checked == true) {
        countScore += 1
      }
    })
    score.textContent = countScore;
    replay.style.display = 'flex';
    tryScore.style.display = 'none';
  });



  /*
  si yen a qui répondent pas naruto je hurle


  function pleaseWork() {
    while (freeQuestion.length != 0) {
      for (let i = 0; i < 1; i++) {
        let availableQuestion = freeQuestion.length;
        let randomQuestion = Math.floor(Math.random() * availableQuestion);
        let idPlace = freeQuestion[randomQuestion];
        freeQuestion.splice(randomQuestion, 1);
        console.log(animeTheme[idPlace].question)
        console.lo
      g(animeTheme[idPlace].answers)
        console.log(" ")
      }
    }
  }
  pleaseWork()

    if (currentInput.value.checked == theme[freeQuestion[random]].answer) {
      console.log(true)
    } else {
      console.log(false)
    }


 //checking if the selectionned answer is true or false
    if (currentQuestion.textContent === 'What is the best anime ?' && r1.checked == true || currentQuestion.textContent === 'How did Elliot die in Pandora Hearts ?' && r4.checked == true || currentQuestion.textContent === 'Où est-ce que Kaneki décide de travailler ?' && r2.checked == true || currentQuestion.textContent === 'Qui est l’étudiant qui dépasse certain héro pro dans My Héro Academia ?' && r1.checked == true || currentQuestion.textContent === 'Qui emmène Eren au tribunal ?' && r2.checked == true) {
      countScore += 2;
      console.log(animeTheme[0].question)
    } else {
      console.log("false")
    }

  console.log('ici la question', question)  < --- tu peux faire ça pour identifier la bonne ligne
  */


})