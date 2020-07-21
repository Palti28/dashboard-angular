import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code=`import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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
  
  }
  
  
  `

}
