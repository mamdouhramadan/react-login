import { Constants } from '../Constants'


const Validation = (data, setErrors) => {

    var validation = false;

    if (data.email === '' || data.password === '') {
        if (data.email === '' && data.password === '') {
            setErrors('Plaese Fill The Email and Password.')
            return
        }


        if (data.email === '') {
            setErrors('Plaese Fill The Email.')
            return
        }

        if (data.password === '') {
            setErrors('Plaese Fill The Password.')
            return
        }

        return;

    } else if (data.email !== '') {
        var regex = Constants.Regex.email;
        var validation_result = regex.test(data.email);
        if (!validation_result) {
            setErrors("Your Email is Not Valid ");
            return;
        }
    }
    validation = true;
    setErrors('')
    console.log(validation);
    return validation

}

export default Validation
