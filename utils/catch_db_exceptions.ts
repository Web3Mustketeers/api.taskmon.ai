import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library'
import { Prisma } from '@prisma/client'
import { Response } from 'express'

@Catch(PrismaClientUnknownRequestError, PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(
    exception: Prisma.PrismaClientKnownRequestError | PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    console.error(exception.message)
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const message = exception.message.replace(/\n/g, '')

    switch (exception.code) {
      case 'P2002': {
        // const status = HttpStatus.CONFLICT
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Database Error',
          error: exception.message, // You can customize the error message based on your needs
        })
        break
      }
      default:
        // default 500 error code
        super.catch(exception, host)
        break
    }
  }
}
// https://www.prisma.io/blog/nestjs-prisma-error-handling-7D056s1kOop2
