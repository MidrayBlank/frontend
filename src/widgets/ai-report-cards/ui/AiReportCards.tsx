import { AiReportData } from '@/entities/ai-report';
import { InfoCard } from '@/shared';

interface AiReportCardsProps {
	data: AiReportData;
}

export function AiReportCards({ data }: AiReportCardsProps) {
	return (
		<div className="row">
			<div className="col-md-6 mb-4">
				<InfoCard title="Краткое резюме" icon="fa-file-alt" color="info">
					<p>{data.summary}</p>
				</InfoCard>
			</div>
			<div className="col-md-6 mb-4">
				<InfoCard title="Выявленные тенденции" icon="fa-chart-line" color="warning">
					<ul className="mb-0">
						{data.trends.map((trend, idx) => (
							<li key={idx}>{trend}</li>
						))}
					</ul>
				</InfoCard>
			</div>
			<div className="col-md-6 mb-4">
				<InfoCard title="Прогноз на 5-10 лет" icon="fa-calendar-alt" color="success">
					<p>
						<strong>{data.forecast.title}</strong>
					</p>
					<ul className="mb-0">
						{data.forecast.items.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				</InfoCard>
			</div>
			<div className="col-md-6 mb-4">
				<InfoCard title="Рекомендации" icon="fa-lightbulb" color="danger">
					<ol className="mb-0">
						{data.recommendations.map((rec, idx) => (
							<li key={idx}>{rec}</li>
						))}
					</ol>
				</InfoCard>
			</div>
		</div>
	);
}
