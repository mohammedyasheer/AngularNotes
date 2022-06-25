import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  serverName = ''
  serverStatus = false
  constructor() { }

  ngOnInit(): void {
  }

  onClicked() {
    this.serverStatus = !this.serverStatus
  }

  onUpdate(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
  }

}
