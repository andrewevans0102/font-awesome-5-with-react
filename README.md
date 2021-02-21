# Font Awesome 5 With React

This repo goes with my upcoming LogRocket post on setting up Font Awesome with React.

I will be updating this repo with a link to the post after it is published.

## Running Locally

This repo has two projects that both reflect the different ways that you can use Font Awesome in your project.

- individual use [project method1](./method1)
- global use [project method2](./method2)

In both cases, if you `cd` into these folders after you have cloned this repo. Just do the following:

```bash
npm install
npm run start
```

## Installing in a New App Instructions

If you want to use Font Awesome 5 in your own React application, go ahead and follow these instructions.

- create app

```bash
npx create-react-app font-awesome-5-with-react
```

- install dependencies

```bash
cd font-awesome-5-with-react
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

- install additional styles for icons

```bash
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
```

- install pro dependencies if you upgrade your account

```bash
npm i --save @fortawesome/pro-solid-svg-icons
npm i --save @fortawesome/pro-regular-svg-icons
npm i --save @fortawesome/pro-light-svg-icons
npm i --save @fortawesome/pro-duotone-svg-icons
```

## how to define an icon prop

```js
// copied from the official docs https://fontawesome.com/how-to-use/on-the-web/using-with/react
<FontAwesomeIcon icon="coffee" />
<FontAwesomeIcon icon={['fas', 'coffee']} />
<FontAwesomeIcon icon={['far', 'coffee']} />
<FontAwesomeIcon icon={faCoffee} />
```

## properties of icons referenced

Font awesome allows you to manipulate the icons properties like size and location.

```js
// copied from the official docs https://fontawesome.com/how-to-use/on-the-web/using-with/react
// size
<FontAwesomeIcon icon="coffee" size="xs" />
<FontAwesomeIcon icon="coffee" size="lg" />
<FontAwesomeIcon icon="coffee" size="6x" />
```

You can also specify presentation of the icons to include rotations and component specific styling

```js
// copied from the official docs https://fontawesome.com/how-to-use/on-the-web/using-with/react
// fixed width
<FontAwesomeIcon icon="coffee" fixedWidth />
// inverse
<FontAwesomeIcon icon="coffee" inverse />
// shown in a list
<FontAwesomeIcon icon="coffee" listItem />
// rotated
<FontAwesomeIcon icon="coffee" rotation={90} />
<FontAwesomeIcon icon="coffee" rotation={180} />
<FontAwesomeIcon icon="coffee" rotation={270} />
// flipped
<FontAwesomeIcon icon="coffee" flip="horizontal" />
<FontAwesomeIcon icon="coffee" flip="vertical" />
<FontAwesomeIcon icon="coffee" flip="both" />
// bordered
// https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons
<FontAwesomeIcon icon="coffee" border />
// pulled
<FontAwesomeIcon icon="coffee" pull="left" />
<FontAwesomeIcon icon="coffee" pull="right" />
// opacity
<FontAwesomeIcon icon={['fad', 'coffee']} />
<FontAwesomeIcon icon={['fad', 'coffee']} swapOpacity />
// custom styles
<FontAwesomeIcon icon="spinner" className="highlight" />
// power transforms
<FontAwesomeIcon icon="coffee" transform="shrink-6 left-4" />
<FontAwesomeIcon icon="coffee" transform={{ rotate: 42 }} />
// masking icons
<FontAwesomeIcon icon="coffee" mask={['far', 'circle']} />
// layering icons
<span className="fa-layers fa-fw">
  <FontAwesomeIcon icon="square" color="green" />
  <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
</span>
// using svgs
<FontAwesomeIcon icon="coffee" symbol />
<FontAwesomeIcon icon="coffee" symbol="beverage-icon" />
```

You can also animate the icons ([check out the docs for more](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons))

```js
// copied from the official docs https://fontawesome.com/how-to-use/on-the-web/using-with/react
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />
```

## unit testing

When unit testing you can mock icons with the following

```js
// copied from the official docs https://fontawesome.com/how-to-use/on-the-web/using-with/react
import React from "react";

export function FontAwesomeIcon(props) {
  return <i classname="fa"></i>;
}
```
