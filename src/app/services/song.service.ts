import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../models/Song';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  constructor(private _http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token_token')}`);
  }
  getSongs() {
    return this._http.get(`${environment.serverUrl}/Song`, { headers: this.getHeaders() });
  }
  getSongById(id:string){
    return this._http.get(`${environment.serverUrl}/Song/${id}`, { headers: this.getHeaders() });
  }
  createSong(song: FormData) {
    return this._http.post(`${environment.serverUrl}/Song`, song, { headers: this.getHeaders()});
  }
  updateSong(song: Song){
    return this._http.put(`${environment.serverUrl}/Song`, song, { headers: this.getHeaders() });
  }
  deleteSong(id: number) {
    return this._http.delete(`${environment.serverUrl}/Song/${id}`, { headers: this.getHeaders() });
  }
}