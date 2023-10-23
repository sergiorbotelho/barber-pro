import TextFiled from "@mui/material/TextField";

interface Props {
  label: string;
}

export default function Input({ label }: Props) {
  return (
    <TextFiled
      id="outlined-basic"
      label={label}
      variant="outlined"
      className="bg-white rounded-xl w-full max-w-xs"
    />
  );
}
