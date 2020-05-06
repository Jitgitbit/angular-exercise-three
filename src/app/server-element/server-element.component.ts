import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated           // or None,  or Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  // @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static:true}) header: ElementRef;

  constructor() { 
    console.log(`constructor called!`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges called!`)
    console.log(`changes are:`, changes)
  }
  ngDoCheck(){
    console.log(`ngDoCheck called!`)
  }
  ngAfterContentInit(){
    console.log(`ngAfterContentInit called!`)
  }
  ngAfterContentChecked(){
    console.log(`ngAfterContentChecked called!`)
  }
  ngAfterViewInit(){
    console.log(`ngAfterViewInit called!`)
    console.log(`this.header.nativeElement.textContent from ngAfterViewInit is:`,this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log(`ngAfterViewChecked called!`)
  }
  ngOnDestroy(){
    console.log(`==========>> ngOnDestroy called!`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit called!`);
    console.log(`this.header.nativeElement.textContent from ngOnInit is:`,this.header.nativeElement.textContent);
  }

}
