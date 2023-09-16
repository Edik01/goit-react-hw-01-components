import PropTypes from 'prop-types';

import { Section, Stats, StatsItem } from './Statistics.style';
export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <Stats>
        {stats.map(stat => {
          return (
            <StatsItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </StatsItem>
          );
        })}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
