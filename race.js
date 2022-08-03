let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let age = 17;

if (age >= 18 && earlyRegistration === true) {
  raceNumber += 1000;
};

if (age > 18 && earlyRegistration === true) {
  console.log(`You will race @ 9:30; your race number will be ${raceNumber}`)
} else if (age > 18 && earlyRegistration === false) {
  console.log(`You will race @ 11:00; your race number will be ${raceNumber}`)
} else {
  console.log(`You will race @ 12:30; your race number will be ${raceNumber}`)
}

