import * as React from 'react';
import Loading from 'react-loading';

interface Props {
  delay?: number;
}

const FullscreenLoader: React.SFC<Props> = ({ delay }: { delay: number } = 1000) => (
  <div>
    <Loading delay={delay} type="spinningBubbles" color="#111" />
  </div>
);

export default FullscreenLoader;
