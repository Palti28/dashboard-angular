import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SidebarRightService {

  goToSection = (link : string) => {
    console.log('testini')
  }  

}
