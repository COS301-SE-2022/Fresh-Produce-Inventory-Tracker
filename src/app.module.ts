import { Module } from '@nestjs/common';
import { AuthenticationModule } from './libs/authentication/authentication.module';
import { ImagesModule } from './libs/images/images.module';
import { ProduceModule } from './libs/produce/produce.module';
import { ScaleModule } from './libs/scale/scale.module';
import { UserModule } from './libs/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MulterModule } from '@nestjs/platform-express';



@Module({
  imports: [AuthenticationModule,UserModule,ImagesModule,ProduceModule,ScaleModule,
    MulterModule.register({dest:'./files'})
    /*GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }), */],
  controllers: [],
  providers: [],
})
export class AppModule {}
