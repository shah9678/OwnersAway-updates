import { INQUIRY_EMAIL } from "../data";

export default function Privacy() {
  return (
    <div className="oa-legal">
      <div className="oa-container">
        <h1>Privacy Policy</h1>
        <p className="oa-legal-date">Last updated: July 13, 2026</p>

        <h2>1. Who we are</h2>
        <p>OwnerAway ("we," "us") provides temporary operational coverage for owner-dependent
          businesses. This policy explains what information we collect through
          ownerawayusa.com and how we use it.</p>

        <h2>2. Information we collect</h2>
        <p>When you submit our pilot application or contact form, we collect the information
          you provide: your name, business name, business type, city and state, email address,
          phone number, estimated weekly revenue range, and anything you write in the message
          field. We do not collect payment information through this website.</p>

        <h2>3. How we use your information</h2>
        <p>We use the information you submit to respond to your inquiry, evaluate fit for our
          pilot program, schedule discovery conversations, and provide our services. We may
          also use your contact details to follow up about your request.</p>

        <h2>4. How your information is shared</h2>
        <p>We do not sell your personal information. Form submissions are transmitted using a
          third-party form delivery service and email providers so they can reach our team.
          We may share information with service providers who help us operate, and when
          required by law.</p>

        <h2>5. Data retention</h2>
        <p>We keep inquiry information for as long as needed to respond to you and evaluate a
          potential engagement, and as required for legitimate business or legal purposes.
          You may ask us to delete your information at any time.</p>

        <h2>6. Security</h2>
        <p>We take reasonable measures to protect the information you send us. No method of
          transmission over the internet is completely secure, so we cannot guarantee
          absolute security.</p>

        <h2>7. Your choices</h2>
        <p>You may request access to, correction of, or deletion of your information by
          emailing us at <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.</p>

        <h2>8. Children</h2>
        <p>Our services are for business owners and are not directed to anyone under 18. We do
          not knowingly collect information from children.</p>

        <h2>9. Changes to this policy</h2>
        <p>We may update this policy from time to time. The date above reflects the latest
          revision. Material changes will be posted on this page.</p>

        <h2>10. Contact</h2>
        <p>Questions about this policy: <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.</p>
      </div>
    </div>
  );
}
