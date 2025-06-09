import { Outlet, Link } from "react-router-dom";

export default function AppLayout() {
    return (
      <>
        <header>
          <Link to="/" className="home-img">
            🏠 Home
          </Link>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
}