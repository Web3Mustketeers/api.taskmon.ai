import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { Res } from '@nestjs/common'
import { Response } from 'express'

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly authController: AuthController,
  ) {}

  @Mutation('signIn')
  signIn(@Args('wallet') wallet: string, @Res() res: Response) {
    // return this.authService.signin({ wallet }) //THis works
    return this.authController.signin({ wallet }, res)
  }
}
