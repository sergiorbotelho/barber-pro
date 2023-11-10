import Image from "next/image";
interface Props {
  title: string;
  imgTag: string;
}

export default function CardService({ title, imgTag }: Props) {
  return (
    <div className="w-full rounded-md flex justify-start  hover:opacity-80 cursor-pointer items-center ">
      <div className=" flex justify-center gap-10 px-12">
        <div>
          <Image src={imgTag} alt={`imagem ${imgTag}`} width={120} height={0} />
        </div>
        <h1 className="text-white self-center">{title}</h1>
      </div>
    </div>
  );
}
