import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hoursToDays'})
export class HoursToDaysPipe implements PipeTransform {
  public transform(hours: number, ...args: any[]): number {
    return (hours / 24).toFixed(1);
  }
}
