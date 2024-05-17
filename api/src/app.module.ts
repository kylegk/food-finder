import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { VendorModule } from './vendor/vendor.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, VendorModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
