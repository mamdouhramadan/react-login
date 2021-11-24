# React Login
#### By MAmdouh Ramadan

**Simple React js Login Sysyem ., You can try to login using following data :**

```sh
email: eve.holt@reqres.in
password: cityslicka
```


## Dependencies
- **MDBootstrap:** To Improve UI Design , it's a framwork mixed between MD and Bootstrap
- **Redux:** To Passing data between the components.
- **sFCookies:** it used to save the login data , to prevent lose it when refresh the page
- **React Router:** To Navigate Between the Screens 
- **AXIOS:** to hanling api requests  
- **React Reveal:** to adding some animation to components  

## Features
- **Custome Validation:** Checking form  field before make a request ,
- **Authorization:** Check User Status , if user is_lgin will automaticly redirect to dashboard , and if not_login will not able to access to dashboard screen
- **Files Structre:** The files have been organized taking into account the possibility of expanding the application
- **Reusable Components:** Create components that we can use it in deferent styles based on props 
- And More...

## Installation

Install the dependencies and devDependencies and start the server.

```sh
gh repo clone mamdouhramadan/react-login
cd react-login
npm i
code .
npm start
```

#### Building for source

For production release:

```sh
npm run build 
```
This command will generating built version for distribution
