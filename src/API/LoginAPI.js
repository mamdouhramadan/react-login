import axios from 'axios';
import { Constants } from '../Constants';

const LoginAPI = async (data, setErrors, navigate, setLoading, login_user) => {
    // Show Loading  Spinner
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("access-control-allow-origin", " *");
    myHeaders.append("Content-Type", "application/json");

    var config = {
        method: 'post', // Request Method 
        url: Constants.API.Login, // Api URL
        headers: myHeaders,
        data: data,// Data to send 
    };

    axios(config)
        .then(result => {
            // console.log(result);
            setLoading(false);// Disable Loading 
            login_user(data.email);//update Redux State with User Info
            navigate('/dashboard')// Go To Dashboard 
        })
        .catch(error => {
            const error_msg = error.response.data.error;
            setErrors(error_msg);// Show Error Message
            setLoading(false)// Disable Loading 
            return;
        })


    return;
}

export default LoginAPI