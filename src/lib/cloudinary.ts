import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file: string | Blob): Promise<string> => {
  try {
    // For file upload implementation in API routes
    const result = await cloudinary.uploader.upload(
      typeof file === 'string' ? file : URL.createObjectURL(file),
      {
        folder: 'coinband-blog',
        transformation: [{ quality: 'auto:good' }],
      }
    );
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw new Error('Failed to upload image');
  }
};

export default cloudinary;
