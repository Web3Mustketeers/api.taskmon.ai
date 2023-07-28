import {
  Args,
  Context,
  GraphQLExecutionContext,
  Mutation,
  Resolver,
} from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //FIXME: remove
    private readonly authController: AuthController,
  ) {}

  @Mutation('signIn')
  signIn(@Args('wallet') wallet: string, @Context() ctx: GraphQLExecutionContext) {
    console.debug({ ctx })
    console.info({ wallet })
    // return this.authService.signin({ wallet }) //FIXME:
    const context = ctx.getContext()

    context.res.cookie('some-cookie', 'some-value')
    context.res.header('some-header', 'some-header')

    return this.authController.signin({ wallet }, context.res)
  }
}
