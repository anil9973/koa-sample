import Koa from "koa";
// import { uploadTxtURL } from "./config/azure.js";

const app = new Koa();

app.use(async (ctx, next) => {
	ctx.body = { pong: "it worked" };
});

app.listen(8080, () => console.log("node started"));
