import { Request, Response, NextFunction } from 'express';

export default function logRequest(request: Request, response: Response, next: NextFunction): any {
  const { method, url } = request;

  const log: string = `[${method.toUpperCase()}] ${url} `;

  /* eslint-disable no-console */
  console.time(log);
  next();
  console.timeEnd(log);
}
