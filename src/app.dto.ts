import { Request, Response } from 'express'

export class GraphqlContext {
  req: Request
  res: Response
}
