export interface AiReportData {
  summary: string;          // краткое резюме
  trends: string[];         // список тенденций
  forecast: {
    title: string;
    items: string[];        // пункты прогноза
  };
  recommendations: string[]; // рекомендации
}