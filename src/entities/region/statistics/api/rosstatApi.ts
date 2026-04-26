export interface RosstatData {
  code: number;
  by_year: {
    population?: number;
    birth?: number;
    death?: number;
    arrival?: number;
    departure?: number;
    // ... остальные поля
  }[];
}

export async function fetchRosstat(codes: number[]): Promise<RosstatData[]> {
  const params = new URLSearchParams();
  codes.forEach((c) => params.append('code', String(c)));
  const res = await fetch(`https://backend.midray.ru/api/v1/rosstat?${params}`);
  if (!res.ok) throw new Error('Ошибка загрузки статистики');
  return res.json();
}