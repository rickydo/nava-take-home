// // import { HOUSEHOLD } from "../../constants/localStorageVars";

// const url = 'https://2swdepm0wa.execute-api.us-east-1.amazonaws.com/prod/NavaInterview/household/members';

// export const getHouseholdMembers = async () => {
//   // const household = localStorage.getItem(HOUSEHOLD);
//   // if (household) {
//   //   return JSON.parse(household); // array of household members    
//   // }
//   // return [];

//   await Axios.get(url).then((response) => {
//     console.log('getting members=', response);

//     return response.data.members;
//   }).catch((err) => {
//     console.error('Something bad happened!', err);
//   })
// }