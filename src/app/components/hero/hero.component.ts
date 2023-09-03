import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title = 'Portfolium Sr. Frontend Test';
  subtitle = 'by Che\' J. Holloway';
  constructor() {}

  ngOnInit() {}
}
