import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { GlobalStyles } from "ui";
import { store } from "store";
import { router } from "router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </Provider>,
);
