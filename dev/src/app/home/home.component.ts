import { Component, OnInit } from '@angular/core';
import { KEYWORDS } from '../keywords';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keywords = KEYWORDS;
  constructor() { }

  ngOnInit(): void {
  }

}
