import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('PizzaWay')
        .setDescription('PizzaWay docs')
        .setVersion('1.0')
        .addTag('PizzaWay')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    const port = process.env.PORT;
    app.enableCors({
        origin: true,
        credentials: true,
        exposedHeaders: 'Set-Cookie',
    });
    await app.listen(port, () => console.log(`Server started on ${port}`));
}
bootstrap();
