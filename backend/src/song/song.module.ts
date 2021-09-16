import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SongController } from './song.controller';
import { SongService } from './song.service';

import { SongSchema } from './song.model-and-schema';

@Module({
	imports: [ MongooseModule.forFeature([{ name: "Song", schema: SongSchema }]) ],
	controllers: [SongController],
	providers: [SongService]
})
export class SongModule {}
