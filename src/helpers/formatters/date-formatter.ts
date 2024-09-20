export function dateFormatter(date: string): string {
  return new Date(date).toLocaleDateString('uk-UK');
}
