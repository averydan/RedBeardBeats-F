import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/register.component';
import { SongComponent } from './components/song/song.component';
import { PlaylistCollectionIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';
import { PlaylistCollectionCreateComponent } from './components/playlist-collection/pc-create/playlist-collection-create.component'
import { PlaylistCollectionDetailComponent } from './components/playlist-collection/pc-detail/pc-detail.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { PlayControlsComponent } from './components/play-controls/play-controls.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { AuthService } from './services/auth.service';
import { PlaylistService } from './services/playlist.service';

import { AlertModule } from 'ngx-bootstrap';
import { PlaylistCollectionService } from './services/playlist-collection.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule
}
  from '@angular/material';
import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    SongComponent,
    PlaylistComponent,
    PlaylistCollectionIndexComponent,
    PlaylistCollectionCreateComponent,
    PlaylistCollectionDetailComponent,
    AdminPortalComponent,
    PlayControlsComponent,
    PlaylistIndexComponent,
    PlaylistCreateComponent,
    RegistrationComponent,
    PlaylistEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule, 
    MatTableModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
     MatSidenavModule,
    MatIconModule,
    MatListModule,
    AlertModule.forRoot(),
  ],
  providers: [
    AuthService,
    PlaylistService,
    PlaylistCollectionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
