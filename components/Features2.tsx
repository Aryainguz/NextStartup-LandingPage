"use client"
import React, { useState, FC } from "react";
import Image from "next/image";
interface PortfolioCardProps {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <Image src={ImageHref} alt="portfolio" className="w-full"
            width={500}
            height={500}
            />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-purple-500 mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Portfolio: FC = () => {
  const [showCard, setShowCard] = useState<string>("all");

  const handleProject = (category: string): void => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark" id="services">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-purple-500 mb-2 block text-lg font-semibold">
                  We Provide
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                What We Provide.
                </h2>
                <p className="text-gray-400 text-base ">
                Explore the wide range of platforms and services we provide.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-purple-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    All Platforms
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("web")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "web"
                        ? "activeClasses bg-purple-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    Web
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("mobile app")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "mobile app"
                        ? "activeClasses bg-purple-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    Mobile App
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-purple-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("cloud")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "cloud"
                        ? "activeClasses bg-purple-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    Cloud
                  </button>
                </li>

              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              category="Web"
              title="Buisness Landing Page"
              button="We provide the best online presence for your business with advanced customizations."
              buttonHref=""
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Web"
              title="Service bookings"
              button="With advanced booking systems, and automations we help you grow faster."
              buttonHref=""
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              category="Web"
              title="E-Commerce"
              button="Get your business online with our E-Commerce solutions."
              buttonHref=""
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              category="Mobile App"
              title="Mobile App Development"
              button="We develop mobile apps for both Android and iOS to help you reach more customers."
              buttonHref=""
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              category="Design"
              title="Product Designs"
              button="With our product designs, we help you stand out from the crowd."
              buttonHref=""
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              category="Cloud"
              title="Cloud Management"
              button="We handle cloud for you so you can focus on your business."
              buttonHref=""
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;