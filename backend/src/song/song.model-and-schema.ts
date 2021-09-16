import * as mongoose from 'mongoose';

export const SongSchema = new mongoose.Schema({
	created_at: { type: Date },
	updated_at: { type: Date },
    artist: { type: String },
	title: { type: String },
});

export interface Song extends mongoose.Document{
	created_at: string;
	updated_at: string;
	artist: string;
	title: string;
	id: string;
}
