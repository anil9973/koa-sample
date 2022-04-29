import Koa from "koa";
import multer from "@koa/multer";
import { uploadBlob } from "./config/azure.js";

const app = new Koa();

const multerMid = multer({
	limits: {
		fileSize: 1024 * 1024,
	},
});

app.use(async (ctx, next) => {
	ctx.method != "POST" && ctx.throw(403, "forbidden request");
	/* 	const token = ctx.cookies.get("TIDE");
	token ?? ctx.throw(401, "Not Authenticated");

	let decodedToken;

	try {
		decodedToken = jwt.verify(token, process.env.JWT_SECRET);
	} catch (error) {
		error.statusCode = 500;
		throw error;
	}
	if (!decodedToken) ctx.throw(401, "Not Authenticated"); */

	await next();
});

app.use(multerMid.single("image"));
const EXT_ID = "chrome-extension://pojmlllkhfjlhaagafkbfclmbhjknppp";

app.use(async (ctx, next) => {
	//check origin
	const origin = ctx.headers.origin;
	if (!origin || origin != EXT_ID) ctx.throw(403, "forbidden request");

	//get image
	const image = ctx.request.file;
	if (!image) ctx.throw(400, "image required");

	//upload image to azure
	const imgUrl = await uploadBlob(image);
	ctx.body = imgUrl;
});

app.listen(2000, () => console.log("node started"));
