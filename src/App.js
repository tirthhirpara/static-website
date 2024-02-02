import './App.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaGooglePlusG, FaVimeoV, FaYoutube, FaPinterest, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoConstructSharp, IoPeopleSharp } from "react-icons/io5";
import { FaBuilding, FaHome, FaPen } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import img1 from './images/logo.png';
import img2 from './images/im2.jpeg';
import img3 from './images/im3.jpeg';
import img4 from './images/im4.jpeg';
import img5 from './images/im5.jpeg';
import img6 from './images/im6.jpeg';
import img7 from './images/im7.jpeg';
import img8 from './images/im8.jpeg';
import img9 from './images/im9.jpeg';
import img10 from './images/im10.jpeg';
import img11 from './images/im11.jpeg';
import img12 from './images/im12.jpeg';
import img13 from './images/im13.jpeg';
import img14 from './images/im14.jpeg';


function App() {
  return (
    <div className='website'>
      <div className="top-header">
        <div className="container">
          <div className="d-flex space-between item-center">
            <div className="left-info">
              <ul className="d-flex">
                <li><a href=""><i><IoLocationSharp></IoLocationSharp></i> Address: 4578 Marmora Road, Glasgow, D04 89GR</a>
                </li>
                <li><a href=""><i><FaPhoneAlt></FaPhoneAlt></i> (800) 123-0045:(800) 123-0045</a></li>
              </ul>
            </div>
            <div class="right-info d-flex">
              <a href=""><i><FaFacebookF></FaFacebookF></i></a>
              <a href=""><i><FaTwitter></FaTwitter></i></a>
              <a href=""><i><FaGooglePlusG></FaGooglePlusG></i></a>
              <a href=""><i><FaVimeoV></FaVimeoV></i></a>
              <a href=""><i><FaYoutube ></FaYoutube ></i></a>
              <a href=""><i><FaPinterest ></FaPinterest  ></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* header start */}

      <div className='header'>
        <div className='container'>
          <div className="d-flex space-between item-center">
            <div className="logo">
              <img src={img1}></img>
            </div>

            <div className='d-flex space-between item-center'>

              <ul className='main-menu d-flex'>
                <li><a style={{ color: "yellow" }}>HOME<i><MdKeyboardArrowDown></MdKeyboardArrowDown></i></a></li>
                <li><a>ABOUT<i></i></a></li>
                <li><a>SERVICES<i><MdKeyboardArrowDown></MdKeyboardArrowDown></i></a></li>
                <li><a>PROJECTS<i><MdKeyboardArrowDown></MdKeyboardArrowDown></i></a></li>
                <li><a>PAGES<i><MdKeyboardArrowDown></MdKeyboardArrowDown></i></a></li>
                <li><a>BLOG<i><MdKeyboardArrowDown></MdKeyboardArrowDown></i></a></li>
                <li><a>CONTACTS<i></i></a></li>
                <li><a><i><FaSearch ></FaSearch ></i></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>


      {/* header end */}

      {/* slider start */}

      <div className='slider'>
        <div className='img'>
          <img src={img2}></img>
        </div>
        <div className='contant'>
          <div className='line'>

          </div>
          <h1>PROJECTS</h1>
          <h3>THIS YEAR WE TOOK COMPLATE CONSTRUCTIONS THAN EVER BEFORE...</h3>
          <button className='btn'>SEE OUR RECENT PROJECTS</button>
        </div>
      </div>

      {/* slider end */}

      {/* our services start */}

      <div className='container'>
        <div className='services pd-y'>
          <div className='line'>

          </div>
          <h1>OUR SERVICES</h1>
        </div>

        <div className='d-flex space-between'>
          <div className='d-flex w-33 space-between'>
            <div className='d-flex our-services'>
              <div className='icon'>
                <i><IoConstructSharp></IoConstructSharp></i>
              </div>
              <div className='content'>
                <h3>PRE-CONSTRUCTION SERVICES</h3>
                <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand...</p>
              </div>
            </div>
          </div>
          <div className='d-flex w-33 space-between'>
            <div className='d-flex our-services'>
              <div className='icon'>
                <i><IoPeopleSharp></IoPeopleSharp></i>
              </div>
              <div className='content'>
                <h3>GENERAL CONTRACTING</h3>
                <p>We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!</p>
              </div>
            </div>
          </div>

          <div className='d-flex w-33 space-between'>
            <div className='d-flex our-services'>
              <div className='icon'>
                <i><FaBuilding></FaBuilding></i>
              </div>
              <div className='content'>
                <h3>CONSTRUCTION SERVICES</h3>
                <p>Our customers love the pace/quality tempo that we show during each of the principal construction processes!</p>
              </div>
            </div>
          </div>

        </div>

        <div className='d-flex space-between'>
          <div className='d-flex w-33 space-between'>
            <div className='d-flex our-services'>
              <div className='icon'>
                <i><MdManageAccounts></MdManageAccounts></i>
              </div>
              <div className='content'>
                <h3>CONSTRUCTION MANAGEMENT</h3>
                <p>Construction project management is essential. We're using the most time and iterations efficient life cycles methods for that.</p>
              </div>
            </div>
          </div>
          <div className='d-flex w-33 space-between'>
            <div className='d-flex our-services'>
              <div className='icon'>
                <i><FaHome></FaHome></i>
              </div>
              <div className='content'>
                <h3>BUILDING INFORMATION MODELING (BIM)</h3>
                <p>Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.</p>
              </div>
            </div>
          </div>

          <div className='d-flex w-33 space-between'>
            <div className='d-flex our-services'>
              <div className='icon'>
                <i><FaPen></FaPen></i>
              </div>
              <div className='content'>
                <h3>DESIGN-BUILD</h3>
                <p>If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter.</p>
              </div>
            </div>
          </div>

        </div>





      </div>

      {/* our services end */}


      {/* OUR HISTORY start */}

      <div className='our pd-y md-y'>
        <div className='container'>
          <div className='d-flex'>
            <div className='w-50 history'>
              <div className='line'></div>
              <h2>OUR HISTORY</h2>
              <h4>OUR CONSTRUCTION COMPANY HAS BEEN FOUNDED 10 YEARS AGO, AT THE VERY PEAK OF THE BUILDING FRENZY IN THE US...</h4>
              <p>Since then we've built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the manpower, working hours, materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense!</p>
              <button className='btn'>READ MORE</button>
            </div>

            <div className='w-50 img2'>
              <img src={img3}></img>
            </div>
          </div>
        </div>
      </div>


      {/* OUR HISTORY end */}

      {/* image section start */}

      <div className='pd-y'>
        <div className='d-flex flex-wrap'>
          <div className='w-25 image'>
            <div className='image1'>
              <img src={img4}></img>
              <div className='comm'> <h3>COMMERCIAL</h3></div>
              <div className='content1'>
                <div>
                  <h4>COMMERCIAL</h4>
                  <p>It's probably the most diverse category of construction to work in. But we've got experience…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img5}></img>
              <div className='comm'> <h3>CULTURAL / LIFESTYLE</h3></div>
              <div className='content1'>
                <div>
                  <h4>CULTURAL / LIFESTYLE</h4>
                  <p>Working on a socially important building, such as a park involves additional landscape construction expertise.</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img6}></img>
              <div className='comm'> <h3>DATA / TECHNOLOGY</h3></div>
              <div className='content1'>
                <div>
                  <h4>DATA / TECHNOLOGY</h4>
                  <p>While building a headquarters building for an IT company is relatively easy, we've also…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img7}></img>
              <div className='comm'> <h3>EDUCATIONAL</h3></div>
              <div className='content1'>
                <div>
                  <h4>EDUCATIONAL</h4>
                  <p>Educational institutions can be much more creative than your regular school or a college campus!…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img8}></img>
              <div className='comm'> <h3>GOVERNMENT / MILITARY</h3></div>
              <div className='content1'>
                <div>
                  <h4>GOVERNMENT / MILITARY</h4>
                  <p>The US military and States governments used our expertise and manpower to build numerous military-grade…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img9}></img>
              <div className='comm'> <h3>HEALTHCARE</h3></div>
              <div className='content1'>
                <div>
                  <h4>HEALTHCARE</h4>
                  <p>We can build any type of healthcare buildings. From a small private medical clinic to…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img10}></img>
              <div className='comm'><h3>MANUFACTURING / INDUSTRIAL</h3></div>
              <div className='content1'>
                <div>
                  <h4>MANUFACTURING / INDUSTRIAL</h4>
                  <p>Building a manufacturing facility or a factory house can be much more challenging than building…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-25 image'>
            <div className='image1'>
              <img src={img11}></img>
              <div className='comm'> <h3>WAREHOUSE / LOGISTICS</h3></div>
              <div className='content1'>
                <div>
                  <h4>WAREHOUSE / LOGISTICS</h4>
                  <p>While building a warehouse for an e-store is no easy feat itself, think about building…</p>
                  <a className='aaa'>VIEW PROJECTS</a>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>


      {/* image section end */}


      {/* recent news start */}

      <div className='container'>
        <div className='recent pd-y'>
          <div className='line'>

          </div>
          <h1>RECENT NEWS</h1>
        </div>

        <div className='d-flex space-between'>
          <div className='news1 w-33 pd-y'>
            <img src={img12}></img>
            <h2>FUTURE PROOFING HOSPITALS</h2>
            <div className='d-flex rec'>
              <h4>Jan.20, 2022 </h4> <i>by Brian Williamson</i>
            </div>
            <p>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</p>
          </div>
          <div className='news1 w-33 pd-y'>
            <img src={img13}></img>
            <h2>BIKE PARTS WAREHOUSE, DE</h2>
            <div className='d-flex rec'>
              <h4>Jan.20, 2022 </h4> <i>by Brian Williamson</i>
            </div>
            <p>Delaware proved to be a very friendly place to work at… While invited there for completing a mid-sized warehouse for…</p>
          </div>
          <div className='news1 w-33 pd-y'>
            <img src={img14}></img>
            <h2>JOY HOTEL & CASINO</h2>
            <div className='d-flex rec'>
              <h4>Jan.20, 2022 </h4> <i>by Brian Williamson</i>
            </div>
            <p>This hotel & casino complex is our most recent completed building… The whole structure that took us 6 months to…</p>
          </div>
        </div>


      </div>


      {/* recent news end */}

      {/* footer start */}

      <footer className='pd-y'>
        <div className='footer pd-y'>
          <div className='container'>
            <div className='d-flex space-between'>
              <div className='w-25 con1'>
                <div className='logo2'>
                  <img src={img1}></img>
                </div>
                <p>Construction's core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!</p>
              </div>

              <div className='w-25 nav'>
                <h3>NAVIGATION</h3>
                <p>Industry News</p>
                <p>Projects in Development</p>
                <p>Our Services</p>
                <p>Contacts</p>
              </div>

              <div className='w-25 comments'>
                <h3>RECENT COMMENTS</h3>
                <i>Brian Williamson on</i>
                <p>Construction's core values have been shaped over more than 10 years of</p>
                <i>Brian Williamson on</i>
                <p>Construction's core values have been shaped over more than 10 years of</p>
                <i>Brian Williamson on</i>
                <p>Construction's core values have been shaped over more than 10 years of</p>
              </div>
              <div className='w-25 con'>
                <h3>CONTACTS</h3>
                <h5>Address 4578 Marmora Road, Glasgow, D04 89GR</h5>
                <h6>Phones (800) 123-0045 (800) 123-0045</h6>
                <p>E-mail: <i>info@demolink.org</i></p>
                <h6>We are open Mn-Fr: 10 am-8 pm</h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}

      {/* copiright start */}

      <div className='copy'>

        <div className='container'>
          <div className='d-flex space-between item-center'>
            <div className='left'>
              <p>Construction 2023. All Rights Reserved</p>
            </div>
            <div className='right'>
              <i><FaFacebookF></FaFacebookF></i>
              <i><FaTwitter></FaTwitter></i>
              <i><FaGooglePlusG></FaGooglePlusG></i>
              <i><FaVimeoV></FaVimeoV></i>
              <i><FaYoutube></FaYoutube></i>
              <i><FaPinterest></FaPinterest></i>
            </div>
          </div>
        </div>
      </div>



      {/* copiright end */}

    </div >
  );
}

export default App;
