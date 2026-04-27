// src/entities/population/model/types.ts
export interface PopulationRecord {
  id: number;
  subject: string;
  municipality: string;
  type: string;
  period: string;
  growth: string;
  birth: string;          // рождаемость (‰)
  death: string;          // смертность (‰)
  natural: string;        // естественный прирост (‰)
  migration: string;      // миграционный прирост (‰)
  // НОВЫЕ ПОЛЯ
  population: number;     // численность населения (чел)
  male: number;           // мужчины (чел)
  female: number;         // женщины (чел)
  land_area: number;      // площадь (км²)
  avg_salary: number;     // средняя зарплата (₽)
  schools: number;        // школы
  housing_commissioned: number; // жильё (тыс. м²)
}

export interface TopItem {
  id: number;
  name: string;
  growth: string;
}