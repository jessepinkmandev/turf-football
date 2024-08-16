import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.status == 404) {
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
  return (
    <>
      <div>
        <h3>something went wrong</h3>
      </div>
    </>
  );
}
