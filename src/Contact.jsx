import React,{useState} from 'react'


function Contact() {
    const [data, setdata] = useState({
        fullname:"",
        contact:"",
        email:"",
        msg:"",
    });
    const InputEvent =(event)=>{
        const {name,value} = event.target;
        setdata((oldData)=>{
            return{
                ...oldData,
                [name]:value,
            }
        });
    }
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`${data.fullname}`);
    }
  return (
    <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>    
        </div>
        <div className="container-fluid contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form action="" onSubmit={formSubmit}>
                    
                        <div className="mb-3">
                            <label for="" className="form-label">Full Name</label>
                            <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" class="form-control"
                            placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="" class="form-label">Contact Number</label>
                            <input name="contact" value={data.contact} onChange={InputEvent} type="number" className="form-control"
                            placeholder="Enter Your Contact No"  />
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Email address</label>
                            <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form-group">
                          <label for="">Message</label>
                          <textarea name="msg" value={data.msg} onChange={InputEvent}  className="form-control" name="" id="" rows="8" cols="1"></textarea>
                        </div>
                        
                        
                        
                        
                        <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
                        </form>
                    
                </div>
            </div>
        </div>
    </>
      
  );
}

export default Contact;
