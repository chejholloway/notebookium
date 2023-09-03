import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../interfaces/expert.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() expert: Expert;

  constructor() {}

  ngOnInit() {}
}
