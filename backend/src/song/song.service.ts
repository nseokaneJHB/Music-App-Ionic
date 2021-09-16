import { Injectable, Logger } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Song } from './song.model-and-schema';

@Injectable()
export class SongService {

	logger = new Logger(SongService.name);

	constructor(@InjectModel('Song') private readonly __songModel: Model<Song>){}

	// Get All Songs From The Database
	async getAllSongsFromTheDatabase(){
		try {
			return (await this.__songModel.find().sort({ title: 1 }).exec()).map((song: any) => ({ id: song.id, title: song.title, artist: song.artist, created_at: song.created_at, updated_at: song.updated_at }));
		} catch (error) {
			console.log(error);
		}
	}

	// Get One Song From The Database
	async getOneSongFromTheDatabase(songId: string){
		try {
			const song = await this.__songModel.findOne({ _id: songId })
			return { id: song.id, title: song.title, artist: song.artist, created_at: song.created_at, updated_at: song.updated_at };
		} catch (error) {
			console.log(error);
		}
	}

	// Add A New Song To The Database
	async addANewSongToTheDatabase(new_song: any){
		try {
			new_song = { ...new_song, created_at: Date.now(), updated_at: Date.now() };

			const song_model = new this.__songModel(new_song);
			await song_model.save();

			return await this.getAllSongsFromTheDatabase();
		} catch (error) {
			console.log(error);
		}
	}

	// Update One Song From The Database
	async updateOneSongFromTheDatabase(songId: string, new_song: any){
		try {
			new_song = { ...new_song, updated_at: Date.now() };

			const song = await this.__songModel.findOneAndUpdate({ _id: songId }, new_song);
			return { id: song.id, title: song.title, artist: song.artist, created_at: song.created_at, updated_at: song.updated_at };
		} catch (error) {
			console.log(error);
		}
	}

	// Delete One Song From The Database
	async deleteOneSongFromTheDatabase(songId: string){
		try {
			await this.__songModel.findOneAndDelete({ _id: songId });
			return await this.getAllSongsFromTheDatabase();
		} catch (error) {
			console.log(error);
		}
	}
}
