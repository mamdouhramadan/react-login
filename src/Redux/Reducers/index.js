import { Constants } from "../../Constants";
import { bake_cookie, read_cookie } from 'sfcookies'

const User_Info = (state = [], action) => {

    let user_info = [];
    // Read 'user_info'Data from cookies
    state = read_cookie('user_info');

    if (action.type === Constants.ReuxActions.Login_User) {
        // Save User Info 
        user_info = { is_login: true, email: action.email }
        // store 'user_info' in cookies
        bake_cookie('user_info', user_info)

    }
    else if (action.type === Constants.ReuxActions.Logout_User) {
        // Remove User Info
        user_info = ''
        // store 'user_info' in cookies
        bake_cookie('user_info', user_info)

    }
    else {

        return state;

    }

    return user_info;

}

export default User_Info;

