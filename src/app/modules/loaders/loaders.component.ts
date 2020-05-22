import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements OnInit {

  codeSkeletonLoading=
  `
  <div class="col-4">
  <div class="movie--isloading">
    <div class="loading-image"></div>
    <div class="loading-content">
      <div class="loading-text-container">
        <div class="loading-main-text"></div>
        <div class="loading-sub-text"></div>
      </div>
      <div class="loading-btn"></div>
    </div>
  </div>
</div>
  `
  codeCircularLoading = 
  `
  <div class="spinner-border" style="width: 5rem; height: 5rem; color: red;" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  `
  constructor() { }

  ngOnInit(): void {
  }

}
