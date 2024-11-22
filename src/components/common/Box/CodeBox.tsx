interface CodeBoxProps extends BaseProps {
  code: string;
}

export const CodeBox = ({ code }: CodeBoxProps) => {
  return (
    <div className="px-32 py-5 rounded-lg flex flex-row bg-gray-50 border gap-10 border-slate-200 justify-center items-center">
      {code.split('').map((char, idx) => (
        <span className="text-6xl font-bold">{char}</span>
      ))}
    </div>
  );
};
