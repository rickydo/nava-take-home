import { HOUSEHOLD, MEMBERS } from "./constants/localStorageVars";

const seedHousehold = () => {
  console.log('household=', HOUSEHOLD)
  const household = localStorage.getItem(HOUSEHOLD);
  console.log('my household=', household)
  if (!household || (household && JSON.parse(household).length < 1)) {
    console.log('No members in household found. Populating Do household...')
    localStorage.setItem(HOUSEHOLD, JSON.stringify(MEMBERS));
    console.log('Populating household completed.');
  }
}

export default seedHousehold;