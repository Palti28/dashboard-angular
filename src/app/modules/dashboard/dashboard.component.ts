import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  

  };
  
  //  ac = document.getElementById("asd")

  test(){
    var ac = document.getElementById("asd")
    console.log(ac);
  }

  // selector = ng.element('#asd')
  // test() {
  //   console.log(this.selector);
  // }

  autoClosealert(selector, duration) {
    selector = document.getElementById(selector);
    setTimeout(() => {
      selector.style.color = 'red'
    }, duration)
  }

}
