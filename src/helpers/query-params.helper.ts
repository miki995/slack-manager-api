// eslint-disable-next-line @typescript-eslint/ban-types
export function serialize(obj: object): string {

  const str = [];

  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }

  return str.join('&');
}
