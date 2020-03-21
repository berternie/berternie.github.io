import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  firstImg = 'assets/img/bert.jpg';
  secondImg = 'assets/img/ernie.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
