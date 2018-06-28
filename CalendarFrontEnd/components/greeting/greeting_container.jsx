import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    currentUser: Object.values(state.entities.users)[0]
  };
};

const Greeting = ({ currentUser }) => {
  const { first_name, last_name } = currentUser
  return (
    <div>
      { `Bootstrapped User: ${first_name} ${last_name}` }
    </div>
  )
};

export default connect(mapStateToProps)(Greeting);
