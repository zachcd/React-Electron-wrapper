import Koa from 'koa';
import websockify from 'koa-wss';

const wsOptions = {};
const app = websockify(new Koa(), weOptions);

app.ws.use(route.all('/', (ctx) => {
  ctx.websocket.on('message', function(message) {
    console.log(message);
  })
}));

app.listen(4200);
