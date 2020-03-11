import React from 'react';
import { Header, LeftSideBar } from '../../../../containers';
import { Layouts, NoInternetConnection } from '../../../../components';

const HrComponent = () => (
  <Layouts.Main>
    <LeftSideBar />
    <div className="main-container">
      <NoInternetConnection>
        <Header hideToggleRightSideBar>
          <h1 className="weight--medium title--xl title-page">
            Human resources
          </h1>
        </Header>
        <div className="main-container__content main-container__content--profile">
          <h3> Profile container</h3>
        </div>
      </NoInternetConnection>
    </div>
  </Layouts.Main>
);

export default HrComponent;
