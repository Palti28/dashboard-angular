import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  @ViewChild('iframe', {static: true}) iframe: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  // loadIframe(){
  //   console.log('test')
  // }
  showLoading: boolean = true
  loadIframe = () => {
    this.showLoading = false
  }

 
}

