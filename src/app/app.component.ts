import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, HostListener} from '@angular/core';
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
  screenMobileWidth = window.matchMedia("(max-width: 991.98px");
  computerScreenWidth = window.matchMedia("(min-width: 992px)");


  navItems: NavItem[] = [
    {
      headingName: 'Get Started ',
      displayName: 'DOKU Design',
      route: 'getstarted',
      iconName: 'archway',
      children:[
        {
          displayName: 'About Doku Design',
          route: 'getstarted/about',
          iconName: 'gem'
        },
        {
          displayName: 'Design',
          route: 'getstarted/design',
          iconName: 'pencil-ruler'
        },
        {
          displayName: 'Develop',
          route: 'getstarted/develop',
          iconName: 'code'
        }
      ]
    },
    {
      headingName: 'General',
      displayName: 'Dashboard',
      route: 'dashboard',
      iconName: 'compass',
    },
    {
      headingName: 'avs',
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
        },
        {
          displayName: 'Login Pages',
          route:'sample-pages/login',
          iconName: 'bars'
          
        },
        {
          displayName: 'Page Not Found',
          route:'sample-pages/page-not-found',
          iconName:'anchor'
        },
        {
          displayName: 'Login Pages',
          route:'sample-pages/login',
          iconName: 'bars'
          
        },
        {
          displayName: 'Page Not Found',
          route:'sample-pages/page-not-found',
          iconName:'anchor'
        },
        {
          displayName: 'Login Pages',
          route:'sample-pages/login',
          iconName: 'bars'
          
        },
        {
          displayName: 'Page Not Found',
          route:'sample-pages/page-not-found',
          iconName:'anchor'
        },
        {
          displayName: 'Login Pages',
          route:'sample-pages/login',
          iconName: 'bars'
          
        },
        {
          displayName: 'Page Not Found',
          route:'sample-pages/page-not-found',
          iconName:'anchor'
        },
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

  //  = false;

  // check screen size - start
  screenMobile: boolean = false;
  ngOnInit(){
    if(this.screenMobileWidth.matches){
      this.screenMobile = true
      this.asideMinimized = false
      console.log(this.screenMobile)
    }else{
      this.screenMobile = false
      console.log(this.screenMobile)
    }
  }
  // check screen size - end


  checkScreenSize(){
    if(this.screenMobileWidth.matches){
      this.screenMobile = true
      this.asideMinimized = false
      console.log(this.screenMobile)
    }else{
      this.screenMobile = false
      console.log(this.screenMobile)
    }
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
    
  
  showNavBar: boolean = false;
  show: boolean = false;
  // toggle navbar - start
  toggleNavbar(){
    if(this.showNavBar == false){
      this.showNavBar = true;
    }else{
      this.showNavBar = false
    }
  }
  // toggle navbar - end

  // toggle dropdown collapse menu - start
  showChildMenu(){
    if(this.show == false){
     this.show = true;
    }else{
      this.show = false
    }
  }
  // toggle dropdown collapse menu - end


  // toggle aside menu - start
  asideMinimized: boolean = false;
  
  toggleAside(){
    if(this.asideMinimized == true){
      this.asideMinimized = false
    } else{
      this.asideMinimized = true;
    }
  }
  // toggle aside menu - end

// handle aside toggled on hover - start
  asideMinimizedHover: boolean = false;
  hoverAside(ishover :boolean){
   if(this.asideMinimized){
     if(ishover){
       this.asideMinimizedHover = true
     }else{
       this.asideMinimizedHover = false;
     }
   }
  }
// handle aside toggled on hover - end

//add class 'asode-minimized if aside is minimized' - start
  handleAside(){
    if(this.asideMinimized == true){
      return('aside-minimized')
    }else{
      return('')
    }
  }
//add class 'asode-minimized if aside is minimized' - end


// toggle mobile navbar on mobile - start
  mobileNavbarShow: boolean = false;
  toggleAsideMobile(){
    if(this.mobileNavbarShow == false){
      this.mobileNavbarShow = true
    console.log(this.mobileNavbarShow,'toggle')
    } 
  }
// toggle mobile navbar on mobile - end

// close navbar on mobile - start
  closeNavbar(){
    this.mobileNavbarShow = false
  }
// close navbar on mobile - end

  constructor(public navService: NavService) {}

}
