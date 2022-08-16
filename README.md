# Learning React 
React is a user interface library. It includes some of the same aspects of front-end frameworks, but its purpose is to organize HTML elements into components.

## Adding React to a website

When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

[Example](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605)

## Creating a React App

```
npx create-react-app my-app
cd my-app
npm start
```

>Note: We would be injecting our React code from `App.js` into `my-app\public\index.html`

## JSX Expressions

JSX produces React “elements”. JSX allows you to write HTML within JavaScript. 

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
JSX allows you to write HTML within JavaScript


These two examples are identical:
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// Note: this structure is simplified
```
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

A component is a function that returns a JSX. React always wants to render a single component, so all the components should either be wrapped in a single <div> or we can use an App() function to render it..

```

function Header(){
    return(
    <header>
        <h1>Welcome to my app!!</h1>
        </header>
    )
}

function Main(){
    return(
    <p>
        I am just learning how to use React..
        </p>

    )
}

function App(){
    return(
    <div>
    <Header />
    <Main />
    </div>
    )
}

ReactDOM.render(
<App />,
document.getElementById("root")
);
```

## Props

We can grab properties instead of hard coding some values. For example, passing the library property:

```
    <App library="React"/>
```
Rendering in the App.js

```
function App(props) {
  return (
    <div className="App">
      <h1>Hello from {props.library}
      </h1>
    </div>
  );
}
```


## Hooks


React Hooks can add additional functionality to our app. We can use the `useState` hook to manage the state of form fields. We can use ref to reach out to the fields and figure out the values. The `useEffect` hook can be used to create side effects.

--

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
