import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { BackendAuthModule } from '@backend/backend/auth';
import { BackendUsersModule } from '@backend/backend/users';
import { BackendSocialModule } from '@backend/backend/social';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        ssl: {
          rejectUnauthorized: false,
        },

        synchronize: process.env.NODE_ENV === 'development',
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
    BackendAuthModule,
    BackendUsersModule,
    BackendSocialModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class BackendCoreModule {}
