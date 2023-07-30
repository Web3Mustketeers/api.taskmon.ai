import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly authController: AuthController,
  ) {}

  @Mutation('signIn')
  async signIn(@Args('wallet') wallet: string, @Context() ctx: any) {
    console.info({ wallet })

    // ctx.res.cookie('some-cookie', 'some-value')
    // ctx.res.header('some-header', 'some-header')

    return this.authController.signin({ wallet }, ctx.res)
  }
}
