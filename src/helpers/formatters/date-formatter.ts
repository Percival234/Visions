export function dateFormatter(date: Date): string {
  return new Date(date).toLocaleDateString('uk-UK');
}
