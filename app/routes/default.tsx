import { useNavigate } from "react-router";

export default function Default() {
    const navigate = useNavigate();

    navigate('/home');
}