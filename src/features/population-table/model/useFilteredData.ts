// src/features/population-table/model/useFilteredData.ts
import { useState, useMemo } from 'react';
import { fullData } from '@/entities/population';

interface FiltersState {
  subject: string;
  type: string;
  periodFrom: number;
  periodTo: number;
}

export function useFilteredData() {
  // Активные фильтры (применяются к таблице)
  const [activeFilters, setActiveFilters] = useState<FiltersState>({
    subject: '',
    type: '',
    periodFrom: 2020,
    periodTo: 2024,
  });

  // Временные фильтры (для полей ввода)
  const [tempFilters, setTempFilters] = useState<FiltersState>({ ...activeFilters });

  const updateTempFilter = (key: keyof FiltersState, value: string | number) => {
    setTempFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setActiveFilters({ ...tempFilters });
  };

  const resetFilters = () => {
    const defaultFilters = {
      subject: '',
      type: '',
      periodFrom: 2020,
      periodTo: 2024,
    };
    setTempFilters(defaultFilters);
    setActiveFilters(defaultFilters);
  };

  const filteredData = useMemo(() => {
    return fullData.filter(item => {
      if (activeFilters.subject && item.subject !== activeFilters.subject) return false;
      if (activeFilters.type && item.type !== activeFilters.type) return false;
      const match = item.period.match(/(\d{4})-(\d{4})/);
      if (match) {
        const start = parseInt(match[1]);
        const end = parseInt(match[2]);
        return !(start > activeFilters.periodTo || end < activeFilters.periodFrom);
      }
      return true;
    });
  }, [activeFilters]);

  return {
    filteredData,
    tempFilters,
    activeFilters,
    updateTempFilter,
    applyFilters,
    resetFilters,
  };
}