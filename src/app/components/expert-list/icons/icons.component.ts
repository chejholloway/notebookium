import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Expert } from '../../../interfaces/expert.model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  @Input() expert: Expert;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'heart-outline',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svgs/heart-outline.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'share-variant',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svgs/share-variant.svg'
      )
    );
  }

  ngOnInit() {}
}
