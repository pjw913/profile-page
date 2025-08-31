import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Footer(){
    const footerRef = useRef(null);

    useEffect(()=>{
        const elements = footerRef.current.children;

        gsap.fromTo(
            elements,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    },[])

    return(
        <footer ref={footerRef}>
            <h2>Thank You For Watching!!</h2>
            <p>성실과 끈기를 바탕으로 변화에 적응하며 빠르게 성장하는 퍼블리셔가 되고 싶습니다.</p>
            <p>Copyright 2025. &copy; ParkJungWoo All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;