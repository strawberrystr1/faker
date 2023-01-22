import { ChangeEvent, UIEvent, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { ExportToCsv } from "export-to-csv";

import RowItem from "./components/RowItem";
import { createSetOfUsers } from "./utils/randomizers";
import { ERROR_CONVERT_KOEF, INITIAL_USERS_AMOUNT, PL_LOCALE, RU_LOCALE, US_LOCALE } from "./constants";
export interface IUser {
  id: string;
  name: string;
  address: string;
  phone: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(0);
  const [seed, setSeed] = useState<number>(1);
  const [country, setCountry] = useState(US_LOCALE);
  const [users, setUsers] = useState<IUser[]>(() =>
    createSetOfUsers(
      country,
      seed + currentPage,
      INITIAL_USERS_AMOUNT,
      errors * ERROR_CONVERT_KOEF
    )
  );

  useEffect(() => {
    if (isLoading) {
      setUsers(prev => [
        ...prev,
        ...createSetOfUsers(
          country,
          seed + currentPage + users.length,
          INITIAL_USERS_AMOUNT / 2,
          errors * ERROR_CONVERT_KOEF
        )
      ]);
      setIsLoading(false);
    }
  }, [isLoading, currentPage]);

  useEffect(() => {
    setCurrentPage(2);
    setUsers(
      createSetOfUsers(
        country,
        seed + currentPage,
        INITIAL_USERS_AMOUNT,
        errors * ERROR_CONVERT_KOEF
      )
    );
  }, [country, seed, errors]);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.scrollHeight - (target.scrollTop + target.clientHeight) < 300) {
      setIsLoading(true);
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleErrorsInput =
    (type: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = +e.target.value;
      if (type === "range") {
        setErrors(value);
      } else {
        setErrors(value / ERROR_CONVERT_KOEF);
      }
    };

  const handleGenerateSeed = () => {
    const length = faker.random.numeric();
    const seed = faker.random.numeric(+length);
    setSeed(+seed);
  };

  const handleSeedInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSeed(+e.target.value);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const downloadHandler = () => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "Usees",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(JSON.stringify(users));
  };

  return (
    <div className="container mx-auto h-full py-4 flex flex-col justify-between font-semibold">
      <div className="border h-20 flex items-center justify-around divide-x rounded-xl">
        <div className="w-2/12 flex flex-col">
          <p className="self-center text-xl">Country</p>
          <select
            value={country}
            onChange={handleCountryChange}
            className="w-full border border-stone-900 rounded-md px-1.5"
          >
            <option value={RU_LOCALE}>Россия</option>
          <option value={US_LOCALE}>USA</option>
            <option value={PL_LOCALE}>Polska</option>
          </select>
        </div>
        <div className="w-5/12 flex flex-col items-center">
          <p className="text-xl">Erorrs</p>
          <div className="flex items-center w-full">
            <div className="flex w-full">
              <span className="w-10 text-right">0</span>
              <input
                type="range"
                min={0}
                max={10}
                step={0.25}
                className="w-10/12 mx-1.5"
                onChange={handleErrorsInput("range")}
                value={errors}
              />
              <span className="w-10">{errors.toFixed(2)}</span>
            </div>
            <input
              type="number"
              min={0}
              max={1000}
              step={25}
              value={errors * ERROR_CONVERT_KOEF}
              onChange={handleErrorsInput("number")}
              className="mx-6 pl-1 border border-stone-900 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center w-4/12 flex-col">
          <p className="text-xl">Seed</p>
          <div className="flex justify-between w-10/12">
            <input
              type="number"
              className="border border-stone-900 rounded-md px-1.5"
              value={seed}
              onChange={handleSeedInput}
            />
            <button
              onClick={handleGenerateSeed}
              className="border w-32 border-stone-900 rounded-md bg-teal-300"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-5/6 border-t border-b border-l">
        <div className="h-full divide-y overflow-auto" onScroll={scrollHandler}>
          {users.map((entry, i) => (
            <RowItem key={i} user={entry} number={i + 1} />
          ))}
        </div>
      </div>
      <button
        className="rounded-md w-[150px] h-[30px] border self-end bg-rose-200"
        onClick={downloadHandler}
      >
        Download as CSV
      </button>
    </div>
  );
}

export default App;
