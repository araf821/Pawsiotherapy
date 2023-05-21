import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
  paddings?: string;
  rounded?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  paddings,
  rounded,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="updapnr1"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className={`relative flex cursor-pointer flex-col items-center
            justify-center border-2 border-dashed border-neutral-300
             text-neutral-600 transition hover:opacity-70 ${
               // Conditionally render padding for this component
               paddings
                 ? paddings
                 : "px-32 py-20 sm:px-44 sm:py-28 md:px-56 md:py-36 lg:px-80 lg:py-48"
             } `}
          >
            <TbPhotoPlus size={50} />
            {value && (
              <div className="absolute inset-0">
                <Image
                  alt="image upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  className={rounded ? "rounded-full" : ""}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};
export default ImageUpload;
