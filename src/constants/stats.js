import { randomInt } from '../utils';

const getVisits = () => {
  let visits = [];
  const day = 86400000;
  const now = Date.now();
  const startDate = Date.now() - (day * 31);

  for(let i = startDate; i <= now; i += day) {
    visits.push({ date: new Date(i), visits: randomInt(100) });
  }

  return visits;
};

const defaultStats = {
  visits: getVisits(),
  pageShare: [
    {
      visits: 3000,
      label: 'Home'
    },
    {
      visits: 1500,
      label: 'Contact',
    },
    {
      visits: 2200,
      label: 'Blog',
    },
    {
      visits: 800,
      label: 'Products'
    },
    {
      visits: 1200,
      label: 'Portfolio'
    }
  ],
  timeSpent: [
    {
      time: 138,
      label: 'Home'
    },
    {
      time: 30,
      label: 'Contact',
    },
    {
      time: 305,
      label: 'Blog',
    },
    {
      time: 72,
      label: 'Products'
    },
    {
      time: 251,
      label: 'Portfolio'
    }
  ],
};

export default defaultStats;
