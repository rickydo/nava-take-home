import { getFullName } from "./helpers";
import './index.scss';

const HouseholdMemberCard = ({ id, first_name, last_name, description, favorite_fruit }) => {
  return <article className="card ds-u-radius ds-u-padding--2 ds-u-border--1 ds-u-margin--1">
    <p className="ds-u-font-size--2xl ds-u-leading--lead">{getFullName(first_name, last_name )}</p>
    <p><label className="ds-u-font-weight--bold">Description: </label>{description}</p>
    <p><label className="ds-u-font-weight--bold">Favorite fruit: </label>{favorite_fruit}</p>
  </article>
}

export default HouseholdMemberCard;