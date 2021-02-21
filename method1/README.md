# Individual Use (method 1)

Import icons individually into each component that uses them. The main drawback to this method is that it can get tedious since you have to do it in all components

```js
// copied from the official docs at https://fontawesome.com/how-to-use/on-the-web/using-with/react
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

ReactDOM.render(element, document.body);
```
