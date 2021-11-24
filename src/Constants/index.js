export const Constants = {
    Regex: {
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    API:{
        Login : 'https://reqres.in/api/login'
    },
    ReuxActions: {
        Login_User: 'Login_User',
        Logout_User: 'Logout_User',
    },
    Colors: {
        themeColor: '#8e44ad',
        textColor: '#4f4f4f',
        grayColor: '#aaa',
        grayColor2: '#777',
        whiteColor: '#fff',
        light: '#f5f7fb',
    }
}