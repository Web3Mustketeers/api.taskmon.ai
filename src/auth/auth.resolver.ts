import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { GraphQLRequestContext } from '@apollo/server'

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //FIXME: remove
    private readonly authController: AuthController,
  ) {}

  @Mutation('signIn')
  async signIn(
    @Args('wallet') wallet: string,
    @Context() ctx: GraphQLRequestContext<GraphQLRequestContext<any>>,
  ) {
    // const { res } = ctx
    /*  res.cookie('cookieName', 'cookieValue', {
      // ...Cookie options
    })*/

    console.info({ wallet })
    // return this.authService.signin({ wallet }) //FIXME:
    /*   const context = ctx.getContext()

    context.res.cookie('some-cookie', 'some-value')
    context.res.header('some-header', 'some-header')*/

    // ctx.switchToHttp().getResponse<Response>().cookie('some-cookie', 'some-value')
    // ctx.switchToHttp().getResponse<Response>().header('some-header', 'some-header')

    const dto = await this.authService.signin({ wallet })

    return dto
  }
}
