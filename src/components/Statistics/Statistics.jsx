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
