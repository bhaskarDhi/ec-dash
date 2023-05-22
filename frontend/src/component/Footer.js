import React from 'react';
import {
  MDBFooter,
  
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#f1f1f1' }}>
     

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
         Dashboard
        </a>
      </div>
    </MDBFooter>
  );
}