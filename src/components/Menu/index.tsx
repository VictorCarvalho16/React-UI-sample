import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { RiDashboardLine, RiContactsLine, RiClipboardLine } from 'react-icons/ri';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsChatSquare, BsSquareHalf, BsThreeDots } from 'react-icons/bs';

import {
  MenuBase, MenuHeader, SideMenu, MenuProfile, MenuList, MenuSettings, MenuFooter,
} from './styles';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <MenuBase showMenu={showMenu}>
      <MenuHeader>
        <h1>Sass Kit</h1>
        {!showMenu
          && (
          <button type="button" onClick={handleMenu}>
            <AiOutlineMenu />
          </button>
          )}
      </MenuHeader>

      <SideMenu showMenu={showMenu}>
        <MenuProfile>
          <img src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" alt="Perfil " />
          <p>
            <strong>Sierra Ferguson</strong>
            <span> s.ferguson@gmail.com</span>
          </p>
        </MenuProfile>
        <MenuList>
          <li>
            <RiDashboardLine />
            Dashboard
          </li>
          <li>
            <FaTasks />
            Tasks
          </li>
          <li>
            <AiOutlineMail />
            Email
          </li>
          <li>
            <RiContactsLine />
            Contacts
          </li>
          <li>
            <BsChatSquare />
            Chat
          </li>
          <li>
            <RiClipboardLine />
            Deals
          </li>
        </MenuList>

        <MenuSettings>
          <BsThreeDots />
          Settings
        </MenuSettings>

        <MenuFooter onClick={handleMenu}>
          <BsSquareHalf />
          Toggle sidebar
        </MenuFooter>
      </SideMenu>
    </MenuBase>
  );
}

export default Menu;
