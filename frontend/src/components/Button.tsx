"use client";
interface Props {
  title: string;
}
export default function Button({ title }: Props) {
  return (
    <button
      className="py-3 rounded-xl bg-[#eed72c] text-black font-bold hover:opacity-90 max-w-xs w-full text-sm"
      onClick={() => alert("Clicou")}
    >
      {title}
    </button>
  );
}
