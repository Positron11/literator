// src/components/Bulletin.js
import React from 'react';
// import './Bulletin.css'; // split into own css file

const Bulletin = () => {
  return (
    <aside className="compact-spacing column listbox card" id="bulletin">
      <div className="header" id="bulletin_header">
        <h1>News</h1>
      </div>

      <div id="bulletin_content">
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
