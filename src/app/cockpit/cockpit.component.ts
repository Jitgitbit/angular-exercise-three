import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
 
  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(`serverNameInput.value is:`, serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.newServerContent
    });
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.newServerContent
    });
  }
}
