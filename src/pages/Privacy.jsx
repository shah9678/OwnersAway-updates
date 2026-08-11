import { INQUIRY_EMAIL } from "../data";
import useDocumentHead from "../lib/useDocumentHead";

export default function Privacy() {
  useDocumentHead({
    title: "Privacy Policy | OwnerAway USA",
    description:
  "Read the OwnerAway Privacy Policy to learn how information submitted through our website and services is collected, used, and protected.",

canonical: "https://ownerawayusa.com/privacy",

ogTitle: "Privacy Policy | OwnerAway USA",

ogDescription:
  "Read the OwnerAway Privacy Policy to learn how information submitted through our website and services is collected, used, and protected.",
  });

  return (
    <div className="oa-legal">
      <div className="oa-container">
        <h1>Privacy Policy</h1>
        <p className="oa-legal-date">Last updated: August 10, 2026</p>

        <h2>1. Who We Are</h2>
        <p>OwnerAway ("OwnerAway," "we," "us," or "our") provides temporary operational coverage
          services for owner-dependent businesses. This Privacy Policy explains how we collect,
          use, disclose, and protect information when you visit ownerawayusa.com, submit an
          inquiry or application, communicate with us, or otherwise interact with our website and
          services.</p>

        <h2>2. Information We Collect</h2>
        <p><strong>Information you provide to us.</strong> When you submit an inquiry, application,
          contact form, or other communication, we may collect your name, business name, business
          type or industry, city and state, email address, phone number, estimated weekly revenue
          range, requested coverage dates, operational needs, and information you voluntarily
          provide in message fields or communications.</p>
        <p><strong>Operator and applicant information.</strong> If you apply to become an OwnerAway
          relief manager or operator, we may collect contact information, resume and employment
          history, professional experience, certifications or qualifications, geographic location,
          travel availability, references, assignment availability, and other information you
          voluntarily provide during screening. If background screening is used, separate notices
          and authorizations may be provided as required by law.</p>
        <p><strong>Information collected automatically.</strong> Our website hosting and technical
          service providers may process information such as IP address, browser type, device type,
          operating system, referring page, pages viewed, timestamps, and technical logs. The
          website may use essential cookies or similar technologies needed for functionality and
          security. If we add analytics, advertising, or cross-site tracking technologies, we will
          update this Policy and provide any notices or choices required by applicable law.</p>
        <p><strong>Payment information.</strong> We do not currently collect payment card
          information directly through ownerawayusa.com. If payments are added later, payment
          information may be processed by a third-party payment processor under its own terms and
          privacy policy.</p>

        <h2>3. How We Use Information</h2>
        <p>We may use information to respond to inquiries; evaluate whether our services are a
          fit; schedule discovery calls; provide temporary operational coverage; match businesses
          with prospective relief managers; evaluate operator candidates; communicate about
          assignments and services; improve our website and operations; maintain security; prevent
          fraud or misuse; keep business and legal records; comply with legal obligations; and
          follow up about services in which you expressed interest.</p>

        <h2>4. How We Share Information</h2>
        <p>We do not sell personal information for monetary consideration. We may disclose
          information to service providers that support our operations, such as website hosting,
          form-processing, email, communications, customer relationship management, analytics (if
          enabled), background screening (if applicable), insurance, accounting, and legal
          providers.</p>
        <p>When reasonably necessary to evaluate or provide an OwnerAway engagement, information
          may be shared between a participating business and a prospective or assigned relief
          manager. We may also disclose information when required by law or legal process, to
          protect rights, safety, property, or security, or in connection with a merger,
          acquisition, financing, restructuring, bankruptcy, or sale of all or part of the
          business.</p>

        <h2>5. Data Retention</h2>
        <p>We retain information for as long as reasonably necessary to respond to inquiries,
          evaluate potential engagements, provide services, maintain business records, resolve
          disputes, enforce agreements, and meet legal, accounting, insurance, or regulatory
          requirements. We may delete or anonymize information when it is no longer reasonably
          needed.</p>

        <h2>6. Security</h2>
        <p>We use reasonable administrative, technical, and organizational safeguards designed to
          protect information under our control. However, no website, electronic transmission,
          storage system, or security measure can be guaranteed to be completely secure.</p>

        <h2>7. Your Privacy Choices and Requests</h2>
        <p>You may contact us to request access to personal information we maintain about you,
          correction of inaccurate information, deletion of information subject to applicable
          legal and business retention requirements, or information about our privacy practices.
          We may need to verify your identity before completing certain requests.</p>
        <p>Privacy requests may be submitted to{" "}
          <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.</p>

        <h2>8. Nevada Privacy Rights</h2>
        <p>Nevada residents may have rights under applicable Nevada privacy law. Where applicable,
          a Nevada consumer may submit a verified request through our designated request address
          regarding covered information and certain sales of covered information. OwnerAway does
          not currently sell covered information for monetary consideration. Requests may be sent
          to <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.</p>

        <h2>9. California and Other State Privacy Rights</h2>
        <p>Residents of California and other states may have additional privacy rights if and when
          applicable state privacy laws apply to OwnerAway. These rights may include access,
          correction, deletion, portability, or opt-out rights, depending on the law and the
          circumstances. We will honor requests where required by applicable law and will update
          this Policy as our legal obligations change.</p>

        <h2>10. Sensitive and Health Information</h2>
        <p>OwnerAway does not request medical diagnoses, medical records, or detailed health
          information through its website. If you request coverage because of medical leave or a
          personal emergency, please do not submit unnecessary medical or health information. We
          may ask only for information reasonably necessary to understand scheduling and
          operational coverage needs.</p>

        <h2>11. Children</h2>
        <p>Our website and services are intended for business owners, professionals, and adults
          and are not directed to children under 18. We do not knowingly collect personal
          information from children under 13. If we become aware that such information was
          submitted, we will take reasonable steps to delete it.</p>

        <h2>12. Third-Party Links and Services</h2>
        <p>Our website may contain links to or integrate services operated by third parties.
          OwnerAway is not responsible for the privacy, security, availability, or content
          practices of third-party websites or services. We encourage you to review the privacy
          policies of third parties you use.</p>

        <h2>13. Business Transfers</h2>
        <p>If OwnerAway is involved in a merger, acquisition, restructuring, financing,
          bankruptcy, or sale of business assets, information may be disclosed or transferred as
          part of that transaction, subject to applicable law.</p>

        <h2>14. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will update the
          "Last updated" date at the top of this page. Material changes will be posted on this
          page or communicated through other reasonable means when appropriate.</p>

        <h2>15. Contact Us</h2>
        <p>Questions, requests, or concerns regarding this Privacy Policy may be sent to:</p>
        <p>OwnerAway<br />
          Email: <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a><br />
          Website: ownerawayusa.com</p>
      </div>
    </div>
  );
}
