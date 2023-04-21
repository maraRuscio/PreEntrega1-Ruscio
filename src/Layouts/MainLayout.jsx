import React from "react"
import "./MainLayout.css"
//import { Container, Row, Col } from "react-bootstrap";


export const MainLayout = ({children}) => {
  
  return (
    <div className="mainLayoutStyles">{children}</div>
        );
};