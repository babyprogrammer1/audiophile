import serverless from "serverless-http";
import { createServer } from "../server/index";

const app = createServer();
const handler = serverless(app);

export const config = {
  api: {
    // Disable Vercel's default body parser when you need raw bodies
    bodyParser: false,
  },
};

export default async function (req: any, res: any) {
  return handler(req, res);
}
