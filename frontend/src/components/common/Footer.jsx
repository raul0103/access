import {APP_CONFIG} from "../../config/app";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {APP_CONFIG.name}
    </footer>
  );
}
