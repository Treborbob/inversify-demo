import { TYPES } from "./TYPES";

function component() {
    const element = document.createElement('div');
const foo = TYPES.foo;
    element.innerHTML = "Hello from ROBS APP " + foo;

    return element;
  }

  document.body.appendChild(component());