function Country({ country }: { country: string }) {
  return (
    <span className="hover:text-purple-500 hover:bg-opacity-50  text-stone-400 px-4 py-3 bg-stone-700 bg-opacity-50 rounded font-semibold text-xl transition ease-in-out duration-300">
      {country}
    </span>
  );
}

export default Country;
