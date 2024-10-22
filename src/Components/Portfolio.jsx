/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-Commerce Website",
    description:
      "It is a E-commerce website project made with react JS only to show skills, many functionalities added, filter by price, category wise products, add or remove product in cart, loading, pagination routing and used react redux as well, also tried to make things dynamic, responsive as well..",
    url: "https://e-commerce-ten-pearl-86.vercel.app/",
  },
  {
    title: "Gusto Clone Website",
    description:
      "It is a Gusto clone Website Project, where you can create a company, Sign in, create account logout functionality added, local storage used to save data, like these many functionalities added in to website, not very responsive but functionable.",
    url: "https://verdant-panda-50245c.netlify.app/index.html",
  },
  {
    title: "Todo App",
    description:
      "It is a Todo Application where you can list your tasks and can change the status of task as well, created with react JS and functionality also added, used useState hook to create Application.",
    url: "https://todo-app-five-bice-25.vercel.app/",
  },
  {
    title: "Gemini AI App",
    description:
      "It is a clone of Google Gemini AI App made with JavaScript, tried to make it more attractive",
    url: "https://github.com/pradeepsingh7534/JS-App.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
