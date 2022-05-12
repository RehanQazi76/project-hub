import React from 'react';
function Syear(){
    return(
        <>
        <h1 style={{textAlign:'center'}}>
         please select the year
        </h1>
        <div className='card ' style={{width:'25rem', margin:'0 auto 0 auto'}}>
          <div className='card-header'>
              <h1>Select ur year</h1>
          </div>
          <div className='card-body' style={{display:'flex',justifyContent:'center'}} >
              <button className='btn btn-primary' style={{width:'fit-content'}}> FY</button>
          </div>
        </div>
        </>
    )
}
export default Syear;