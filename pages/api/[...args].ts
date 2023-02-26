import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'http://localhost:8000',
  // target: 'http://178.250.159.184:8000',

  pathRewrite: {
    '^/api/': '/', // remove base path
  },
});

export default proxy;
