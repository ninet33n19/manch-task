interface BannerProps {
  phoneNumber: string;
}

export default function Banner({ phoneNumber }: BannerProps) {
  return (
    <div className="w-full bg-black text-white py-2 px-4 border-b-4 border-[#3645FF]">
      <div className="flex items-center justify-between">
        <p className="text-sm md:text-base font-semibold">
          Need help? Talk to an expert{" "}
          <span className="whitespace-nowrap">{phoneNumber}</span>
        </p>
        <button className="text-sm md:text-base font-bold hover:underline focus:outline-none">
          SIGN OUT
        </button>
      </div>
    </div>
  );
}
