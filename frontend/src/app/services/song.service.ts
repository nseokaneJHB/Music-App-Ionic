import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SongService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private __http: HttpClient, private __router: Router) {}

	url = 'http://localhost:3000/api/song';

	// Get All Songs
	async getAllSongs(){
		return await this.__http.get(`${this.url}`, this.httpOptions).toPromise();
	}

	// Get One Song
	async getOneSong(songId: string){
		return await this.__http.get(`${this.url}/${songId}`, this.httpOptions).toPromise();
	}

	// Add A New Song
	addNewSong(song: any){
		return this.__http.post(`${this.url}`, song, this.httpOptions).subscribe((res: any) => {
			this.__router.navigate(['/home']);
		}, (err: any) => {
			console.log(err);
		});
	}

	// Update One Song
	updateOneSong(song: any){
		return this.__http.patch(`${this.url}/${song.id}`, song, this.httpOptions).subscribe((res: any) => {
			this.__router.navigate(['/home']);
		}, (err: any) => {
			console.log(err);
		});
	}

	// Delete One Song
	deleteOneSong(songId: string){
		return this.__http.delete(`${this.url}/${songId}`, this.httpOptions).subscribe((res: any) => {
			location.href = '/home'	;
		}, (err: any) => {
			console.log(err);
		});
	}
}
