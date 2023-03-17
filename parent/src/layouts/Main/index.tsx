import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav"

const Main = () => {

  return (
    <div className="container">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Main
