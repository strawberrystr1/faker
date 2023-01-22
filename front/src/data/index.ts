import ruNames from "./ru/ruNames";
import ruPhones from "./ru/ruPhones";
import ruSurnames from "./ru/ruSurnames";
import ruMiddlenames from "./ru/ruMiddlenames";

import plNames from "./pl/plNames";
import plPhones from "./pl/plPhones";
import plSurnames from "./pl/plSurnames";

import usNames from "./us/usNames";
import usPhones from "./us/usPhones";
import usSurnames from "./us/usSurnames";
import usMiddlenames from "./us/usMiddlenames";

const data: Record<string, Record<string, string[]>> = {
  ru: {
    names: ruNames,
    surnames: ruSurnames,
    middlenames: ruMiddlenames,
    phones: ruPhones,
    codeRanges: ['100000', '699999']
  },
  pl: {
    names: plNames,
    phones: plPhones,
    surnames: plSurnames,
    codeRanges: ['1', '99440']
  },
  en_US: {
    names: usNames,
    phones: usPhones,
    surnames: usSurnames,
    middlenames: usMiddlenames,
    codeRanges: ['1000', '99950']
  }
};

export default data;
