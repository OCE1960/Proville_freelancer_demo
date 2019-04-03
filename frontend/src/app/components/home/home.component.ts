import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';
// import * as M from '../../../assets/js/materialize.min.js';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    ) {
      this.jquery_code();
    }

  ngOnInit() {


  }


      jquery_code() {
        $(document).ready(function() {
          $('.slider').slider();
          $('.scrollspy').scrollSpy();

        });
      }




}
