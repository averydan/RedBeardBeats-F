import { RegistrationComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { ReloadService } from './../../services/reload.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { SongCreateComponent } from '../song/song-create/song.create.component';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { PlaylistCollectionCreateComponent } from '../playlist-collection/pc-create/playlist-collection-create.component';
import { PlaylistCreateComponent } from '../playlist/playlist-create/playlist-create.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  logout() {
    sessionStorage.clear();
    this.authed = false;
  }

  progressBar: boolean;
  songForm: FormGroup;
  file: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  authed: any;

  dataSource: MatTableDataSource<Song>;

  constructor(private breakpointObserver: BreakpointObserver, private _reload: ReloadService, private dialog: MatDialog, private _songService: SongService, private _playlistService: PlaylistService, private _activatedRoute: ActivatedRoute) {
    if (sessionStorage.getItem('pirate_ship') !== null) {
      this.authed = true;
    }
    else {
      this.authed = false;
    }
    console.log(this.authed);
  }
  openLoginDialog() {
    const loginDialog = this.dialog.open(LoginComponent)
    loginDialog.afterClosed().subscribe(result => {
      console.log('Hit Auth Check')
      console.log(result)
      if (sessionStorage.getItem('pirate_ship') !== null) {
        this.authed = true;
      }
      else {
        this.authed = false;
      }
    })
  }
  openRegisterDialog() {
    const registerDialog = this.dialog.open(RegistrationComponent)
    registerDialog.afterClosed().subscribe(result => {
      console.log(result)
      if (sessionStorage.getItem('pirate_ship') !== null) {
        this.authed = true;
      }
      else {
        this.authed = false;
      }
    })
  }

  openSongCreate() {
    const dialogRef = this.dialog.open(SongCreateComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this._songService
          .getSongs()
          .subscribe((songs: Song[]) => {
            this.dataSource = new MatTableDataSource<Song>(songs);
          });
      }
    })
  }

  openPlaylistCreate() {
    const dialogRef = this.dialog.open(PlaylistCreateComponent)
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  openSongToPlaylistAssignment() {
    const dialogRef = this.dialog.open(PlaylistCollectionCreateComponent)
  }

}
