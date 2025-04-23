import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function app() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 5000)
}

app()
