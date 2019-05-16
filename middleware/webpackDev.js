const koaWebpack = require('koa-webpack');
const config = require('../build/webpack.config.js');

const devMiddleware = (compiler, opts) => {
    const middleware = koaWebpack(compiler, opts);
    return async (ctx, next) => {
      await middleware(ctx.req, {
        end: (content) => {
          ctx.body = content;
        },
        setHeader: (name, value) => {
          ctx.set(name, value);
        }
      }, next);
    };
  };
  
  module.exports=devMiddleware;