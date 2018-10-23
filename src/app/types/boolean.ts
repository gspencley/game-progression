export function Boolean(value: any) {
  return value != null && `${value}` !== 'false';
}