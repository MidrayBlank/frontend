import { useState, useMemo } from 'react';
import { fullData } from '@/entities/population';

export function useFilteredData() {
  const [filters, setFilters] = useState({
    subject: '',
    type: '',
    periodFrom: 2020,
    periodTo: 2024,
  });

  const filteredData = useMemo(() => {
    return fullData.filter(item => {
      if (filters.subject && item.subject !== filters.subject) return false;
      if (filters.type && item.type !== filters.type) return false;
      const match = item.period.match(/(\d{4})-(\d{4})/);
      if (match) {
        const start = parseInt(match[1]);
        const end = parseInt(match[2]);
        return !(start > filters.periodTo || end < filters.periodFrom);
      }
      return true;
    });
  }, [filters]);

  const updateFilter = (key: keyof typeof filters, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ subject: '', type: '', periodFrom: 2020, periodTo: 2024 });
  };

  return { filteredData, filters, updateFilter, resetFilters };
}