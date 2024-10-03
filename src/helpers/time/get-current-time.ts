interface GetCurrentTimeArgs {
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
}

function padZero(num: number): string {
  return `${num < 10 ? 0 : ''}${num}`;
}

export function getCurrentTime({ hours, minutes, seconds }: GetCurrentTimeArgs = {}): string {
  const now = new Date();

  const parts: string[] = [];

  if (hours) {
    const hours = padZero(now.getHours());
    parts.push(hours);
  }

  if (minutes) {
    const minutes = padZero(now.getMinutes());
    parts.push(minutes);
  }

  if (seconds) {
    const seconds = padZero(now.getSeconds());
    parts.push(seconds);
  }

  // TODO REMAKE

  // export function dateFormatter(date: Date): string {  // ! ITS ALSO RETURN TIME BUT WITHOUT FORMATTING
  //   return new Date(date).toLocaleDateString('uk-UK');
  // }

  return parts.join(':');
}
