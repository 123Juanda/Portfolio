import React from "react";
import '../components/Header/Header.css'; 
import { Title } from "../ui/Title/Title"; 
import { Menu } from "../ui/Menu/Menu"; 
import { Image } from "../ui/Image/Image";

const Header = () => {
    return (
        <header className="header">
            <img src="/image/Logo.jpeg" alt="" className="rounded-image" />
            <Title content='Juan David' style='box-name'/>
            <Menu information1= 'Perfil' information2='Proyectos' information3='Referencias' information4='Experiencia'/>
            <Image src="" alt="" className="box-logo" />
        </header>
    )
}

export default Header;
