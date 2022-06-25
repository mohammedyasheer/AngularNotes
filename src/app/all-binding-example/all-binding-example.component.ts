import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-binding-example',
  templateUrl: './all-binding-example.component.html',
  styleUrls: ['./all-binding-example.component.css']
})
export class AllBindingExampleComponent implements OnInit {
  serverName = ''
  isDisabled= true
  serverNameCLA = ''
  constructor() {

    setTimeout( () => {
      this.isDisabled = false
    }, 2000)
  }

  ngOnInit(): void {
  }


  onClick() {
    this.serverNameCLA = this.serverName
  }

}
