import React, { useState } from 'react';
import avatar from '../image/avatar.png';
import one from '../image/one.png';
import Chart from 'react-apexcharts';

function Container (){
   


    return (
        <>
      
        <div className='rectangle'>
        <i class="home zmdi zmdi-home"></i>
            <h1 className='head'>Dashboard</h1>

            <i class="money zmdi zmdi-balance-wallet"></i>
            <h1 className='wallet'>Wallet</h1>

            <i class=" trans zmdi zmdi-graphic-eq"></i>
            <h1 className='transaction'>Transaction</h1>

            <i class="pro zmdi zmdi-account"></i>
            <h1 className='profile'>Profile</h1>

            <i class="box zmdi zmdi-money-box"></i>
            <h1 className='pay'>Payment</h1>

            <div className='rec0'>
                <h1 className='annual'>Annual Report</h1>
                <h1 className='text'>Annually Detailed Report</h1>
                <button className='btn'>Download</button>
            </div>
</div>
<div className='rec1'>
    <div className='search'>
    <i class="sea zmdi zmdi-search"></i>
    <h1 className='seahead'>Search</h1>
    <i class=" noti zmdi zmdi-notifications"></i>
    <i class=" menu zmdi zmdi-more-vert"></i>
    </div>
    <div className='heading'>
        <h1 className='dash'>Dashboard</h1>
    </div>
    <div className='card1'>
        <h5 className='balance' >BALANCE</h5>
        <h5 className='card'>CARD</h5>
        <p className='rs'>$ 53,000</p>
        <p className='num'>05</p>
        <span className='point1'></span>
        <span className='point2'></span>
        <span className='point3'></span>
        <span className='point4'></span>

        <span className='point5'></span>
        <span className='point6'></span>
        <span className='point7'></span>
        <span className='point8'></span>

        <span className='point9'></span>
        <span className='point10'></span>
        <span className='point11'></span>
        <span className='point12'></span>

        <p className='nums'>2456</p>

        <h5 className='valid'>VALID THRU</h5>
        <h5 className='holder'>CARD HOLDER</h5>

        <p className='date'>02/22</p>
        <p className='name'>JONAS</p>


        
    </div>
    <div className='card2'>
      <h1 className='rate'>Exchange rate</h1>
      <i class="hor zmdi zmdi-more"></i>

    </div>

    <div className='card3'>
        <h1 className='history'>History</h1>
        <i class="hor zmdi zmdi-more"></i>


    </div>

    <div className='card4'>
    <h1 className='efficiency'>Efficiency</h1>
      <i class="ver zmdi zmdi-more"></i>
    
      
    </div>
  <div className='rec3'>
  <i class="set zmdi zmdi-settings"></i>
  <div className='circle'>
  <i class="cross zmdi zmdi-close"></i>
  </div>
 <img className='icon' src={avatar}/>
 <h1 className='subhead'>Jonas Kanwald</h1>
 <div className='con0'>
     <div className='con1'>
     <i class="icon1 zmdi zmdi-balance-wallet"></i>
     <p className='topup'>Top Up</p>
     </div>
     <div className='con2'>
     <i class=" icon1 zmdi zmdi-paypal-alt"></i>
     <p className='pay1'>Pay</p>
     </div>
     <div className='con3'>
     <i class=" icon1 zmdi zmdi-mail-send"></i>
     <p className='send'>Send</p>
     </div>
     <div className='con4'>
     <i class=" icon1 zmdi zmdi-check-circle-u"></i>
     <p className='request'>Request</p>
     </div>

     <div className='con5'>
         <h1 className='recent'>
             Recent Transaction
         </h1>
         <h5 className='today'>TODAY</h5>
     </div>
     <div className='con6'>
         <img className='one' src={one}/>
         <h5>Tom Holland</h5>
     </div>

     
 </div>
  </div>

</div>


      
        </>
    );
 
}

export default Container;