import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ExpertListComponent } from './components/expert-list/expert-list.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { DecodeURIPipe } from './pipes/decode-uri.pipe';

import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import 'hammerjs';
import { AvatarComponent } from './components/expert-list/avatar/avatar.component';
import { ContentComponent } from './components/expert-list/content/content.component';
import { CoverPicComponent } from './components/expert-list/cover-pic/cover-pic.component';
import { IconsComponent } from './components/expert-list/icons/icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DecodeURIPipe,
    ExpertListComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    LoadingSpinnerComponent,
    IconsComponent,
    AvatarComponent,
    CoverPicComponent,
    ContentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    ScrollingModule,
    PlatformModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
