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

  test(){
    var ac = document.getElementById("asd")
  }

  autoClosealert(selector, duration) {
    selector = document.getElementById(selector);
    setTimeout(() => {
      selector.style.color = 'red'
    }, duration)
  }

}
