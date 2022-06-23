import React, { Suspense, lazy } from "react";
import "./App.css"; 
import {
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import { Routes } from "react-router-dom";
import {AuthContext} from './Components/context/auth-context';
import Navigation from "./Components/Full-Compo/Navigation";
import Survey from "./Components/Full-Compo/Survey";
// import Navigation from "./shared/Navigation/Navigation";
// const NotFoundComponent = React.lazy(() =>
//   import("./shared/pages/NotFoundComponent")
// );
const Landing = React.lazy(() => import("./Components/Full-Compo/Landing"));

function App() {
  // const { userName, userId, token, login, logout } = useAuth();
  let token = false;
  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/cliente" element={<Survey></Survey>} />
        {/* <Route component={NotFoundComponent} /> */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/cliente" element={<Survey></Survey>} />
        {/* <Route path="/notFound" component={NotFoundComponent} /> */}
      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        // isLoggedIn: !!token,
        // userName: userName,
        // userId: userId,
        // token: token,
        // login: login,
        // logout: logout,
      }}
    >
      <Router>
        <main>
          <Navigation/>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner asOverlay />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
        {/* <footer> */}
          {/* <Footer /> */}
        {/* </footer> */}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
