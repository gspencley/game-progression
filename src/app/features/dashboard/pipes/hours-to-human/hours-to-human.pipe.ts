import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hoursToHuman'})
export class HoursToHumanPipe implements PipeTransform {
  public transform(hours: number, ...args: any[]): any {
    if(hours < 24) {
      return `${hours} Hours`;
    }

    return `${HoursToHumanPipe.hoursToDays(hours)} Days`;
  }

  private static hoursToDays(hours: number) {
    return (hours / 24).toFixed(1);
  }
}