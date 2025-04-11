import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: (configService.get('CORS_ORIGIN') as string) ?? '*',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // แปลงข้อมูลจาก string เป็นชนิดข้อมูลที่ต้องการ เช่นการแปลงเป็น object
      whitelist: true, // กำหนดให้ส่งข้อมูลที่ไม่ตรงกับ DTO ถูกกรองออก
      forbidNonWhitelisted: true, // ถ้ามีการส่งฟิลด์ที่ไม่ได้อยู่ใน DTO จะตอบกลับ error
    }),
  );
  console.log('MONGO_URI =', configService.get('MONGO_URI'));
  console.log('process.env.MONGO_URI =', process.env.MONGO_URI!);

  await app.listen(configService.get('PORT') ?? 5001);
}
bootstrap();
