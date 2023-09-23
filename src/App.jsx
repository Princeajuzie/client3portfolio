import "./App.css";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import user1 from "../Resources/images//3.svg";
import user4 from "../Resources/images/3.svg";
import { FaAngleUp, FaSearchengin, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLink45Deg } from "react-icons/bs";
import $ from "jquery";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Mixitup from "mixitup";
// import "owl.carousel";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import user from "../Resources/images/user.svg";
import Blueseal from "../Resources/images/blueseal.svg";
import Extreme from "../Resources/images/extreme.svg";

import portfolio1 from "../Resources/images/portfolio (2).jpg";
import portfolio2 from "../Resources/images/portfolio (12).jpg";
import portfolio3 from "../Resources/images/portfolio (5).jpg";
import portfolio4 from "../Resources/images/portfolio (7).jpg";
import portfolio5 from "../Resources/images/portfolio (9).jpg";
import portfolio6 from "../Resources/images/portfolio (11).jpg";
import {
  InstagramEmbed,
  YouTubeEmbed,
  TikTokEmbed,
} from "react-social-media-embed";

const App = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenuVisible(window.innerWidth <= 991);
    };

    handleResize(); // Set initial value on page load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsSticky(scroll >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Handleactive = (section) => {
    setActiveLink(section);
  };

  function debounce(func, delay) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  useEffect(() => {
    setActiveLink("main");
    const handleScroll = debounce(() => {
      const navbarHeight = 96;
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(section.id);
        }
      });
    }, 100); // Adjust the debounce time as needed

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionName) => {
    const targetElement = document.getElementById(sectionName);
    const navbarHeight = 96;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      Handleactive(sectionName);
    }
  };

  const Handleblog = () => {
    scrollToSection("blog");
  };
  const scrollToTop = () => {
    scrollToSection("main");
  };

  const HandleContact = () => {
    scrollToSection("contact");
  };
  const scrollToPortfolio = () => {
    scrollToSection("portfolio");
  };

  const ScrolltoResume = () => {
    scrollToSection("resume");
  };

  const ScrolltoServices = () => {
    scrollToSection("services");
  };
  const ScrolltoDiv = () => {
    scrollToSection("about");
  };

  Fancybox.bind('[data-fancybox="gallery"]', {
    //
  });

  useEffect(() => {
    // Initialize MixItUp
    const container = document.querySelector(".portF");
    Mixitup(container);

    // Handle filter click events
    const filterButtons = document.querySelectorAll(".portfolio-list ul li");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        Mixitup(container, { filter: filterValue });
        filterButtons.forEach((btn) => {
          btn.classList.remove("text-[#d8b445]");
        });

        // Add the active class to the clicked button
        button.classList.add("text-[#d8b445]");
      });
    });
  }, []);

  $(window).on("scroll", function () {
    var a = $(window).scrollTop();
    if (a > 400) {
      $(".scroll-area").slideDown(300);
    } else {
      $(".scroll-area").slideUp(200);
    }
  });

  const [menuOpens, setMenuOpens] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpens(!menuOpens);
  };

  const Footer = styled.div`
    .footer-widget-single h2 {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 10px;
      color: #d8b445;
    }
    .footer-widget-single p {
      color: #3e3c3c;
    }
    .footer-widget-single h3 {
      font-size: 18px;
      font-weight: bold;
      color: #d8b445;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 12px;
      margin-bottom: 10px;
    }
    .footer-widget-single h3::before {
      content: "";
      background: #d8b445;
      width: 80px;
      overflow: hidden;
      height: 3px;
      position: absolute;
      bottom: 0;
      clear: both;
      display: block;
      z-index: 1;
    }
    .footer-widget-single h3::after {
      content: "";
      clear: both;
      display: block;
      overflow: hidden;
      background: #3c4133;
      width: 100%;
      height: 3px;
      bottom: 0;
      position: absolute;
      left: 0;
    }
    .footer-widget-single ul li {
      line-height: 32px;
    }
    .footer-widget-single ul li a {
      color: #3e3c3c;
      text-transform: capitalize;
    }
    .footer-widget-single ul li a:hover {
      color: #d8b445;
    }
    .footer-widget-single strong {
      color: #d8b445;
    }
    .footer-widget-single ul.social-link {
      margin-top: 15px;
    }
    .footer-widget-single ul.social-link li {
      line-height: 20px;
      display: inline-block;
      margin: 3px;
    }
    .footer-widget-single ul.social-link li a {
      display: inline-block;
    }
    .footer-widget-single ul.social-link li a i {
      font-size: 14px;
      display: flex;
      background: #3e3c3c;
      color: #fff;
      line-height: 1;
      padding: 8px 0;
      border-radius: 50%;
      text-align: center;
      width: 36px;
      height: 36px;
      transition: 0.3s;
      justify-content: center;
      align-items: center;
    }
    .footer-widget-single ul.social-link li a i:hover {
      background: #d8b445;
    }
    .footer-bottom p {
      font-size: 15px;
    }
    .footer-bottom p a {
      color: #ccc;
      font-weight: 700;
    }
    .footer-bottom p a:hover {
      color: #fff;
    }

    @media (max-width: 766px) {
      .footer-widget-single h3::before {
        content: "";
        background: #d8b445;
        max-width: 150px;
        width: 100px;
        overflow: hidden;
        height: 3px;
        position: absolute;
        bottom: 0;
        clear: both;
        display: block;
        z-index: 1;
      }
      .footer-widget-single h3::after {
        content: "";
        clear: both;
        display: block;
        overflow: hidden;
        background: #3c4133;
        max-width: 151%;
        width: 100%;
        height: 3px;
        bottom: 0;
        position: absolute;
        left: 0;
      }
    }
  `;
  return (
   
    <div className="bg-[#401b27]">
      <nav
        className={`lg:flex Laptopmin:flex items-center gap-5 justify-between bg-[#401b27]  small:bg-[#6f0a47] Laptopmin:gap-[30px]  px-[30px] pr-10  left-0 w-full sticky top-0 z-10 Laptopminbg:gap-[40px] tabletmin:h-fit-content small:px-[25px] Laptopmin:px-[60px] ${
          isSticky
            ? " z-50  animate-sticky shadow-custom sticky bg-[#401b27] h-auto"
            : ""
        } `}
      >
        {/* ${isMenuOpen ? 'open block' : 'hidden'} */}
        <figure
          onClick={() => {
            scrollToTop();
            Handleactive("main");
          }}
        >
          <img
            alt=""
            src={user1}
            className="h-[80px] w-auto pb-2 select-none cursor-pointer items-end Laptopmin:h-[65px] Laptopmin:mr-5  Laptopminbg:h-[70px]  tabletmin:bottom-[10px] tabletmin:hidden small:absolute small:left-[10px] tabletmin:h-[55px] "
          />
        </figure>

        <div>
          <ul className="flex gap-12 lg:gap-[40px] items-end text-[#e1d0d0] text-[15px] Laptopmin:text-[14px]  Laptopminbg:gap-[30px] tabletmin:hidden ">
            {/* Add Next.js Link to all the li elements */}
            <li
              onClick={() => {
                scrollToTop();
                Handleactive("main");
              }}
              className={`cursor-pointer  hover:text-[#d8b445]  ${
                activeLink === "main"
                  ? "text-[#d8b445] cursor-pointer"
                  : "text-[#ffffff]"
              }`}
              id="home"
            >
              HOME
            </li>
            <li
              onClick={() => {
                ScrolltoDiv();
                Handleactive("about");
              }}
              className={`cursor-pointer hover:text-[#d8b445] ${
                activeLink === "about"
                  ? "text-[#d8b445] cursor-pointer"
                  : "text-[#ffffff]"
              }`}
              id="bout"
            >
              ABOUT
            </li>

            <li
              onClick={scrollToPortfolio}
              className={`cursor-pointer hover:text-[#d8b445] ${
                activeLink === "portfolio" ? "text-[#d8b445]" : "text-[#ffffff]"
              }`}
            >
              GALLERY
            </li>
            <li
              onClick={Handleblog}
              className={`cursor-pointer hover:text-[#d8b445] ${
                activeLink === "blog" ? "text-[#d8b445]" : "text-[#ffffff]"
              }`}
            >
              SOCIALS
            </li>
            <li
              onClick={HandleContact}
              className={`cursor-pointer hover:text-[#d8b445] ${
                activeLink === "contact" ? "text-[#d8b445]" : "text-[#ffffff]"
              }`}
            >
              CONTACT
            </li>
          </ul>

          {menuVisible && (
            <>
              <div className="mobile-menu mean-container flex justify-between ">
                <img
                  alt=""
                  src={user4}
                  className="h-[60px] w-auto  select-none cursor-pointer ml-[-30px] "
                  onClick={() => {
                    scrollToTop();
                    Handleactive("main");
                  }}
                />

                <div className="mean-bar">
                  <a
                    className={` meanmenu-reveal meanclose right-0 left-auto text-center text-indent-0 text-18`}
                  >
                    <div
                      className="open hidden tabletmin:block tabletmin:rounded-[1px] x border-[1px] border-white p-[10px] text-[white] text-[25px] cursor-pointer w-[fit-content]"
                      onClick={handleMenuToggle}
                    >
                      {menuOpens ? <FaTimes /> : <GiHamburgerMenu />}
                    </div>
                  </a>
                </div>
              </div>
            </>
          )}
          <div className=" mean-container  hidden tabletmin:block ">
            <div className="mean-bar">
              <nav className={`mean-nav ${menuOpens ? "toggle" : ""}`}>
                <nav>
                  <ul className="">
                    <li
                      className="current"
                      onClick={() => {
                        scrollToTop();
                        handleMenuToggle();
                      }}
                    >
                      <a>Home</a>
                    </li>
                    <li
                      onClick={() => {
                        ScrolltoDiv();
                        handleMenuToggle();
                      }}
                    >
                      <a>About</a>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        ScrolltoServices();
                        handleMenuToggle();
                      }}
                    >
                      <a>Services</a>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        ScrolltoResume();
                        handleMenuToggle();
                      }}
                    >
                      <a>Resume</a>
                    </li>
                    <li
                      onClick={() => {
                        scrollToPortfolio();
                        handleMenuToggle();
                      }}
                    >
                      <a>Portfolio</a>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        Handleblog();
                        handleMenuToggle();
                      }}
                    >
                      <a>Blog</a>
                    </li>
                    <li
                      className="mean-last"
                      onClick={() => {
                        HandleContact();
                        handleMenuToggle();
                      }}
                    >
                      <a>Contact</a>
                    </li>
                  </ul>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </nav>
      {/*Home*/}
      <section
        id="main"
        className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] object-cover h-[500px] tabletmin:h-[900px] small:h-[900px] md:bg-[url('https://img.freepik.com/free-photo/top-view-different-paper-sheets_23-2148187861.jpg?w=826&t=st=1694707768~exp=1694708368~hmac=f3c2fc86dec5adaa8e42cc477a87a6622b5caf36a8b0daf0f06f80c2c82f5e01')]"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
          <div className="flex h-full items-center justify-center  px-[15px]">
            <div className="flex  items-center justify-between flex-row gap-[90px] Laptopmin:gap-[50px] tabletmin:flex tabletmin:flex-col tabletmin:gap-[10px] small:gap-[10px] small:mt-[20px] small:flex small:flex-col Laptopmin:px-[10px]">
              <div className="w-full  lg:w-5/12">
                <div className="hero-content items-end ">
                  <h4 className=" text-clamp small:text-[15px] font-bold leading-snug text-white   mt[80px] whitespace-nowrap w-[50px]">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed once, initially
                        "realfavourphilip a CEO ",
                        1000,
                        "realfavourphilip  an Influncer",
                        1000,
                        "realfavourphilip an Ambassador",
                        1000,
                        "realfavourphilip a Content Creator",
                        1000,
                        "realfavourphilip an Entrepreneur",
                        1000,
                      ]}
                      speed={50}
                      style={{ fontSize: "1.5em" }}
                      repeat={Infinity}
                    />
                  </h4>
                  <p className="mt-[20px] max-w-[480px] text-base text-[#f0ece9]">
                    ✨keep up with extreme situations with favour Philip.✨
                    Entrepreneur |Humanitarian|show host|
                    Director@Blueseal_enterprise
                  </p>

                  <div className="pt-16 clients">
                    <h6 className="flex items-center mb-3 text-xs font-normal text-[#f0ece9]">
                      companies
                      <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                    </h6>

                    <div className="flex items-center   ml-[-15px]">
                      <img href="#" src={Blueseal} draggable={false} />

                      <img href="#" src={Extreme} draggable={false} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full md:px-4 lg:w-6/12 ">
                <div className="lg:ml-auto lg:text-right object-contain small:bg-[hsla(0,0%,0%,0.75)]">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0  small:bg-[url('/bg2.png')] md:bg-transparen">
                    <img
                      src={user}
                      alt="hero"
                      draggable={false}
                      className="max-w-full lg:ml-auto"
                    />
                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section
        className="bg-[#f0ece9]  h-[fit-content] w-[auto] relative justify-center py-8 "
        id="about"
      >
        <div className="flex item-center justify-center gap-[20px] pt-[50px] Laptopmin:px-[50px] tabletmin:flex tabletmin:flex-col ">
          <div>
            <div className="tabletmin:px-[40px] small:px-[15px]">
              <div className="">
                <h5 className="text-[#d8b445] text-[20px] mb-[15px] font-[500]">
                  About Me
                </h5>
                <h2 className="text-[#401b27] text-[20px] mb-[20px] font-[700] leading-[31px] w-[550px]  tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[600px] small:w-[auto]">
                  Hello! I{"'"}m
                  <span className="text-[#d8b445] text-[20px] mb-[10px] font-[700]">
                    &nbsp; Favour Phillp.
                  </span>{" "}
                  CEO of @BluesealEnterprise &amp;{" "}
                  <span className="text-[#d8b445] text-[20px] mb-[10px] font-[700]">
                    An Entrepreneur .
                  </span>
                </h2>
                <p className="w-[600px] text-[#401b27] text-[15px] mb-[12px] leading-[25px] Laptopmin:w-[550px] max-w-[700px] tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[600px] small:w-[auto] ">
                  Favor Philip is a visionary leader, entrepreneur, ambassador,
                  and social media influencer who has seamlessly blended her
                  professional success with a deep sense of social
                  responsibility. Her journey is a testament to the power of
                  determination, innovation, and a genuine desire to inspire
                  positive change. Favor Philip continues to leave an indelible
                  mark on the world, inspiring others to dream big and pursue
                  their passions relentlessly
                </p>

                <div className="flex items-center">
                  <span className="f-[700] text-[18px] text-[#3e3c3c] pr-[15px] pb-[20px]">
                    Follow Me :
                  </span>
                  <ul className="flex gap-[10px] mb-5">
                    <li>
                      <Link to="https://www.facebook.com/Team1000lives">
                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                          <BiLogoFacebook />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/@favourphilip8359">
                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                          {" "}
                          <AiFillYoutube />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/realfavourphilip/">
                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                          <BiLogoInstagram />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.tiktok.com/@realfavourphilip">
                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                          {" "}
                          <FaTiktok />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info-btn mt-30 flex">
                  <Link
                    href="#"
                    className="button-1  whitespace-nowrap text-center rounded-full"
                  >
                    My Work <span></span>
                  </Link>
                  <a
                    href="#"
                    className="button-2  whitespace-nowrap text-center  rounded-full"
                  >
                    Dwonload Cv <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[20px] m-[0] tabletmin:px-[40px] small:px-[15px] pb-10 smaller:grid smaller:grid-cols-1">
            <div className="bg-[#401b27] h-[150px] w-[auto] flex items-center small:px-[80px] lg:px-[50px] Laptopmin:px-[50px] tabletmin:px-[20px] tabletmin:py-[20px]  rounded-xl justify-center mb-[-96px] small:mb-[0] lg:mb-5 md:mb-5 flex-col ">
              <h2 className="text-[40px] text-[#ffffff] font-[900] counter">
                <CountUp start={0} end={50} duration={10} />K
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">
                Instagram Followers
              </span>
            </div>
            <div className="bg-[#401b27] h-[150px] w-[auto] flex items-center justify-center rounded-xl tabletmin:mb-0 small:mb-[0] mb-[-96px] flex-col  ">
              <h2 className="text-[40px] text-[#ffffff] font-[900]  counter">
                <CountUp start={0} end={10} duration={8} />K
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">
                Facebook Fillowers
              </span>
            </div>
            <div className="bg-[#401b27] h-[150px] w-[auto] flex items-center justify-center rounded-xl tabletmin:mb-0 small:mb-[0] flex-col">
              <h2 className="text-[40px] text-[#ffffff] font-[900] counter">
                <CountUp start={0} end={3000} duration={10} />
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">
                TikTOK Followers
              </span>
            </div>
            <div className="bg-[#401b27] h-[150px] w-[auto] flex items-center justify-center flex-col rounded-xl ">
              <h2 className="text-[40px] text-[#ffffff] font-[900] mb-[10px] counter">
                <CountUp start={0} end={172} duration={10} />
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">
                Youtube Subscribers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="bg-[#f0ece9]  h-fit-content w-[auto] relative justify-center pt-[50px]"
      >
        <div className="bg-[#f0ece9] ">
          <div className="">
            <div className="section-headding text-center justify-center">
              <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#d8b445]">
                Gallery
              </h2>
              <div className="title-divider"></div>
              <p className=" text-[#401b27] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
                Favour Philip Gallery and Adventure.
              </p>
            </div>

            <div className="row">
              <div className="portfolio-list my-10 text-center">
                <ul>
                  <li
                    data-filter="all"
                    className=" cursor-pointer text-[#401b27]"
                  >
                    all
                  </li>
                  <li
                    data-filter=".web"
                    className=" cursor-pointer text-[#401b27]"
                  >
                    BirthDay
                  </li>
                  <li
                    data-filter=".app"
                    className=" cursor-pointer text-[#401b27]"
                  >
                    Nysc
                  </li>
                  <li
                    data-filter=".card1"
                    className=" cursor-pointer text-[#401b27]"
                  >
                    travels
                  </li>
                </ul>
              </div>
              <div
                className="portfolio-full grid grid-cols-3 gap-[20px] portF px-[90px] pb-5  tabletmin:grid-cols-2 small:grid-cols-1 small:px-[15px]"
                id="MixItUpF028EA"
              >
                {/* <!-- Single --> */}
                <div className="lg:col-4 md:col-6 mb-30 mix web">
                  <div className="portfolio-item">
                    <img src={portfolio1} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a href={portfolio1} data-fancybox="gallery">
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix app">
                  <div className="portfolio-item">
                    <img src={portfolio2} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a href={portfolio2} data-fancybox="gallery">
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix card1">
                  <div className="portfolio-item">
                    <img src={portfolio3} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a href={portfolio3} data-fancybox="gallery">
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix card1">
                  <div className="portfolio-item">
                    <img src={portfolio4} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          className="zoom"
                          href={portfolio4}
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix app">
                  <div className="portfolio-item">
                    <img src={portfolio5} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          className="zoom"
                          href={portfolio5}
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix web">
                  <div className="portfolio-item">
                    <img src={portfolio6} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          className="zoom"
                          href={portfolio6}
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blogs */}
      <section
        id="blog"
        className="bg-[#f0ece9]  h-[fit-content] w-[auto] relative justify-center "
      >
        <div className="bg-[#f0ece9] py-[50px]">
          <div className="section-headding text-center justify-center">
            <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#d8b445]">
              SOCIALS
            </h2>
            <div className="title-divider"></div>
            <p className=" text-[#401b27] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
             Favour Philip popular Social media Content. 
            </p>
          </div>

          <div className="flex gap-5 px-[40px] tabletmin:grid tabletmin:px-[20px]  tabletmin:grid-cols-2  max-w-[100vw] overflow-y-hidden small:grid small:grid-cols-1 small:px-[15px] mb-10">
            <div className=" w-[380px] small:w-[auto] small:max-[500px]">
              <InstagramEmbed url="https://www.instagram.com/p/CrnJd81oXgK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" />
            </div>
            <div className=" w-[380px] small:w-[auto] small:max-[500px]">
              <TikTokEmbed url="https://www.tiktok.com/@realfavourphilip/video/7263573114691374341" />
            </div>
            <div className=" w-[380px] small:w-[auto] small:max-[500px]">
              <InstagramEmbed
                url="https://www.instagram.com/p/CZ_nvDzq7bw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex item-center justify-center ">
            <YouTubeEmbed url="https://youtu.be/17T1aCpah5g?si=WL4DfI_pVwNh8OKE" width="80%" height={400} />
          </div>
        </div>
      </section>

      {/* contact */}
      <section
        className="bg-[#f0ece9]  h-[fit-content] w-[auto] relative justify-center py-[20px]"
        id="contact"
      >
        <div className="bg-[#f0ece9] py-[50px]">
          <div className="section-headding text-center justify-center">
            <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#d8b445]">
              Contact Us
            </h2>
            <div className="title-divider"></div>
            <p className=" text-[#401b27] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-[15px] ">
           Get in Touch with Favour Philip For more enquires and ADS.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="contact-form">
                <form
                  action="#"
                  className=" justify-center items-center  px-[250px] small:px-[20px] tabletmin:px-[50px]"
                >
                  <div className="  gap-4">
                    <div className="grid grid-cols-2 justify-center gap-4 input-sub tabletmin:grid tabletmin:grid-cols-1">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="sub"
                        placeholder="Your Subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="button-1  rounded-full">
                        Submit <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Start Footer Area --> */}
      <Footer>
        <footer className="footer  bg-[#f0ece9]   h-[fit-content] w-[auto] relative flex justify-between tabletmin:items-center  flex-col ">
          <div className="footer-top pt-[-20px] pb-[20px]">
            <div className="">
              <div className="flex flex-row   justify-center  gap-[30px] pt-20 px-[40px] tabletmin:flex-none tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] tabletmin:px-[20px] small:px-[15px]  small:grid-cols-1">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget-single">
                    <h2>@Favour</h2>
                    <p className="w-[300px] Laptopmin:w-[200px] tabletmin:w-[350px] small:max-w-[500px] small:w-[auto] ">
                      Cras fermentum odio eu feugiat lide par naso tierra. Justo
                      eget nada terra videa magna derita valies darta donna mare
                      fermentum iaculis eu non diam phasellus. Scelerisque felis
                      imperdiet proin fermentum leo. Amet volutpat consequat
                      mauris nunc congue.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 w-[300px]">
                  <div className="footer-widget-single">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link to="#home">home</Link>
                      </li>
                      <li>
                        <Link to="#about">About </Link>
                      </li>
                      <li>
                        <Link to="#">Gallery</Link>
                      </li>
                      <li>
                        <Link to="#">Social</Link>
                      </li>
                      <li>
                        <Link to="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 w-[300px]">
                  <div className="footer-widget-single">
                    <h3>Our Services</h3>
                    <ul>
                      <li>
                        <Link to="#home">Photography</Link>
                      </li>
                      <li>
                        <Link to="#about">Web Design</Link>
                      </li>
                      <li>
                        <Link to="#">Woocommerce</Link>
                      </li>
                      <li>
                        <Link to="#">Brand Image</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 w-[300px]">
                  <div className="footer-widget-single">
                    <h3>Contact Us</h3>
                    <p>
                      A108 Adam Street <br />
                      New York, NY 535022
                      <br />
                      United States <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                      <br />
                      <strong>Email:</strong> info@example.com
                      <br />
                    </p>
                    <ul className="social-link">
                      <li>
                        <Link to="https://www.facebook.com/Team1000lives">
                          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                            <BiLogoFacebook />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/@favourphilip8359">
                          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                            {" "}
                            <AiFillYoutube />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/realfavourphilip/">
                          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                            <BiLogoInstagram />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.tiktok.com/@realfavourphilip">
                          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#401b27] hover:bg-[#d8b445] text-white text-base transition-all duration-300 ease-in-out">
                            {" "}
                            <FaTiktok />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom pt-[20px] pb-[20px] text-center bg-[#401b27] w-[100%] flex small:flex small:flex-col justify-between px-[80px] text-clamp ">
            <p className="text-[#ccc] ">
              @ Copyright <a href="#">@RealFavourPhilip</a> | All Rights
              Reserved
            </p>
            <p className="item-end text-[#ccc]">poweredBy @princeajuzie</p>
          </div>
        </footer>
      </Footer>
      {/* <!-- End Footer Area --> */}
      <div className="scroll-area block" onClick={scrollToTop}>
        <i className="fa fa-angle-up">
          <FaAngleUp />
        </i>
      </div>
    </div>
  );
};

export default App;
