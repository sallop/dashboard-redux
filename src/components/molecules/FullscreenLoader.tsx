import * as React from 'react';
import Loading from 'react-loading';

interface Props {
  // delay?: number;
  delay: number;
}

// const FullscreenLoader: React.SFC<Props> = ({ delay }: { delay: number } = 1000) => (
const FullscreenLoader: React.SFC<Props> = ({ delay = 1000 }: { delay: number }) => (
  <div>
    <Loading delay={delay} type="spinningBubbles" color="#111" />
  </div>
);

export default FullscreenLoader;
