import corte from "../../public/Corte.jpeg";
import barba from "../../public/Barba.jpeg";
import limpeza from "../../public/Limpeza.jpeg";
import sombracelha from "../../public/Sobrancelhas.jpeg";
import acabamento from "../../public/Acabamento.jpeg";
import Image from "next/image";
interface Props {
  title: string;
  imgTag: string;
}

export default function CardService({ title, imgTag }: Props) {
  return (
    <div className="w-40 h-32 bg-gray-600 rounded-md flex-col flex justify-center  hover:opacity-80 cursor-pointer items-center">
      <Image src={corte} alt={`imagem ${imgTag}`} width={46} />
      <h1 className="text-center text-white">{title}</h1>
    </div>
  );
}
