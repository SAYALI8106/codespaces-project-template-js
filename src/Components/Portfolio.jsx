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
import image from "../images/portfolio.avif";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase projects and skills. Implemented responsive design for optimal viewing across devices.",
    url: "https://sayali8106.github.io/Portfolio/",
  },
  {
    title: "Food Delivery Website",
    description:
      "Designed and implemented a website for a food delivery service. Included features for browsing menus and placing orders.",
    url: "https://wondrous-arithmetic-d7e1ea.netlify.app",
  },
  {
    title: "Redbus Booking Service",
    description:
      "Developed a bus booking service similar to Redbus. Featured functionalities for searching routes and managing bookings.",
    url: "https://sayali8106.github.io/RedBus_Clone/",
  },
  {
    title: "IT Solutions Company Website",
    description:
      "Created a website for an IT solutions company. Showcased services offered, client testimonials, and contact information.",
    url: " https://sayali8106.github.io/ITSolutions/",
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
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft"}}
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
