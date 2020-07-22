import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  ToastService
} from '../../shared/services/toast.service'

@Component({
  selector: 'app-page-toast',
  templateUrl: './page-toast.component.html',
  styleUrls: ['./page-toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageToastComponent implements OnInit {

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}

  showSuccess(text) {
    this.toastService.show(text, {
      classname: "alert alert-success alert-flag top-right",
      icon: "fa-check-circle in-icon"
    });
  }

  showDanger() {
    this.toastService.show('I am a Danger toast', {
      classname: 'alert alert-danger alert-flag top-right',
      icon: "fa-times-circle in-icon"
    });
  }

  showWarning() {
    this.toastService.show('I am a standard toast', {
      classname: 'alert-warning alert-flag'
    });
  }

  showDark() {
    this.toastService.show('I am a standard toast', {
      classname: 'alert-warning alert-flag'
    });
  }

  CodetoastService =
    `   import { Injectable, TemplateRef } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class ToastService {
  
    toasts :any[] = [];
  
    show(textOrTpl: string | TemplateRef<any>, options: any = {}){
      this.toasts.push({textOrTpl, ...options})
    }
  
    remove(toast){
      this.toasts = this.toasts.filter(t => t !== toast)
    }
  
    constructor() { }
  }`;

  Codetoastcomponentts = `  import { Component, OnInit, Input, TemplateRef } from '@angular/core';
  import {ToastService} from '../../services/toast.service'
  
  @Component({
    selector: 'dk-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    host: {'[class.ngb-toasts]': 'true'}
  })
  export class ToastComponent implements OnInit {
    @Input() type: string;
  
    constructor(public toastService: ToastService) {}
  
    isTemplate(toast){
      return toast.textOrTpl instanceof TemplateRef;
    }
  
    ngOnInit(): void {
    }
  
  }`;

  Codetoasthtmlcomponent =
    `<ngb-toast *ngFor="let toast of toastService.toasts" [class]="toast.classname" [autohide]="true"
  [delay]="toast.delay || 3000" (hide)="toastService.remove(toast)">
  <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
    <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
  </ng-template>

  <ng-template #text>
  
    <div>
      <i [class]="'fas ' + toast.icon" ></i>
    </div>
    <div>
      {{ toast.textOrTpl }}
    </div>
  </ng-template>
</ngb-toast>

//toast component
<dk-toast aria-live="polite" aria-atomic="true"></dk-toast>`;

CodetoastGlobalcomponent =
`<button class="btn btn-success" (click)="showSuccess('sukses nih gan')" ngbTooltip="Will disappear in 10s">Success toast</button>
<button class="btn btn-danger" (click)="showDanger()" ngbTooltip="Will disappear in 10s">Error toast</button>`;

CodetoastGlobalcomponentTS=
`showSuccess(text) {
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
}`
}
