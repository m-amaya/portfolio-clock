import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

const IndexPage: FC<{}> = () => {
  return (
    <Page>
      <FAIcon icon={faCheck} /> My App
    </Page>
  );
};

const Page = styled.div({
  alignItems: 'center',
  display: 'flex',
  fontSize: 30,
  gap: 8,
  height: '100vh',
  justifyContent: 'center',
});

const FAIcon = styled(FontAwesomeIcon)({
  color: '#00E676',
});

export default IndexPage;
