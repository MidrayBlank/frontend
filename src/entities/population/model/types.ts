export interface PopulationRecord {
  id: number;
  subject: string;
  municipality: string;
  type: string;
  period: string;
  growth: string;
  birth: string;
  death: string;
  natural: string;
  migration: string;
}

export interface TopItem {
  id: number;
  name: string;
  growth: string;
}