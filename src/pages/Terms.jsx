import { INQUIRY_EMAIL } from "../data";

export default function Terms() {
  return (
    <div className="oa-legal">
      <div className="oa-container">
        <h1>Terms of Service</h1>
        <p className="oa-legal-date">Last updated: July 13, 2026</p>

        <h2>1. Agreement</h2>
        <p>By using ownerawayusa.com or submitting our forms, you agree to these Terms of
          Service. If you do not agree, please do not use the site.</p>

        <h2>2. What OwnerAway is</h2>
        <p>OwnerAway provides temporary operational coverage for owner-dependent businesses.
          Submitting the pilot application form is a request for a conversation — it does not
          by itself create a service engagement. Any coverage engagement is governed by a
          separate written agreement defining scope, responsibilities, limits, reporting, and
          pricing.</p>

        <h2>3. Accurate information</h2>
        <p>You agree that the information you submit about yourself and your business is
          accurate and that you are authorized to provide it.</p>

        <h2>4. No guarantee</h2>
        <p>Content on this site is provided for general information. We do not guarantee that
          coverage will be available for every business, location, or set of dates, and we may
          decline engagements at our discretion.</p>

        <h2>5. Intellectual property</h2>
        <p>The OwnerAway name, logo, tagline, and site content are our property and may not be
          used without permission.</p>

        <h2>6. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, OwnerAway is not liable for indirect,
          incidental, or consequential damages arising from use of this website. Liability
          relating to any coverage engagement is defined in that engagement's written
          agreement.</p>

        <h2>7. Governing law</h2>
        <p>These terms are governed by the laws of the State of Maine, without regard to
          conflict-of-law rules.</p>

        <h2>8. Changes</h2>
        <p>We may update these terms from time to time. Continued use of the site after
          changes are posted constitutes acceptance.</p>

        <h2>9. Contact</h2>
        <p>Questions about these terms: <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.</p>
      </div>
    </div>
  );
}
