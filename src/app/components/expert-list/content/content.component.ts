import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../interfaces/expert.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() expert: Expert;

  constructor() {}

  ngOnInit() {}
}
