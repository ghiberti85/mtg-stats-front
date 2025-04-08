import { createContext, useContext, useState } from 'react'

export type StatsRange = 'all' | 'year' | '3months' | 'month'

type StatsFilterContextType = {
  range: StatsRange
  setRange: (range: StatsRange) => void
}

const StatsFilterContext = createContext<StatsFilterContextType | undefined>(
  undefined
)

export const StatsFilterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [range, setRange] = useState<StatsRange>('all')

  return (
    <StatsFilterContext.Provider value={{ range, setRange }}>
      {children}
    </StatsFilterContext.Provider>
  )
}

export const useStatsFilter = () => {
  const context = useContext(StatsFilterContext)
  if (!context) {
    throw new Error('useStatsFilter must be used within a StatsFilterProvider')
  }
  return context
}
