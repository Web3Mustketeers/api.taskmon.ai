import { AuthGuard } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

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
}
