export function yearsDeclension(num) {
  const years = ['год', 'года', 'лет'];

  if (num % 100 > 10 && num % 100 < 20) return years[2];
  if (num % 10 > 1 && num % 10 < 5) return years[1];
  if (num % 10 === 1) return years[0];

  return years[2];
}