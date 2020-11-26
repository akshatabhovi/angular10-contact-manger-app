import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="text-center">
  <hr>
  <app-menu>
  <li class="nav-item footerMenu">
        <a class="nav-link" href="#">Back to Top</a>
  </li>
  </app-menu>
  <p class="redText">Copyright 2020 | Akshata</p>
  <p class="happyText">Happy coding here</p>
    </div>
  `,
  styles: [
    `.happyText{
      color:blue
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
