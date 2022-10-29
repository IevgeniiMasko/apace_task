import { createContext, useState } from "react";

import Landing from "./Page/Landing/Landing";

export const authContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      <Landing />
    </authContext.Provider>
  );
}

export default App;
