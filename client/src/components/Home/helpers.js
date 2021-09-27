import { HOUSEHOLD } from "../../constants/localStorageVars";

export const getHouseholdMembers = () => {
  const household = localStorage.getItem(HOUSEHOLD);
  if (household) {
    return JSON.parse(household); // array of household members    
  }
  return [];
}