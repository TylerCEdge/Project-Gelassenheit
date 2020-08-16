import React from 'react';

import '../css/CustomContainer.css';

import { AbsoluteCenter } from '../components/Positioning/AbsoluteCenter';
import Image from '../components/Image';

const About = () => {
  return (
    <React.Fragment>
      <AbsoluteCenter>
        <div id='custom-container'>
          <Image />
          <ul className='journal color-mod'>
            <li className='journal-entry'>
              <p>
                I think every newcomer to development should create something
                similar to this. I think they deserve to have an outlet. I just
                think learning is supposed to be fun. It's supposed to be
                creative. It's a way to express themselves. Good comments isn't
                the answer. A good representation of where someone is at in the
                learning process is. I just think an ever evolving one stop shop
                is the easiest way to gauge someone on that. I think expressing
                ones self is one of the greatest marks of a developer.
              </p>
              <p>
                The industry is ever evolving so why can't a project be just
                that? Why can't we have one place that's constantly updated to
                learn from? That's what we end up working on in the end
                afterall.
              </p>
              <p>
                A series of projects doesn't solidify knowledge of a subject.
                It's starting over with something new. Constant maintenance of a
                project is where you put it all together. Why not start at the
                beginning? If we want to be able to measure a developers
                strengths why not have one centralized location?
              </p>
              <p>
                One project where a more experienced developer could more easily
                gauge someones foundation and offer help. One location where a
                potential employee can show themselves. One location that
                replaces a resume and offers a robust, colorful, creative
                solution.
              </p>
              <p>
                That's what Project Gelassenheit is in a nutshell. This isn't
                even in the right section. That's ok! There aren't any rules
                here!
              </p>
              <p>Welcome to Project Gelassenheit!!!</p>
            </li>
          </ul>
        </div>
      </AbsoluteCenter>
    </React.Fragment>
  );
};

export default About;
