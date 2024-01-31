
import Navbar from "./navbar"
import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { FaHandPointRight } from "react-icons/fa6";
import Footer from "./footer";
const CyberCrime = ( { header, text } ) => {
  const [ active, setActive ] = useState( false );

  const handleToggle = ( event ) => {
    event.preventDefault();
    setActive( !active );
  };

  return (
    <div className="mb-8 w-full  ">
      <div>
        <Helmet>
          <title>Rahil Foundation || Cyber Literacy  </title>
          <meta name="description" content="we believe that knowledge is the key to empowerment. By fostering cyber literacy, we aim to equip individuals with the skills and awareness needed to navigate the digital world confidently. " />
        </Helmet>
        {/* Your page content */}
      </div>
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={( event ) => handleToggle( event )}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${ active ? "rotate-180" : ""
              }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
          <h4 className="mt-1  font-semibold text-dark ">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${ active ? "block" : "hidden"
          }`}
      >
        <p className=" leading-relaxed text-body-color">
          {text}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <section className="w-full items-center overflow-hidden">
      {/* <Navbar/> */}
      <div className=" w-screen p-20 flex justify-center  items-center">
        <div className="bg-slate-100 shadow-xl gap-5 flex rounded-lg flex-col p-5 w-3/4">
          <div className="flex flex-col gap-5 ">
            <h1 className="lg:text-4xl font-semibold">Learn About CyberCrime</h1>
          <p>In general cybercrime may be defined as “Any unlawful act where computer or communication device or computer network is used to commit or facilitate the commission of crime”.

            Below is a list for some of the cybercrimes along with their indicative explanation. This is to facitilate better reporting of complaints.</p>

          </div>
          <div className="flex flex-col gap-2 border border-gray-300 p-4 rounded-md">
            <div className="overflow-y-auto">
              <CyberCrime
                header="Why India Needs Cyber Literacy?"
                text="India needs Cyber Literacy, as highlighted by Rahil Foundation, to increase individuals with the knowledge and skills to navigate the digital world securely. It promotes awareness, responsible online behavior, and protection against developing cyber threats."
              />
              <CyberCrime
                header="Have You Installed Reputable Antivirus and Anti-malware Software on Your Devices and Do You Perform Regular Scans?"
                text="Rahil Foundation recommends creating robust passwords using a mix of letters, numbers, and symbols, emphasizing the avoidance of easily guessable information like birthdays. They stress the importance of regularly updating passwords and avoiding reuse across accounts, aiming to boost Cyber Literacy for effective online account protection."
              />
              <CyberCrime
                header="Cases of Cyber Crimes in India?"
                text="Rahil Foundation notes a surge in cybercrime cases in India, attributing it to the expanding digital landscape and increased internet usage. Common issues include identity theft, financial fraud, and unauthorized data access. Despite law enforcement and cybersecurity efforts, public awareness."
              />
              <CyberCrime
                header="Is Artificial Intelligence Helpful or Harmful for Me?"
                text="AI's impact is dual, providing assistance in security and problem-solving but posing risks like privacy threats and biased application. Whether AI is helpful or harmful relies on responsible development, implementation, and regulation, emphasizing ethical considerations to maximize benefits while minimizing potential risks."
              />
              <CyberCrime
                header="How to Create and Manage Strong, Unique Passwords for Your Accounts?"
                text="Rahil Foundation strongly recommends installing reliable antivirus and anti-malware software for fundamental cyber defense. Rahil Foundation's commitment to Cyber Literacy highlights proactive measures, empowering individuals to safeguard their digital environments."
              />
              <CyberCrime
                header="How long does it take to deliver your first blog post?"
                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post."
              />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </section>

  );
};

export default Accordion;
