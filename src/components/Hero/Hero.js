import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm <br />
          Lilian Umeakunne
          <p>Full-Stack Developer.</p>
        </SectionTitle>
        <SectionText>
        I have robust experience building amazing front-end and back-end projects both independently and as part of a team.
        </SectionText>
        <Button onClick={() => window.location = "https://github.com/Lilian-Chinelo"} >Connect on GitHub</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;