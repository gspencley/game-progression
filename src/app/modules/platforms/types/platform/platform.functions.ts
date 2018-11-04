import { Platform } from './platform.interface';

export function getPlatformById(id: number, platforms: Platform[]): Platform {
  if(platforms.length) {
    const filtered = platforms.filter(platform => platform.id === id);
    if(filtered.length === 0) {
      return null;
    }
    return filtered[0];
  }

  return null;
}
