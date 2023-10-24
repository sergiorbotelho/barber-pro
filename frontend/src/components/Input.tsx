"use client";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

interface Props {
  label: string;
  type: string;
}

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 18,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: 0,
    },
  },
}));

export default function Input({ label, type }: Props) {
  return (
    <RedditTextField
      type={type}
      id="outlined-basic"
      label={label}
      variant="filled"
      className="bg-white rounded-xl w-full max-w-xs"
    />
  );
}
