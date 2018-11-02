import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ks-link',
  templateUrl: 'link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input()
  public href: string;

  @Input()
  public active: string;

  public hasHref: boolean;
  public notHasHref: boolean;

  public ngOnInit(): void {
    this.notHasHref = this.href === undefined;
    this.hasHref = this.href !== undefined;
  }
}
