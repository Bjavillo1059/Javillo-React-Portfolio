import React from "react";

function Carousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            classNameName="d-block w-400px"
            src="/img/Deadhorse point.jpg"
            alt="About Me slide"
          />
          <Carousel.Caption>
            <h3>About Me</h3>
            <p>
              Hi, my name is Brandon javillo and here is a little about me. I am a recently retired US Army Veteran, proud to have erved and love every minute of the traveling and relationships I've built along the way! Currently I am married to the most beautiful, loving, caring, and amazing woman and I have 4 children. I spent 20 years in the military as an aircraft electrician and loved my job! I left the Army earlier than I really wanted to, but moved on to a bigger and better future with coding. I recently just started in the UC Davis Full Stack bootcamp and when complete, plan to move on to UNLV to complete a BS in Computer Science. Let's just say because of my love for videogames and my job in the militray, I now have chosen something that I enjoy and look forward to learning anything and everything I can!
            </p>
            <a
              href="#"
              className="btn btn-lg btn-primary"
              id="aboutMe-info-btn"
            >
              Click for More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameName="d-block w-400px"
            src="/img/projects cover.jpg"
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
        <Carousel.Item>
          <img
            classNameName="d-block w-400px"
            src="/img/serene.jpg"
            alt="Misc slide"
          />

          <Carousel.Caption>
            <h3>Miscellaneous</h3>
            <p>
              {" "}
              I love doing whatever makes my family and I happy. Whether it's
              <a href="/img/kissing camels CO.PNG" className="text-warning">
                {" "}
                hiking the outdoors,
              </a>
              taking pictures at{" "}
              <a href="/img/Deadhorse point.jpg" className="text-warning">
                {" "}
                National Parks,
              </a>{" "}
              or even just sitting around spending time with my family on
              vacation. We love everything! Most of all, my family are my food
              buddies; because I love to eat everything I drag my family around
              with me just try
              <a
                href="/img/foodie-culture-society.jpg"
                className="text-warning"
              >
                {" "}
                any dish atleast once!
              </a>
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
      </Carousel>
    </>
  );
}
export default Carousel;
