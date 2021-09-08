import Blockchain from '../assets/projects/intro-blockchain.jpg';
import Chatroom from '../assets/projects/chatroom.jpg';
import Github from '../assets/projects/github-search-API.jpg';

export default [
    {
        id: 1,
        title: 'Intro to Blockchain',
        content: 'React/Redux - SCSS - Node/Express - PostgreSQL - Sqitch',
        img: `${Blockchain}`,
        slug: 'http://blockchain-apotheose.surge.sh/',
    },
    {
        id: 2,
        title: 'Chatroom',
        content: 'React/Redux - SCSS - Socket.io',
        img: `${Chatroom}`,
        slug:'https://github.com/wahoostik/chatroom',
    },
    {
        id: 3,
        title: 'Github Search API',
        content: 'React - API - SCSS - Semantic-Ui',
        img: `${Github}`,
        slug:'https://github.com/wahoostik/',
    }
];