import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
 
  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(`serverNameInput.value is:`, serverNameInput.value);
    console.log(`this.serverContentInput is:`, this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = 'SomethingSomething'                      YOU SHOULD NOT ACCESS THE DOM LIKE THIS !!!
    this.blueprintCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
