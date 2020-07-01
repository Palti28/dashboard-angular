import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: '',
  },{
    type: 'info',
    message: ''
  },{
    type: 'danger',
    message: ''
  },{
    type: 'success',
    message: ''
  }
]


@Component({
  selector: 'dk-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {
  showAlert: boolean = true
  constructor() { }
  alerts: Alert[];
  ngOnInit(): void {
  }
  setClasses(alert){
    return 'alert-'+alert
  }

  close(){
    
  }

}
