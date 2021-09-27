import { HOUSEHOLD } from "../../constants/localStorageVars";

export const addHouseholdMember = ({ first_name = '', last_name = '', description = '', favorite_fruit = ''}) => {
  const household = localStorage.getItem(HOUSEHOLD);
  if (household) {
    const members = JSON.parse(household);
    const id = members[members.length - 1].id + 1;
    members.push({
      id,
      first_name,
      last_name,
      description,
      favorite_fruit,
    })
    localStorage.setItem(HOUSEHOLD, JSON.stringify(members));
  }
}