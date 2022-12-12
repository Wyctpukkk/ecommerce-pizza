import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="140" r="120" />
    <rect x="0" y="270" rx="9" ry="11" width="280" height="25" />
    <rect x="0" y="400" rx="11" ry="11" width="110" height="30" />
    <rect x="0" y="310" rx="10" ry="11" width="280" height="80" />
    <rect x="120" y="400" rx="11" ry="11" width="160" height="30" />
  </ContentLoader>
);

export default Skeleton;
