import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../interfaces/expert.model';
import { DecodeURIPipe } from '../../../pipes/decode-uri.pipe';

@Component({
  selector: 'app-cover-pic',
  templateUrl: './cover-pic.component.html',
  styleUrls: ['./cover-pic.component.css']
})
export class CoverPicComponent implements OnInit {
  @Input() expert: Expert;

  constructor() {}

  ngOnInit() {}
}
