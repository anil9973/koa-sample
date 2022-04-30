/* import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";

const account = "statichome";
const accountKey = "xns3OZxbuz8ACLZwijwkPrIDebr+fT0VqKYeAtdkD/U6oo96YjnD0cYOPMxa6L3EcAD5aXouttQw4w4DkdP6fA==";

const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
const blobServiceClient = new BlobServiceClient(
	`https://${account}.blob.core.windows.net`,
	sharedKeyCredential
);

const containerName = "static-studio";
const containerClient = blobServiceClient.getContainerClient(containerName); */

// export const uploadBlob = async (file) => {
// 	const blobName = file.originalname;
// 	const blockBlobClient = containerClient.getBlockBlobClient(blobName);
// 	await blockBlobClient.uploadData(file.buffer);
// 	return blobName;
// };

//! for base64 to buffer
/* export const uploadTxtURL = async (text64, blobName) => {
	const blockBlobClient = containerClient.getBlockBlobClient(blobName);
	const buffer = Buffer.from(text64, "base64");

	await blockBlobClient.uploadData(buffer);
	return blobName;
}; */

/*const uploadURL = async (pdfUrl, pdfName) => {
	const blockBlobClient = pdfContainerClient.getBlockBlobClient(pdfName);
	await blockBlobClient.syncUploadFromURL(pdfUrl);
	return pdfName;
};
 */
