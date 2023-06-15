import { debounceTime, map, startWith, switchMap } from "rxjs/operators";
import { Observable, from, fromEvent } from "rxjs";
import countries from "./data/countries";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function findCountriesAPI(query: string): Promise<string[]> {
  await timeout(1000);
  return countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase())
  );
}

function findCountries(
  query$: Observable<string>
): Observable<string[] | null> {
  return query$.pipe(
    switchMap((query) => from(findCountriesAPI(query)).pipe(startWith(null)))
  );
}

export const useCountries = (ref: HTMLInputElement, time: number) => {
  const values = fromEvent(ref, "input").pipe(
    map((event) => (event.target as HTMLInputElement).value),
    startWith(ref.value)
  );
  return values.pipe(debounceTime(time), findCountries);
};
