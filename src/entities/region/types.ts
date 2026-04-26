// сущность region (загрузка и хранение дерева)
export interface LowerMunicipality {
  name: string;
  code: number;
}

export interface UpperMunicipality {
  name: string;
  code: number;
  lower_municipalities: LowerMunicipality[];
}

export interface FederalSubject {
  name: string;
  code: number;
  upper_municipalities: UpperMunicipality[];
}

export interface GeoResponse {
  name: string;
  code: number;
  federal_subjects: FederalSubject[];
}