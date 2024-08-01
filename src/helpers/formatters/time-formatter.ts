export function timeFormatter(date: Date): string {
  return new Date(date).toLocaleTimeString('uk-UK').slice(0, 5);
}
