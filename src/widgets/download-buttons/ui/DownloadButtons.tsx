// src/widgets/download-buttons/ui/DownloadButtons.tsx
import { useGenerateAiReport } from '@/features/generate-ai-report';

export function DownloadButtons() {
  const { report } = useGenerateAiReport();

  const handlePrint = () => {
    if (!report) {
      alert('Сначала сгенерируйте справку');
      return;
    }
    window.print();
  };

  const handlePDF = () => {
    if (!report) {
      alert('Сначала сгенерируйте справку');
      return;
    }
    alert('Функция скачивания PDF будет реализована позже');
  };

  const handleWord = () => {
    if (!report) {
      alert('Сначала сгенерируйте справку');
      return;
    }
    alert('Функция скачивания Word будет реализована позже');
  };

  return (
    <div className="text-center mt-4">
      <button className="btn btn-primary btn-lg me-2" onClick={handlePrint}>
        <i className="fas fa-print me-2"></i> Печатать
      </button>
      <button className="btn btn-success btn-lg me-2" onClick={handlePDF}>
        <i className="fas fa-file-pdf me-2"></i> Скачать PDF
      </button>
      <button className="btn btn-warning btn-lg" onClick={handleWord}>
        <i className="fas fa-file-word me-2"></i> Скачать Word
      </button>
    </div>
  );
}