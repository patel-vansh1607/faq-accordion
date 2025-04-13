import React, { useState } from 'react';
import "../styles/Accordion.css"

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Do you drink coffee or tea while coding?",
            answer: "Yes. The answer is always yes. Mostly coffee ☕ — but tea when I'm debugging for hours 😅."
        },
        {
            question: "Tabs or Spaces?",
            answer: "I use spaces. But I respect the sacred war of indentation preferences 🤝."
        },
        {
            question: "Dark mode or light mode?",
            answer: "Dark mode always. My code deserves the spotlight, not my retinas 🌚."
        },
        {
            question: "Why did you become a developer?",
            answer: "Because making stuff with code feels like magic — and I'm a low-key wizard 🧙‍♂️."
        },
        {
            question: "Do you sleep or just code all night?",
            answer: "I sleep... eventually. After I fix 'just one more bug' at 2:47 AM 🛌💻."
        },
        {
            question: "Can you fix my Wi-Fi?",
            answer: "Only if you pay me in snacks or GitHub stars ⭐🍪."
        }
    ];

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="main-div">
            <div className="accordion">
                {faqs.map((faq, index) => (
                    <div key={index} className='accordion-item'>
                        <div className='accordion-header' onClick={() => handleClick(index)}>
                            <h3>{faq.questions}</h3>
                            <span className={`accordion-icon ${activeIndex === index ? 'open' : ''}`}>Open</span>

                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;