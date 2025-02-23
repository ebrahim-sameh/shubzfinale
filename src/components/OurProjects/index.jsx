import React, { useEffect } from 'react'
import Slider from "react-slick";
import SingleProjectBox from '../SingleProjectBox';
import Image from '../images/bg_projects.jpg';
// import Button from '../UI/Button';
// import { MusicIcon } from '../UI/icons';
import Aos from "aos";

import "aos/dist/aos.css";
import './OurProjects.css'

const OurProjects = ({ id, projects, title }) => {


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id={id} className='our__project__section'>
      <div className="container">
        <img className='image__bgk' src={Image} alt='' />
        <h2 data-aos="fade-up" className='section__title'>{title}</h2>
        <p data-aos="fade-up" className='our__project__subtitle'>We are very proud of our client base and the lasting relationships we have forged over many years.</p>
        <div data-aos="fade-up">
          <Slider {...settings}>
            {projects.map(project => (
              <SingleProjectBox 
                key={project.id}
                name={project.name}
                singer={project.singer}
                img={project.img}
                audio={project.audio}
                className='our__porject__slider'
                />
                ))}
          </Slider>
          {/* <Button>
            <div className="ourproject__btn">
              <MusicIcon />
              view all projects
            </div>
          </Button> */}
        </div>
      </div>
    </section>
  )
}

export default OurProjects