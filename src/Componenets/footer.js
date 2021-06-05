import React from 'react'
import './footer.css'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import microsoft  from "../Assests/images/microsoft.png";
import appStore from "../Assests/images/appStore.png";
import googlePlay from "../Assests/images/googlePlay.png";


export default function footer() {
    return (
        
        <div className="footer">
            <p><span> Home </span> | <span> Terms and Condittions </span> | <span> Privacy Policy </span> | <span> CollectionStatement </span> | <span>Help</span> | Manage Account</p>
            <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
            <div className="social">
            <FaFacebookF size="22px" className="margin-right"/>
            <FaTwitter size="22px" className="margin-right"/>
            <TiSocialInstagram size="22px" className="margin-right"/>
            <div className="dwnld">
                <img src={appStore} alt="" className="appStore"/>
                <img src={googlePlay} alt="" className="googlePlay"/>
                <img src={microsoft} alt="" className="microsoft"/>
            </div>
            </div>

            
        </div>
    )
}
