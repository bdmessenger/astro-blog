// Format the date to a string
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize the first letter
export const capitalize = (word: string): string => {
  if (typeof word !== 'string' || word.length === 0) return word;

  return word.charAt(0).toUpperCase() + word.slice(1);
};
