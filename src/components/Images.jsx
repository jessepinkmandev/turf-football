import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const images = [
  "https://blog.playo.co/wp-content/uploads/2021/04/5aside.jpeg",
  "https://5.imimg.com/data5/SELLER/Default/2024/4/407020144/TQ/SE/NM/103253819/football-turf-ground.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2024/4/407020144/TQ/SE/NM/103253819/football-turf-ground.jpg",
];
function Images() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="mt-8 text-xl text-center">
        <h1>You're Logged In With {user && user.email}</h1>
        <button
          onClick={handleLogout}
          className="border px-6 py-2 my-4 bg-red-200"
        >
          Logout
        </button>
      </div>
      <div className=" max-w-[80%] md:max-w-[60%] m-auto ">
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div key={Math.random()} className="slide">
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default Images;
