const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const account = "ncert";
const accountKey = "UXINqh6WVI1tPq+tmrIk2YxWrFxF4osS+wpCkeTJbCLQwf7BmEjKdsPbxZZlVkEK0w+bNM3oeKtHOoYQ5t+e/g==";

const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net`, sharedKeyCredential);

const containerName = "reflect";
const containerClient = blobServiceClient.getContainerClient(containerName);

const getBlobName = (originalName) => {
	const identifier = Math.random().toString(36).slice(2);
	return `${identifier}_${originalName}`;
};

const uploadBlob = async (file) => {
	const blobName = getBlobName(file.originalname);
	const blockBlobClient = containerClient.getBlockBlobClient(blobName);
	await blockBlobClient.uploadData(file.buffer);
	return blobName;
};

//! for base64 to buffer
const uploadTxtURL = async (text64, fileName) => {
	const blobName = getBlobName(fileName);
	const blockBlobClient = containerClient.getBlockBlobClient(blobName);
	const buffer = Buffer.from(text64, "base64");

	await blockBlobClient.uploadData(buffer);
	return blobName;
};

const uploadURL = async (pdfUrl, pdfName) => {
	const blockBlobClient = pdfContainerClient.getBlockBlobClient(pdfName);
	await blockBlobClient.syncUploadFromURL(pdfUrl);
	return pdfName;
};

module.exports = { uploadBlob, uploadTxtURL, uploadURL };
