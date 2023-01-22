import { faker } from "@faker-js/faker";
import Chooser from "random-seed-weighted-chooser";
import MTwist from "mtwist";

import data from "../data";
import { changeString } from "./stringChanger";
import { IDS_LOCALE, DIGITS_LOCALE } from '../constants';

const getMockedData = (locale: string, seed: number, key: string) => {
  const values = data[locale][key];

  if (!values) return "";

  const rnd = new MTwist(seed);
  const index = rnd.randomIntBetween(0, values.length - 1);

  return values[index];
};

const getPostCode = (seed: number, min: number, max: number) => {
  const rnd = new MTwist(seed);
  return rnd.randomIntBetween(min, max);
};

const transformPostCode = (code: number, precision: number) => {
  return `${code}`.length < precision
    ? `${code}`.padStart(precision, "0")
    : `${code}`;
};

const getCoutryForLocale = (locale: string) => {
  const countries: Record<string, string> = {
    ru: "Россия",
    pl: "Poland",
    en_US: "USA"
  };

  return countries[locale];
};

const shuffleAddress = (
  address: ReturnType<typeof createAddress>,
  seed: number,
  locale: string
) => {
  const rnd = Chooser.chooseWeightedIndex([1, 1, 1], seed);
  const { country, city, street, state, zipCode, building, flat } = address;

  const localeSpecificData: Record<string, Record<string, string>> = {
    ru: {
      flat: "кв.",
      house: "д."
    },
    pl: {
      flat: "m.",
      house: "d.",
      state: "Województwo"
    },
    en_US: {
      flat: "fl.",
      house: "h."
    }
  };

  const additionalItems = localeSpecificData[locale];

  if (rnd === 2) {
    return `${country}, ${
      additionalItems.state ?? ""
    } ${state}, ${city}, ${street} ${additionalItems.house}${building} ${
      additionalItems.flat
    }${flat}, ${zipCode}`;
  } else if (rnd === 1) {
    return `${city} ${additionalItems.state ?? ""} ${state}, ${street} ${
      additionalItems.house
    }${building}, ${zipCode}`;
  } else {
    return `${country} ${city}, ${street} ${
      additionalItems.house
    }${building}/${flat}, ${additionalItems.state ?? ""} ${state} ${zipCode}`;
  }
};

const createAddress = (locale: string, seed: number) => {
  const [min, max] = data[locale].codeRanges;

  return {
    city: faker.address.cityName(),
    street: faker.address.street(),
    state: faker.address.state(),
    country: getCoutryForLocale(locale),
    zipCode: transformPostCode(getPostCode(seed, +min, +max), max.length),
    building: faker.address.buildingNumber(),
    flat: faker.datatype.number()
  };
};

const createName = (locale: string, seed: number) => {
  const name = getMockedData(locale, seed, "names");
  const surname = getMockedData(locale, seed, "surnames");
  const middlename = getMockedData(locale, seed, "middlenames");

  return `${name} ${middlename} ${surname}`;
};

const createUser = (locale: string, seed: number, errors: number) => {
  faker.setLocale(locale);
  faker.seed(seed);

  const name = createName(locale, seed);
  const phone = getMockedData(locale, seed, "phones");
  const address = shuffleAddress(createAddress(locale, seed), seed, locale);
  const id = faker.database.mongodbObjectId();

  return {
    name: changeString(name, errors, seed + name.length, locale),
    address: changeString(address, errors, seed + address.length, locale),
    phone: changeString(phone, errors, seed + phone.length, DIGITS_LOCALE),
    id: changeString(id, errors, seed + id.length, IDS_LOCALE)
  };
};

export const createSetOfUsers = (
  locale: string,
  seed: number,
  amount: number,
  errors: number
) => {
  return new Array(amount)
    .fill(1)
    .map((el, i) =>
      createUser(
        locale,
        seed + i + 1,
        errors
      )
    );
};
