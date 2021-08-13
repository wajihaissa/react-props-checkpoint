import React from "react";
import PropTypes from "prop-types";
function Profile({ name,age,pro }) {
  return (
    <div style={{color:"red",backgroundColor:"green"}}>
      <p>
        hello my name is {name} my bio: {age} and i am a {pro} in gmc
      </p>
      <div>
      <img src='logo192.png'/>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  pro: PropTypes.string,
};

export default Profile;
