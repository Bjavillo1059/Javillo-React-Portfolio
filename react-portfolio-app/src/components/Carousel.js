import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselFade() { 

  return (    
    <Carousel fade>

        <Carousel.Item interval={5000}>
          <img
            classNameName="d-block w-400px"
            src="/img/Deadhorse point.jpg"
            height={300} width={1000}
            id="about-me"
            alt="About Me slide"
          />

          <Carousel.Caption>
            <h3>About Me</h3>
            <p>
            My name is Brandon Javillo and I am a recently retired US Army Veteran, proud to have served and loved every minute of the traveling and relationships I've built along the way! Currently I am married to the most beautiful, loving, caring, and amazing woman and I have 4 children. I spent 20 years in the military as an aircraft electrician and loved my job! I left the Army earlier than I really wanted to, but moved on to a bigger and better future with computer coding. I have chosen to go into something that I enjoy and look forward to learning anything and everything I can!

            I attended some college at Austin Peay State University and Pierce Community College, emphasis in the Healthcare industry and Electrical Engineering & Development. I have a cumilative of 105 college credits, I will be continuing to acheive my BS in Computer Science in the future at UNLV. I am currently attending University California Davis bootcamp for Full Stack Web develpoment. I have just completed a project that gives a User the ability to take control of what goes into their bodies called NutriVal. If you would like to check it out please come and take a look at my GitHub page (github.com/Bjavillo1059).

            I am also a trained and experienced Aircraft Electrician and Electrician supervisor with 20 years’ experience working on the most advanced rotary-wing aircraft. Experience and knowledge operating, maintaining, and instructing technicians on the fully integrated digital cockpit management system, Common Aviation Architecture Cockpit; as well as older Analog models the military has to offer. I possess expertise in the essentials of safety and quality with strong customer service experience, collaboration, and a background of achievement in support of all levels of management.

            I am also an experienced and dedicated resource and asset allocations professional, whose primary goal is for the betterment of the organization and protecting its integrity. Balancing a great adaptable work ethic in team building, financial resolution, and budget analysis in spending as well as cost effectiveness. Skilled in analyzing technical specifications, engineer schematics, problem diagnosis, troubleshooting and resolution. Proven ability to achieve results through task orientation, operational responsibility and data collection. Also, strong skills in agency and department supervision, written, verbal communications and delivering technical training under the guidance of organization policies.
            </p>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            classNameName="d-block w-100"
            src="/img/serene.jpg"
            height={300} width={1000}
            id="misc-info"
            alt="Misc slide"
          />

          <Carousel.Caption>
            <h3>Miscellaneous</h3>
            <p>              
              I love doing whatever makes my family and I happy. Whether it's playing sports, going to the movies, or just hanging out, I love it!  Hiking the outdoors and taking pictures at National Parks are just a few of my favorite things to do.  Sitting around spending time with my family on vacation, we love everything!  Most of all, my family are my food buddies; because I love to eat everything I drag my family around
              with me just trying to make sure they are happy and to to try any dish atleast once!              
            </p>

            <p className="display-6">
              "Everyday, 22 veterans lose their battle to PTS (post traumatic
              stress) on American soil!" 1 Veteran lost every 65 minutes is 1
              Veteran to many, please spread the awareness. The Military Suicide
              Awareness. Say Hi, be kind, and help your fellow Americans to get
              through to another day!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            classNameName="d-block w-100"
            src="/img/projects cover.jpg"
            height={300} width={1000}
            id="projects-info"
            alt="Projects slide"
          />

          <Carousel.Caption>
            <h3>Projects</h3>
            <p>
              I created this portfolio page, with more to come. I am
              continuously growing and acheiving experience with every step
              taken into a career of software development. Below I will
              consistently add projects that I have created and/or have
              contributed to. I stand by my morals in this new world of
              development, that "hardwork, dedication, and commitment to
              excellence is the foundation of a brighter future for oneself!"
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
  );
};

export default CarouselFade;
