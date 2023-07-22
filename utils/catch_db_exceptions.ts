import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library'

@Catch(PrismaClientUnknownRequestError, PrismaClientKnownRequestError)
export class DbExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (this.isDatabaseError(exception)) {
      const response = host.switchToHttp().getResponse()
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Database Error',
        error: exception.message, // You can customize the error message based on your needs
      })
    } else {
      super.catch(exception, host)
    }
  }

  private isDatabaseError(exception: any): boolean {
    return (
      exception instanceof PrismaClientKnownRequestError ||
      exception instanceof PrismaClientUnknownRequestError ||
      true //FIXME
    )
  }
}
