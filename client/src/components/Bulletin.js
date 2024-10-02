// src/components/Bulletin.js
import React, { useEffect, useRef } from 'react';
// import './Bulletin.css'; // split into own css file



const Bulletin = () => {

  const navRef = useRef(null);
  const mainRef = useRef(null);
  const bulletinRef = useRef(null);
  const bulletinContentRef = useRef(null);

  useEffect(() => {
    const navbar = navRef.current;
    const main = mainRef.current;
    const bulletin = bulletinRef.current;
    const bulletinContent = bulletinContentRef.current;
    if (navbar && main && bulletin && bulletinContent){

      // sidebar scroll indicator
      function bulletinScrollStatus() {
        bulletinContent.classList.toggle("fully-scrolled", (bulletinContent.scrollHeight - bulletinContent.scrollTop) < bulletinContent.clientHeight + 10);
      }
    
      // dynamic bulletin height
      function resizeBulletin() {
        if (window.innerWidth > 10) {
          var stopAtMainEnd = Math.max(0, window.innerHeight - main.getBoundingClientRect().bottom);
          var distanceFromTop = window.innerHeight - (navbar.getBoundingClientRect().bottom);
          bulletin.style.maxHeight = String(distanceFromTop - stopAtMainEnd) + "px";
        } else {bulletin.style.maxHeight = null;}
      }
      
      // window event listeners
      window.addEventListener("scroll", () => {
        resizeBulletin();
        bulletinScrollStatus();
      });
      window.addEventListener("resize", () => {
        resizeBulletin()
        bulletinScrollStatus();
      });
        // bulletin scroll event listener
        bulletinContent.addEventListener("scroll", () => {bulletinScrollStatus();});
    }
  },[]);




  return (
    <aside className="compact-spacing column listbox card" id="bulletin" ref={bulletinRef}>
      <div className="header" id="bulletin_header">
        <h1>News</h1>
      </div>

      <div id="bulletin_content" ref={bulletinContentRef}>
        <p>Dark spruce forest frowned on either side of the frozen waterway.</p>
        <p>
          The trees had been stripped by a recent wind of their white covering
          of frost, and they seemed to lean toward each other, black and
          ominous, in the fading light.
        </p>
        <p>
          A vast silence reigned over the land. The land itself was a
          desolation, lifeless, without movement, so lone and cold that the
          spirit of it was not even that of sadness. There was a hint in it of
          laughter, but of a laughter more terrible than any sadness — a
          laughter that was mirthless as the smile of the Sphinx, a laughter
          cold as the frost and partaking of the grimness of infallibility.
        </p>
      </div>
    </aside>
  );
};

export default Bulletin;
