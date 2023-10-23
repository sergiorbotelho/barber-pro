import Button from "@/components/Button";
import Image from "next/image";
import logoDom from "../../../public/logoDom.png";
import Input from "@/components/Input";
import Link from "next/link";
const Login = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-white h-screen">
      <Image
        alt="Logo Dom Barber"
        src={logoDom}
        width={0}
        height={0}
        className="w-56"
      />
      <h1 className="font-semibold text-4xl text-center italic">
        Dom Onassis Barber Shop
      </h1>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <Input label="Email" />
        <Input label="Password" />
        <Button title="Entrar" />
      </div>
      <p className="text-gray-400 text-sm">
        Não possui uma conta?{" "}
        <Link href="#" className="text-[#eed72c] font-semibold">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
};

export default Login;
