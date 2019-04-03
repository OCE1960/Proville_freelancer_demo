import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public _archives: any = [];
  public viewMenu;
  public year = new Date().getFullYear();

  constructor(

    private sanitizer: DomSanitizer,
    private router: Router,
     private route: ActivatedRoute,
    ) {
    }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const menu = params.get('menu');
      this.viewMenu = menu;
      });
  }



}
