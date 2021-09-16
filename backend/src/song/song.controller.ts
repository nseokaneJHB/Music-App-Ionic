import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('song')
export class SongController {

	constructor(private readonly __song: SongService){}

	// Get All Songs
	@Get()
	async getAllSongs(){
		return await this.__song.getAllSongsFromTheDatabase();	
	}

	// Get One Song
	@Get('/:songId')
	async getOneSong(@Param('songId') songId: string){
		return await this.__song.getOneSongFromTheDatabase(songId);
	}

	// Add A New Song
	@Post()
	async addANewSong(@Body() song: { artist: string, title: string }){
		return await this.__song.addANewSongToTheDatabase(song);
	}

	// Update One Song
	@Patch('/:songId')
	async updateOneSong(@Param('songId') songId: string, @Body() song: { artist: string, title: string }){
		return await this.__song.updateOneSongFromTheDatabase(songId, song);
	}

	// Delete One Song
	@Delete('/:songId')
	async deleteOneSong(@Param('songId') songId: string){
		return await this.__song.deleteOneSongFromTheDatabase(songId);
	}
}
