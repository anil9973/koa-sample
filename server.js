"use strict";
const Koa = require("koa");
const multer = require("@koa/multer");
const { uploadBlob } = require("./config/azure");

const app = new Koa();

const multerMid = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 1024 * 1024,
	},
});

// app.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Origin", "*");
// 	res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS, GET,  PUT, PATCH, DELETE");
// 	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization,token-type");
// 	next();
// });

// app.use(helmet());

// app.use(hpp());

app.use(multerMid.single("image"));

app.use(async (ctx, next) => {
	if ("POST" != ctx.method) return await next();
	const image = ctx.request.file;
	const imgUrl = await uploadBlob(image);
	ctx.body = imgUrl;
});

app.listen(3000, () => console.log("node started"));
