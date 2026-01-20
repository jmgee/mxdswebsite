import React from "react";

export function IconCode({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path d="M9 18L3 12L9 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconServer() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path d="M4 7h16v5H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 12h16v5H4v-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 9h.01M7 14h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconUsers() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 20c1.7-3 5-4 8-4s6.3 1 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.5 7.5a3 3 0 0 1 4 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBrackets() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path d="M9 18 3 12l6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6 21 12l-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path
        d="M6 18l-2 2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGithub() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ color: "var(--brand-red)" }}>
      <path
        d="M9 19c-4 1.5-4-2-5-2m10 4v-3.5c0-1 .1-1.5-.5-2 2 0 4-.5 4-4 0-1-.3-2-1-2.7.1-.3.4-1.5-.1-2.8 0 0-1 .1-2.8 1.3-.9-.2-1.8-.2-2.7 0C8 9.1 7 9 7 9c-.5 1.3-.2 2.5-.1 2.8C6.2 12.5 6 13.5 6 14.5c0 3.5 2 4 4 4-.4.3-.6.7-.6 1.3V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}