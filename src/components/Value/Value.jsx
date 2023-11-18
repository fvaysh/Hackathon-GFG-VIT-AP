import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
}  from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css';
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>


        <div className="flexColStart v-right">
          <span className="orangeText">Values</span>
          <span className="primaryText">Serives we provide</span>
          <span className="secondaryText">We made Aarogyam keeping in mind all the demographics <br /> of India and the needs of people 
          </span>


          <Accordion 
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded = {[0]}
          >
              {
                data.map((item, i)=> {
                  return (
                      <AccordionItem className="accordionItem key = {i} uuid = {i}">
                        <AccordionItemHeading>
                          <AccordionItemButton className="flexCenter accordionButton">
                            
                            
                            <div className="flexCenter icon">
                              {item.icon}
                            </div>
                            <span className="primaryText">
                              {item.heading}
                            </span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20}/>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p className="secondaryText">
                            {item.detail}
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                  )
                })
              }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value