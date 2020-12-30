import styled from '@emotion/styled';
import { FC } from 'react';

import ClockFace from 'components/ClockFace/ClockFace';

const IndexPage: FC<{}> = () => {
  return (
    <Page>
      <ClockFace />
    </Page>
  );
};

const Page = styled.div({
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
});

export default IndexPage;
