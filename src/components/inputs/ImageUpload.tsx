'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (calue: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="cvzdwlpi"
      options={{
        maxFiles: 1,
        sources: ['local'],
        styles: {
          palette: {
            sourceBg: '#f4f4f5',
            windowBorder: '#90a0b3',
            tabIcon: '#555A5F',
            inactiveTabIcon: '#555a5f',
            menuIcons: '#555a5f',
            link: '#F43F5D',
            action: '#339933',
            inProgress: '#F43F5D',
            complete: '#339933',
            error: '#cc0000',
            textDark: '#000000',
            textLight: '#fcfffd',
          },
        },
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex flex-col items-center gap-4 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image src={value} alt="Upload" fill style={{ objectFit: 'cover' }} />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
