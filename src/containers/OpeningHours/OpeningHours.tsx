import React from 'react';

import { OpeningHoursStyled, Day, Time, Separator } from './styles';

import { useOpeningHours } from '../../queries/useOpeningHours';

interface Props {
  title?: string;
}
interface OpeningHours {
  day: string;
  hours: string[];
}

const OpeningHours: React.FC<Props> = ({ title = 'Opening Hours' }) => {
  const opening_hours: OpeningHours[] = useOpeningHours();

  const generateTimeTable = () =>
    React.Children.toArray(
      opening_hours.map(({ day, hours }: OpeningHours) => (
        <>
          <Day>
            <p>{day}</p>
            <Time>
              {React.Children.toArray(hours.map(hour => <p>{hour}</p>))}
            </Time>
          </Day>
          <Separator />
        </>
      ))
    );

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <OpeningHoursStyled className="transparent">
        {generateTimeTable()}
      </OpeningHoursStyled>
    </>
  );
};

export default OpeningHours;
