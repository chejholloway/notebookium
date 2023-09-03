import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'magnify-outline',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svgs/magnify-outline.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'compass',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svgs/compass.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'briefcase',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svgs/briefcase.svg'
      )
    );
  }

  ngOnInit() {}
}
