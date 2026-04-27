import { useState } from 'react';
import { defaultAiReportData, type AiReportData } from '@/entities/ai-report';

export function useGenerateAiReport() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AiReportData | null>(null);

  const generate = async () => {
    setLoading(true);
    // TODO: заменить на реальный API-вызов
    setTimeout(() => {
      setReport(defaultAiReportData);
      setLoading(false);
    }, 1500);
  };

  return { loading, report, generate };
}