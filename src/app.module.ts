import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import * as Joi from 'joi'
import { CacheModule } from '@nestjs/cache-manager'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground'
import { GraphQLDateTime } from 'graphql-iso-date'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { BoardModule } from './board/board.module'
import { AppController } from './app.controller'
import { ColumnModule } from './column/column.module'
import { TaskModule } from './task/task.module'

let mode = process.env.MODE
let envFile = '.env'

switch (mode) {
  case 'test':
    envFile = '.env.test'
    process.env.NODE_ENV = 'testing'
    break
  case 'prod':
    process.env.NODE_ENV = 'production'
    envFile = '.env.prod'
    break
  default:
    mode = 'dev'
    process.env.NODE_ENV = 'development'
    envFile = '.env.local'
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [envFile, '.env'],
      isGlobal: true,
      cache: true,
      validationSchema: Joi.object({
        MODE: Joi.string().valid('dev', 'prod', 'test').default('dev'),
        PORT: Joi.number().default(1606),
        DATABASE_URL: Joi.string(),
        JWT_SECRET: Joi.string(),
        JWT_MAX_AGE: Joi.number().default(2 * 60 * 60 * 1000),
      }),
    }),
    CacheModule.register({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    AuthModule,
    BoardModule,
    ColumnModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
