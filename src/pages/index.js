/* eslint-disable react/jsx-no-target-blank */
/* eslint max-len:0 */
/* eslint react/no-unescaped-entities:0 */
import React from 'react'
import Link from 'next/link'

import { useTranslation } from 'react-i18next'
import IndexNavbar from '../components/IndexNavbar.js'
import { APP_NAME } from '../constants/app.js'
import { ROUTE_INDEX } from '../constants/routes.js'
import { ANCHOR_ABOUT, ANCHOR_CONTRIBUTE, ANCHOR_FEATURES } from '../constants/homepage.js'
import '@fortawesome/fontawesome-free/css/all.css'
import ndLogo from '../assets/images/nd-logo.png'
import highwaysenglandLogo from '../assets/images/highwaysengland-logo.png'
import Footer from '../components/Footer.js'

const Index = () => {
  const { t } = useTranslation()

  return (
    <div className="landing website">
      <IndexNavbar fixed />
      <section id={ANCHOR_ABOUT} className="header relative pt-16 items-center flex h-screen h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0 mt-20 pb-20">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                {APP_NAME}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {t('ontopopDescription')}
              </p>
              <div className="mt-12">
                <Link
                  href={`${ROUTE_INDEX}#${ANCHOR_FEATURES}`}
                >
                  <a
                    className="p-button website-btn-primary"
                  >
                    {t('findOutMore')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 website-image-main"
          src="https://demos.creative-tim.com/notus-nextjs/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <section id={ANCHOR_FEATURES} className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">

            <div className="w-full  px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Visualisation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Network-based visualisation and exploration
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Management</h6>
                      <p className="mb-4 text-blueGray-500">
                        Ontology editing and management
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Search
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Free-text search, structured query builders and filters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                What is OntoPop
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                OntoPop is an open source framework enabling the visualisation, search, exploration and management of ontologies
              </p>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <iframe
                  title={APP_NAME}
                  width="840"
                  height="630"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Why use OntoPop
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                OntoPop was created to make ontologies more accessible to a broader range of
                stakeholders beyond the traditional users of ontologies such as information and data architects.
                By providing an intuitive and easy-to-use visual interface, our aim is to make ontologies
                less abstract and more applicable to real-world use-cases.
              </p>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl" />
                </div>
                <h3 className="text-3xl font-semibold">
                  Main Contributors
                </h3>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Jillur Quddus - Project Team Lead & Lead Engineer
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Natasha Chowdory - Lead User Researcher
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Christian Carestia - Lead Front End Engineer
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Michal Kostyal - Front End Engineer
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Tan Kent - Front End Engineer
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{ transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)' }}
                src="https://demos.creative-tim.com/notus-nextjs/img/documentation.png"
              />
            </div>
          </div>
        </div>

      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Primary Sponsor
                  </h5>
                  <Link href="https://highwaysengland.co.uk/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={highwaysenglandLogo}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    National Digital Twin
                  </h5>
                  <Link href="https://www.cdbb.cam.ac.uk/what-we-do/national-digital-twin-programme">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg py-5"
                        src={ndLogo}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                OntoPop is a community-driven open source framework under active development and released under the Creative Commons Attribution-ShareAlike license. As such, we need your help to build this framework into a tool synonymous with ontologies and information management more widely.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                If you would like to contribute, the best way to get started is by visiting the OntoPop Wiki. Alternatively, if you would like to take a deep-dive into the source code, OntoPop’s public code repositories are available on GitHub.
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>

        <div id={ANCHOR_CONTRIBUTE} className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  ✉️
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Let's keep in touch!
              </h3>

              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Contact Admin Team
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1" />
                  <span>Contact Dev Team</span>
                </a>
              </div>
              <div className="text-center mt-16" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Index
