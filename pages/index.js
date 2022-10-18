/* eslint-disable @next/next/no-img-element */

import {  BenefitFooter, BenefitNav } from "../components/navbars";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Employment</title>
        <link
          rel="shortcut icon"
          href="./images/logo eeeee.png"
          type="image/x-icon"
        />
      </Head>
      <BenefitNav />
      <Stage />
      <Stage2 />

      <BenefitFooter />
    </Fragment>
  );
}

const Stage = () => {
  return (
    <>
      <div className="container bluenav ">
      <Link href={"/registration"}>
      <a >
          <div
            className="ms-auto  me-5 container"
            style={{width: "fit-content", height:"fit-content"}}
          >
            <img
              className="Applynow "
              src="images/us-embassy-embassy.gif"
              alt=""
            />
          </div>
        </a>
      </Link>
      </div>
      <h1 className=" container EUPA pt-2 mt-4">
        Corona Vacine Registration 
      </h1>
      <div className="txt">
        <p className="txttxt">
          <b>
            The CARES Act gives states the option of extending unemployment
            compensation to independent contractors and other workers who are
            ordinarily ineligible for unemployment benefits. Please contact your
            states unemployment insurance office at the website or phone number
            provided below to learn more about the availability of these
            benefits where you live.
          </b>
        </p>
      </div>
      <div className="container mb-5 mt-5">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="./images/images etghj.jpg"
                height={300}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
    <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="./images/block2.jpg"
                height="300px"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Second slide label</h5>
    <p>Some representative placeholder content for the second slide.</p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/images eeee.jpg"
                height="300px"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Third slide label</h5>
    <p>Some representative placeholder content for the third slide.</p> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

const Stage2 = () => {
  return (
    <>
      <p className="ptxt">
        Due to the recent increase of the CORONA-VIRUS. The Government has
        decide to Grant USA Citizen with sum of $1950 weekly due to the high
        rate of UNEMPLOYMENT.
        <br />
        This progam was previously announced eligible for individuals in USA.
        This is a scheme set-up by FG to ease and help both employed and
        unemployed citizen with sum of $1950 every week.
      </p>
      <p className="ptxt">
        {" "}
        ECONOMIC UNEMPLOYMENT PANDEMIC STIMULUS (E.U.P.S) announces that support
        will be given to business owners, and self-employed individuals who lost
        their jobs or business, or had their work hours reduced due to increase
        rate in COVID in past few months.
        <br />
        However, you dont have to leave the comfort of your house or visit any
        of branch to get this stimulus funds. Moreover, this platform is created
        to help you through the registration and validation process.
      </p>
      <h1 className="boldtxt">Background</h1>
      <p className="ptxt">
        On March 18, 2020, President Trump signed into law the Families First
        Coronavirus Response Act (FFCRA), which provided additional flexibility
        for state unemployment insurance agencies and additional administrative
        funding to respond to the COVID-19 pandemic. The Coronavirus Aid,
        Relief, and Economic Security (CARES) Act was signed into law on March
        27. It expands states ability to provide unemployment insurance for many
        workers impacted by the COVID-19 pandemic, including for workers who are
        not ordinarily eligible for unemployment benefits. For more information,
        please refer to the resources available below.
      </p>
      <h1 className="boldtxt">
        If I am eligible for Pandemic Unemployment Assistance, do I need to
        first apply for unemployment insurance?
      </h1>
      <p className="ptxt">
        States must have a process for determining that Pandemic Unemployment
        Assistance (PUA) applicants are ineligible for regular unemployment
        benefits, which may not include filing a regular claim as a first step.
        States are not required to take and adjudicate a full claim for regular
        unemployment insurance benefits to meet this requirement. While states
        are not prohibited from taking a full claim, to facilitate expedited
        claims processing the U.S. Department of Labor has discouraged states
        from doing so. Individuals should apply using the states PUA application
        process and, in states that have not yet established that process, must
        wait until it is established.
      </p>
      <h1 className="boldtxt">Where Do I File for Unemployment Insurance?</h1>
      <p className="ptxt">
        Unemployment insurance is a joint state-federal program that provides
        cash benefits to eligible workers. Each state administers a separate
        unemployment insurance program, but all states follow the same
        guidelines established by federal law.
      </p>
      <br />
      <br />
      <p className="ptxt">
        Fill in the following information below to start earning your weekly
        Benefits either by Paychecks or Direct Deposit into your Acount as soon
        as we get you registered and validated on the (E.U.P.S) platform.
        <Link href={"/registration"}>
        
        <a>Click here to Apply.</a>
        </Link>
      </p>
    </>
  );
};
