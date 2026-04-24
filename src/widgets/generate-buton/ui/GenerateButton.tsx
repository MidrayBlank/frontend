import { useGenerateAiReport } from '@/features/generate-ai-report';

export function GenerateButton() {
    const { loading, generate } = useGenerateAiReport();

  return (
    <button
      className="btn btn-primary btn-lg"
      onClick={generate}
      disabled={loading}
    >
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
  );
}