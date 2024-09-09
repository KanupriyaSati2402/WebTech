import React from "react";
import image from '../assets/image.jpg'
const About = () => {
  return (
    <section className="about">
 
      <div className="Content">
      <h1>About Zoho</h1>
      <br/>
      <p>
        Zoho Commerce is a cloud-based e-commerce platform that enables
        businesses to set up and manage online stores for selling products like
        clothing, electronics, medical supplies, and household items. Each product can
        be listed with detailed specifications, such as price, dimensions, and
        other key information. While Zoho Commerce currently supports only
        physical products, plans to introduce digital product sales are in
        development. </p>
        <br/>
       <p> Customization is a core feature, with an intuitive
        drag-and-drop editor that allows users to easily design and modify their
        storefronts. The platform offers over 20 templates, which can be
        customized by adding images, text boxes, galleries, maps, and product
        collections. Additionally, the platform allows users to preview their
        designs on different devices, ensuring a responsive experience for
        customers shopping via desktop, tablet, or mobile. </p>
        

      </div>
      {/* <div className="image"><img src={image}/></div> */}
    </section>
  );
};

export default About;
