"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";
import { Projects } from "../constants";
import HeroContainer from "./HeroContainer";

import { FaArrowRight, FaGithub } from "react-icons/fa6";

const Slider = () => {
  const distances = [80, 200, 300, 140, 210, 190, 155, 80, 58, 227];

  useGSAP(() => {
    const slider = document.querySelector(".slider");
    const sections = document.querySelectorAll(".slider section");
    const fishies = document.querySelectorAll(".fish-container img");

    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 2,
        end: () => slider.offsetWidth,
      },
    });

    tl.to(slider, {
      xPercent: -80,
    });

    sections.forEach((stop, index) => {
      tl.from(stop.querySelector(".content"), {
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: stop.querySelector(".content"),
          start: "left center",
          end: "center center",
          containerAnimation: tl,
          scrub: true,
        },
      }).from(
        stop.querySelector(".image"),
        {
          xPercent: 100,
          yPercent: -50,
          ease: "elastic.out(1, 1)",
          scrollTrigger: {
            trigger: stop.querySelector(".image"),
            scrub: 2,
            containerAnimation: tl,
          },
        },
        "<"
      );
    });

    fishies.forEach((fish, i) => {
      gsap.from(fish, {
        xPercent: fish.dataset.distance,
        scrollTrigger: {
          scrub: 0.3,
        },
      });
    });

    // smooth scroll
    const lenis = new Lenis({
      elements: [document.querySelector("body")],
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      tl.kill();
      lenis.destroy();
    };
  }, []);

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  const handleGithubClick = (githubUrl) => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div>
      <div className="outer">
        <div className="slider">
          <section>
            <HeroContainer />
          </section>

          <section className="bg-white">
            <div className="inner">
              <div className="content flex flex-col gap-28 text-black">
                <h1 className="text-5xl font-thin">• PROJECTS •</h1>
                <div className="flex flex-col gap-10 justify-center ps-4 py-2 border-s border-white text-xl">
                  <p>HOLIDAZE</p>
                  <p>PriceClub</p>
                  <p>Auction Hub</p>
                </div>
              </div>
            </div>
          </section>

          {Projects.map((project, index) => (
            <section key={index}>
              <div className="inner">
                <Image
                  src={project.imgURL}
                  alt="dragon image"
                  width={200}
                  height={
                    project.imgURL === "/images/Holidaze-presentation.png"
                      ? 100
                      : 24
                  }
                  className="image"
                />
                <div className="content flex flex-col gap-8">
                  <h1>{project.label}</h1>
                  <p>{project.description}</p>
                  <div className="flex items-center gap-8">
                    <button
                      id="closeButton"
                      className="left-0 w-12 h-12 m-4 bg-white border rounded-full flex items-center justify-center"
                      onClick={() => handleButtonClick(project.url)}
                    >
                      <FaArrowRight size={14} className="text-black" />
                    </button>
                      <FaGithub size={40} id="githubButton" className="text-white cursor-pointer" onClick={() => handleButtonClick(project.githubUrl)}/>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="fish-container">
        {distances.map((distance, index) => (
          <Image
            key={index}
            src="/images/line.svg"
            data-distance={distance}
            alt="Animated vector fish"
            width={200}
            height={24}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
