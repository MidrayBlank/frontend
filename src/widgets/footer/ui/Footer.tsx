import { FooterContent } from './FooterContent';
import { FooterCopyright } from './FooterCopyright';

export function Footer() {
  return (
    <footer
      className="mt-5 py-4"
      style={{
        background: 'var(--card-bg, #0B2347)',
        borderTop: '1px solid var(--border-1, rgba(84,138,255,0.18))',
      }}
    >
      <div className="container">
        <FooterContent />
        <FooterCopyright />
      </div>
    </footer>
  );
}