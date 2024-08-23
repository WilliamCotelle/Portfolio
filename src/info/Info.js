import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
  firstName: "William",
  lastName: "Cotelle",
  initials: "ME",
  position: "Développeur Full Stack JavaScript",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🛸",
      text: "Créateur de mondes numériques",
    },
    {
      emoji: "🌍",
      text: "Basé en France",
    },
    {
      emoji: "💼",
      text: "Développeur Full Stack en recherche de stage",
    },
    {
      emoji: "📧",
      text: "william.cotelle@outlook.fr",
    },
  ],
  socials: [
    {
      link: "https://www.linkedin.com/in/william-cotelle-528897251/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://github.com/WilliamCotelle",
      icon: "fa fa-github",
      label: "github",
    },
  ],
  bio: "Passionné par le numérique et toujours avide de nouvelles découvertes, j’ai plongé dans le développement web pour allier créativité et apprentissage constant. Curieux et déterminé, je suis prêt à relever de nouveaux défis et à apporter ma touche à des projets passionnants. Actuellement, je suis à la recherche d’un stage pour continuer à explorer et à grandir dans cet univers qui me passionne.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "html5",
      "css3",
      "node.js",
      "express.js",
      "sequelize",
      "postgresql",
      "vite",
      "vercel",
    ],
    exposedTo: ["react native", "docker"],
  },
  hobbies: [
    {
      label: "voyage",
      emoji: "🛩️",
    },
    {
      label: "jeux vidéo",
      emoji: "🎮",
    },
    {
      label: "ski",
      emoji: "🎿",
    },
    {
      label: "sports nautiques",
      emoji: "🌊",
    },
  ],
  portfolio: [
    {
      title: "Projet WeatherApp",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7223693690089738244/",
      source: "https://github.com/WilliamCotelle/weather-app",
      image: mock1,
    },
    {
      title: "Projet First App React Native",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7231319939662385152/",
      source: "",
      image: mock6,
    },
    {
      title: "Projet Pokedex",
      live: "https://www.linkedin.com/posts/williamcotelle_developpementweb-javascript-nodejs-activity-7217639498518511616-UgGn?utm_source=share&utm_medium=member_desktop",
      source: "https://github.com/WilliamCotelle/Pokedex-william",
      image: mock2,
    },
    {
      title: "Projet Quiz APP",
      live: "",
      source: "https://github.com/WilliamCotelle/QuizzAPP",
      image: mock5,
    },
    {
      title: "Projet OCoffee",
      live: "", // Utilisation du fichier vidéo importé
      source: "https://github.com/WilliamCotelle/Ocoffee",
      image: mock3,
    },
    {
      title: "Projet Invader",
      live: "",
      source: "https://github.com/WilliamCotelle/Invader",
      image: mock4,
    },
  ],
};
