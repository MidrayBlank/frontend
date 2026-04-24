import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  icon: string;
  color: 'info' | 'warning' | 'success' | 'danger';
  children: ReactNode;
}

export function InfoCard({ title, icon, color, children }: InfoCardProps) {
  return (
    <div className="card shadow-sm h-100">
      <div className={`card-header bg-${color} text-white`}>
        <h5 className="mb-0"><i className={`fas ${icon} me-2`}></i> {title}</h5>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}