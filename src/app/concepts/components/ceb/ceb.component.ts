import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
  @Output() profileLoaded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onLoadProfile(e): void {
    e.target.innerText = 'Loading Profile...';
    setTimeout(() => {
      console.log('Data sent to Parent Component is :Akshata');
      e.target.innerText = 'Loading Profile...';
      this.profileLoaded.emit('Akshata');
    }, 5000);

  }

}
