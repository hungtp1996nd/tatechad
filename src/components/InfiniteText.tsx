export default function InfiniteText() {
  return (
    <div className="flex lg:gap-8 gap-2 items-center animate-loop-scroll w-full p-8 bg-black">
      {Array.from({ length: 6 }, (_, i) => (
        <span
          key={i}
          className="max-w-none uppercase text-3xl font-semibold hidden lg:block bg-black text-red-500"
        >{`-> $TATECHAD`}</span>
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <span
          key={i}
          className="max-w-none uppercase text-base font-semibold block lg:hidden bg-black text-red-500"
        >{`-> TATECHAD`}</span>
      ))}
    </div>
  );
}
