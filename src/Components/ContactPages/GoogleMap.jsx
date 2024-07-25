import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="mt-10 mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d472.66879722060594!2d73.86257203428205!3d18.743565872022007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1721714803227!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
