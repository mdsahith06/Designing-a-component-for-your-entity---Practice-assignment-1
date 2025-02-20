import React from "react";

const Usercard=()=>{
    const profilePhoto= "../src/assets/Screenshot 2025-01-30 161701.png";
    const name='Sahith Madichedi'
    const email='sahtih@yahoo.com'
    const phone='897088683962'
    const address='anekal boys hostel '


    const cardStyle={
        width:'300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow:'opx 0px 10px rgbd(0,0,0,0.1)',
        padding:'16px',
        textAlign:'centre',
        margin:'16px auto',
        };
        const iamgeStyle ={
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit:'cover',

        }
        return(
            <div style={cardStyle}>
            <img src={profilePhoto} alt="Profile" style={iamgeStyle}/>
            <h2>{name}</h2>
            <p>
                <strong>email: {email}</strong>
            </p>
            <p>
                <strong>Phone:{phone}</strong>
            </p>
            <p>
                <strong>Adresss:{address}</strong>
            </p>
            </div>
        )

    

}
export default Usercard;