import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  // event binding
  public show = false;
  public buttonName: any = 'Clik Me';
  clicked = false;
  // string interpolation related
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;

  // property binding
  averageExp = 2;

  // for ngStyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black'
  };
  // two way binding
  courseName = 'Angular';

  dataReceivedFromChildComp: string;

  // *ngIf related
  isLoggedIn = true;

  // *ngFor related
  skillLists: string[] = ['HTML', 'CSS', 'Javascript'];

  // ngSwitch
  viewMode = 'map';
  chooseValue = '';

  // if static true -- the data would be available in ngOnInit lifecycle hook
  @ViewChild(CebComponent, { static: true }) cebData: CebComponent;
  // if static false -- the data would be available in ngAfterViewInit lifecycle hook
  // @ViewChild(CebComponent, { static: false }) cebData: CebComponent;

  constructor() {
    console.log('inside Component');
  }

  ngOnInit(): void {
    console.log('inside ngOnInit');
    console.log(this.cebData);
  }

  ngAfterViewInit(): void {
    console.log('inside ngAfterViewInit');
    console.log(this.cebData);
  }

  // event binding related
  clickMeHandler(e: any): void {
    e.target.innerText = 'Clicked';
    e.target.disabled = true;

  }

  toggle(): void {
    this.show = !this.show;
    // change the name of the button.
    if (this.show) {
      this.clicked = false;
      this.buttonName = 'Clik Me';
    }
    else {
      this.clicked = true;
      this.buttonName = 'Change';
    }
  }

  ProfileLoadedHandler(e: any): void {
    alert('inside parent component');
    console.log(e);
    this.dataReceivedFromChildComp = e;
  }

  numberChange(event: any): void {
    this.chooseValue = event.target.value;
  }
}
