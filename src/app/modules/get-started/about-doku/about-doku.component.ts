import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-about-doku',
  templateUrl: './about-doku.component.html',
  styleUrls: ['./about-doku.component.scss']
})
export class AboutDokuComponent implements OnInit {

  constructor(public toastS: ToastService) { }

  ngOnInit(): void {
  }

  showSuccess(text) {
    this.toastS.show(text, {
      classname: "alert alert-success alert-flag top-right",
      icon: "fa-check-circle in-icon"
    });
  }

  showDanger() {
    this.toastS.show('I am a Danger toast', {
      classname: 'alert alert-danger alert-flag top-right',
      icon: "fa-times-circle in-icon"
    });
  }

}
