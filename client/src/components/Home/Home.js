import React from "react";
import './Home.css'
import pp1 from '../Images/PostPics/postpic1.png'
import pp2 from '../Images/PostPics/postpic2.png'
import pp3 from '../Images/PostPics/postpic3.png'
import pp4 from '../Images/PostPics/postpic4.png'

const Home = () =>{
 return(
      <div className="home">
            <div className="card home-card">
               <h5> Maruthi Rathore</h5>
               <section className="card-image">
                  <img src={pp1} alt="Randompic"/>
                  <section className="card-content">
                     <h6> TITLE </h6>
                     <p> This is description </p>
                     <input type="text" placeholder="add a comment" />
                     <i className="material-icons">favorite</i>
                     <i className="material-icons">thumb_up</i>
                  </section>
               </section> 

            </div>

            <div className="card home-card">
               <h5> Maruthi Rathore</h5>
               <section className="card-image">
                  <img src={pp4} alt="Randompic"/>
                  <section className="card-content">
                     <h6> TITLE </h6>
                     <p> This is description </p>
                     <input type="text" placeholder="add a comment" />
                     <i className="material-icons">favorite</i>
                     <i className="material-icons">thumb_up</i>
                  </section>
               </section> 

            </div>
            
            <div className="card home-card">
               <h5> Maruthi Rathore</h5>
               <section className="card-image">
                  <img src={pp3} alt="Randompic"/>
                  <section className="card-content">
                     <h6> TITLE </h6>
                     <p> This is description </p>
                     <input type="text" placeholder="add a comment" />
                     <i className="material-icons">favorite</i>
                     <i className="material-icons">thumb_up</i>
                  </section>
               </section> 

            </div>
            
            <div className="card home-card">
               <h5> Maruthi Rathore</h5>
               <section className="card-image">
                  <img src={pp2} alt="Randompic"/>
                  <section className="card-content">
                     <h6> TITLE </h6>
                     <p> This is description </p>
                     <input type="text" placeholder="add a comment" />
                     <i className="material-icons">favorite</i>
                     <i className="material-icons">thumb_up</i>
                  </section>
               </section> 

            </div>
            
            <div className="card home-card">
               <h5> Maruthi Rathore</h5>
               <section className="card-image">
                  <img src={pp4} alt="Randompic"/>
                  <section className="card-content">
                     <h6> TITLE </h6>
                     <p> This is description </p>
                     <input type="text" placeholder="add a comment" />
                     <i className="material-icons">favorite</i>
                     <i className="material-icons">thumb_up</i>
                  </section>
               </section> 

            </div>
            
      </div> 


 )
}

export default Home;