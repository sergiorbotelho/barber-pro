"use client";
import Image from "next/image";
import logoDom from "../../../public/logoDom.png";
import top from "../../../public/top.jpeg";
import DomPerfil from "../../../public/DomPerfil.jpeg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import CardService from "@/components/CardService";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Home() {
  const [radioButton, setRadioButton] = useState("");
  function handleService(e: any) {
    console.log(e.target.id);
  }
  return (
    <div className="flex h-screen flex-col items-center">
      <div className="w-full max-w-4xl max-h-40 flex items-center">
        <Image
          src={top}
          alt="Imagem barbeiro"
          className="w-full  h-72 object-fill"
        />
      </div>
      <div className=" flex items-center w-full self-start justify-around">
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
      <div className="flex flex-wrap gap-6 justify-center my-10  max-w-fit">
        <div className="flex px-10 justify-center items-center w-full ">
          <input
            type="radio"
            name="radioService"
            id="Corte"
            onChange={(e) => handleService(e)}
          />
          <CardService title="Corte Mascuino" imgTag="/Corte.jpeg" />
        </div>
        <div className="flex px-10 justify-center items-center w-full ">
          <input
            type="radio"
            name="radioService"
            id="Barba"
            onChange={(e) => handleService(e)}
          />
          <CardService title="Barba Alinhada" imgTag="/Barba.jpeg" />
        </div>
        <div className="flex px-10 justify-center items-center w-full ">
          <input
            type="radio"
            name="radioService"
            id="Sombracelhas"
            onChange={(e) => handleService(e)}
          />
          <CardService title="Sombracelhas" imgTag="/Sobrancelhas.jpeg" />
        </div>
        <div className="flex px-10 justify-center items-center w-full ">
          <input
            type="radio"
            name="radioService"
            id="Limpeza"
            onChange={(e) => handleService(e)}
          />
          <CardService title="Limpeza de pele" imgTag="/Limpeza.jpeg" />
        </div>
        <div className="flex px-10 justify-center items-center w-full">
          <input
            type="radio"
            name="radioService"
            id="Acabamento"
            onChange={(e) => handleService(e)}
          />
          <CardService
            title="Acabamento (cantinho)"
            imgTag="/Acabamento.jpeg"
          />
        </div>
      </div>
      <h2 className="text-white text-xl flex self-start mt-8 mx-12">
        Selecione o profissional
      </h2>
      <div className="flex px-10 justify-start items-center w-full mt-10 gap-6">
        <input
          type="radio"
          name="redioPerfil"
          id="Perfil"
          onChange={(e) => handleService(e)}
        />
        <Image
          src={DomPerfil}
          alt="Imagem do barbeiro"
          className="w-32 rounded-3xl"
        />
        <p className="text-white">Dom Onasis</p>
      </div>
      <h2 className="text-white text-xl flex self-start mt-8 mx-12">
        Escolha sua data e horário
      </h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          sx={{
            width: "80%",
            bgcolor: "#FFF",
            marginTop: 4,
            marginBottom: 4,
            borderRadius: 2,
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
