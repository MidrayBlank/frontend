import { useState } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { InfoCard } from '@/shared/ui';
import { defaultAiReportData, type AiReportData } from '@/entities/ai-report';

export function AiReport() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AiReportData | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    // Имитация запроса к бэкенду
    setTimeout(() => {
      setReport(defaultAiReportData);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="text-center mb-4">
          <button className="btn btn-primary btn-lg" onClick={handleGenerate} disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Генерация справки...
              </>
            ) : (
              <>
                <i className="fas fa-robot me-2"></i> Сгенерировать AI-справку
              </>
            )}
          </button>
        </div>

        {report && (
          <>
            <div className="row">
              <div className="col-md-6 mb-4">
                <InfoCard title="Краткое резюме" icon="fa-file-alt" color="info">
                  <p>{report.summary}</p>
                </InfoCard>
              </div>
              <div className="col-md-6 mb-4">
                <InfoCard title="Выявленные тенденции" icon="fa-chart-line" color="warning">
                  <ul>
                    {report.trends.map((trend, idx) => (
                      <li key={idx}>{trend}</li>
                    ))}
                  </ul>
                </InfoCard>
              </div>
              <div className="col-md-6 mb-4">
                <InfoCard title="Прогноз на 5-10 лет" icon="fa-calendar-alt" color="success">
                  <p><strong>{report.forecast.title}</strong></p>
                  <ul>
                    {report.forecast.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </InfoCard>
              </div>
              <div className="col-md-6 mb-4">
                <InfoCard title="Рекомендации" icon="fa-lightbulb" color="danger">
                  <ol>
                    {report.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ol>
                </InfoCard>
              </div>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-success btn-lg me-2" onClick={() => alert('PDF генерация (заглушка)')}>
                <i className="fas fa-file-pdf me-2"></i> Скачать PDF
              </button>
              <button className="btn btn-primary btn-lg" onClick={() => alert('Word генерация (заглушка)')}>
                <i className="fas fa-file-word me-2"></i> Скачать Word
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}