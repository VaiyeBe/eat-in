# Eat In
- A simple application that allows you to define a goal for how much you want to try to eat at home or at the office, rather than going out for food.

## Stories
- User can sign in/up/out
- User can create a meal
  - has no components
  - v2 has components
- User can define how much they are trying to limit eating out
- User can review meal data/dash
  - by day
  - by week
  - by month
  - v2 by user-defined period
- User has accessibility options
  - all forms and hidden elements tagged and named appropriately
  - night mode
  - high contrast mode
  - font-scaling handled appropriately

## Data Structure
- A Meal Exists
  - has meal components
  - has a date/time
  - has a type
  - has a meal period (bfast/lunch/dinner)
  - v2 has a caloric value
- Users exist

## Visual Structure
- Concentration on negative space
- No collapsible menu
- Big buttons
- Tri-chromatic
- San-serif font
- react-transitions implemented for async requests

## Wireframes
- [Signup/Login](link)
- [Add new meal](link)
- [Dashboard](link)
- [User settings](link)

## Dependencies
- `react` - [Main component structures handled by React](https://github.com/facebook/react)
- `redux` - [Data flow handled with Redux](http://redux.js.org/)
- `react-router` - [Routing handled by React Router](https://github.com/ReactTraining/react-router)
- `axios` - [POST requests handled by Axios](https://github.com/mzabriskie/axios)
- `chai/mocha` - [Chai/Mocha unit testing](http://chaijs.com/)
- `backendless` - [mBass/data storage handled with Backendless 4.2.0](backendless.com)
- `sass` - [CSS compiling handled with sass](http://sass-lang.com/)
- `ES6`- [ES6 Syntax](http://es6-features.org/)
- `babel` - [Compiled with babel's environment based preset](https://github.com/babel/babel-preset-env)
