import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ks-link',
  templateUrl: 'link.component.html',
  styleUrls: [ './link.component.scss' ]
})
export class LinkComponent implements OnInit {
  @Input()
  href: string;

  @Input()
  active: string;

  hasHref: boolean;
  notHasHref: boolean;

  ngOnInit(): void {
    this.notHasHref = this.href === undefined;
    this.hasHref    = this.href !== undefined;
  }
}
