import { useRouteError, Link, useNavigate } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex-col justify-center items-center text-center p-4">
      <h1 className="text-red-700 font-bold">Uh oh! We’ve got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-col justify-start p-4">
        <button
          className="p-4"
          onClick={() => navigate(-1)}
        >
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className=""
        >
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}
export default Error
