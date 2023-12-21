import { useDogForm } from "./dogFormContext";

const ranges = [
  { min: 0, max: 5, value: 30.0 },
  { min: 5.05, max: 10, value: 24.0 },
  { min: 10.05, max: 15, value: 20.0 },
  { min: 15.05, max: 20, value: 17.0 },
  { min: 20.05, max: 25, value: 16.0 },
  { min: 25.05, max: 30, value: 15.5 },
  { min: 30.05, max: 35, value: 15.0 },
  { min: 35.05, max: 40, value: 14.5 },
  { min: 40.05, max: 45, value: 14.1 },
  { min: 45.05, max: 50, value: 13.8 },
  { min: 50.05, max: 55, value: 13.5 },
  { min: 55.05, max: 60, value: 13.2 },
  { min: 60.05, max: 65, value: 13.0 },
  { min: 65.05, max: 70, value: 12.8 },
  { min: 70.05, max: 100, value: 12.4 },
];

function findRange(weight) {
  return ranges.find(({ min, max }) => weight >= min && weight <= max);
}

function adjustForGender(fpk, gender) {
  if (gender === "Hankøn") {
    return fpk * 1.05;
  } else if (gender === "Hunkøn") {
    return fpk * 0.95;
  }
  return fpk;
}

function adjustForSterilization(fpk, sterilized) {
  return sterilized === "Ja" ? fpk * 0.9 : fpk;
}

function adjustForBodyCondition(fpk, bodyCondition) {
  if (bodyCondition === "Undervægtig") {
    return fpk * 1.17;
  } else if (bodyCondition === "Overvægtig") {
    return fpk * 0.83;
  } else if (bodyCondition === "Normal") {
    return fpk * 1;
  }
  return fpk;
}

function adjustForActivityLevel(fpk, activityLevel) {
  const adjustmentFactors = {
    Slumretrold: 0.95,
    Aktiv: 1.03,
    "Meget aktiv": 1.05,
    Energibombe: 1.1,
  };
  return fpk * (adjustmentFactors[activityLevel] || 1);
}

function calculateFoodPerKilo() {
  const { dogData } = useDogForm();
  const range = findRange(dogData.weight);

  let fpk = range ? range.value : 0;
  console.log(fpk);

  fpk = adjustForGender(fpk, dogData.gender);

  fpk = adjustForSterilization(fpk, dogData.sterilized);

  fpk = adjustForBodyCondition(fpk, dogData.condition);

  fpk = adjustForActivityLevel(fpk, dogData.activityLevel);

  let totalDailyFood = fpk * dogData.weight;

  return totalDailyFood.toFixed(2);
}

export { calculateFoodPerKilo };
