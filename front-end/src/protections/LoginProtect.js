import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginProtect(props){
    let token = localStorage.getItem('myToken');
    const {Comp} = props;
    const navigate = useNavigate();
    function getToken() {
        token = localStorage.getItem('myToken');
    }
    useEffect(() => {
        getToken();
        if(token){
            navigate("/")
        }
    }, []);
    if(!token){
        return (
            <Comp/>
        )
    }
}