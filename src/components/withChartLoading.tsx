import { useEffect, useState } from 'react'
import ChartSkeleton from './ChartSkeleton'

export function withChartLoading<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function ChartWithLoading(props: T) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true)
      const timeout = setTimeout(() => setLoading(false), 500) // simula delay
      return () => clearTimeout(timeout)
    }, [props]) // reexecuta se props mudarem (ex: range)

    if (loading) return <ChartSkeleton />

    return <WrappedComponent {...props} />
  }
}
