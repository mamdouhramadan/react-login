import axios from 'axios';

const LoginAPI = async (data, setErrors, navigate, setLoading, login_user) => {

    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("access-control-allow-origin", " *");
    myHeaders.append("Content-Type", "application/json");

    var config = {
        method: 'post',
        url: 'https://reqres.in/api/login',
        headers: myHeaders,
        data: data,
    };

    axios(config)
        .then(result => {
            console.log(result);
            setLoading(false);
            login_user(data.email);
            navigate('/dashboard')
        })
        .catch(error => {
            const error_msg = error.response.data.error;
            setErrors(error_msg);
            setLoading(false)
            return;
        })


    return;
}

export default LoginAPI