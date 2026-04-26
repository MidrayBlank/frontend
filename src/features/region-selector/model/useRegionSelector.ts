// src/features/region-selector/model/useRegionSelector.ts
import { useState } from 'react';
import { regionsList, type RegionName } from './regions';

export function useRegionSelector() {
  const [selectedRegion, setSelectedRegion] = useState<RegionName>(regionsList[0]);

  const handleRegionChange = (region: RegionName) => {
    setSelectedRegion(region);
    // Здесь позже можно добавить обновление прогноза
  };

  return {
    selectedRegion,
    handleRegionChange,
    regionsList,
  };
}