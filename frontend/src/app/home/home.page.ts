import { Component, OnInit } from '@angular/core';

import { SongService } from '../services/song.service';

import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	songsList: any = [];

	constructor(private __song: SongService, private __alert: AlertController) {}

	ngOnInit(): void {}

	async ionViewDidEnter(){
		this.songsList = await this.__song.getAllSongs();
	}
	
	async deleteOneSong(song: any) {
		const alert = await this.__alert.create({
			cssClass: 'custom__modal',
			header: `Delete Song`,
			message: `Are you sure you want to delete ${song.title} by ${song.artist}?`,
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				}, {
					text: 'Confirm',
					role: 'confirm',
					cssClass: 'danger',
					handler: () => {
						this.__song.deleteOneSong(song.id);
					}
				}
			]
		});

		await alert.present();
	}
}