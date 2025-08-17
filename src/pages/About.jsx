import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About(){

    useEffect(()=>{
        gsap.fromTo(
            ".about-content",
            { opacity:0, y:50 },
            {
                opacity:1,
                y:0,
                duration:1.5,
                ease:"power2.out",
                scrollTrigger:{
                    trigger:".about-content",
                    start:"top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        
    },[])
    
    return(
        <section className="about">
            <h1>About Me</h1>
            <div className="about-content">
            <div className="profile-image"><img /></div>
            <div className="interview">
                <h2>Q & A</h2>
                <div className="interview-qna">
                    <div className="interview-1">
                        <h3>“왜 퍼블리셔가 되고 싶었나요?”</h3>
                        <p>다양한 웹사이트와 앱을 접하며 ‘직접 만들어보고 싶다’는 호기심이 프론트엔드 개발에 대한 관심으로 이어졌습니다. 학습 과정에서 구조와 기능이 자연스럽게 연결되는 방식에 흥미를 느꼈고, 점점 더 체계적인 시스템을 구현하는 일에 매력을 갖게 되었습니다. 앞으로는 사용자 연령이나 디지털 경험에 관계없이 누구나 쉽게 사용할 수 있는, 실용적이고 직관적인 UI를 만드는 개발자로 성장하고 싶습니다.</p>
                    </div>
                    <div className="interview-2">
                        <h3>“어떤 퍼블리셔가 되고 싶나요?”</h3>
                        <p>최신 웹 기술과 UI/UX 트렌드를 꾸준히 학습하며 사용자 중심의 인터페이스를 구현하는 개발자로 성장하고자 합니다. 빠르게 변화하는 디자인 트렌드와 기술 흐름에 유연하게 대응할 수 있는 역량을 갖추는 동시에, 장기적으로는 새로운 흐름을 선도하고 변화와 발전을 이끄는 퍼블리셔가 되는 것이 목표입니다.</p>
                    </div>
                    <div className="interview-3">
                        <h3>“가장 기억에 남는 퍼블리싱 경험은 무엇인가요?”</h3>
                        <p>가장 기억에 남는 프로젝트는 처음으로 진행했던 ‘만개의 레시피’ 사이트 리메이크 작업입니다. 디자인부터 마크업까지 전 과정을 스스로 기획하고 구현하면서 HTML과 CSS에 대한 이해를 빠르게 높일 수 있었습니다. 특히 레이아웃 구성, 반응형 처리, 사용자 흐름을 고려한 UI/UX 구현 등을 직접 경험하며, 단순한 마크업을 넘어 사용자 입장에서 화면을 설계하는 감각을 익힐 수 있던 소중한 계기였습니다.</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="skills">
                    <h3>SKILLS</h3>
                    <div className="img">
                        <div className="img-sub"><img src={import.meta.env.BASE_URL + "/images/html.png"} alt="HTML" /></div>
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/css.png"} alt="CSS" /></div>
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/js.png"} alt="JS" /></div>
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/react.png"} alt="REACT" /></div>
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/vite.png"} alt="VITE" /></div>
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/vue.png"} alt="VUE" /></div>                                                                                 
                    </div>
                </div>
                <div className="tools">
                    <h3>TOOLS</h3>
                    <div className="img">
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/vscode.png"} alt="VSCODE" /></div>
                        <div className="img-sub"><img src={import.meta.env.BASE_URL +"/images/figma.png"} alt="FIGMA" /></div>                     
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About;