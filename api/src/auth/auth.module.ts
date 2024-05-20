import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';

// TODO: Implement secret and token expiration in an environment file/config getter

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // secret: configService.get<string>('JWT_SECRET'),
        secret: 'supersecretpassword',
        signOptions: {
          expiresIn: parseInt('3600'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
