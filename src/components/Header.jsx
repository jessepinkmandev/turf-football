import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const style = {
  nav: `m-3 p-1 border-b-2 hover:cursor-pointer`,
};

export default function Header() {
  const { user } = UserAuth();

  const sign = () => {
    return (
      <div className="grid grid-cols-2 gap-8 mx-12 ">
        <div className="mt-12 lg:mx-12 text-center bg-red-500 text-3xl text-white px-18 py-24">
          <Link to={`signin`}>
            <p className="hover:cursor-pointer">Sign In</p>
          </Link>
        </div>
        <div className="mt-12 lg:mx-12 text-center bg-red-500 text-3xl text-white px-18 py-24">
          <Link to={`signup`}>
            <p className="hover:cursor-pointer">Sign Up</p>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex-col bg-red-500 text-center p-10   ">
        <div>
          <Link to={`/`}>
            <h1 className="lg:absolute lg:left-10 text-4xl top-3 text-white">
              The Football Turf
            </h1>
          </Link>
        </div>

        <div className=" lg:absolute  lg:flex lg:right-10 lg:top-3 text-white ">
          <Link to={`photos`}>
            <p className={style.nav}> Photos</p>
          </Link>

          <Link to={`more`}>
            <p className={style.nav}>About Us</p>
          </Link>

          <Link to={`contactus`}>
            <p className={style.nav}>Contact Us</p>
          </Link>
        </div>
      </div>

      {!user ? sign() : null}
    </div>
  );
}
