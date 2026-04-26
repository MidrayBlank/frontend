import { useEffect, useState } from 'react';
import { fetchGeoTree } from '../api/geoApi';
import type { FederalSubject, UpperMunicipality, LowerMunicipality } from '../types';

export function useRegions() {
  const [subjects, setSubjects] = useState<FederalSubject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGeoTree()
      .then((data) => {
        setSubjects(data.federal_subjects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getUpperMunicipalities = (subjectCode: number): UpperMunicipality[] => {
    const subject = subjects.find((s) => s.code === subjectCode);
    return subject?.upper_municipalities ?? [];
  };

  const getLowerMunicipalities = (upperCode: number): LowerMunicipality[] => {
    for (const subject of subjects) {
      const upper = subject.upper_municipalities.find((u) => u.code === upperCode);
      if (upper) return upper.lower_municipalities;
    }
    return [];
  };

  return { subjects, loading, error, getUpperMunicipalities, getLowerMunicipalities };
}