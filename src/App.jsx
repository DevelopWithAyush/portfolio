import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Connect from "./components/Connect";
import { useContext, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectRoute from "./components/auth/ProtectRoute";
import ConnectPage from "./pages/ConnectPage";
import { HandleContext } from "./hooks/HandleState";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { user } = useContext(HandleContext);

  const [connect, setConnect] = useState(false);
  return (
    <>
      <GoogleOAuthProvider clientId="166527372792-vbbc9tiud3cdo8ho3rlkgrrbbh74n9ap.apps.googleusercontent.com">
        <BrowserRouter>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Header setConnect={setConnect} />
          <Connect connect={connect} setConnect={setConnect} />
          <Routes>
            <Route path="/" element={<Home setConnect={setConnect} />} />
            <Route
              path="/connect"
              element={
                <ProtectRoute user={user}>
                  <ConnectPage />
                </ProtectRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
