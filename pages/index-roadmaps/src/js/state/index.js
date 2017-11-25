// About nested state and actions - https://github.com/hyperapp/hyperapp/blob/master/docs/slices.md
export const state = {
  roadmaps: [
    {
      title: 'Software engineer',
      bgSrc: 'https://source.unsplash.com/XJXWbfSo2f0/320x240',
      tags: []
    },
    {
      title: 'AI safety researcher',
      bgSrc: './dist/imgs/ais-bg-320x240.jpg',
      tags: []
    },
    {
      title: 'Welfare biologist',
      bgSrc: 'https://source.unsplash.com/XJXWbfSo2f0/320x240',
      tags: []
    },
    {
      title: 'Psychonaut',
      bgSrc: 'https://source.unsplash.com/XJXWbfSo2f0/320x240',
      tags: []
    },
    {
      title: 'Tissue engineer',
      bgSrc: 'https://source.unsplash.com/XJXWbfSo2f0/320x240',
      tags: []
    },
    {
      title: 'Applied geneticist',
      bgSrc: 'https://source.unsplash.com/XJXWbfSo2f0/320x240',
      tags: []
    },
  ],
  isDashboardMenuOpen: true,
  user: {
    type: 'individual',
    fst: 'Bulma',
    lst: 'Tomasik'
  }
};
