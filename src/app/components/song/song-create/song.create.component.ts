import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-song-create',
  templateUrl: './song.create.component.html',
  styleUrls: ['./song.create.component.css']
})
export class SongCreateComponent implements OnInit {

  progressBar: boolean;
  songForm: FormGroup;
  file: any;

  constructor(private _songService: SongService, private _form: FormBuilder, private _router: Router, private dialogRef: MatDialogRef<SongCreateComponent>) {
    this.createForm();
    this.file = [];
   }

  ngOnInit() {
    this.progressBar = false;
  }

  createForm() {
    this.songForm = this._form.group({
      SongArtist: new FormControl,
      SongTitle: new FormControl,
      SongGenre: new FormControl,
      SongLength: new FormControl,
      SongAlbum: new FormControl
    });
  }

  onFileChanged(event: any) {
    this.file = event.target.files;
    console.log(this.file)
  }

  onSubmit(){
    this.progressBar = true;
    const formData = new FormData();
    formData.append("UploadedFile", this.file[0], this.file.name);
    formData.append("SongArtist", this.songForm.value["SongArtist"]);
    formData.append("SongTitle", this.songForm.value["SongTitle"]);
    formData.append("SongGenre", this.songForm.value["SongGenre"]);
    formData.append("SongLength", this.songForm.value["SongLength"]);
    formData.append("SongAlbum", this.songForm.value["SongAlbum"]);

    console.log(formData.get("Song"))
    this._songService.createSong(formData).subscribe(data => {
      this.dialogRef.close(1);
      this._router.navigate(['/song/index']);
    });
  }
}