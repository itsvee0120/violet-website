import React from "react";

const Blogs = () => {
  return (
    <section className="blogs section" id="blogs">
      <h2 className="section_title">Blogs</h2>
      <span className="section_subtitle">Everything And Anything</span>
      <div className="blogs_container container grid">
        <iframe
          src="https://itsmevee.notion.site/ebd/87f59d6321124cbd9ec6b64d321f3932?v=1acc45e4348d8043baea000c1b13756b"
          width="100%"
          height="540"
          frameBorder="0"
          allowFullScreen
          title="Notion blog embed"
        />
      </div>
    </section>
  );
};

export default Blogs;
