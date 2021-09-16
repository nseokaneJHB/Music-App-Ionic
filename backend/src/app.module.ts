import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongModule } from './song/song.module';

@Module({
	imports: [MongooseModule.forRoot('mongodb://localhost:27017/SONGS_DB', { autoCreate: true }), SongModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
