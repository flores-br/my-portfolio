import {
  SiReact,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiSass,
  SiCss3,
  SiJava,
  SiMysql,
} from 'react-icons/si';

import valCarousel from './assets/VALORANT-Carousel.png';
import lolApp from './assets/lol-champions-img.png';
import javafxApp from './assets/javafx-img.jpg';

export const progIcons = {
  react: { name: 'React', obj: <SiReact key={1} /> },
  express: { name: 'Express.js', obj: <SiExpress key={2} /> },
  javascript: { name: 'JavaScript', obj: <SiJavascript key={3} /> },
  html: { name: 'HTML5', obj: <SiHtml5 key={4} /> },
  sass: { name: 'Sass', obj: <SiSass key={5} /> },
  css: { name: 'CSS', obj: <SiCss3 key={6} /> },
  java: { name: 'Java', obj: <SiJava key={7} /> },
  mysql: { name: 'MySQL', obj: <SiMysql key={8} /> },
};

export const projectList = [
  {
    title: 'VALORANT Carousel',
    description:
      'React web application for viewing VALORANT agent data and their descriptions in a carousel. Data was fetched a 3rd party VALORANT API using Axios.',
    image: valCarousel,
    tools: [
      progIcons.react,
      progIcons.javascript,
      progIcons.html,
      progIcons.css,
    ],
    url: 'https://valorant-carousel.netlify.app/',
    github: 'https://github.com/flores-br/valorant-carousel',
  },
  {
    title: 'League of Legends Champion Cards',
    description:
      'React web application for viewing League of Legends champions as well as their lore and stats in card format. Data was fetched from the official Riot Games API using Axios. Queries were handled using Express.js',
    image: lolApp,
    tools: [
      progIcons.react,
      progIcons.express,
      progIcons.javascript,
      progIcons.html,
      progIcons.sass,
      progIcons.css,
    ],
    url: 'https://lol-champ-cards.netlify.app/',
    github: 'https://github.com/flores-br/react-lol-champions',
  },
  {
    title: 'Appointment Scheduler',
    description:
      'JavaFX application in which users can schedule and view appointments. The app was connected to a MySQL database using JDBC principles. Advanced Java concepts were also used such as the date/time API, streams, login and form validation.',
    image: javafxApp,
    tools: [progIcons.java, progIcons.mysql],
    github: 'https://gitfront.io/r/bflor99/pXdx3GPEzygW/soft-ii-gitfront/',
  },
];
