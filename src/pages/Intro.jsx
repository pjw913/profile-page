import gsap from "gsap";
import { useEffect, useRef } from "react";

function Intro(){
    const text = 'PORTFOLIO.';
    const textRef = useRef(null);
    useEffect(()=>{
        const spans = textRef.current.querySelectorAll("span");

        gsap.fromTo(
            spans,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.4,
              duration: 1,
              ease: "power2.out",
            }
          );

    },[])
    return(
        <section className="intro-page">
            <div className="intro-nav">
                <a href="https://github.com/pjw913">GitHub<span className="line" /><span className="github">GitHub 링크이동</span></a>
            </div>
            <div className="intro-text" ref={textRef}>
                {text.split("").map((char, idx)=>(
                    <span key={idx}>{char}</span>
                ))}
            </div>
            <div className="contact">
                <p>Park Jung Woo / 박정우</p>
                <p>wjdfkf@nate.com</p>
                <p>Tel. 010 - 9919 - 6064</p>
            </div>
        </section>
    )
}

export default Intro;