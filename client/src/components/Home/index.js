import { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import HouseholdMemberCard from '../HouseholdMemberCard';
import { getHouseholdMembers } from './helpers';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getHouseholdMembers());
    setIsLoading(false);
  }, []);

  const renderHousehold = () => {
    if (isLoading) {
      return <Spinner spinnerClass="ds-c-spinner" screenReaderClass="ds-u-visibility--screen-reader" />;
    } else {
      if (data.length > 0) {
        return data.map(m => <HouseholdMemberCard key={`householdMemberCard-${m.id}`} id={m.id} first_name={m.first_name} last_name={m.last_name} description={m.description} favorite_fruit={m.favorite_fruit} />);
      } else {
        <h4>No members in the household</h4>;
      }
    }
  }
  

  return (
    <div className="ds-u-padding--4">
      <h3 className="ds-u-font-size--3xl ds-u-font-weight--bold">Your household</h3>
      <p className="ds-u-font-size--xl">Welcome to The Marketplace! Review your household below:</p>
      <div className="ds-u-display--flex ds-u-flex-direction--row ds-u-padding--1 ds-u-flex-wrap--wrap">
        {
          renderHousehold()
        }
        </div>
      <button type="button" className="ds-c-button ds-c-button--inverse">
        Add new member
      </button>
  </div>
  )
}

export default Home;