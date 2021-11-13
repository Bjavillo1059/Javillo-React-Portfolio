import React from "react";

function Carousel() {
  return (
<>
<div id="myCarousel" className="carousel  slide carousel-fade item-align-center" data-bs-interval="5000"
        data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active" id="about-me">
                <div className="overlay-image" style={{backgroundImage: "url(./img/Deadhorse\ point.jpg);"}}></div>
                <div className="container w-400px">
                    <h1>About Me</h1>
                    <p> Hi, my name is Brandon javillo and here is a little about me. I am a recently retired US Army Veteran, proud to have served and love every minute of the traveling and relationships I've built along the way!  Currently I am married to the most beautiful, loving, caring, and amazing woman and I have 4 children. I spent 20 years in the military as an aircraft electrician and loved my job! I left the Army earlier than I really wanted to, but moved on to a bigger and better future with coding. I recently just started in the UC Davis Full Stack bootcamp and when complete, plan to move on to UNLV to complete a BS in Computer Science. Let's just say because of my love for videogames and my job in the militray, I now have    chosen something that I enjoy and look forward to learning anything and everything I can! 
                    </p>
                    
                        <a href="#" className="btn btn-lg btn-primary" id="aboutMe-info-btn">
                        Click for More
                        </a>
                </div>
            </div>
            <div className="carousel-item" id="hobbies">
                <div className="overlay-image" style={{backgroundImage: "url(./img/goals.jpg);"}}></div>
                <div className="container">
                    <h1>Hobbies</h1>
                    <p> I am a pretty simple person who doesn't like to be bothered with the stressful things in life.
                        I've spent a lot of time worrying about pleasing others just to try and get ahead in life, which
                        caused many headaches and confrontations. Now I only look forward to reaching one goal in life,
                        which is the pursuit of happiness! For me and my family, enjoying life and what it has to offer
                        is everything that you need to be happy!</p>
                </div>
            </div>
            <div className="carousel-item" id="projects">
                <div className="overlay-image" style={{backgroundImage: "url(./img/projects\ cover.jpg);"}}></div>
                <div className="container">
                    <h1>Projects</h1>
                    <p>
                        I created this portfolio page, with more to come. I am continuously growing and acheiving
                        experience
                        with every step taken into a career of software development. Below I will consistently add
                        projects that
                        I have created and/or have contributed to. I stand by my morals in this new world of
                        development, that
                        "hardwork, dedication, and commitment to excellence is the foundation of a brighter future for
                        oneself!"
                    </p>
                    <a href="#" className="btn btn-lg btn-primary" id="projects-info-btn">
                        Click to See Projects
                    </a>
                </div>
            </div>
            <div className="carousel-item" id="miscellaneous">
                <div className="overlay-image" style={{backgroundImage: "url(./img/serene.jpg);"}}></div>
                <div className="container">
                    <h1>Miscellaneous</h1>
                    <p> I love doing whatever makes my family and I happy. Whether it's 
                        <a
                            href="./img/kissing camels CO.PNG" className="text-warning"> hiking the outdoors, 
                        </a>

                    taking pictures at 
                        <a href="./img/Deadhorse point.jpg" className="text-warning"> National Parks, 
                        </a>
                    or even just sitting around spending time with my family on vacation.                      
                    We love everything! Most of all, my family are
                    my food buddies; because I love to eat everything I drag my family around with me just try 
                        <a href="./img/foodie-culture-society.jpg" className="text-warning"> any dish
                            atleast once!
                        </a> 
                    </p>
                    <p className="display-6">"Everyday, 22 veterans lose their battle to PTS (post traumatic stress) on
                        American soil!" 1 Veteran lost every 65 minutes is 1 Veteran to many, please spread the
                        awareness. The Military Suicide Awareness. Say Hi, be kind, and help your fellow Americans to
                        get through to another day! 
                    </p>
                   
                </div>
            </div>
        </div>
        <a href="#myCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
            <span className="sr-only visually-hidden">Previous</span>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a href="#myCarousel" className="carousel-control-next" role="button" data-bs-slide="next">
            <span className="sr-only visually-hidden">Next</span>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
</>
  )
}
export default Carousel;