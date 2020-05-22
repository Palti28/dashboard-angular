import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  codeButtonBasic =
  `
  <button type="button" class="btn dk-btn-primary" color="primary" mdbWavesEffect>primary</button>
  <button type="button" class="btn dk-btn-success" color="secondary" mdbWavesEffect>success</button>
  <button type="button"  class="btn dk-btn-warning" mdbWavesEffect>warning</button>
  `

  codeButtonGroup =
  `
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn dk-btn-primary">Left</button>
    <button type="button" class="btn dk-btn-primary">Middle</button>
    <button type="button" class="btn dk-btn-primary">Right</button>
  </div>
  `

  constructor() { }

  ngOnInit(): void {
  }

}
