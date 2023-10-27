import Image from "next/image";
import logoDom from "../../../public/logoDom.png";
import top from "../../../public/top.jpeg";
import DomPerfil from "../../../public/DomPerfil.jpeg";

import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import CardService from "@/components/CardService";
export default function Home() {
  return (
    <div className="flex h-screen flex-col sm:container sm:mx-auto items-center">
      <div className="w-full max-w-4xl max-h-40 flex items-center">
        <Image
          src={top}
          alt="Imagem barbeiro"
          className="w-full  h-72 object-fill"
        />
      </div>
      <div className=" flex items-center w-full self-start xl:w-screen justify-around">
        <Image src={logoDom} alt="Imagem barbeiro" width={150} height={150} />
        <div className="flex gap-3">
          <a
            href="https://maps.app.goo.gl/Sp99QSPHqtG9HVhcA"
            target="_blank"
            className="hover:opacity-80 w-10 h-10 bg-gray-600 mt-14 flex rounded-md justify-center items-center cursor-pointer"
          >
            <FaLocationDot color="#FFF" />
          </a>
          <a
            href="https://maps.app.goo.gl/Sp99QSPHqtG9HVhcA"
            target="_blank"
            className="hover:opacity-80 w-10 h-10 bg-gray-600 mt-14 flex rounded-md justify-center items-center cursor-pointer"
          >
            <FaInstagram color="#FFF" />
          </a>
          <a
            href="https://maps.app.goo.gl/Sp99QSPHqtG9HVhcA"
            target="_blank"
            className="hover:opacity-80 w-10 h-10 bg-gray-600 mt-14 flex rounded-md justify-center items-center cursor-pointer"
          >
            <FaFacebook color="#FFF" />
          </a>
          <a
            href="https://maps.app.goo.gl/Sp99QSPHqtG9HVhcA"
            target="_blank"
            className="hover:opacity-80 w-10 h-10 bg-gray-600 mt-14 flex rounded-md justify-center items-center cursor-pointer"
          >
            <FaWhatsapp color="#FFF" />
          </a>
        </div>
      </div>
      <h2 className="text-white text-xl flex self-start mt-8 mx-12">
        Selecione o serviço
      </h2>
      <div className="flex flex-wrap gap-4 justify-center my-10 ">
        <CardService title="Corte Mascuino" imgTag="/Corte.jpeg" />
        <CardService title="Barba Alinhada" imgTag="/Barba.jpeg" />
        <CardService title="Sombracelhas" imgTag="/Sobrancelhas.jpeg" />
        <CardService title="Limpeza de pele" imgTag="/Limpeza.jpeg" />
        <CardService title="Acabamento (cantinho)" imgTag="/Acabamento.jpeg" />
      </div>
      <h2 className="text-white text-xl flex self-start mt-8 mx-12">
        Selecione o profissional
      </h2>
      <div className="flex my-8 w-36 self-start mx-12">
        <Image
          src={DomPerfil}
          alt="Imagem do barbeiro"
          className="w-full  rounded-3xl"
        />
      </div>
    </div>
  );
}
