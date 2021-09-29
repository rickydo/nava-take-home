import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import HouseholdMemberCard from '../HouseholdMemberCard';
import Axios from 'axios';

const url = 'https://2swdepm0wa.execute-api.us-east-1.amazonaws.com/prod/NavaInterview/household/members';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHouseholdMembers = async () => {
      await Axios.get(url).then((response) => {
        console.log('getting members=', response);
        setData(response.data.members);
      }).catch((err) => {
        console.error('Something bad happened!', err);
      })
      setIsLoading(false);
    }
    getHouseholdMembers();
  }, []);

  const renderHousehold = () => {
    if (isLoading) {
      return <Spinner spinnerClass="ds-c-spinner" screenReaderClass="ds-u-visibility--screen-reader" />;
    } else {
      if (data.length > 0) {
        return data.map(m => <HouseholdMemberCard key={`householdMemberCard-${m.firstName}`} first_name={m.firstName} last_name={m.lastName} description={m.description} favorite_fruit={m.favoriteFruit} />);
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
      <Link to="/householdmembers/new">
        <button type="button" className="ds-c-button ds-c-button--inverse">
          Add new member
        </button>
      </Link>
      
  </div>
  )
}

export default Home;