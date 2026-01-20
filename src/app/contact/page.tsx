"use client";

import { useMemo, useState } from "react";
import { IconChat, IconGithub, IconMail } from "@/components/mxds/icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    const okName = name.trim().length >= 2;
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const okMsg = message.trim().length >= 10;
    return okName && okEmail && okMsg && status !== "sending";
  }, [name, email, message, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!canSubmit) return;

    try {
      setStatus("sending");

      const res = await fetch("https://formspree.io/f/xbddkabb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");

      window.setTimeout(() => setStatus("idle"), 3500);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send message.");
    }
  }

  return (
    <>
      <div className="mxds-center">
        <h2 className="mxds-contactTitle">Get In Touch</h2>
        <p className="mxds-contactLead">
          Let's work together on your next project. Reach out through any of these platforms.
        </p>
      </div>

      <div className="mxds-contactGrid">
        <section className="mxds-card">
          <h3 className="mxds-cardTitle" style={{ fontSize: 20, marginBottom: 6 }}>
            Send a Message
          </h3>
          <p className="mxds-cardText" style={{ marginTop: 0 }}>
            Fill out the form below and I'll get back to you within 24 hours.
          </p>

          {(status === "sent" || status === "error") && (
            <div
              className="mxds-cardText"
              role="status"
              style={{
                marginBottom: 14,
                padding: "10px 12px",
                borderRadius: 10,
                border: "2px solid rgba(0,0,0,0.12)",
                background:
                  status === "sent"
                    ? "rgba(16,168,74,0.10)"
                    : "rgba(216,37,61,0.10)",
                color: "#111",
                fontWeight: 700,
              }}
            >
              {status === "sent"
                ? "Message sent successfully. I’ll reply soon."
                : errorMsg || "Failed to send message."}
            </div>
          )}

          <form onSubmit={onSubmit}>
            <div className="mxds-formStack">
              <input
                className="mxds-formField"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />

              <input
                className="mxds-formField"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                inputMode="email"
              />

              <textarea
                className="mxds-formArea"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              className="mxds-sendBtn"
              type="submit"
              disabled={!canSubmit}
              style={{
                opacity: canSubmit ? 1 : 0.65,
                cursor: canSubmit ? "pointer" : "not-allowed",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        <div className="mxds-sideStack">
          <section className="mxds-card">
            <h3 className="mxds-cardTitle" style={{ fontSize: 20 }}>
              Contact Information
            </h3>

            <div className="mxds-contactRow">
              <span className="mxds-icon" aria-hidden="true">
                <IconMail />
              </span>
              <span>defnotmxds@gmail.com</span>
            </div>

            <div className="mxds-contactRow">
              <span className="mxds-icon" aria-hidden="true">
                <IconChat />
              </span>
              <span>Discord: _mxds.</span>
            </div>

            <div className="mxds-contactRow">
              <span className="mxds-icon" aria-hidden="true">
                <IconGithub />
              </span>
              <span>github.com/defnotmxds</span>
            </div>
          </section>

          <section className="mxds-card mxds-cardAccent">
            <h3 className="mxds-cardTitle" style={{ fontSize: 20 }}>
              Services Offered
            </h3>

            <ul className="mxds-bullets" style={{ fontSize: 16, lineHeight: 2 }}>
              <li>Custom Scripts Development</li>
              <li>Developer/Maintainer Services</li>
              <li>Server Packs</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
