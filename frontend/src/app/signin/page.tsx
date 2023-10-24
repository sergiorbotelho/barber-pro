import Button from "@/components/Button";
import Image from "next/image";
import logoDom from "../../../public/logoDom.png";
import Input from "@/components/Input";
import Link from "next/link";

export default function Sigin() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-white h-screen">
      <h1 className="font-semibold text-4xl text-center italic">
        Dom Onassis Barber Shop
      </h1>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <Input label="Nome" type="text" />
        <Input label="Email" type="email" />
        <Input label="Telefone" type="text" />
        <Input label="Data Nasc." type="text" />

        <Input label="Password" type="password" />
        <Input label="Confirme" type="password" />
        <Button title="Cadastrar" />
      </div>
      <p className="text-gray-400 text-sm">
        Ja possui uma conta?{" "}
        <Link href="/login" className="text-[#eed72c] font-semibold">
          Faça o login!
        </Link>
      </p>
    </div>
  );
}
