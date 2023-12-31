import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Injectable,
  Post,
  Res,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto'
import { Response } from 'express'
import { ConfigService } from '@nestjs/config'

@Injectable()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private config: ConfigService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() dto: AuthDto, @Res() res: Response) {
    const token = await this.authService.signin(dto)

    /*    res.cookie('user', dto.email, { //TODO:
      // Set cookie options here (e.g., expiration, domain, path, etc.)
      maxAge: 3600000, // Cookie expiration time in milliseconds (1 hour)
      httpOnly: true, // Cookie accessible only through HTTP(S) requests
      secure: true, // Cookie sent only over HTTPS if true
      signed: true,
    })*/
    // const cookies = req.cookies; //TODO: middle ware to clear the cookies when signin
    // TODO: utility function to clear and set cookie
    // for (let cookieName in cookies) {
    //   res.clearCookie(cookieName); // Replace '.your-domain.com' with your actual domain
    // }
    res.clearCookie('token')
    res.cookie('token', token.access_token, {
      maxAge: this.config.get('JWT_SECRET') * 1000 || 60 * 60 * 1000,
      secure: true,
      httpOnly: true,
      sameSite: 'none',
      // signed: true,
    })

    res.send(token)
  }
}
