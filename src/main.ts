import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import helmet from "helmet";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT as string);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().then();
