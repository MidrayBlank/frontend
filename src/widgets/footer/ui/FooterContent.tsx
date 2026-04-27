import { FooterLogo } from './FooterLogo';
import { FooterNav } from './FooterNav';
import { FooterContacts } from './FooterContacts';

export function FooterContent() {
  return (
    <div className="row">
      <FooterLogo />
      <FooterNav />
      <FooterContacts />
    </div>
  );
}