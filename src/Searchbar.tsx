import { forwardRef } from "react";

export default forwardRef<HTMLInputElement>(function (_, ref) {
  return (
    <>
      <label className="block text-stone-300 text-lg font-bold max-w-[30rem]">
        <span className="">Your contry here</span>
        <input
          ref={ref}
          className="bg-stone-700 placeholder-stone-400 text-stone-200 appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none"
          type="text"
          placeholder="Argentina"
        ></input>
      </label>
    </>
  );
});
