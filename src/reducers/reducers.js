import { HOW_IT_WORKS } from "../navBar/navBar.js";

const initState = [];

const HowItWorksReducer = (state = initState, action) => {
  console.log("ac ===>", action.type);
  switch (action.type) {
    case "how-itWorks-click":
      return "how-itWorks-click";
    default:
      return state;
  }
};
export { HowItWorksReducer };
