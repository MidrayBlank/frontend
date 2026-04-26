// src/features/region-selector/ui/RegionSelector.tsx
import { type RegionName } from '../model/regions';

interface RegionSelectorProps {
  regionsList: readonly RegionName[];
  selectedRegion: RegionName;
  onChange: (region: RegionName) => void;
}

export function RegionSelector({ regionsList, selectedRegion, onChange }: RegionSelectorProps) {
  return (
    <div className="col-md-6">
      <label className="form-label fw-bold">Выберите регион:</label>
      <select
        className="form-select"
        value={selectedRegion}
        onChange={(e) => onChange(e.target.value as RegionName)}
      >
        {regionsList.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}