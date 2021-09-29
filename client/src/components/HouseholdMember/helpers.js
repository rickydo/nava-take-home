// // import { HOUSEHOLD } from "../../constants/localStorageVars";
// import Axios from 'axios';

// const url = 'https://2swdepm0wa.execute-api.us-east-1.amazonaws.com/prod/NavaInterview/household/members/new';

// export const addHouseholdMember = ({ first_name = '', last_name = '', description = '', favorite_fruit = ''}) => {
//   // const household = localStorage.getItem(HOUSEHOLD);
//   // if (household) {
//   //   const members = JSON.parse(household);
//   //   const id = members[members.length - 1].id + 1;
//   //   members.push({
//   //     id,
//   //     first_name,
//   //     last_name,
//   //     description,
//   //     favorite_fruit,
//   //   })
//   //   localStorage.setItem(HOUSEHOLD, JSON.stringify(members));
//   // }
//   Axios.post(url, {
//     firstName: first_name,
//     lastName: last_name,
//     description,
//     favoriteFruit: favorite_fruit,
//   }).then(res => {
//     console.log('Success!', res);
//   })
//     .catch((err) => {
//     console.error('Could not create new household member', err)
//   });
// }