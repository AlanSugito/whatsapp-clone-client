import { IconedButton } from "../atoms";
import { FC, useRef } from "react";
import { twMerge } from "tailwind-merge";
import avatar from "../../assets/avatar.png";

interface InputPictureProps extends React.HTMLAttributes<HTMLInputElement> {}

const InputPicture: FC<InputPictureProps> = ({ className, ...props }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const file = files[0] as Blob;
    const newImageUrl = URL.createObjectURL(file);
    imageRef.current?.setAttribute("src", newImageUrl);
  };

  return (
    <>
      <div className={twMerge("relative", className)}>
        <div className="overflow-hidden rounded-full w-[100px] h-[100px] border-2 border-green-500">
          <img src={avatar} alt="..." ref={imageRef} />
        </div>
        <IconedButton
          className="rounded-full absolute w-10 h-10  -bottom-2"
          icon="ri-camera-line"
        >
          <input
            type="file"
            className="absolute opacity-0 w-full"
            onInput={handleInput}
            {...props}
          />
        </IconedButton>
      </div>
    </>
  );
};

export default InputPicture;
