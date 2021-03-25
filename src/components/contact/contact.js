import React from 'react';
import { Button } from '../button/Button'
export const Contact = () => {
    return (
      <div className="contact__container">
          <h1 className="contact__title">Get in Touch    </h1>
            <div className="contact__information-container">
                <p className="contact__information">
                Today I’m looking new jobs and new opportunities, my inbox is always open every weekdays i read my emails and I’ll try reply to you
                </p>
         
            </div>
            <div className="contact__information-button">
                <Button 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    href={"mailto:yepezcode@gmail.com"}
                >
                    Say hello!
                </Button>
            </div>
     
      </div>
)}
