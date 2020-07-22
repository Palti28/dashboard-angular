import {
  Component,
  OnInit
} from '@angular/core';
import {
  SidebarRightService
} from 'src/app/layout/sidebar-right-nav/sidebar-right.service';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.scss']
})
export class PageButtonComponent implements OnInit {

  constructor(public SidebarService: SidebarRightService) {}


  ngOnInit(): void {}
  showCodeOne: boolean = false;
  showCodeTwo: boolean = false;
  showCodeBtnIconText: boolean = false;


  CodeOne = `<a href="#" class="btn btn-default "> LINK </a>
<button type="button" class="btn btn-default" disabled> DISABLED </button>
<button type="button" class="btn btn-default"> BUTTON </button>
<input type="button" class="btn btn-default " value="INPUT">
<input type="submit" class="btn btn-default" value="SUBMIT">`

  CodeTwo = `<button type="button" class="btn btn-secondary"> SECONDARY </button>
<button type="button" class="btn btn-success"> SUCCESS </button>
<button type="button" class="btn btn-info"> INFO </button>
<button type="button" class="btn btn-warning"> WARNING </button>
<button type="button" class="btn btn-danger"> DANGER </button>`

  CodeBtnIconText = `<button class="btn btn-default btn-icon borderless"> 
  <i class="far fa-bell"></i>
</button>
<button class="btn btn-default btn-icon borderless"> 
  <i class="fas fa-question"></i>
</button>	
<button type="button" class="btn btn-default"> 
	<i class="fa fa-download in-icon"></i> DOWNLOAD
</button>
<button type="button" class="btn btn-primary"> 
	<i class="fa fa-save in-icon"></i> SAVE
</button>
`

}
