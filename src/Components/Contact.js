import React, { useState } from 'react'

function Contact() {
    const [contact, setContactDetail] = useState({
        firstname:"",
        lastname:"",
        location:"",
        phone:""
    });

   const handleChange = (event) => {
        Contact[event.target.name]=event.target.value;
        setContactDetail({...Contact,Contact})
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Thankyou For Your response")
        setContactDetail({
            firstname:"",
            lastname:"",
            location:"",
            phone:""
        })
    }
   
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
            <h4 className="contact text-center mt-5">Contact</h4>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" for="exampleInputFirstname1">FirstName</label>
                        <input className="input" onChange={handleChange} name="firstname" value={contact.firstname} type="text" className="form-control" id="exampleInputFirstname"required/>
                    </div>
                    <div className="form-group">
                        <label  className="label" for="exampleInputLastname">LastName</label>
                        <input className="input" onChange={handleChange} name="lastname" value={contact.lastname} type="text" className="form-control" id="exampleInputLastname"required/>
                    </div>
                    <div className="form-group">
                        <label  className="label" for="exampleInputLastname">Location</label>
                        <input className="input" onChange={handleChange} name="location" value={contact.location} type="text" className="form-control" id="exampleInputLocation"required/>
                    </div>
                    <div className="form-group">
                        <label  className="label" for="exampleInputPhone">Phone no.</label>
                        <input className="input" onChange={handleChange} name="phone" value={contact.phone} type="text" className="form-control" id="exampleInputPhone"required/>                 </div>
                    <button type="submit" className="btn btn">Submit</button>
              </form>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                  <h4 className="location">Our Location</h4>
                  <center><img className="mt-5" src="./image/map.png" alt="noImage" width="80%"/></center>
                  <h5 className="location mt-4">Phone: +977 123456789</h5>
                  <h6 className="location mt-4">Location: Baneshwor</h6>
              </div>
              </div>
        </div>
    )
}

export default Contact
