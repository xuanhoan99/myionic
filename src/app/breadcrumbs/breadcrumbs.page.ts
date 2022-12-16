import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
})
export class BreadcrumbsPage implements OnInit {

  constructor() { }
  maxBreadcrumbs : any = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
  ngOnInit() {
  }

}
