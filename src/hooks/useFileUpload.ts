import { useState } from 'react';
import { filesApi } from '../api/apiClient';
import axios from 'axios';

export function useFileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setError(null);
    try {
      // 1. Get presigned URL
      const { data: presignedData } = await filesApi.filesPresignPost({
        fileName: file.name,
        contentType: file.type,
      } as any); // Casting as any because the spec might not have the request body defined yet

      if (!presignedData.uploadUrl) {
        throw new Error('No upload URL returned');
      }

      // 2. Upload to storage
      await axios.put(presignedData.uploadUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      // 3. Return the key or download URL
      return presignedData.key;
    } catch (err: any) {
      setError(err.message || 'Error uploading file');
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading, error };
}
