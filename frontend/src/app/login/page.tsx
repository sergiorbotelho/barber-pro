"use client";
import Button from "@/components/Button";
import Image from "next/image";
import logoDom from "../../../public/logoDom.png";
import Input from "@/components/Input";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
      <div className="flex flex-col gap-4 w-full justify-center items-center ">
        <Input label="Email" type="email" />
        <FormControl
          sx={{ width: "25ch" }}
          variant="filled"
          className="w-full max-w-xs"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            className="text-[12px]"
          >
            Password
          </InputLabel>
          <OutlinedInput
            className="bg-gray-100 rounded-xl w-full text-lg"
            inputProps={{
              style: {
                fontSize: 16,
              },
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button title="Entrar" />
      </div>
      <p className="text-gray-400 text-sm">
        Não possui uma conta?{" "}
        <Link href="/signin" className="text-[#eed72c] font-semibold">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
};

export default Login;
