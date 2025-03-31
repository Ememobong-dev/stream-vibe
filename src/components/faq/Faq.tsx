import React, { useState } from "react";
import { Accordian } from "./Accordian";

const Faq = () => {
    const [accordianNum, setaccordianNum] = useState("00");


    const faqData = [
        {
            num: "01",
            question: "What is StreamVibe?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?"
        },
        {
            num: "02",
            question: "What content is available on StreamVibe?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?"
        },
        {
            num: "03",
            question: "How can I watch StreamVibe?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?"
        },
        {
            num: "04",
            question: "How much does StreamVibe cost?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?"
        },
        {
            num: "05",
            question: "How do I sign up for StreamVibe?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?"
        },
        {
            num: "06",
            question: "What is the StreamVibe free trial?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?"
        },
    ]
  return (
    <div className="grid grid-cols-2  gap-x-24 gap-y-10">
        {
            faqData.map( (item, index) => (
                <Accordian
                key={index}
                num={item.num}
                question={item.question}
                answers={item.answer}
                onClick={()=> setaccordianNum(item.num)}
                showAccordian = {item.num === accordianNum}
              />
            ) )
        }
     
    </div>
  );
};

export default Faq;
