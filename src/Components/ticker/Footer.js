import React from 'react';
import Ticker from 'react-ticker';
import './Footer.css';

const Footer = () => {
    return (
        <div className="videoFooter__ticker pt-5">
            <Ticker mode="smooth">
                {
                    ({ index }) => (
                        <>
                            <p>This is React-Redux practiced project. Practiced by: Md Touhedul Haque. Zürich, Switzerland. &#9996;</p>

                        </>
                    )
                }
            </Ticker>
        </div>
    );
};

export default Footer;