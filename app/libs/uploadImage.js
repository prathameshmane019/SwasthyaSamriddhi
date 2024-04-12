
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});




export async function uploadImage(file, folder) {
  const buffer = await file.arrayBuffer()
  const bytes = Buffer.from(buffer)

  return new Promise(async (resolve, reject) => {
     await cloudinary.uploader.upload_stream({
      folder: folder,
      resource_type: "auto"
    }, async (err, result) => {
      if (err) {
        reject(err.message)
      }
      resolve(resolve)
    }
    )
      .end(bytes)
  });
}
