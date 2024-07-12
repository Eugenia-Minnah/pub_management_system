import React from 'react';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Inventory } from '../Pages/Inventory';
import './Admin.css';

export const Admin = () => {
  return (
    <div className="app">
      <SideBar className="sidebar" />
      <main className="main-content">
        <Header className="header" />
        <div className="content">
          <Inventory />
        </div>
      </main>
    </div>
  );
};