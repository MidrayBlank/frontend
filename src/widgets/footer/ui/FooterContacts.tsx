import { useFooterLinks } from '../models/useFooterLinks';

export function FooterContacts() {
  const { socialLinks } = useFooterLinks();

  return (
    <div className="col-md-4">
      <h5 style={{ color: 'var(--text-100, #F4F8FF)' }}>Контакты</h5>
      <ul className="list-unstyled">
        <li>
          <a href={socialLinks[0].href} className="text-decoration-none" style={{ color: 'var(--text-300, #A9B8D6)' }}>
            {socialLinks[0].label}
          </a>
        </li>
        <li>
          <a href={socialLinks[1].href} className="text-decoration-none" style={{ color: 'var(--text-300, #A9B8D6)' }}>
            <i className={socialLinks[1].icon}></i> {socialLinks[1].label}
          </a>
        </li>
      </ul>
    </div>
  );
}