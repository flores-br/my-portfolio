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

export const progIcons = {
  react: SiReact,
  express: SiExpress,
  javascript: SiJavascript,
  html: SiHtml5,
  sass: SiSass,
  css: SiCss3,
  java: SiJava,
  mysql: SiMysql,
};

export const projectList = [
  {
    title: 'League of Legends Champion Cards',
    description:
      'React web application for viewing League of Legends champions as well as their lore and stats in card format. Data was fetched from the official Riot Games API using Axios. Queries were handled using Express.js',
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
    tools: [progIcons.java, progIcons.mysql],
    github: 'https://gitfront.io/r/bflor99/pXdx3GPEzygW/soft-ii-gitfront/',
  },
];
