import { Loader } from "..";

interface Props {
  children: any;
  width?: number;
  loading?: boolean;
  [x: string]: any;
}

export default function Button(props: Props) {
  const { children, width, loading=false, ...rest } = props;

  return (
    <button
      type="button"
      className={`items-center justify-center h-14 p-3 font-semibold relative inline-block px-4 py-2 group ${width && `w-${width}`
        } ${loading && "cursor-not-allowed opacity-50"}`}
      disabled={loading}
      {...rest}
    >
      <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-accent border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-accent"></span>
      <span className="relative text-black flex flex-row justify-start gap-5 px-5 items-center">{children} {loading && <Loader size={5} />}</span>

    </button>
  );
}