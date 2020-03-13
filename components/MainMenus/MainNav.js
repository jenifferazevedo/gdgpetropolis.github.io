import React, {useEffect} from "react"; 
import styled from "styled-components";
import { MenuLinks } from "./MenuLinks";

const Nav = styled.div`
display: flex;
ul {
  display: inline-flex;
  list-style: none;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 10px;
  color: 'white';
  font-weight: 200;
  font-size: 1rem;
}
a:hover {
  font-weight: bold;
}
a.active { 
  font-weight: bold;
}
`

export function MainNav(props) {
  useEffect(() => {
    let links = document.querySelectorAll('#menuNav ul li a')
    console.log(links)
    links.forEach(element => {
      element.addEventListener('click', link => {
        links.forEach(e => e.className = e.className.replace("active", ""))
        link.currentTarget.className += "active"
      })
    })
  })
  return(
    <Nav id='menuNav'>
      <ul>
        <li><MenuLinks link="#" linkName="Sobre nós" className="active"/></li>
        <li><MenuLinks link="#" linkName="Eventos"/></li>
        <li><MenuLinks link="#" linkName="Contato"/></li>
      </ul>
    </Nav>
  )
}