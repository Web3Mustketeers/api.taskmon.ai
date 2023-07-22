import { AuthGuard } from '@nestjs/passport'
import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthenticationError } from 'apollo-server-core'
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host'

export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super()
  }
}
@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super()
  }
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext()

    return super.canActivate(new ExecutionContextHost([req]))
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new AuthenticationError('GqlAuthGuard')
    }
    return user
  }
}
