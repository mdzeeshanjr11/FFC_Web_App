import aman from '@/assets/aman.jpg';
import aqeeb from '@/assets/aqeeb.jpg';
import aqeebJr from '@/assets/aqeeb jr.jpg';
import kashif from '@/assets/kashif.jpg';
import mujju from '@/assets/mujju.jpg';
import qasim from '@/assets/qasim.jpg';
import rehan from '@/assets/rehan.jpg';
import ubaid from '@/assets/ubaid.jpg';
import umar from '@/assets/umar.jpg';
import zee from '@/assets/zee.jpg';
import zeeyan from '@/assets/zeeyan.jpg';
import ffcLogo from '@/assets/ffc.jpg';
import zain from '@/assets/player1.jpg';
import sohel from '@/assets/player2.jpg';
import suhaib from '@/assets/player3.jpg';
import afreed from '@/assets/player4.jpg';
import maaz  from '@/assets/player5.jpg';
import ajwad from '@/assets/ajwad.jpeg';
import mubbu from '@/assets/mubbu.jpg';

export const clubInfo = {
  name: 'Friends Football Club',
  shortName: 'FFC',
  motto: 'United by passion, powered by independence.',
  established: '2022',
  whatsapp: '919673593959',
  instagram: 'https://www.instagram.com/friends_fc_ffc',
  instagramHandle: '@friends_fc_ffc',
  followers: '326',
  following: '334',
  physio: '@m.mubashir010',
  colors: ['Black', 'White'],
};

export const stats = [
  { label: 'Club Members', value: 25, suffix: '+' },
  { label: 'Matches Played', value: 40, suffix: '+' },
  { label: 'Trophies Won', value: 3, suffix: '' },
  { label: 'Goals Scored', value: 120, suffix: '+' },
];

type SquadPlayer = {
  name: string;
  image: string;
  role?: string;
  number?: number;
  position?: string;
  overall?: number;
  crest?: string;
  stats?: Record<string, number>;
};

export const squad: SquadPlayer[] = [
  {
    name: 'Aman',
    role: 'Right Back',
    number: 46,
    position: 'DEF',
    image: aman,
    overall: 86,
    crest: ffcLogo,
    stats: { pac: 68, sho: 56, pas: 62, def: 86 },
  },
  {
    name: 'Aqeeb Khan',
    role: 'Forward',
    number: 77,
    position: 'ST',
    image: aqeeb,
    overall: 90,
    crest: ffcLogo,
    stats: { pac: 84, sho: 89, pas: 76, def: 38 },
  },
  {
    name: 'Kashif',
    role: 'center back',
    number: 4,
    position: 'CB',
    image: kashif,
    overall: 90,
    crest: ffcLogo,
    stats: { pac: 78, sho: 69, pas: 82, def: 92 },
  },
  {
    name: 'Mujju',
    role: 'Leftback',
    number: 12,
    position: 'RW',
    image: mujju,
    overall: 87,
    crest: ffcLogo,
    stats: { pac: 67, sho: 78, pas: 74, def: 90 },
  },
  {
    name: 'Rehan',
    role: 'Midfielder',
    number: 6,
    position: 'CM',
    image: rehan,
    overall: 82,
    crest: ffcLogo,
    stats: { pac: 68, sho: 40, pas: 64, def: 82 },
  },
  {
    name: 'QASIM',
    role: 'Midfielder',
    number: 14,
    position: 'CM',
    image: qasim,
    overall: 88,
    crest: ffcLogo,
    stats: { pac: 81, sho: 86, pas: 72, def: 39 },
  },
  {
    name: 'Ubaidullah',
    role: 'Midfielder',
    number: 32,
    position: 'CDM',
    image: ubaid,
    overall: 83,
    crest: ffcLogo,
    stats: { pac: 72, sho: 58, pas: 77, def: 80 },
  },
  {
    name: 'Zeeyan ',
    role: 'Goalkeeper',
    number: 1,
    position: 'GK',
    image: zeeyan,
    overall: 81,
    crest: ffcLogo,
    stats: { pac: 44, sho: 18, pas: 70, def: 81 },
  },
  {
    name: 'Aqeeb Jr',
    role: 'Attacking Midfielder',
    number: 10,
    position: 'AM',
    image: aqeebJr,
    overall: 80,
    crest: ffcLogo,
    stats: { pac: 79, sho: 73, pas: 78, def: 42 },
  },
  {
    name: 'Umar',
    role: 'Midfielder',
    number: 8,
    position: 'CDM',
    image: umar,
    overall: 90,
    crest: ffcLogo,
    stats: { pac: 74, sho: 60, pas: 70, def: 78 },
  },
  {
    name: 'Zeeshan',
    role: 'midfielder',
    number: 11,
    position: 'CM',
    image: zee,
    overall: 84,
    crest: ffcLogo,
    stats: { pac: 85, sho: 68, pas: 68, def: 77 },
  },
  { name: 'Zain khan',

    role: 'midfielder',
    number: 9,
    position: 'CM',
    image: zain,
    overall: 90,
    crest: ffcLogo,
    stats: { pac: 65, sho: 68, pas: 86, def: 68 }
   },
  { name: 'Sohel khaan',
    role: 'Center Back',
    number: 5,
    position: 'CB',
    image: sohel,
    overall: 94,
    crest: ffcLogo,
    stats: { pac: 75, sho: 94, pas: 90, def: 95 } },


  { name: 'Suhaib',
    role: 'Right Back',
    number: 12,
    position: 'RB',
    image: suhaib,
    overall: 86,
    crest: ffcLogo,
    stats: { pac: 70, sho: 73, pas: 70, def: 77 } },

  { name: 'AFREED',
    role: 'GOAL keeper',
    number: 99,
    position: 'Gk',
    image: afreed,
    overall: 86,
    crest: ffcLogo,
    stats: { pac: 56, sho: 68, pas: 68, def: 77 } },

  { name: 'MAAZ',
    role: 'midfielder',
    number: 23,
    position: 'CM',
    image: maaz,
    overall: 96,
    crest: ffcLogo,
    stats: { pac: 75, sho: 97, pas:  92 ,def: 89 } },
    { name: 'ajwad Sid',
    role: 'midfielder',
    number: 7,
    position: 'CM',
    image: ajwad,
    overall: 96,
    crest: ffcLogo,
    stats: { pac: 70, sho: 85, pas:  85 ,def: 91 } },
    { name: 'mubasshir Ansari ',
    role: 'Striker',
    number: 9,
    position: 'ST',
    image: mubbu,
    overall: 85,
    crest: ffcLogo,
    stats: { pac: 78, sho: 70, pas:  87 ,def: 50 } },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Squad', href: '#squad' },
  { label: 'Coaches & Ground', href: '#coaches-ground' },
  { label: 'Join Us', href: '#join' },
];
