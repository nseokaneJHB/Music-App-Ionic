import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SongService } from 'src/app/services/song.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.page.html',
	styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

	constructor(private __song: SongService, private __route: ActivatedRoute) {}

	songId: any = {};
	heading: string;

	songForm = new FormGroup({
		artist: new FormControl(''),
		title: new FormControl(''),
		id: new FormControl(''),
	})

	ngOnInit(){}

	async ionViewDidEnter(){
		this.songId = this.__route.snapshot.params;
		if (!this.songId.id) return this.heading = "New Song";
		this.heading = "Update Song";

		this.songForm.patchValue(await this.__song.getOneSong(this.songId.id));
	}

	submitSong(){
		if (!this.songForm.valid) return console.log("Error...");
		if (!this.songId.id) this.__song.addNewSong(this.songForm.value);

		this.__song.updateOneSong(this.songForm.value);
	}
}
