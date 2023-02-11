import React from "react";

import NotificationWrapper from "./Layout/Notification";
import Router from "./Layout/Router";
import Logic from "./Context/provider";

const App = () => {
  return (
    <Logic>
      <NotificationWrapper>
        <Router />
      </NotificationWrapper>
    </Logic>
  );
};

export default App;
