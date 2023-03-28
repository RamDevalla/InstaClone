import React from "react";
import './Profile.css';
import pic1 from '../Images/pic1.png'
import pic2 from '../Images/pic2.png'
import pic3 from '../Images/pic3.png'
import pic4 from '../Images/pic4.png'
import pic5 from '../Images/pic5.png'
import pic6 from '../Images/pic6.png'


const Profile = () =>{
 return(
    <div className="container"> 

      <div className="first-div">

            <section className="image-section"> 
            <img src={pic1} alt="Image1" className="Profile-Image" />
            </section>

            <section className="name-section">
               <h4>
                  Maruthi Rathore 
               </h4>
               <section className="postdetails-section">
                  <h5> 44 Posts     </h5>
                  <h5> 44 Followers </h5>
                  <h5> 44 Following </h5>
               </section>
            </section>

      </div>

      <div className="gallery-div">
      <img src={pic1} alt="Image1" className="gallery-image" />
      <img src={pic2} alt="Image1" className="gallery-image" />
      <img src={pic3} alt="Image1" className="gallery-image" />
      <img src={pic4} alt="Image1" className="gallery-image" />
      <img src={pic5} alt="Image1" className="gallery-image" />
      <img src={pic6} alt="Image1" className="gallery-image" />
      <img src={pic3} alt="Image1" className="gallery-image" />

      </div>
    </div>
 )
}

export default Profile;