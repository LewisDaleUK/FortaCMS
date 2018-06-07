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
      visits: 300,
      label: 'Blog',
    },
    {
      visits: 800,
      label: 'Products'
    }
  ],
};

export default defaultStats;
