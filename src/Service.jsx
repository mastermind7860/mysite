import React from 'react'
import Cardx from "./Cardx";
import web from '../src/images/student.jpg'
import Sdata from './Sdata'



function Service() {
  return (
    <>
        <div className="my-5">
            <div className="text-center">Our Service</div>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((val,index)=>{
                                return <Cardx imgsrc={val.imgsrc} title={val.title}/>
                            })
                        }
                        
                    
                    </div>
                </div>
            </div>
        </div>
    </>
      
  );
}

export default Service;
