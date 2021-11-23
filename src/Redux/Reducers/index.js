import { Constants } from "../../Constants";
import { bake_cookie, read_cookie } from 'sfcookies'


const User_Info = (state = [], action) => {

    let user_info = [];
    state = read_cookie('user_info');

    if (action.type === Constants.ReuxActions.Login_User) {

        user_info = { is_login: true, email: action.email }
        bake_cookie('user_info', user_info)

    } else if (action.type === Constants.ReuxActions.Logout_User) {

        user_info = ''
        bake_cookie('user_info', user_info)

    }
    else {

        return state;

    }

    console.log(user_info);

    console.log('state', state);
    console.log('state2', user_info);
    return user_info;

}


export default User_Info;

