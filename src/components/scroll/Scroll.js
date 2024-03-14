import React, { useState, useEffect } from 'react';
import './Scroll.css';

const Scroll = () => {
    const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
    const [showScrollDownBtn, setShowScrollDownBtn] = useState(true);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.querySelector("#contact");
            const scrollPosition = window.scrollY + window.innerHeight;

            if (contactSection && scrollPosition >= contactSection.offsetTop) {
                setShowScrollToTopBtn(true);
                setShowScrollDownBtn(false);
            }
            else {
                setShowScrollToTopBtn(false);
                setShowScrollDownBtn(true);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    const scrollToNextSection = () => {
        const sections = ["#home", "#about", "#skills", "#projects", "#contact"];
        const scrollPosition = window.scrollY + window.innerHeight;

        let section = null;

        for (let i = 0; i < sections.length - 1; i++) {
            const currentSection = document.querySelector(sections[i]);
            const nextSection = document.querySelector(sections[i + 1]);

            if (currentSection && nextSection) {
                if (currentSection.offsetTop <= scrollPosition && nextSection.offsetTop >= scrollPosition) {
                    section = nextSection;
                    break;
                }
            }
        }

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.clientHeight;
            const scrollPosition = window.screenY || window.scrollY|| document.documentElement.scrollTop;
            const maxScroll = fullHeight - windowHeight;
            const percentage = Math.floor((scrollPosition / maxScroll) * 100);
            setScrollPercentage(percentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="scrollDown">
                {showScrollDownBtn && (
                    <svg className="scrollDown_arrows" onClick={scrollToNextSection}>
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        <path className="a4" d="M0 60 L30 92 L60 60"></path>
                        <path className="a5" d="M0 80 L30 112 L60 80"></path>
                    </svg>
                )}
            </div>
            <div className="scrollUp">
                {showScrollToTopBtn && (
                    <svg className="scrollUp_arrows" onClick={scrollToTop}>
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        <path className="a4" d="M0 60 L30 92 L60 60"></path>
                        <path className="a5" d="M0 80 L30 112 L60 80"></path>
                    </svg>
                )}
            </div>
            <div className="scroll_indicator">
                <div className="scroll_progress" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
        </>
    )
}

export default Scroll;
