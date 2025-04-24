import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

async function app() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)

  app.enableCors({
    origin: config.get<string>('CLIENT_URL'),
    methods: '*',
    allowedHeaders: '*',
    credentials: true
  })

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  await app.listen(parseInt(config.get<string>('PORT')!) ?? 5000)
}

app()
