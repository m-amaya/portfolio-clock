import type { NextApiRequest, NextApiResponse } from 'next';

interface ResData {
  message: string;
}

export default (req: NextApiResponse<{}>, res: NextApiResponse<ResData>) => {
  res.status(200).json({ message: 'Hello World!' });
};
