import { Constants } from '../Constants'


const Validation = (data, setErrors) => {

    var validation = false;
    // Check email and Password if empty
    if (data.email === '' || data.password === '') {

        // 1- if 2 fields are empty
        if (data.email === '' && data.password === '') {
            // Show Error Message 
            setErrors('Plaese Fill The Email and Password.')
            return
        }

        // 2- If Email Empty
        if (data.email === '') {
            // Show Error Message 
            setErrors('Plaese Fill The Email.')
            return
        }

        // 3- If Password Empty
        if (data.password === '') {
            // Show Error Message 
            setErrors('Plaese Fill The Password.')
            return
        }

        return;

    }
    // Check If Email is Not empty
    else if (data.email !== '') {
        // Check if is the email is in valid format
        var regex = Constants.Regex.email;
        var validation_result = regex.test(data.email);
        if (!validation_result) {
            // if not valid show Error Message
            setErrors("Your Email is Not Valid ");
            return;
        }
    }
    
    // If Email and password are set
    // Make form Valid 
    validation = true;
    // Reser Error Message
    setErrors('')
    return validation

}

export default Validation
