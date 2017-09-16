# react-conditional-display 🌤⛅️🌥
[![Build Status](https://travis-ci.org/annuhdo/react-conditional-display.svg?branch=master)](https://travis-ci.org/annuhdo/react-conditional-display)

A react component that conditionally display the component's children elements in the UI.

The component is available on npmjs. Simply run:
```
npm install react-conditional-display
```

## Props
| Name   | Required | Default | Type              |Comment                                 |
|--------|----------|---------|-------------------|----------------------------------------|
| if     | Yes      | -       | `bool` | Determines whether to render the principal children element(s).     |
| else     | No       | `null`  | `func`, `object` (JSX) | Alternative React component that would be rendered if `if` is false.  |
| tag   | No       | `div` | `string`    | The HTML tag of the parent container if there are multiple children elements. |
| className   | No       | `null`    | `string` | Class associated with the parent container if there are multiple children elements. |

The component detects whether there are multiple children elements and will automatically wrap them in a div tag if no tag is provided. Otherwise, the sole child element would be rendered exactly as written.

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
        else={this.renderSomething()}
        tag="section"
        className="center-modal">
          <h1>Hi friends!</h1>
          <div>I am the primary render!</div>
        </Display>
      </div>
    );
  }
}
export default App;
```
[View on Codepen](https://codepen.io/annuhdo/pen/YxoVXW?editors=0110)

## Performance
As of version [0.0.4](https://bundlephobia.com/result?p=react-conditional-display@0.0.4):
![BundlePhobia Screenshot of Performance](https://d.pr/PYC4fb.png)

## Contributions, Issues, and Changes
Please [open an issue](https://github.com/annuhdo/react-conditional-display/issues) if you would like to contribute!

## Acknowledgement
Thanks to [Noel Broda's article on how to create and publish a React component on NPM!](https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce)

## License
[![WTFPL License](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)](http://www.wtfpl.net/about/)
