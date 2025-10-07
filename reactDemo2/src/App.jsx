import "./App.css";

import ClockDisplay from "./Components/ClockDisplay";
import ActivityFinder from "./Components/ActivityFinder";
import { useState, useContext } from "react";
import RefCounter from "./Components/RefCounter";
import VideoPlayer from "./Components/VideoPlayer";
import ReducerCounter from "./Components/ReducerCounter";
import PostListReducer from "./Components/PostListReducer";
import SubscribeForm from "./Components/SubcribeForm";
import { UserProvider } from "./Context/UserContext";
import MyThemeProvider, { MyThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme, darkMode } = useContext(MyThemeContext);
  // then use the theme object for inline styling

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <div
            className="LoginForm componentBox"
            style={{ background: theme.background, color: theme.foreground }}
          >
            // or the boolean to create a CSS class
            <div className={darkMode ? "dark" : "light"}>
              <ActivityFinder></ActivityFinder>
              <SubscribeForm></SubscribeForm>
            </div>
          </div>
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
