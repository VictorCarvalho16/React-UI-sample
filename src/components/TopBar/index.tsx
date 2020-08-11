import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

import {
  Bar, SearchBox, SearchButton, Notification,
} from './styles';

function TopBar() {
  return (
    <Bar>
      <SearchBox>
        <SearchButton>
          <button type="button">
            <FiSearch />
          </button>
        </SearchButton>
        <input type="text" placeholder="Global search" />
      </SearchBox>
      <Notification>
        <FiBell />
        <span />
      </Notification>

    </Bar>
  );
}

export default TopBar;
