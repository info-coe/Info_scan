import React from 'react';

const Footer = () => {
  
    return (
        <>
        <div className='flex-container'>
            <div className='nasscom flexgrowdiv'>
                <img src="https://infomericainc.com/Content/images/logo-footer.png" alt="logo" style={{objectFit:"contain"}}></img>
                <p>Infomerica is a Software Development and Systems Integration company, one of the fastest growing companies that is committed to help our customers grow and move forward in every aspect of their business.</p>
            </div>
            <div className='keylinks flexgrowdiv'>
                <h5>Key Links</h5>
                <ul className='list-unstyled d-md-flex gap-5' style={{lineHeight:"30px"}}>
                   <div>
                   <li><a href="https://infomericainc.com/About-Infomerica" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i>&nbsp;About Us</a></li>
                  
                   <li><a href="https://infomericainc.com/Services" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i>&nbsp;Services</a></li>
                  
                   <li><a href="https://infomericainc.com/Solutions" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i>&nbsp;Solutions</a></li>
                   
                 
                  
                   </div>
                   <div>
                 
                   <li><a href="https://infomericainc.com/CSR" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i>&nbsp;CSR</a></li>
                  
                   <li><a href="https://infomericainc.com/Careers" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i>&nbsp;Careers</a></li>
                   
                   <li><a href="https://infomericainc.com/Contact" className='text-decoration-none'><i className="bi bi-chevron-double-right"></i>&nbsp;Contact Us</a></li>
                  
                   </div>
                </ul>

            </div>
            <div className='getintouch flexgrowdiv'>
                <h5 className='mb-3'>Get in touch</h5>
                <p><i className="bi bi-geo-alt-fill"></i> : Infomerica - USA, UK, India</p>
                <p><i className="bi bi-envelope"></i> :  <a className='text-decoration-none text-dark'  href="mailto:info@infomericainc.com">info@infomericainc.com</a></p>
            </div>
            <div className='followus flexgrowdiv '>
                <h5 className='mb-3'>Follow Us</h5>
           <div className='d-flex gap-3'>
            <a href="https://www.facebook.com/Infomerica1998/"><img src="https://infomericainc.com/Content/images/facebook.jpg" alt="facebookImg" width="40" height="40"/></a>
            <a href="https://www.youtube.com/results?search_query=infomerica"><img src="https://infomericainc.com/Content/images/youtube.png" alt="YoutubeImg" width="40" height="40"/></a>
            <a href="https://www.linkedin.com/company/infomerica"><img src="https://infomericainc.com/Content/images/linkedin.png" alt="LinkedInImg" width="40" height="40"/></a>
           </div>
            </div>

        </div>
        <div className='bg-dark text-white p-2 text-center'>
            <h6><i>Copyright &copy; 2024 <span className='text-danger'>Infomerica</span> All Rights Reserved.    <span className='text-danger'>Terms</span> | <span className='text-danger'>Privacy Policy</span></i></h6>
        </div>
            
        </>
    );
};

export default Footer;