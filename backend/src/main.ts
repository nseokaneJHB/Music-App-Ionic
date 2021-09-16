import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const logger = new Logger('RUNNING ON');
	const port = process.env.PORT || 3000;
	const app = await NestFactory.create(AppModule, { cors: true });

	app.setGlobalPrefix('api');
	app.enableCors();

	await app.listen(port);

	logger.log(port);
}
bootstrap();
