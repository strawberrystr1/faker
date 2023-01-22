import Chooser from "random-seed-weighted-chooser";
import {
  ADD_CHARACTER_OPERATION,
  DELETE_CHARACTER_OPERATION,
  REPLACE_CHARACTER_OPERATION
} from "../constants";

const charactersToInsert: Record<string, string[]> = {
  ru: [
    "а",
    "А",
    "б",
    "Б",
    "в",
    "В",
    "г",
    "Г",
    "д",
    "Д",
    "е",
    "Е",
    "Ё",
    "ё",
    "Ж",
    "ж",
    "З",
    "з",
    "И",
    "и",
    "Й",
    "й",
    "К",
    "к",
    "л",
    "Л",
    "м",
    "М",
    "н",
    "Н",
    "о",
    "О",
    "п",
    "П",
    "р",
    "Р",
    "с",
    "С",
    "т",
    "Т",
    "у",
    "У",
    "ф",
    "Ф",
    "х",
    "Х",
    "ц",
    "Ц",
    "ч",
    "Ч",
    "ш",
    "Ш",
    "щ",
    "Щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "Э",
    "ю",
    "Ю",
    "я",
    "Я",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ],
  pl: [
    "A",
    "a",
    "Ą",
    "ą",
    "B",
    "b",
    "C",
    "c",
    "Ć",
    "ć",
    "D",
    "d",
    "E",
    "e",
    "Ę",
    "ę",
    "F",
    "f",
    "G",
    "g",
    "H",
    "h",
    "I",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "l",
    "Ł",
    "ł",
    "M",
    "m",
    "N",
    "n",
    "Ń",
    "ń",
    "O",
    "o",
    "Ó",
    "ó",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "Ś",
    "ś",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
    "Ź",
    "ź",
    "Ż",
    "ż",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ],
  en_US: [
    "a",
    "A",
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "e",
    "E",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "i",
    "I",
    "j",
    "J",
    "k",
    "K",
    "l",
    "L",
    "m",
    "M",
    "n",
    "N",
    "o",
    "O",
    "p",
    "P",
    "q",
    "Q",
    "r",
    "R",
    "s",
    "S",
    "t",
    "T",
    "u",
    "U",
    "v",
    "V",
    "w",
    "W",
    "x",
    "X",
    "y",
    "Y",
    "z",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ids: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ]
};

export const changeString = (
  string: string,
  amount: number,
  seed: number,
  locale: string
) => {
  let counts = getTotalErrorsAmount(amount, seed);
  let words = string.split(" ");
  const getNextWordIndex = getNextWord(string);
  const nextOperation = getNextOperation();

  while (counts > 0) {
    counts--;
    const currentWordIndex = getNextWordIndex();
    const operation = nextOperation(seed + counts, currentWordIndex);

    switch (operation) {
      case ADD_CHARACTER_OPERATION: {
        words[currentWordIndex] = addCharacter(
          words[currentWordIndex],
          seed + counts,
          locale
        );
        break;
      }
      case DELETE_CHARACTER_OPERATION: {
        words[currentWordIndex] = deleteCharacter(
          words[currentWordIndex],
          seed + counts
        );
        break;
      }
      default: {
        words[currentWordIndex] = replaceCharacter(
          words[currentWordIndex],
          seed + counts
        );
        break;
      }
    }
  }

  return words.join(" ");
};

const getNextOperation = () => {
  const words: Record<number, number> = {};

  return (seed: number, currentWordIndex: number) => {
    if (!words[currentWordIndex]) {
      words[currentWordIndex] = -1;
    }

    const nextOperation = Chooser.chooseWeightedIndex([0, 35, 30, 35], seed);

    if (nextOperation === REPLACE_CHARACTER_OPERATION) {
      return nextOperation;
    }
    if (
      nextOperation === ADD_CHARACTER_OPERATION &&
      words[currentWordIndex] === ADD_CHARACTER_OPERATION
    ) {
      words[currentWordIndex] = DELETE_CHARACTER_OPERATION;
      return DELETE_CHARACTER_OPERATION;
    }

    if (
      nextOperation === DELETE_CHARACTER_OPERATION &&
      words[currentWordIndex] === DELETE_CHARACTER_OPERATION
    ) {
      words[currentWordIndex] = ADD_CHARACTER_OPERATION;
      return ADD_CHARACTER_OPERATION;
    }

    words[currentWordIndex] = nextOperation;
    return nextOperation;
  };
};

const getNextWord = (initial: string) => {
  const total = initial.split(" ").length - 1;
  let current = -1;

  return () => {
    current = current + 1 > total ? 0 : current + 1;
    return current;
  };
};

const getTotalErrorsAmount = (amount: number, seed: number) => {
  if (Number.isInteger(amount)) return amount;
  else {
    const additional = Chooser.chooseWeightedIndex([50, 50], seed);
    return Math.floor(amount) + additional;
  }
};

const replaceCharacter = (str: string, seed: number) => {
  if (str.length <= 1) return str;

  const index = Chooser.chooseWeightedIndex(
    new Array(str.length - 1).fill(1),
    seed
  );

  return (
    str.slice(0, index) +
    `${str[index + 1]}${str[index]}` +
    str.slice(index + 2)
  );
};

const deleteCharacter = (str: string, seed: number) => {
  const index = Chooser.chooseWeightedIndex(
    new Array(str.length).fill(1),
    seed
  );

  const splited = str.split("");

  splited.splice(index, 1);

  return splited.join("");
};

const addCharacter = (str: string, seed: number, locale: string) => {
  const additional = charactersToInsert[locale];
  const indexToInsert = Chooser.chooseWeightedIndex(
    new Array(str.length).fill(1),
    seed
  );
  const indexOfAdditional = Chooser.chooseWeightedIndex(
    new Array(additional.length - 1).fill(1),
    seed
  );

  const splited = str.split("");

  splited.splice(indexToInsert, 0, additional[indexOfAdditional]);

  return splited.join("");
};
