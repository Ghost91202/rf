
import Navbar from "./navbar"
import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { FaHandPointRight } from "react-icons/fa6";
import Footer from "./footer";
import cyberimg from "../assets/cyber.jpg"
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
      <img src={cyberimg} alt ="cyber crimes blogs" className="w-screen lg:h-96"/>
      <div className=" w-screen p-20 flex justify-center  items-center">
        <div className=" bg-lime-50 shadow-xl gap-5 flex rounded-lg flex-col p-5 w-3/4">
          <div className="flex flex-col gap-5 ">
            <h1 className="lg:text-4xl font-semibold">Learn About CyberCrime</h1>
          <p>In general cybercrime may be defined as “Any unlawful act where computer or communication device or computer network is used to commit or facilitate the commission of crime”.

            Below is a list for some of the cybercrimes along with their indicative explanation. This is to facitilate better reporting of complaints.</p>

          </div>
          <div className="flex flex-col gap-2 border border-gray-300 p-4 rounded-md">
            <div className="overflow-y-auto">
              <CyberCrime
                header="1. Child Pornography/ Child sexually abusive material (CSAM)"
                text="All media that displays a child being harmed or sexually abused in any way is considered child sexually harmful material (CSAM). Publication or transmission of content that depicts children in sexually explicit acts, etc. in electronic form is banned by Section 67(B) of the IT Act."
              />
              <CyberCrime
                header="2. Cyber Bullying"
                text="A kind of cyberBullying or abuse that includes the use of a computer, smartphone, laptop, or other type of electronic device."
              />
              <CyberCrime
                header="3. Cyber stalking"
                text="CyberStalking is defined as using electronic communication to follow someone, or persistently trying to get in touch with someone to set up personal interaction despite that person's obvious lack of interest; it also includes remaining an eye on a person using email, the internet, or any other electronic communication channel."
              />
              <CyberCrime
                header="4. Cyber Grooming"
                text="AI's impact is dual, providing assistance in security and problem-solving but posing risks like privacy threats and biased application. Whether AI is helpful or harmful relies on responsible development, implementation, and regulation, emphasizing ethical considerations to maximize benefits while minimizing potential risks."
              />
              <CyberCrime
                header="5. Online Job Fraud"
                text="An attempt to deceive candidates by offering them a false sense of hope or a salary that is greater is known as online job fraud."
              />
              <CyberCrime
                header="6. Online Sextortion"
                text="Online sextortion is when someone requires money, sexual favors, or pictures of themselves as compensation for not giving away sensitive or private information that may be shared online."
              />
              <CyberCrime
                header="7. Vishing"
                text="Vishing refers to the attempt made by fraudsters to get personal information over the phone by calling victims' ID, CVV, ATM PIN, Net Banking password, OTP, and card expiration date, among other details.
"
              />
              <CyberCrime
                header="8. Sexting"
                text="The act of exchanging sexually suggestive digital photos, videos, texts, or emails—usually over a cell phone—is known as sexting.
"
              />
              <CyberCrime
                header="9. Smshing"
                text="Smishing is a kind of fraud where criminals utilize text messages sent to victims' phones to trick them into returning calls, going to phony websites, or downloading dangerous software.
"
              />
              <CyberCrime
                header="10. SIM Swap Scam"
                text="When scammers are able to use a registered mobile number to illegally obtain a new SIM card through the mobile service provider, it's known as a SIM swap scam. They receive notifications and a One Time Password (OTP), which is necessary in order to conduct financial transactions using the victim's bank account, with the use of this new SIM card. SIM Swap is the term for obtaining a new SIM card through illicit means using a registered cellphone number.
"
              />
              <CyberCrime
                header="11. Debit/Credit Card Fraud
"
                text="Fraud involving credit or debit cards occurs when someone uses someone else's card details without authorization in order to make transactions or take money out of it."
              />
              <CyberCrime
                header="12. Impersonation and Identity Theft
"
                text="The act of fraudulently or dishonestly using another person's password, electronic signature, or any other distinctive identifying trait is known as impersonation and identity theft.
"
              />
              <CyberCrime
                header="13. Phishing
"
                text="Phishing is a kind of fraud in which emails that seem authentic are used to steal personal information, including Customer ID, IPIN, Credit/Debit Card number, Card expiration date, CVV number, etc.
"
              />
              <CyberCrime
                header="14. Spamming
"
                text="Delivering unsolicited commercial messages by email, SMS, MMS, or any other comparable electronic messaging medium is known as spamming. They might attempt to fool the patient into disclosing bank account or credit card information, or they might try to convince him to visit a website where he can make transactions.
"
              />
              <CyberCrime
                header="15. Ransomware
"
                text='Computer malware known as "ransomware" encrypts data and media on communication devices such as laptops, desktop computers, mobile phones, and other devices, thereby posing a threat to sensitive data. In order to get his device decrypted, the victim is required to pay the stipulated ransom.

'
              />
              <CyberCrime
                header="16. Virus, Worms & Trojans
"
                text=" A computer virus is a program designed to infiltrate your system, change or corrupt your data, and then duplicate itself.
Malicious programs known as worms replicate themselves repeatedly on local drives, network shares, and other locations.
A virus is not a Trojan horse. It is a malicious program that appears to be an official application. Trojan horses can be just as destructive as viruses, yet they cannot multiply themselves. Trojan horses allow nefarious individuals or programs to enter your computer through a backdoor, making it possible for private and sensitive data to be stolen.
"
              />
              <CyberCrime
                header="17. Data Breach

"
                text="An incident where information is accessed without authority is called a data breach.
"
              />
              <CyberCrime
                header="18. Denial Of Services /Distributed DoS

"
                text="Attacks known as denial of service (DoS) are designed to prevent users from accessing computer resources without the owner's or any other person in control of the computer, computer system, or computer network's consent.
An effort to render an online service inaccessible through a denial of service (DDoS) attack involves flooding the system with traffic from several sources.

"
              />
              <CyberCrime
                header="19. Website Defacement

"
                text="Website defacement speaks to an attack that aims to alter a website's appearance or making it inoperable. The attacker might publish lewd, aggressive, and sexual pictures, texts, videos, etc.

"
              />
              <CyberCrime
                header="20. Cyber-Squatting

"
                text="The act of registering, trading, or utilizing a domain name with the intention of making money from the goodwill of another person's trademark is known as 'cyber-squatting.'"


              />
              <CyberCrime
                header="21. Pharming

"
                text="Pharming is a cyberattack that aims to divert visitors from one legitimate website to a fraudulent one.

"
              />
              <CyberCrime
                header="22. Cryptojacking

"
                text='The illicit extraction of cryptocurrency using computer resources is known as "cryptojacking."
'
              />
              <CyberCrime
                header="23. Online Drug Trafficking

"
                text=" The illegal sale, transportation, or importation of illegal controlled substances, such as heroin, cocaine, marijuana, or other illegal drugs, over internet methods is known as online drug trafficking.

"
              />
              <CyberCrime
                header="24. Espionage

"
                text=" The act of obtaining data and information without the owner's permission or knowledge is known as spying.

"
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
