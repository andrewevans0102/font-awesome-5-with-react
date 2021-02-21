# Global Use (method 2)

If you want to use icons globally, you can import icons as the entire library. This may cause bloat in your bundle as you are adding files you may not use, but it also makes usage easier.

```js
// copied from the official docs at https://fontawesome.com/how-to-use/on-the-web/using-with/react
//
//
//
//
// app.js
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);
//
//
//
//
//
// beverage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div>
);
//
// showcase.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Showcase = () => (
  <div>
    <FontAwesomeIcon icon={["fab", "apple"]} />
    <FontAwesomeIcon icon={["fab", "microsoft"]} />
    <FontAwesomeIcon icon={["fab", "google"]} />
    <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and
    ready!
  </div>
);
```
