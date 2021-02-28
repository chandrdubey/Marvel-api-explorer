## Marvel API Explorer
<p align="center">
  <a href="https://marvel-api-explorer.netlify.app">
    <img alt="marvel" title="marvel" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel-logo-card-1560x876_2.jpg" width="150">
  </a>
</p>
<p align="center">
  Marvel API explorer based on MERN stack 
</p>

<p align="center">
    <img alt="Download on the App Store" title="App Store" src="https://geeksperhour.com/wp-content/uploads/2019/02/mern-img.png" width="240">
</p>
<br/>

## Table of Contents

- [About](#about)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Features](#features)
- [Screenshots](#screenshots)

<br/>

## About

[![Build Status](https://img.shields.io/badge/Build-Success-brightgreen)](success)


 A marvel api explorer based on the MERN stack. It uses the official marvel api.
<p align="center">
 
<br/>
<br/>

## Technology Stack

<table>
  <tbody>
    <tr valign="top">
      <td width="25%" align="center">
        <span> <b>Node JS</b> </span><br><br>
        <img height="50px" src="https://cdn.svgporn.com/logos/nodejs.svg">
      </td>    
      <td width="25%" align="center">
        <span> <b>MongoDB</b> </span><br><br>
        <img height="30px" src="https://cdn.svgporn.com/logos/mongodb.svg">
      </td>
      <td width="25%" align="center">
        <span> <b>Express JS</b> </span><br><br>
        <img height="36px" src="https://cdn.svgporn.com/logos/express.svg">
      </td>
       <td width="25%" align="center">
        <span><b> Json WebToken </b></span><br><br>
        <img height="46px" src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png">
      </td>
    </tr>
    <tr valign="top">
      <td width="25%" align="center">
        <span> <b>Passport JS</b> </span><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/passport.svg">
      </td>
      <td width="25%" align="center">
        <span> <b>VS Code</b> </span><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/visual-studio-code.svg">
      </td>
      <td width="25%" align="center">
        <span> <b>React</b> </span><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/react.svg">
      </td>
      <td width="25%" align="center">
        <span> <b>React Router</b> </span><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/react-router.svg">
      </td>
    </tr>
    <tr valign="top">
       <td width="25%" align="center">
        <span> <b>Redux</b> </span><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/redux.svg">
      </td>
      <td width="25%" align="center">
        <span> <b>GIT</b></span><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/git-icon.svg">
      </td>
    </tr>
    
  </tbody>
</table>

<br/>

***
## Installation
- Clone the repository using `git clone` and then change the directory to root of the project
``` 
   https://github.com/chandrdubey/Marvel-api-explorer.git
    cd Marvel-api-explorer
```
- Use npm to install dependencies for the project.
```
> npm i  #For Backend dependencies

> npm run f-install  #For Frontend dependencies 
```

- Create .env file in root folder and add necessary credentials with varibles given below.
```bash
  DATABASE_URL = 'database URL'
  JWT_SECRET ='jwt secret key'
  REACT_APP_MARVEL_API_PUBLIC_KEY='public key of marvel api' 
  REACT_APP_MARVEL_API_PRIVATE_KEY='private key of marvel api'
  
```
- Run the program by npm using
```
> npm run app
```
- Above command will start both frontend and backend server.
> Frontend => http://localhost:3000

> Backend => http://localhost:5000
***
## Features
* Add marvel charecters and comics to favourite list
* Remove marvel charecters and comics from favourite list
* Easily Search marvel charecters and comics
* Responsive
* Remove characters and comics directly from the favorite list
* Login with google and Authorization by Json web token 
* Pagination for comics and charecters


## Screenshots

> Home Page

![ScreenShot](/screenshots/homePage.png)

> Marvel Charecters List

![ScreenShot](/screenshots/charecterList.png)

> Marvel Comics List

![ScreenShot](/screenshots/comicsList.png)

> Marvel Charecter

![ScreenShot](/screenshots/charecterPage.png)

> Marvel Comic

![ScreenShot](/screenshots/comicPage.png)

>Log In

![ScreenShot](/screenshots/logIn.png)

>Sign Up

![ScreenShot](/screenshots/signUp.png)

>Favourite List

![ScreenShot](/screenshots/favouriteList.png)
