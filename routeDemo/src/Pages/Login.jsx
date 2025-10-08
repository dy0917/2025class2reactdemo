import { useNavigate, Outlet } from "react-router-dom";
import SubscribeForm from "../Components/SubcribeForm";

export default function Login() {
  return (
    <div className="Homepage">
      <SubscribeForm></SubscribeForm>
    </div>
  );
}
