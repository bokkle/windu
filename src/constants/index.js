//about
import nod from '../assets/winduNod.gif';
import chin from '../assets/winduChin.gif';
import eyeroll from '../assets/winduEyeRoll.gif';
import smh from '../assets/winduSmh.gif';

// timeline
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

//buy
import jupiter from '../assets/jupiter.svg';
import raydium from '../assets/raydium.svg';
import pumpfun from '../assets/pumpfun.svg';
import dexscreener from '../assets/dexscreener.svg';

const aboutInfo = [
  {
    title: 'fair launch',
    description: 'on pumpfun',
    img: nod,
    alt: 'windu nodding',
  },
  {
    title: 'total supply',
    description: '1,000,000,000',
    img: chin,
    alt: 'windu contemplating',
  },
  {
    title: 'contract address',
    description: '01010101010101010',
    img: eyeroll,
    alt: 'windu rolling eyes',
  },
  {
    title: 'dev tokens',
    description: '5%',
    img: smh,
    alt: 'windu disappointed in greedy dev',
  },
];

const timeline = [
  {
    title: 'Launch',
    description: 'Phase 1',
    date: 'October 22',
    icon: RiNumber1,
    iconBg: 'rgb(55 65 81)',
    accentColor: 'rgb(168 85 247)',
    points: ['Windu links with the mandem on pumpfun'],
    id: 1,
  },
  {
    title: 'nuffin',
    description: 'Phase 2',
    date: 'Ongoing',
    icon: RiNumber2,
    iconBg: 'rgb(55 65 81)',
    accentColor: 'rgb(168 85 247)',
    points: ['Nuffin'],
    id: 2,
  },
  {
    title: 'nuffin',
    description: 'Phase 3',
    date: 'TBA',
    icon: RiNumber3,
    iconBg: 'rgb(55 65 81)',
    accentColor: 'rgb(168 85 247)',
    points: ['Shii wut u thot this wuz? He Windu Nuffin.'],
    id: 3,
  },
];

const buyButtons = [
  {
    title: 'pumpfun',
    img: pumpfun,
    alt: 'pumpfun',
  },
  {
    title: 'raydium',
    img: raydium,
    alt: 'raydium',
  },
  {
    title: 'jupiter',
    img: jupiter,
    alt: 'jupiter',
  },
  {
    title: 'chart',
    img: dexscreener,
    alt: 'dexscreener',
  },
  {
    title: 'buy windu',
    // img: dexscreener,
    // alt: 'dexscreener',
  },
];

export { aboutInfo, timeline, buyButtons };
