import React from 'react';
import { Button } from '../button/Button'
export const Contact = () => {
    return (
      <div className="contact__container">
          <h1 className="contact__title">Get in Touch    </h1>
            <div className="contact__information-container">
                <p className="contact__information">
                Right now, I'm looking for a job and new opportunities as a developer. Feel free to contact me whenever you want to and I'll reply to you as soon as I can
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
