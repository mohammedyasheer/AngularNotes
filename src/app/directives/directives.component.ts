import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  serverName: string  = ''
  showServerName =false
  serverStatus = ''
  list = ['test', 'test2'];
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showServerName = !this.showServerName
    this.list.push(this.serverName);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
