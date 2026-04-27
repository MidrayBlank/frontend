// src/entities/population/model/populationData.ts
import type { PopulationRecord, TopItem } from './types';

export const fullData: PopulationRecord[] = [
  {
    id: 1, subject: "Московская область", municipality: "Красногорск", type: "городской округ", period: "2020-2024", growth: "+15.2%",
    birth: "12.5", death: "8.2", natural: "+4.3", migration: "+10.9",
    population: 175000, male: 81000, female: 94000, land_area: 223.4, avg_salary: 78500, schools: 32, housing_commissioned: 245.6,
  },
  {
    id: 2, subject: "Московская область", municipality: "Одинцово", type: "городской округ", period: "2020-2024", growth: "+8.7%",
    birth: "11.2", death: "9.1", natural: "+2.1", migration: "+6.6",
    population: 142000, male: 66000, female: 76000, land_area: 187.2, avg_salary: 71200, schools: 28, housing_commissioned: 189.3,
  },
  {
    id: 3, subject: "Ленинградская область", municipality: "Кудрово", type: "городской округ", period: "2020-2024", growth: "+11.5%",
    birth: "10.8", death: "7.5", natural: "+3.3", migration: "+8.2",
    population: 65000, male: 30000, female: 35000, land_area: 85.6, avg_salary: 65400, schools: 12, housing_commissioned: 98.4,
  },
  {
    id: 4, subject: "Краснодарский край", municipality: "Сочи", type: "городской округ", period: "2020-2024", growth: "+5.3%",
    birth: "9.5", death: "8.8", natural: "+0.7", migration: "+4.6",
    population: 450000, male: 210000, female: 240000, land_area: 176.8, avg_salary: 58900, schools: 78, housing_commissioned: 320.5,
  },
  {
    id: 5, subject: "Новосибирская область", municipality: "Новосибирск", type: "городской округ", period: "2020-2024", growth: "+3.2%",
    birth: "10.2", death: "9.5", natural: "+0.7", migration: "+2.5",
    population: 1650000, male: 770000, female: 880000, land_area: 502.7, avg_salary: 62100, schools: 215, housing_commissioned: 890.2,
  },
  {
    id: 6, subject: "Московская область", municipality: "Балашиха", type: "городской округ", period: "2021-2025", growth: "+9.5%",
    birth: "11.5", death: "8.9", natural: "+2.6", migration: "+6.9",
    population: 520000, male: 242000, female: 278000, land_area: 244.4, avg_salary: 73400, schools: 65, housing_commissioned: 410.7,
  },
  {
    id: 7, subject: "Ленинградская область", municipality: "Гатчинский район", type: "муниципальный район", period: "2019-2023", growth: "+2.8%",
    birth: "9.8", death: "10.5", natural: "-0.7", migration: "+3.5",
    population: 265000, male: 122000, female: 143000, land_area: 2868.9, avg_salary: 54800, schools: 84, housing_commissioned: 142.3,
  },
];

export const growthData: TopItem[] = [
  { id:1, name:"Красногорск", growth:"+15.2%" }, { id:2, name:"Сколково", growth:"+12.8%" },
  { id:3, name:"Кудрово", growth:"+11.5%" }, { id:4, name:"Южный", growth:"+9.3%" }, { id:5, name:"Северный", growth:"+7.8%" }
];

export const declineData: TopItem[] = [
  { id:1, name:"Старый город", growth:"-8.5%" }, { id:2, name:"Заводской", growth:"-6.2%" },
  { id:3, name:"Северный", growth:"-4.1%" }, { id:4, name:"Восточный", growth:"-3.5%" }, { id:5, name:"Приозерский", growth:"-2.8%" }
];