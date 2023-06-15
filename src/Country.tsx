function Country({country}: {country: string}) {
    return ( 
        <span className="hover:text-violet-500 px-3 py-1 bg-stone-950 bg-opacity-50 rounded-full font-semibold text-xl transition ease-in-out duration-300">{country}</span>
     );
}

export default Country;