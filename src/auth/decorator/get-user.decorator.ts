import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GraphqlContext } from '../../app.dto'

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    if (data) return request.user[data]

    return request.user
  },
)

export const GetUserGraphql = createParamDecorator(
  (data: string | undefined, ctx: GraphqlContext) => {
    const {
      req: { user },
    } = ctx

    if (data) return user[data]

    return user
  },
)
