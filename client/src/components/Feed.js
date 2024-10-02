// src/components/Feed.js
import React from 'react';
// import './Feed.css'; // split into own css file

const Feed = () => {
  return (
    <div id="main_content">
      <div id="story_previews">
        <div className="story preview compact-spacing column listbox card">
          <div
            className="background-image"
            style={{ backgroundImage: "url('https://source.unsplash.com/random?1')" }}
          >
            <div className="wiper"></div>
          </div>
          <div className="compact-spacing column listbox header">
            <div className="category pill">Period Fiction | 27 / 12 / 2022</div>
            <h1 className="title">The Curious Case of Benjamin Button</h1>
          </div>
          <div className="content">
            <p>
              As long ago as 1860 it was the proper thing to be born at home.
              At present, so I am told, the high gods of medicine have decreed
              that the first cries of the young shall be uttered upon the
              anaesthetic air of a hospital, preferably a fashionable one.
            </p>
          </div>
          <div className="authors pill">By OunceOfShag, Inshallah, and others</div>
        </div>

        <div className="story preview compact-spacing column listbox card">
          <div
            className="background-image"
            style={{ backgroundImage: "url('https://source.unsplash.com/random?2')" }}
          >
            <div className="wiper"></div>
          </div>
          <div className="compact-spacing column listbox header">
            <div className="category pill">Legal Fiction | 12 / 12 / 2022</div>
            <h1 className="title">To Kill a Mockingbird</h1>
          </div>
          <div className="content">
            <p>
              Atticus said to Jem one day, “I’d rather you shot at tin cans in
              the backyard, but I know you’ll go after birds. Shoot all the blue
              jays you want, if you can hit ‘em, but remember it’s a sin to kill
              a mockingbird.”
            </p>
          </div>
          <div className="authors pill">By OunceOfShag, Inshallah, and others</div>
        </div>

        <div className="story preview compact-spacing column listbox card">
          <div
            className="background-image"
            style={{ backgroundImage: "url('https://source.unsplash.com/random?3')" }}
          >
            <div className="wiper"></div>
          </div>
          <div className="compact-spacing column listbox header">
            <div className="category pill">Surreal Fiction | 3 / 1 / 2023</div>
            <h1 className="title">In Search of Lost Time</h1>
          </div>
          <div className="content">
            <p>
              believe that we can change the things around us in accordance with
              our desires—we believe it because otherwise we can see no
              favourable outcome.
            </p>
          </div>
          <div className="authors pill">By OunceOfShag, Inshallah, and others</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
