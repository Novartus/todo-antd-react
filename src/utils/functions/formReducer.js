import { v4 as uuidv4 } from "uuid";
import {
  openInfoNotification,
  openSuccessNotification,
  openWarningNotification,
  openErrorNotification,
} from "./openNotification";

export function todoReducer(state, action) {
  const [title, date] = action.payload || "";

  switch (action.type) {
    case "ADD_TODO":
      openSuccessNotification("bottomLeft", "TODO added ➕");
      state.push({ title, date, key: uuidv4(), completed: "false" });
      break;

    case "COMPLETE_TODO":
      console.log(action.payload);
      openInfoNotification("bottomLeft", "TODO Completed ✔");
      const todoToComplete = state.filter(
        (todo) => todo.key === action.payload
      )[0];
      if (todoToComplete) {
        todoToComplete.completed = "true";
      }
      break;

    case "DELETE_TODO":
      openWarningNotification("bottomLeft", "TODO deleted ❌");
      return state.filter((item) => item.key !== action.payload);

    case "SEARCH_TODO":
      const searchQuery = action.payload[0];
      const searchResult = state.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchResult.length > 0) {
        openInfoNotification(
          "bottomLeft",
          `🔎 Results Found for ${searchQuery}`
        );
      } else {
        openWarningNotification(
          "bottomLeft",
          `🔎 No Results Found for ${searchQuery}`
        );
      }
      return searchResult;

    default:
      openErrorNotification("bottomLeft", "An error has occurred! Try Again");
      throw new Error();
  }
}
