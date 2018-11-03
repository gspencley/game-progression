export function Integer(value: number|string) {
  return typeof value === 'string' ? Number.parseInt(value as string) : value;
}