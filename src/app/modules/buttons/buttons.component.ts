import { Component, OnInit, ViewEncapsulation,Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NavService } from 'src/app/layout/sidebar/nav.service';

import {ToastService} from '../../shared/services/toast.service'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ButtonsComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  showAlert: boolean = true;
  show = false;
  showToast = false;
  autohide = true;
 
  constructor(public NavService: NavService, public toastService : ToastService) {}
  
  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
  }

  //table
  
  //alert
  closeAlert(){
    this.showAlert = !this.showAlert
  }

  //toast alert
  showSuccess(text) {
    this.toastService.show(text, {classname: "alert alert-success alert-flag top-right", icon: "fa-check-circle in-icon"});
  }

  showDanger() {
    this.toastService.show('I am a Danger toast', {classname: 'alert alert-danger alert-flag top-right', icon: "fa-times-circle in-icon"});
  }

  showWarning(){
    this.toastService.show('I am a standard toast', {classname: 'alert-warning alert-flag'});
  }

  showDark(){
    this.toastService.show('I am a standard toast', {classname: 'alert-warning alert-flag'});
  }

}
