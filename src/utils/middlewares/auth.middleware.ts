import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === process.env.BEARER_TOKEN) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
