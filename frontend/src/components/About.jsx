import React from 'react'
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className='heading'>ABOUT US</h1>
                <p>The Only thing we are serious about is food</p>
            </div>
            <p className='mid'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dolorum eaque architecto voluptatum. Obcaecati officia veritatis asperiores assumenda qui deserunt. Mollitia dolore explicabo, nihil beatae ipsa molestias eius tempore magnam laborum excepturi voluptates optio unde inventore pariatur nostrum quia nobis? Voluptas, praesentium! Est mollitia necessitatibus nam, ad enim eaque harum.
            </p>
            <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight/>
                </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About