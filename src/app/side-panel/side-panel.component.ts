import { Component, OnInit } from '@angular/core';
import { KEYWORDS } from '../keywords';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  keywords = KEYWORDS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
