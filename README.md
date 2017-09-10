# react-conditional-display 🌤⛅️🌥

A react component that provides conditional display of the component's children elements in the UI. 

## Props
The component takes in a few props:
- `if` **(required)** takes in a boolean statement where true will render while false will not render the children.
- `else` _(optional)_ takes in a single JSX expression to render an alternative output if the `if` statement is false.
- `tag` _(optional)_ takes in a string that represents the HTML tag as the HTML parent container of the children elements. Defaults to `div`. Recommended to use if there are multiple children elements.
- `className` _(optional_) takes in a string representing the class(es) of the tag if it exists. Recommended to use if there are multiple children elements.

## Example Usage
```javascript
import React, { Component } from 'react';
import Display from 'react-conditional-display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show: true}
    this.renderSomething = this.renderSomething.bind(this);
  }

  renderSomething() {
    return <h2>Hey! I am the alternative render!</h2>
  }

  render() {
    return (
      <div>
        <span>This will always show!</span>
        <Display
        if={this.state.show}
        else={this.renderSomething()
        tag="section"
        className="center-modal"}>
          <h1>Hi friends!</h1>
          <div>I am the primary render!</div>
        </Display>
      </div>
    );
  }
}
export default App;
```

## Installation
The component is available on npmjs. Simply run:
```
npm install react-conditional-display
```

## Roadmap
- Further testing

## Contributions, Issues, and Changes
This project is ongoing. Please [open an issue](https://github.com/annuhdo/react-conditional-display/issues) if you would like to contribute!
