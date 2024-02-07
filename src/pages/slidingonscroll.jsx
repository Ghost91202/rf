import { useRef } from "react";
import { useInView } from "framer-motion";
import "./styles.css";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="onscroll">
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}
function Section2({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="onscroll">
      <span
        style={{
          transform: isInView ? "none" : "translateX(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}
function Section3({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="onscroll">
      <span
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}
function Section4({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="onscroll">
      <span
        style={{
          transform: isInView ? "none" : "translateY(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}



const slidingonscroll = ({Name, Name2, Name3, Name4}) => {
  return (
      <div>
          <Section className="onscroll">{Name}</Section>
          <Section2 className="onscroll2">{Name2}</Section2>
          <Section3 className="onscroll3">{Name3}</Section3>
          <Section4 className="onscroll4">{Name4}</Section4>

      </div>
  )
}

export default slidingonscroll
