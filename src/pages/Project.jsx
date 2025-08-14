import React, { useEffect, useRef, useState } from "react";
import { projectData } from "../data/textdata";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project(){
    const [activeCategory, setActiveCategory] = useState(projectData[0].id);
    const [openDetailId, setOpenDetailId] = useState(null);

    const projectRef = useRef(null);
    const sectionRef = useRef(null);
    const imgRefs = useRef({});
    const animationFrameId = useRef(null);
    const targetY = useRef({});
    const currentY = useRef({});

    const handleTabClick = (id) =>{
        if (id === activeCategory) return;

        gsap.to(projectRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          onComplete: () => {
            setActiveCategory(id);
            setOpenDetailId(null);
            imgRefs.current = {};
            targetY.current = {};
            currentY.current = {};
          },
        });
    }

    const animate = () =>{
        Object.keys(targetY.current).forEach(id => {
            if (!imgRefs.current[id]) return;
            currentY.current[id] += (targetY.current[id] - currentY.current[id]) * 0.1;
            if( Math.abs(targetY.current[id] - currentY.current[id]) < 0.1 ){
                currentY.current[id] = targetY.current[id];
            }

            const img = imgRefs.current[id].querySelector("img");
            if (img) {
                img.style.transform = `translateY(${currentY.current[id]}px)`;
            }
        });
        animationFrameId.current = requestAnimationFrame(animate);
    }

    const handleWheel = (e, id) =>{
        e.preventDefault();

        const container = imgRefs.current[id]; 
        if( !container ) return;

        const img = container.querySelector("img");
        if (!img) return;

        const maxTranslate = img.clientHeight - container.clientHeight;

        if(!(id in targetY.current)){
            targetY.current[id] = 0;
            currentY.current[id] = 0;
        }

        let newTargetY = targetY.current[id] - e.deltaY;
        newTargetY = Math.min(0, Math.max(newTargetY, -maxTranslate));
        targetY.current[id] = newTargetY;
    }

    useEffect(()=>{
        const handlers = {};

        Object.keys(imgRefs.current).forEach((id)=>{
            const container = imgRefs.current[id];
            if (!container) return;

            const onWheel = (e) =>{
                e.preventDefault();
                handleWheel(e, id);
            };

            handlers[id] = onWheel;

            container.addEventListener('wheel' , onWheel, { passive: false })
        });

        return ()=>{
            Object.keys(imgRefs.current).forEach((id)=>{
                const container = imgRefs.current[id];
                if (!container) return;
                if(handlers[id]){
                    container.removeEventListener("wheel", handlers[id]);
                }
            });
        }
    },[activeCategory]);

    useEffect(()=>{
        animate();
        return () =>{
            if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        }
    },[])

    const currentCategory = projectData.find(category => category.id === activeCategory);

    useEffect(()=>{
        const animation = gsap.fromTo(
            sectionRef.current,
            { opacity:0, y:40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none"
                }
            }
        );
        return () => {
            if (animation.scrollTrigger) animation.scrollTrigger.kill();
            animation.kill();
          };
    },[])

    useEffect(() => {
        gsap.fromTo(
          projectRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }, [activeCategory]);

    return(
        <section className="project" ref={sectionRef}>
            <h2>PROJECT</h2>
            <div className="project-about">
                <div className="btn-container">
                    {projectData.map(category =>(
                        <button
                            key={category.id}
                            className={`tab-btn ${category.id === activeCategory ? 'active' : ''}`}
                            onClick={()=> handleTabClick(category.id)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
                <div className="project-components" ref={projectRef}>
                    {currentCategory?.item?.map(item =>(
                        <div key={item.id} className="project-item">
                            <div className="item-img" ref={el => imgRefs.current[item.id] = el} style={{ touchAction:'none' }}>
                                <img src={item.url} alt={item.name} style={{ transform: 'translateY(0)', width: '100%', height: 'auto', objectFit: 'contain', userSelect: 'none', pointerEvents: 'none' }} draggable={false}/>
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <a href={item.pgurl}>사이트 링크 이동</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;