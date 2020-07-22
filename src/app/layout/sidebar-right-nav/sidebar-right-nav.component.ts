import { Component, OnInit, Input } from '@angular/core';
import {SidebarItem} from './sidebar-item'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'dk-sidebar-right-nav',
  templateUrl: './sidebar-right-nav.component.html',
  styleUrls: ['./sidebar-right-nav.component.scss']
})
export class SidebarRightNavComponent implements OnInit {
  @Input() SideBaritem:SidebarItem;
  constructor(private router: Router) {
    router.events.subscribe((url:any) =>   {
      return this.currUrl = router.url
    }
    );
   }
   sectionScroll;
   internalRoute(page,dst){
     this.sectionScroll = dst;
     this.router.navigate([page], {fragment: dst});
   }

   doScroll() {

    if (!this.sectionScroll) {
      return;
    }
    try {
      var elements = document.getElementById(this.sectionScroll);

      elements.scrollIntoView();
    }
    finally{
      this.sectionScroll = null;
    }
  } 
  
  currUrl = window.location.href;
  
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll= null;
    });

  }

  

}
