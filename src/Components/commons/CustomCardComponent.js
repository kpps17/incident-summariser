import React from 'react';

const Card = (props) => {
    return (
        <>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '5px', display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                <h3 style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>{props.title}</h3>
                <p style={{ fontSize: '1vw', marginTop: '8px' }}>{props.description}</p>
                <style jsx>
                    {`
                        @media screen and (max-width: 600px) {
                          h2 {
                            font-size: 20px;
                          }
                          p {
                            font-size: 14px;
                          }
                        }
                
                        @media screen and (max-width: 400px) {
                          h2 {
                            font-size: 18px;
                          }
                          p {
                            font-size: 12px;
                          }
                        }
                    `}
                </style>
            </div>
            <br/>
       </>
    );
};

export default Card;
