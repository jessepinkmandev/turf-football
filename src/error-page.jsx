import { Link } from "react-router-dom";

export default function ErrorPage({ error }) {
  console.log("error");

  return (
    <>
      <div>
        <h3>Ohh!!</h3>
        <p>We are not able to find the page for the given Url</p>
        <Link to="/">Navigate Home </Link>
      </div>
    </>
  );
}
