import React from 'react';

interface Props {
  title?: string;
}

const Section: React.FC<Props> = ({ title = 'Section', children }) => (
  <>
    <h2 className="section-title">{title}</h2>
    <section>{children}</section>
  </>
);

export default Section;
