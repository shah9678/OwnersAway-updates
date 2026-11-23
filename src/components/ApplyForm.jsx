import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import {
  BUSINESS_TYPES,
  REVENUE_RANGES,
  INQUIRY_EMAIL,
  WEB3FORMS_ACCESS_KEY,
} from "../data";

const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  "DC",
];

const PHONE_ALLOWED = /^[\d\s()+.-]+$/;

// Returns the 10-digit U.S. number (dropping a leading country code 1), or null if invalid
const parsePhone = (raw) => {
  if (!PHONE_ALLOWED.test(raw.trim())) return null;
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return digits;
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return null;
};

const formatPhone = (d) => `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;

const PHONE_ERROR = "Enter a 10-digit U.S. phone number, e.g. (555) 123-4567.";

export default function ApplyForm() {
  const empty = {
    fullName: "",
    businessName: "",
    businessType: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    revenue: "",
    concern: "",
    termsAccepted: false,
  };

  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (name, v) => {
    setValues((s) => ({ ...s, [name]: v }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
    if (formError) setFormError("");
  };

  const validate = () => {
    const e = {};

    if (!values.fullName.trim()) {
      e.fullName = "Please enter your name.";
    }

    if (!values.businessName.trim()) {
      e.businessName = "Please enter your business name.";
    }

    if (!values.businessType) {
      e.businessType = "Please select a business type.";
    }

    if (!values.city.trim()) {
      e.city = "Please enter your city.";
    }

    if (!values.state) {
      e.state = "Please select your state.";
    }

    if (!values.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) {
      e.phone = "Please enter your phone number.";
    } else if (!parsePhone(values.phone)) {
      e.phone = PHONE_ERROR;
    }

    if (!values.termsAccepted) {
      e.termsAccepted =
        "You must agree to the Terms of Service and acknowledge the Privacy Policy.";
    }

    return e;
  };

  const onPhoneBlur = () => {
    if (!values.phone.trim()) return;
    const digits = parsePhone(values.phone);
    if (digits) {
      update("phone", formatPhone(digits));
    } else {
      setErrors((e) => ({ ...e, phone: PHONE_ERROR }));
    }
  };

  const mailtoFallback = (phone) => {
    const lines = [
      `Full name: ${values.fullName}`,
      `Business name: ${values.businessName}`,
      `Business type: ${values.businessType}`,
      `City: ${values.city || "—"}`,
      `State: ${values.state || "—"}`,
      `Email: ${values.email}`,
      `Phone: ${phone || "—"}`,
      `Estimated weekly revenue: ${values.revenue || "—"}`,
      `Biggest concern: ${values.concern || "—"}`,
    ].join("\n");
    const subject = `Pilot coverage request — ${values.businessName}`;
    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
  };

  const submit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const phoneDigits = parsePhone(values.phone);
    const phone = formatPhone(phoneDigits);
    if (phone !== values.phone) update("phone", phone);
    setSending(true);
    setFormError("");
    try {
      if (WEB3FORMS_ACCESS_KEY) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `Pilot coverage request — ${values.businessName}`,
            from_name: "OwnerAway Website",
            ...values,
            phone,
            termsAccepted: values.termsAccepted ? "Yes" : "No",
            termsVersion: "2026-08-10",
            privacyVersion: "2026-08-10",
            acceptedAt: new Date().toISOString(),
          }),
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message || "Submission failed");
      } else {
        mailtoFallback(phone);
      }
      setSubmitted(true);
    } catch (err) {
      setFormError(
        "Sorry, something went wrong sending your request. Please email us directly at " +
          INQUIRY_EMAIL +
          ".",
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="oa-form-card oa-form-success"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 size={44} aria-hidden="true" />
        <h3>Application received</h3>
        <p>
          Thanks, {values.fullName.split(" ")[0]}. A member of our team will
          reach out within one business day to talk through your pilot coverage.
        </p>
      </div>
    );
  }

  const field = (name, label, type, opts = {}) => {
    const errId = `${name}-err`;
    const invalid = !!errors[name];
    return (
      <div className={`oa-field ${opts.full ? "oa-full" : ""}`}>
        <label htmlFor={name}>
          {label}
          {opts.required && (
            <span className="oa-req" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
        {type === "select" ? (
          <select
            id={name}
            value={values[name]}
            required={opts.required}
            autoComplete={opts.auto}
            aria-required={opts.required}
            aria-invalid={invalid}
            aria-describedby={invalid ? errId : undefined}
            onChange={(ev) => update(name, ev.target.value)}
          >
            <option value="">{opts.placeholder || "Select…"}</option>
            {opts.options.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            id={name}
            value={values[name]}
            rows={4}
            aria-invalid={invalid}
            onChange={(ev) => update(name, ev.target.value)}
          />
        ) : (
          <input
            id={name}
            type={type}
            value={values[name]}
            autoComplete={opts.auto}
            maxLength={opts.maxLength}
            placeholder={opts.placeholder}
            inputMode={opts.inputMode}
            aria-required={opts.required}
            aria-invalid={invalid}
            aria-describedby={invalid ? errId : undefined}
            onChange={(ev) => update(name, ev.target.value)}
            onBlur={opts.onBlur}
            onKeyDown={(ev) => ev.key === "Enter" && submit()}
          />
        )}
        {invalid && (
          <span id={errId} className="oa-err" role="alert">
            <AlertCircle size={13} aria-hidden="true" /> {errors[name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="oa-form-card" aria-describedby="form-help">
      <p id="form-help" className="oa-sr-only">
        Fields marked with an asterisk are required.
      </p>
      <div className="oa-form-grid">
        {field("fullName", "Full name", "text", {
          required: true,
          auto: "name",
        })}
        {field("businessName", "Business name", "text", {
          required: true,
          auto: "organization",
        })}
        {field("email", "Email", "email", { required: true, auto: "email" })}
        {field("phone", "Phone", "tel", {
          required: true,
          auto: "tel",
          maxLength: 20,
          placeholder: "(555) 123-4567",
          inputMode: "tel",
          onBlur: onPhoneBlur,
        })}
        {field("city", "City", "text", {
          required: true,
          auto: "address-level2",
        })}
        {field("state", "State", "select", {
          required: true,
          auto: "address-level1",
          options: US_STATES,
          placeholder: "Select state…",
        })}
        {field("businessType", "Business type", "select", {
          required: true,
          options: BUSINESS_TYPES,
          full: true,
        })}
        {field("revenue", "Estimated weekly revenue range", "select", {
          options: REVENUE_RANGES,
          full: true,
        })}
        {field(
          "concern",
          "What is your biggest concern when stepping away from your business?",
          "textarea",
          { full: true },
        )}
      </div>
      {formError && (
        <p className="oa-form-error" role="alert">
          {formError}
        </p>
      )}
      <div className="oa-consent">
        <label>
          <input
            type="checkbox"
            checked={values.termsAccepted}
            onChange={(ev) => update("termsAccepted", ev.target.checked)}
          />{" "}
          I agree to the{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          and acknowledge the{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </label>

        {errors.termsAccepted && (
          <span className="oa-err" role="alert">
            <AlertCircle size={13} aria-hidden="true" /> {errors.termsAccepted}
          </span>
        )}
      </div>
      <button
        type="button"
        className="oa-btn oa-btn-gold oa-btn-block"
        onClick={submit}
        disabled={sending}
      >
        {sending ? (
          <>
            <Loader2
              size={18}
              aria-hidden="true"
              style={{ animation: "spin 1s linear infinite" }}
            />{" "}
            Sending…
          </>
        ) : (
          "Apply for Pilot Coverage"
        )}
      </button>
    </div>
  );
}
