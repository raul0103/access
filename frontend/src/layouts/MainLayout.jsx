import {Outlet} from "react-router";

export default function MainLayout() {
  return (
    <div>
      <header>HEADER</header>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
}
