import React from "react";
import "./style.css/body.css";
import "./style.css/header.css";
import "./style.css/footer.css";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";


const DarkPage = () => {

  
    const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggleTheme = (e) => {
      if (e.target.checked) setDarkMode();
      else setLightMode();
    
  };

    
  return (

   
    <div className="DarkPage-1">


       // header section----------------------------------------------------------------------------------------

      <div className="home1">
          <div className="navbar">
            
            <div className="logo1">
              <div className="dinechat">DineChat</div>
              <div className="shopping-bag-solid1">
                <img className="shopping-bag-solid-icon" alt="" />
              </div>
            </div>
            <div className="navbar1">
              <div className="pages">
                <div className="contact">Landing</div>
                <img className="facebook-fill-icon" alt="" src="/chevrondown@2x.png" />
             
              </div>
              <div className="pages">
                <div className="contact">Pages</div>
                <img className="facebook-fill-icon"alt=""src="/chevrondown@2x.png"/>
                  
              </div>
              <div className="contact">Contact</div>
              <div className="contact">About</div>
              <div className="switch">
                
                <div className="switch1">
                
                
          <div className='dark_mode'>
           <input className='dark_mode_input'type='checkbox' id='darkmode-toggle' onChange={toggleTheme}/>
               <label className='dark_mode_label' for='darkmode-toggle'>
                 <Sun />
                <Moon />
               </label>
          </div>
                 
                  
                </div>
                 
              </div>
            </div>
            <div className="button-cta">
              <div className="button">
                <div className="button1">Login</div>
              </div>
              <div className="button2">
                <div className="button1">Register</div>
              </div>
            </div>
          </div>
          <div className="title4">
            <div className="find-your-new-container1">
              <span>{`Find your new style with `}</span>
              <span className="veshion1">Veshion</span>
            </div>
            <div className="buy-something-has"> Buy something has never been easy now, let's download Veshion now and get 30% off</div>
            
            <div className="button-download1">
              <img className="google-play-badge-1-icon1" alt=""src="/googleplaybadge-1@2x.png" />
                
              <img className="download-on-the-app-store-badg-icon1"alt="" src="/download-on-the-app-store-badge-usuk-rgb-blk-092917-1@2x.png"/>

            </div>
          </div>
          <img className="image-icon2" alt="" src="/image@2x.png" />
        </div>











        // body section----------------------------------------------------------------------------------------
      <div className="mobile-app-dark">

        

        <div className="feature5">
          <div className="title3">
            <div className="new-features">New Features</div>
            <div className="we-have-release">We have release some new features in the Veshion. Check it out now guys</div>
            
          </div>
          <div className="features2">
            <div className="feature6">
              <img className="icon3" alt="" src="/icon@2x.png" />
              <div className="text">
                <div className="free-delivery">Free Delivery</div>
                <div className="download-veshion-now"> Free delivery up to $7 to all addresses</div>
                 
                
              </div>
            </div>
            <div className="feature6">
              <img className="icon3" alt="" src="/icon@2x.png" />
              <div className="text">
                <div className="free-delivery">Discount Everyday</div>
                <div className="download-veshion-now">
                  Discount up to 15% everyday for all users
                </div>
              </div>
            </div>
            <div className="feature6">
              <img className="icon3" alt="" src="/icon@2x.png" />
              <div className="text">
                <div className="free-delivery">Free Return</div>
                <div className="download-veshion-now">Free return if the item does not match</div>
                  
                
              </div>
            </div>
          </div>
        </div>




        <div className="feature1">
          <div className="right-section1">
            <div className="title1">
              <div className="get-an-amazing">
                <span>{`Find your new style with `}</span>
                <span className="veshion1">Veshion</span>
              </div>
              <div className="download-veshion-now">Veshion always updates the latest fashion trends. Make sure you are already using this application</div>
              
            </div>
            <div className="features1">
              <div className="feature2">
                <div className="vehion-guarantees-the">Vehion guarantees the security of every user's transactions</div>
                  
                
                <div className="secure-transaction">Secure Transaction</div>
                <div className="icon">
                  <img className="shopping-bag-solid-icon"alt=""src="/lockfill@2x.png"/>
                
                </div>
              </div>
              <div className="feature2">
                <div className="vehion-guarantees-the">Don’t worry, all items in the Veshion are original products</div>
                  
                <div className="secure-transaction">Original Guarantee</div>
                <div className="icon">
                  <img className="shopping-bag-solid-icon"alt=""src="/awardfill@2x.png" />

                </div>
              </div>
              <div className="feature2">
                <div className="veshion-already-supports">Veshion already supports offline mode, make sure you've updated the application </div>
                 
                <div className="offline-support">Offline Support</div>
                <div className="icon">
                  <img className="shopping-bag-solid-icon"alt=""src="/wifi-off@2x.png"/>
                  
                </div>
              </div>
            </div>
          </div>
          <img className="image-icon1" alt="" src="/Capture-removebg-preview.png" />
        </div>




        <div className="feature">
          <div className="left-section1">
            <div className="title1">
              <div className="get-an-amazing">Get an amazing app in your pocket</div>
                
              
              <div className="download-veshion-now"> Download Veshion now and get 30% off for new user. Ready to follow the new trend?</div>
            
            </div>
          </div>
          <img className="image-icon" alt="" src="/Capture2-removebg-preview.png" />
        </div>


        <div className="testimoni1">
          <div className="state">
            <div className="state-child" />
            <div className="state-item" />
            <div className="state-child" />
            <div className="state-child" />
          </div>
          <div className="title">
            <div className="testimonial">TESTIMONIAL</div>
            <div className="what-people-say">What People Say</div>
          </div>
          <div className="cards">
            <div className="card">
              <img className="card-child" alt="" src="/ellipse-17@2x.png" />
              <div className="testimoni2">
                <div className="robert-fox">Robert Fox</div>
                <div className="stars">
                  <img className="star-fill-icon"alt=""src="/starfill@2x.png"/>
                  
                  <img className="star-fill-icon1" alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon2" alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon3"alt=""src="/starfill@2x.png" />
                  <img className="star-fill-icon4"alt=""src="/starfill@2x.png" />

                </div>
                <div className="i-really-recommend"> I really recommend anyone to download this application.Because there are many advantages of using this application.</div>

              </div>
            </div>
            <div className="card">
              <img className="card-child" alt="" src="/ellipse-17@2x.png" />
              <div className="testimoni2">
                <div className="robert-fox">Robert Fox</div>

                <div className="stars">
                  <img className="star-fill-icon"alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon1"alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon2"alt=""src="/starfill@2x.png"/>
                  <img  className="star-fill-icon3"alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon4" alt=""src="/starfill@2x.png"/>
                    
                </div>

                <div className="i-really-recommend"> I really recommend anyone to download this application.Because there are many advantages of using Veshion App.</div>
                 
              </div>
            </div>
            <div className="card">
              <img className="card-child" alt="" src="/ellipse-17@2x.png" />
              <div className="testimoni2">
                <div className="robert-fox">Robert Fox</div>
                <div className="stars">
                  <img className="star-fill-icon"alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon1"alt=""src="/starfill@2x.png" />
                  <img className="star-fill-icon2"alt=""src="/starfill@2x.png"/>
                  <img className="star-fill-icon3"alt=""src="/starfill@2x.png"/>  
                  <img className="star-fill-icon4"alt=""src="/starfill@2x.png"/>
                 
                </div>
                <div className="i-really-recommend">I really recommend anyone to download this application. Because there are many advantages of using this application.</div>
                 
              </div>
            </div>
          </div>
         
        </div>


        <div className="download">
          
          <img className="bg-icon" alt="" src="/bg@2x.png" />
          <div className="button-download">
            <img className="google-play-badge-1-icon" alt=""src="/googleplaybadge-1@2x.png"/>
           
            <img className="download-on-the-app-store-badg-icon" alt="" src="/download-on-the-app-store-badge-usuk-rgb-blk-092917-1@2x.png"/>
             
          </div>
          <div className="get-veshion-app">Get Veshion App Now</div>
        </div>

      </div>






      // footer section-------------------------------------------------------------------------------------

      <div className="footer">
          <div className="right-section">
            <div className="sitemap">
              <div className="sitemap1">Sitemap</div>
              <div className="home">Home</div>
              <div className="home">Features</div>
              <div className="home">Testimoni</div>
            </div>
            <div className="sitemap">
              <div className="sitemap1">Landing</div>
              <div className="home">Mobile App</div>
              <div className="home">Property</div>
              <div className="home">Personal Website</div>
              <div className="home">Web Developer</div>
              <div className="home">Online Course</div>
              <div className="home">Donation</div>
            </div>
            <div className="sitemap">
              <div className="sitemap1">Utility</div>
              <div className="home">FAQ</div>
              <div className="home">{`Terms & Conditions`}</div>
            </div>
          </div>
          <div className="left-section">
            <div className="find-your-new">Find your new style with Veshion</div>
              
            
            <div className="logo">
              <div className="veshion">Veshion</div>
              <div className="shopping-bag-solid">
                <img className="shopping-bag-solid-icon" alt=""src="/shoppingbag-solid@2x.png"/>
              
              </div>
            </div>
            <div className="sosmed">
              <div className="facebook-fill-wrapper">
                <img className="facebook-fill-icon"alt="" src="/facebookfill@2x.png" />
                 
              </div>  
                 
               
              <div className="facebook-fill-wrapper">
                <img className="facebook-fill-icon"alt=""src="/twitterfill@2x.png" />
                 
              </div>
              <div className="facebook-fill-wrapper">
                <img className="facebook-fill-icon"alt=""src="/linkedinfill@2x.png"/>
             
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default DarkPage;
