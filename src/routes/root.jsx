import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
