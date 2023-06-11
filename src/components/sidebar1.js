import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

// import { withRouter } from "react-router";
// import '../pages/style/Dashboard.css'
function Sidebar1() {
    return (
        <>            <Nav className="sidebar1"
            activeKey="/home"
            
        >                
        <div className="sidebar-sticky">           
        <Nav.Item>          
                  <Nav.Link href="/home">Active</Nav.Link>            
        </Nav.Item>  </div>         
          <Nav.Item>               
             <Nav.Link className="Sidebar-items" href="/Explore" eventKey="/Explore">Explore</Nav.Link>           
              </Nav.Item>        
                  <Nav.Item>               
                 <Nav.Link href="/Shop" eventKey="/Shop">Shop</Nav.Link>      
                       </Nav.Item>      
                             <Nav.Item>          
                              <Nav.Link href="/NearYou" eventKey="NearYou" disabled>           
                                   Near You
        </Nav.Link>            </Nav.Item>            </Nav>        </>);
};
// const Sidebar = withRouter(Side);
export default Sidebar1