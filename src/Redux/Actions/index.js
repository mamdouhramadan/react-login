import { Constants } from "../../Constants"

export const login_user = (email) => {
    const action = {
        type: Constants.ReuxActions.Login_User,
        email
    };
    return action;
};

export const logout_user = (data) => {
    const action = {
        type: Constants.ReuxActions.Logout_User,
        data
    }
    return action;
}


