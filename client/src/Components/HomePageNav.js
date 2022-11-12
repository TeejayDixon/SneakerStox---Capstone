import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

function HomepageNav() {

   const [showNavCentred, setShowNavCentred] = useState(false);
  
  return (
    
    <div class="container-fluid-nav">
       <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                ADIDAS
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  NEW BALANCE
                </MDBNavbarLink>
            </MDBNavbarItem>

              <MDBNavbarItem>
                
              <MDBNavbarItem>
              <MDBNavbarLink disabled href='#'>
                NIKE
              </MDBNavbarLink>
            </MDBNavbarItem>
                
             
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#'>
                AIR JORDAN
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      </MDBNavbar>
    </div>
  )
}
export default HomepageNav