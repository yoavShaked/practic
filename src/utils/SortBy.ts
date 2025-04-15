export const byDate = (a: string, b: string) =>
  new Date(a).getTime() - new Date(b).getTime();

export const byString = (a: string, b: string) =>
  a.toLowerCase().localeCompare(b.toLowerCase());
