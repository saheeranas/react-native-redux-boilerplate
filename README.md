<!--
  Title: React Native Redux Boilerplate
  Description: A starter template for React Native with Redux Toolkit
  Author: saheeranas
  -->

# React Native Redux boilerplate with Redux Toolkit (RTK) and TypeScript.

A React Native starter template.

<kbd>
  <img src="demo/assets/react-native-redux-boilerplate-saheer-anas.png?raw=true"> 
</kbd>

## Features

- Redux setup with Redux Toolkit.
- Offline storage with Redux Persist.
- Typescript
- Dark Mode
- Navigation setup
- Login wiring (optional)
- Sample CRUD code (To Do App) included.
- Sample Network Call (RTK) included.
- Secure Token storage.
- Husky
- Environment Variables (ENV)
- Storybook configured

## Dependencies

- React Native **v0.74.5**
- Redux Toolkit (RTK) v2.0
- TypeScript
- React Navigation v6
- React Native Vector Icons
- Formik & Yup
- Axios
- React Native Keychain
- Redux persist
- Storybook

## Screenshots

<p float="left">
  <img src="demo/assets/ss1.png?raw=true" width="250" />
  &nbsp; &nbsp; &nbsp; &nbsp;
  <img src="demo/assets/ss2.png?raw=true" width="250" />  
</p>

## Installation

### Clone this repo

```
git clone https://github.com/saheeranas/react-native-redux-boilerplate.git
```

### Open project folder and install dependencies

```
cd react-native-redux-boilerplate
yarn
or
npm i
```

### Rename environment variable files

Example: .env.template file to .env

### Run the project

```
yarn android
or
npm run android
```

or

```
yarn ios
or
npm run ios
```

## How to use StoryBook?

You can create custom component library and maintain using storybook.

### View StoryBook mode

By running following command, you can start metro server

```
yarn storybook:start
or
npm run storybook:start
```

### Add a new component to StoryBook

You can see multiple components added to StoryBook in this App already.

1. Each component shall have a 'component.stories.tsx' file, which contains definition and multiple variants of the same component (eg:- primary, secondary or h1, h2, p etc)

2. This 'stories' file need to imported in getStories function in '.storybook/storybook.requires.js' file

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
