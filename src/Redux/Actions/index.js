import { Constants } from "../../Constants"
// login_user Action : we will Use This Action When Saving Login Details in Store
export const login_user = (email) => {
    const action = {
        type: Constants.ReuxActions.Login_User,
        email
    };
    return action;
};

// login_user Action : we will Use This Action When Remove Login Details
export const logout_user = (data) => {
    const action = {
        type: Constants.ReuxActions.Logout_User,
        data
    }
    return action;
}


