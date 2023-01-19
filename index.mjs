import Chooser from "random-seed-weighted-chooser";
import fs from "fs";
import path from "path";
import { faker } from '@faker-js/faker/locale/en_US'

// fetch('https://randomuser.me/api/1.4/?results=5000&nat=AU').then(res => res.json()).then(data => {
//   fs.writeFile(path.resolve('auData.txt'), JSON.stringify(Array.from(new Set(data.results.map(user => {
//     return {
//       name: user.name.first,
//       surname: user.name.last,
//       third: user.name.title,
//       address: generateAddress(user.location),
//       phone: generatePhone(user.phone),
//       id: user.id.value
//     }
//   })))), (e) => {
//   })
// }).catch(console.log)

// fs.readFile("e.txt", (e, data) => {
  // fs.readFile('rusNames.txt', (e, d) => {
    // fs.writeFile(path.resolve('rusNames.txt'), JSON.stringify(data.toString().split('\r\n')), () => {})
  // })
  // const parsed = JSON.parse(data.toString());
  // console.log('parsed: ', parsed);
  // const newArr = []
  // parsed.forEach(e => {
  //   if (!newArr.some(el => el.id === e.id)) {
  //     newArr.push(e)
  //   }
  // });
  // console.log(newArr);
// });


// const generateAddress = obj => {
//   const {
//     street,
//     city,
//     state,
//     country,
//     postcode
//   } = obj;

//   let asd = 1 - 0.5 + Math.random() * (2 - 1 + 1);

//   if (asd >= 1.8) {
//     return `${country}, ${state}, ${city}, ${street.name} ${street.number}`;
//   } else if (asd >= 1.2) {
//     return `${city} ${state}, ${street.name} ${street.number}`;
//   } else {
//     return `${country} ${city}, ${street.name} ${street.number}, ${state} ${postcode}`;
//   }
// };

const generatePhone = (phone) => {
  const nums = phone.split('').filter(e => /[0-9]/.test(e));

  let asd = 1 - 0.5 + Math.random() * 2;

  if (asd >= 1.8) {
    return `+48 (${nums.splice(0,3).join('')}) ${nums.splice(0,3).join('')}-${nums.splice(0,3).join('')}`;
  } else if (asd >= 1.2) {
    return `48-${nums.splice(0,3).join('')}-${nums.splice(0,3).join('')}-${nums.splice(0,3).join('')}`;
  } else {
    return `48 (${nums.splice(0,3).join('')}) ${nums.splice(0,3).join('')}${nums.splice(0,3).join('')}`;
  }
}

const writeToFile = (file, data) => {
  fs.writeFile(file, JSON.stringify(data), () => {});
}

const rusCities = [];


while (rusCities.length < 5000) {
  rusCities.push((faker.database.mongodbObjectId()));
}
console.log(rusCities)
writeToFile('usIds.txt', Array.from(new Set(rusCities)))