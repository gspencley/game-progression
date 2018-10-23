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

  hasLink: boolean;
  notHasLink: boolean;

  ngOnInit(): void {
    this.notHasLink = this.hasLink === undefined;
    this.hasLink = this.hasLink !== undefined;
  }


}
