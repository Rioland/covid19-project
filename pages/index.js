/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */

import { Footer, MainNavBar } from "../components/navbars";
import { Fragment } from "react";
import { useRouter } from "next/router";
export default function Old() {
  const route=useRouter()
  return (
    <Fragment>
      <div className="header">
        <MainNavBar active={"active1"} />
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 col-xxl-6 pb-4">
              <p className=" text-purple">COVID-19 AWARENESS</p>
              <p className="h1 text-purple mb-4">Stay Safe. Stay Home.</p>
              <p className="text-muted">
                The World Health Organization (WHO) is working closely with
                global experts, governments and partners to rapidly expand
                scientific knowledge on this new virus,
                {/* to track the spread and
                virulence of the virus, and to provide advice to countries and
                individuals on measures to protect health and prevent the spread
                of this outbreak */}
              </p>
              <div className="mt-5 mb-3 ">
                <button onClick={()=>{
                  route.push("./registration")
                }}
                  className="btn btn-outline-success ps-4 pe-4"
                  style={{ borderRadius: "20px" }}>
                  Get Vacine
                </button>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
              <img
                src={"/images/xillustration.png.pagespeed.ic.UP1KIL7_k-.png"}
                alt="illus"
                width={"400px"}
                height="400px"
                className="ms-5 image-fluid"
                
              />
            </div>
          </div>
        </div>
      </div>
      <Section2 />
      <Section3 />

      <Footer />
    </Fragment>
  );
}

const Section2 = () => {
  return (
    <div className="container pt-5 mb-5 ">
      <p className="text-center h2 text-purple">Coronavirus Statistics</p>
      <p className="text-center w-50 ms-auto me-auto">
        {" "}
        Coronaviruses (CoV) are a large family of viruses that cause illness
        ranging from the common cold to more severe diseases
      </p>
      {/*  */}
      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 c">
            <div className="text-center align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-purple"
                fill="blueviolet"
                width={40}
                height={40}
              >
                <path d="M192 24C192 10.75 202.7 0 216 0H296C309.3 0 320 10.75 320 24C320 37.25 309.3 48 296 48H280V81.62C310.7 85.8 338.8 97.88 362.3 115.7L386.1 91.95L374.8 80.64C365.4 71.26 365.4 56.07 374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2C455.9 146.6 440.7 146.6 431.4 137.2L420 125.9L396.3 149.7C414.1 173.2 426.2 201.3 430.4 232H464V216C464 202.7 474.7 192 488 192C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320C474.7 320 464 309.3 464 296V280H430.4C426.2 310.7 414.1 338.8 396.3 362.3L420 386.1L431.4 374.8C440.7 365.4 455.9 365.4 465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3C365.4 455.9 365.4 440.7 374.8 431.4L386.1 420L362.3 396.3C338.8 414.1 310.7 426.2 280 430.4V464H296C309.3 464 320 474.7 320 488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488C192 474.7 202.7 464 216 464H232V430.4C201.3 426.2 173.2 414.1 149.7 396.3L125.9 420.1L137.2 431.4C146.6 440.7 146.6 455.9 137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8C56.07 365.4 71.27 365.4 80.64 374.8L91.95 386.1L115.7 362.3C97.88 338.8 85.8 310.7 81.62 280H48V296C48 309.3 37.25 320 24 320C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192C37.25 192 48 202.7 48 216V232H81.62C85.8 201.3 97.88 173.2 115.7 149.7L91.95 125.9L80.64 137.2C71.26 146.6 56.07 146.6 46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.33 127.8 37.33 137.2 46.7C146.6 56.07 146.6 71.27 137.2 80.64L125.9 91.95L149.7 115.7C173.2 97.88 201.3 85.8 232 81.62V48H216C202.7 48 192 37.26 192 24V24zM192 176C165.5 176 144 197.5 144 224C144 250.5 165.5 272 192 272C218.5 272 240 250.5 240 224C240 197.5 218.5 176 192 176zM304 328C317.3 328 328 317.3 328 304C328 290.7 317.3 280 304 280C290.7 280 280 290.7 280 304C280 317.3 290.7 328 304 328z" />
              </svg>
            </div>
            <p className="h1 text-black text-center mt-2">14,112,077</p>
            <p className="text-muted text-center">ACTIVE CASES</p>
          </div>

          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="text-center align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-purple"
                fill="blueviolet"
                width={40}
                height={40}
              >
                <path d="M192 24C192 10.75 202.7 0 216 0H296C309.3 0 320 10.75 320 24C320 37.25 309.3 48 296 48H280V81.62C310.7 85.8 338.8 97.88 362.3 115.7L386.1 91.95L374.8 80.64C365.4 71.26 365.4 56.07 374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2C455.9 146.6 440.7 146.6 431.4 137.2L420 125.9L396.3 149.7C414.1 173.2 426.2 201.3 430.4 232H464V216C464 202.7 474.7 192 488 192C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320C474.7 320 464 309.3 464 296V280H430.4C426.2 310.7 414.1 338.8 396.3 362.3L420 386.1L431.4 374.8C440.7 365.4 455.9 365.4 465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3C365.4 455.9 365.4 440.7 374.8 431.4L386.1 420L362.3 396.3C338.8 414.1 310.7 426.2 280 430.4V464H296C309.3 464 320 474.7 320 488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488C192 474.7 202.7 464 216 464H232V430.4C201.3 426.2 173.2 414.1 149.7 396.3L125.9 420.1L137.2 431.4C146.6 440.7 146.6 455.9 137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8C56.07 365.4 71.27 365.4 80.64 374.8L91.95 386.1L115.7 362.3C97.88 338.8 85.8 310.7 81.62 280H48V296C48 309.3 37.25 320 24 320C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192C37.25 192 48 202.7 48 216V232H81.62C85.8 201.3 97.88 173.2 115.7 149.7L91.95 125.9L80.64 137.2C71.26 146.6 56.07 146.6 46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.33 127.8 37.33 137.2 46.7C146.6 56.07 146.6 71.27 137.2 80.64L125.9 91.95L149.7 115.7C173.2 97.88 201.3 85.8 232 81.62V48H216C202.7 48 192 37.26 192 24V24zM192 176C165.5 176 144 197.5 144 224C144 250.5 165.5 272 192 272C218.5 272 240 250.5 240 224C240 197.5 218.5 176 192 176zM304 328C317.3 328 328 317.3 328 304C328 290.7 317.3 280 304 280C290.7 280 280 290.7 280 304C280 317.3 290.7 328 304 328z" />
              </svg>
            </div>
            <p className="h1 text-black text-center mt-2">595,685</p>
            <p className="text-muted text-center">DEATHS CASES</p>
          </div>

          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="text-center align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-purple"
                fill="blueviolet"
                width={40}
                height={40}
              >
                <path d="M192 24C192 10.75 202.7 0 216 0H296C309.3 0 320 10.75 320 24C320 37.25 309.3 48 296 48H280V81.62C310.7 85.8 338.8 97.88 362.3 115.7L386.1 91.95L374.8 80.64C365.4 71.26 365.4 56.07 374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2C455.9 146.6 440.7 146.6 431.4 137.2L420 125.9L396.3 149.7C414.1 173.2 426.2 201.3 430.4 232H464V216C464 202.7 474.7 192 488 192C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320C474.7 320 464 309.3 464 296V280H430.4C426.2 310.7 414.1 338.8 396.3 362.3L420 386.1L431.4 374.8C440.7 365.4 455.9 365.4 465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3C365.4 455.9 365.4 440.7 374.8 431.4L386.1 420L362.3 396.3C338.8 414.1 310.7 426.2 280 430.4V464H296C309.3 464 320 474.7 320 488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488C192 474.7 202.7 464 216 464H232V430.4C201.3 426.2 173.2 414.1 149.7 396.3L125.9 420.1L137.2 431.4C146.6 440.7 146.6 455.9 137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8C56.07 365.4 71.27 365.4 80.64 374.8L91.95 386.1L115.7 362.3C97.88 338.8 85.8 310.7 81.62 280H48V296C48 309.3 37.25 320 24 320C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192C37.25 192 48 202.7 48 216V232H81.62C85.8 201.3 97.88 173.2 115.7 149.7L91.95 125.9L80.64 137.2C71.26 146.6 56.07 146.6 46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.33 127.8 37.33 137.2 46.7C146.6 56.07 146.6 71.27 137.2 80.64L125.9 91.95L149.7 115.7C173.2 97.88 201.3 85.8 232 81.62V48H216C202.7 48 192 37.26 192 24V24zM192 176C165.5 176 144 197.5 144 224C144 250.5 165.5 272 192 272C218.5 272 240 250.5 240 224C240 197.5 218.5 176 192 176zM304 328C317.3 328 328 317.3 328 304C328 290.7 317.3 280 304 280C290.7 280 280 290.7 280 304C280 317.3 290.7 328 304 328z" />
              </svg>
            </div>
            <p className="h1 text-black text-center mt-2">8,397,665</p>
            <p className="text-muted text-center">RECOVERED CASES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row">
        <div className="col-12  col-lg-6 col-xl-6 col-xxl-6">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/a7Oe4bOMBws"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-12  col-lg-6 col-xl-6 col-xxl-6 pt-4">
          <h2 className="text-purple">What is Coronavirus?</h2>
          <p className="text-dark">
            Coronaviruses (CoV) are a large family of viruses that cause illness
            ranging from the common cold to more severe diseases. Find out more
            about this novel coronavirus (nCoV) that has not been previously
            identified in humans
          </p>
          <h3 className="text-purple">
            WHO: Coronavirus disease (COVID-19) Pandemic
          </h3>
          <p className="text-dark">
            The World Health Organization (WHO) is working closely with global
            experts, governments and partners to rapidly expand scientific
            knowledge on this new virus, to track the spread and virulence of
            the virus, and to provide advice to countries and individuals on
            measures to protect health and prevent the spread of this outbreak.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="#7B1FA2"
            className="bi bi-shield-fill-check"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
            />
          </svg>
          <div className="ms-3">
            <p className="h4 text-purple fw-3">Protection</p>
            <p className="text-muted">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 d-flex"
          width="26px"
          height="6px"
          fill="#7B1FA2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="#7B1FA2"
            className="bi bi-shield-fill-check"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
            />
          </svg>
          <div className="ms-3">
            <p className="h4 text-purple fw-3">Protection</p>
            <p className="text-muted">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="#7B1FA2"
            className="bi bi-shield-fill-check"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
            />
          </svg>
          <div className="ms-3">
            <p className="h4 text-purple fw-3">Protection</p>
            <p className="text-muted">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="#7B1FA2"
            className="bi bi-shield-fill-check"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
            />
          </svg>
          <div className="ms-3">
            <p className="h4 text-purple fw-3">Protection</p>
            <p className="text-muted">Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
