import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {NavItem} from './layout/sidebar/nav-item'
import {NavService} from './layout/sidebar/nav.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements AfterViewInit{
  @ViewChild('appDrawer') appDrawer: ElementRef;
  title = 'doku-ui-framework-angular';

  navItems: NavItem[] = [
    {
      displayName: 'Components',
      route:'components',
      iconName:'ad',
      children:[
        {
          displayName: 'Buttons',
          route:'components/buttons',
          iconName: ''
        },
        {
          displayName: 'Forms',
          route:'components/forms',
          iconName: 'check'
        },
        {
          displayName: 'Child-2',
          route:'components/child2',
          iconName:'',
          children:[
            {
              displayName: 'Loader',
              route:'components/child2/loaders',
              iconName: 'check'
            },
            {
              displayName: 'Badge',
              route:'components/child2/badges',
              iconName: 'check'
            }
          ]
        }
      ]
    },
    {
      displayName:'Sample Page',
      route:'sample-pages',
      iconName:'anchor',
      children:[
        {
          displayName: 'Login Pages',
          route:'sample-pages/login',
          iconName: 'bars'
          
        },
        {
          displayName: 'Page Not Found',
          route:'sample-pages/page-not-found',
          iconName:'anchor'
        }
      ]
    }
  ]

  constructor(public navService: NavService) {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
    


  showNavBar: boolean = false;
  show: boolean = false;
  
  toggleNavbar(){
    if(this.showNavBar == false){
      this.showNavBar = true;
    }else{
      this.showNavBar = false
    }
  }
  showChildMenu(){
    if(this.show == false){
     this.show = true;
    }else{
      this.show = false
    }
  }
}
