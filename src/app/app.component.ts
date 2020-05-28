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
        // {
        //   displayName: 'Child-2',
        //   route:'components/child2',
        //   iconName:'',
        //   children:[
        //     {
        //       displayName: 'Loader',
        //       route:'components/child2/loaders',
        //       iconName: 'check'
        //     },
        //     {
        //       displayName: 'Badge',
        //       route:'components/child2/badges',
        //       iconName: 'check'
        //     }
        //   ]
        // }
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

  //  = false;
  screenMobile: boolean = false;
  ngOnInit(){
    if(this.screenMobileWidth.matches){
      this.screenMobile = true
      this.asideMinimized = false
      console.log(this.screenMobile)
    }else{
      this.screenMobile = false
      console.log('tidak')
      console.log(this.screenMobile)

    }
  }

  checkScreenSize(){
    if(this.screenMobileWidth.matches){
      this.screenMobile = true
      this.asideMinimized = false
      console.log(this.screenMobile)
    }else{
      this.screenMobile = false
      console.log('tidak')
      console.log(this.screenMobile)

    }
  }



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

  asideMinimized: boolean = false;

  toggleAside(){
    if(this.asideMinimized == true){
      this.asideMinimized = false
    } else{
      this.asideMinimized = true;
    }
    // window.alert('bisa')
  }

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

  handleAside(){
    if(this.asideMinimized == true){
      return('aside-minimized')
    }else{
      return('')

    }
  }

  mobileNavbarShow: boolean = false;
  toggleAsideMobile(){
    if(this.mobileNavbarShow == false){
      this.mobileNavbarShow = true
    console.log(this.mobileNavbarShow,'toggle')
    }
    
  }

  closeNavbar(){
    this.mobileNavbarShow = false
  }

  // @ViewChild("dk_aside") dkAside: ElementRef;
  // @HostListener('document:click', ['$event'])
  // clickOutside(){
  //   console.log('jalanni')
  //   if(this.screenMobile == true){
  //     console.log('mobile view')
  //     if(!this.dkAside.nativeElement.contains(event.target)){
  //       console.log('click di luar')
  //       if(this.mobileNavbarShow==true){
  //         console.log('close navbar')
  //         this.mobileNavbarShow = false

  //       }else{
  //         this.mobileNavbarShow = true;
  //       }
  //     }else{
  //       console.log('click di dalam')
  //     }
  //   }else{
  //     return false
  //   }
    
  // }

  constructor(public navService: NavService) {}

}
