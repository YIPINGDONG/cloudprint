import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router'

export default function ParamsExample (props) {
  const params = props.params;
  const responseGoogle = (response) => {
  console.log(response);
  const success = (response) => {
  console.log(response);
};

const error = (response) => {
  console.error(response);
};

const loading = () => {
  console.log('loading');
};
}
return(
	<div>
	<GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle} />
    
     <Link to="http://localhost:3000/">back to app </Link><hr/>
	</div>
  
 
  
);}