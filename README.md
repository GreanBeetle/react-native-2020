## _W.I.P._

# React Native 2020 
##### October 29, 2020 

[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg?style=plastic&labelColor=36566F)](https://shields.io/)
![GitHub last commit](https://img.shields.io/github/last-commit/GreanBeetle/react-native-2020?style=plastic&labelColor=36566F)
![React Native](https://img.shields.io/static/v1?message=React-Native&color=61dafb&style=plastic&logo=react&label=&labelColor=36566F)
![TypeScript](https://img.shields.io/static/v1?message=TypeScript&color=007acc&style=plastic&logo=typescript&label=&labelColor=36566F&logoColor=007acc)
![JavaScript](https://img.shields.io/static/v1?message=JavaScript&color=F7DF1E&style=plastic&logo=javascript&label=&labelColor=36566F&logoColor=F7DF1E)
![Redux](https://img.shields.io/static/v1?message=Redux&color=764ABC&style=plastic&logo=redux&label=&labelColor=36566F&logoColor=764ABC)

This is a master repository for a collection of small to medium-sized React Native applications. Each app was (or will be) built for Steven Grider's course, ["The Complete React Native + Hooks Course [2020 Edition]"](https://www.udemy.com/course/the-complete-react-native-and-redux-course/). [Course repo is here.](https://github.com/StephenGrider/rn-casts)

The goal is to stay on top of the latest React Native trends, components, libraries, features, and best practices. The topics covered in these apps are:  

_TO DO: Add a list of applications included in this repository. So far there are (a) rn-starter, which covers basics (b) food, which delves in to Axios, Fetch, extracting hooks, and API consumption, and (c) blog, which deals with Context API, crud, and data flow ... REMOVE ALL OF THIS. IT'S REDUNDANT. Use the index instead. However be sure to list the various apps. Add gifs showing previews of each app's functionality._ 

#### Note to self regarding git 

To avoid the `you've added a git repository inside your current repository` error do the following

* Initialize `ExampleProject` inside `React-Native-2020`
* `cd ExampleProject && ls -a`, you should see a `.git` file
* Remove the `.git` file with `rm -rf .git` and `cd ..` 
* In the `React-Native-2020` root, run `git add ExampleProject/*`
* This should circumnavigate the need to add a submodule or track multiple repositories 
 
## Index

_TO DO: refactor and reorganize using bullet points and sub bullet points. Decide which topics should be included. Decide how and which particular topics ought to be cross-referenced. Each index item should contain links to the files containing example usage._

* `action` -> `rn-starter` -> `SquareScreen.js` and `CounterScreen`
* `actions`
  * `redux` 
* API -> Yelp - `food/api/yelp` and `SearchScreen` and `SearchBar`
* Auth Context
* Authentication 
  * Firebase 
  * Flows 
* Axios (fetch alernative) -> `food/api/yelp` and `food/SearchScreen`
* components
  * reusable -> `rn-starter/ImageDetail`, `food/components/ResultsList` etc. 
* `Context API` 
* error handling -> `food/SearchScreen/` -> `searchAPI()`
* Express API
* `<FlatList />`
  * basics -> `rn-starter/ColorScreen` and `rn-starter/ListScreen`
  * optimizing -> 
  * rendering -> `food/ResultsList`, `food/BusinessScreen`
  * rendering _correctly_
  * renderItem ->
* Firebase
* Fragments `<> </>` -> `food/SearchScreen`
* Hashing
  * Passwords, salting and hashing
* Hooks
  * extracting hooks -> `food/hooks/useResults.js` and `food/SearchScreen`
  * `useCallback`
  * `useEffect` -> `food/hooks/useResults`
  * `useNavigation` -> `food/ResultsList` (React Navigation 5) 
  * `useReducer` -> `rn-starter` -> `SquareScreen` and `CounterScreen`
  * `useState` -> `rn-starter/CounterScreenCopy` and `rn-starter/ColorScreen`
* Icons -> `food` -> `SearchBar.js`
* `<Image />`
  * `rn-starter/ImageScreen`
  * `food/ResultDetail`
  * `food/BusinessScreen` 
* JWT or JSON Web Tokens
* Layout
  * Absolute Fill Objects -> `rn-starter` -> `BoxScreen` (cool stuff!) 
  * Flex Box -> `rn-starter/BoxScreen.js`
  * `position: 'absolute'` -> `rn-starter/BoxScreen.js` 
  * `top`, `bottom`, `left`, `right` -> `rn-starter/BoxScreen`
* Mongo DB 
* Navigation (React Navigation 5)
  * basic architecture -> `food/navigation`
  * params/passProps -> `food/ResultsList`
  * `useNavigation` -> `food/ResultsList` (React Navigation 5)
* Node.js
  * Express API 
* `props` -> `rn-starter/ImageScreen`  
* `reducer` -> `rn-starter/SquareScreen` and `CounterScreen
* Redux
  * actions
  * connect 
  * dispatch
  * reducers 
* Signup/Registration 
* `<TextInput />` -> `rn-starter/TextScreen`  and `food/SearchBar` and `food/SearchScreen`

### Author

John Rykken

### contact

_john.rykken@gmail.com_

Copyright (c) 2020 John Rykken
