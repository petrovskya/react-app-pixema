export const getRandomMoviesTheme = () => {
  const themes = [
    'dream',
    'art',
    'super',
    'water',
    'life',
    'good',
    'sex',
    'romantic',
    'love',
    'detective',
    'murder',
  ];
  return themes[Math.floor(Math.random() * themes.length)];
};
