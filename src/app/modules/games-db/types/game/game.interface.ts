import { Platform } from '../../../platforms/types/platform/platform.interface';

export interface Game {
  id: number;
  dateCreated: string;
  name: string;
  image: string;
  platform: Platform;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: boolean;
}
