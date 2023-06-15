import Searchbar from "./Searchbar"
import { useCountries } from './reactive';
import Country from "./Country";
import { useEffect, useRef, useState } from "react";

function App() {
  const searchbarRef = useRef<HTMLInputElement>(null);
  const [countries, setCountries] = useState<string[] | null>(null);
  const DEBOUCE_TIME = 500;

  useEffect(() => {
    let sub = useCountries(searchbarRef.current!, DEBOUCE_TIME).subscribe(setCountries);
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <main className="bg-stone-950 min-h-screen py-20 px-5 flex flex-col gap-8">
      <section className="container h-full mx-auto flex flex-col justify-center items-center gap-10 bg-stone-900 p-10 rounded-xl">
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <h1 className="text-5xl font-bold" >Demo!</h1>
          <span className='italic text-sm'>Look for your countries!</span>
        </div>
        <Searchbar ref={searchbarRef}/>
      </section>
      <section className="container h-full mx-auto flex flex-wrap justify-start items-center gap-5 bg-stone-900 p-10 rounded-xl ">
        {
          countries === null ? (
              <span>Loading...</span>
          ) : 
          (
            countries.map(country => (
              <Country key={country} country={country} />
            ))
          )
            
        }
      </section>
    </main>
  )
}

export default App
