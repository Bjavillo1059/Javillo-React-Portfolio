import React from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";

export default function Portfolio() {


  return (
    <div className="projects__cards">
      <h1>
        A Few Projects that have been created since I've started this adventure!
      </h1>
      <div className="projects__cards__container">
        <div className="projects__cards__wrapper">
          <ul className="projects__cards__items">
            <ProjectsCard
              src="images/img-13.PNG"
              text="A web application that allows users to search for food items and their nutritional value. The user can also create a custom food item and add it to their profile."
              label="NutriVal"      
              href="https://github.com/Bjavillo1059/Nutritional-Value"
              >
              
            </ProjectsCard>
            <ProjectsCard
              src="images/img-16.PNG"
              text="An on and offline application the can add and subtract expenses from a budget with or without a connection.  When transactions are entered offline the data is stored and cached until an online connection is established, once connection is on the data is updated and saved to application."
              label="PWA Budget Tracker"
              href="https://bjavillo-pwa-budget-tracker.herokuapp.com/"              
            />

            <ul className="projects--cards--items">
              <ProjectsCard
                src="images/img-18.PNG"
                text="An application that is able to view, create, and track daily workouts. A User can track multiple exercises in a workout on a given day. A User can also track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, a User can track by distance traveled."
                label="Workout Tracker"
                href="https://bjavillo-fit-tracker-2021.herokuapp.com/"
              />
              <ProjectsCard
                src="images/img-1.PNG"
                text="Created a little Javascript quiz for familiarity and understanding."
                label="Code Quiz"
                href="https://bjavillo1059.github.io/My-Code-Quiz/"
              />
              <ProjectsCard
                src="images/img-14.PNG"
                text="A web application that allows users to generate a password randomly."
                label="Password Generator"
                href="https://bjavillo1059.github.io/password-generator/"
              />
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

// <div>
//     {" "}
//     {projects.map((projects) => (
//       <ProjectsCard projects={projects} />
//     ))}
//   </div>
