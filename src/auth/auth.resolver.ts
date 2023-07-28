import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { Res } from '@nestjs/common'
import { Response } from 'express'

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //FIXME: remove
    private readonly authController: AuthController,
  ) {}

  @Mutation('signIn')
  signIn(@Args('wallet') wallet: string, @Res() res: Response) {
    console.debug({ res })
    console.info({ wallet })
    // return this.authService.signin({ wallet }) //FIXME:
    // return this.authController.signin({ wallet }, res)
  }
}
