import {APP_CONFIG} from "../../config/app";
import {NavLink} from "react-router";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">{APP_CONFIG.name}</NavLink>
        </div>
        <nav>
          <NavLink to="/login">Авторизация</NavLink>
          <NavLink to="/register">Регистрация</NavLink>
        </nav>
      </div>
    </header>
  );
}
