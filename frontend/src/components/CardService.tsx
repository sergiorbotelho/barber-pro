import Image from "next/image";
interface Props {
  title: string;
  imgTag: string;
}

export default function CardService({ title, imgTag }: Props) {
  return (
    <div className="w-40 h-32 bg-gray-600 rounded-md flex-col flex justify-center  hover:opacity-80 cursor-pointer items-center relative">
      <div className=" w-full flex justify-center">
        <Image
          src={imgTag}
          alt={`imagem ${imgTag}`}
          width={100}
          height={0}
          className="w-20 relative"
        />
      </div>
      <h1 className="text-center text-white">{title}</h1>
    </div>
  );
}
