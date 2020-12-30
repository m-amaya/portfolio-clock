import styled from '@emotion/styled';
import React, { FC, Fragment, useEffect, useState } from 'react';

import { rgba } from 'styles/color';
import getTime from 'utils/getTime';
import useWindowSize from 'utils/hooks/useWindowSize';

const ClockFace: FC<{}> = () => {
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const offsets = [1, 2, 3, 4];
  const [time, setTime] = useState(getTime());
  const [width, height] = useWindowSize();
  const size =
    width && height ? (width > height ? height / 2 : width / 2) : undefined;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container size={size}>
      <FaceBack>
        <FaceFront />
      </FaceBack>
      <SVG viewBox="-50 -50 100 100">
        {minutes.map((minute) => (
          <Fragment key={minute}>
            <MajorMarker
              key={`major-${minute}`}
              y1="43"
              y2="48"
              transform={`rotate(${30 * minute})`}
            />
            {offsets.map((offset) => (
              <MinorMarker
                key={`offset-${minute}-${offset}`}
                y1="45"
                y2="48"
                transform={`rotate(${6 * (minute + offset)})`}
              />
            ))}
          </Fragment>
        ))}
        <HourHand
          y1="2"
          y2="-15"
          transform={`rotate(${30 * time.hours + time.minutes / 2})`}
        />
        <MinuteHand
          y1="2"
          y2="-25"
          transform={`rotate(${6 * time.minutes + time.seconds / 10})`}
        />
        <SecondHand y1="2" y2="-35" transform={`rotate(${6 * time.seconds})`} />
      </SVG>
    </Container>
  );
};

const Container = styled.div<{ size?: number }>(({ size }) => ({
  height: size,
  position: 'relative',
  width: size,
}));

const FaceBack = styled.div({
  alignItems: 'center',
  border: `1px solid ${rgba('#00BCD4', 0.3)}`,
  borderRadius: '50%',
  boxShadow: `
    inset 2px 1px 5px #fff,
    inset -2px -2px 5px ${rgba('#00BCD4', 0.2)}
  `,
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

const FaceFront = styled.div({
  background: `radial-gradient(#fff, transparent 60%)`,
  border: `1px solid ${rgba('#00BCD4', 0.3)}`,
  borderRadius: '50%',
  boxShadow: `
    inset 2px 1px 5px #fff,
    0 2px 5px ${rgba('#00BCD4', 0.2)}
  `,
  height: '80%',
  width: '80%',
});

const SVG = styled.svg({
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
});

const MajorMarker = styled.line({
  stroke: '#00BCD4',
  strokeWidth: 0.4,
});

const MinorMarker = styled.line({
  stroke: '#fff',
  strokeWidth: 0.3,
});

const HourHand = styled.line({
  stroke: '#000',
  strokeWidth: 0.8,
});

const MinuteHand = styled.line({
  stroke: '#B0BEC5',
  strokeWidth: 0.6,
});

const SecondHand = styled.line({
  stroke: '#E91E63',
  strokeWidth: 0.8,
});

export default ClockFace;
