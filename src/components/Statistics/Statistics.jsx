import { Section, Stats, StatsItem } from "./Statistics.style"
export const Statistics = ({stats,title})=>{
  return  <Section>
 {title && <h2 class="title">{title}</h2>}

  <Stats>
  {stats.map((stat)=>{
return  <StatsItem>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </StatsItem>
  })}
    
  </Stats>
</Section>
}