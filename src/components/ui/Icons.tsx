import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const DownloadIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const GithubIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-5.39 0-9.75 4.45-9.75 9.94 0 4.39 2.79 8.11 6.67 9.43.49.09.67-.21.67-.48 0-.24-.01-1.03-.01-1.88-2.71.6-3.28-1.18-3.28-1.18-.44-1.16-1.08-1.46-1.08-1.46-.89-.62.07-.61.07-.61.98.07 1.5 1.03 1.5 1.03.87 1.52 2.29 1.08 2.85.83.09-.64.34-1.08.62-1.33-2.16-.25-4.43-1.1-4.43-4.91 0-1.09.38-1.97 1-2.66-.1-.25-.43-1.26.1-2.63 0 0 .82-.27 2.68 1.01A9.15 9.15 0 0 1 12 7.02c.83 0 1.66.11 2.44.34 1.86-1.28 2.68-1.01 2.68-1.01.53 1.37.2 2.38.1 2.63.63.69 1 1.57 1 2.66 0 3.82-2.28 4.66-4.45 4.91.35.31.66.91.66 1.84 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.67.48a9.88 9.88 0 0 0 6.66-9.42c0-5.49-4.37-9.94-9.75-9.94Z" clipRule="evenodd" />
  </svg>
);

export const LinkedinIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 8.75H3.5V20h3.44V8.75ZM7.17 5.27a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.5 13.72c0-3.02-1.61-4.42-3.77-4.42a3.26 3.26 0 0 0-2.96 1.63h-.05V8.75h-3.3V20h3.44v-5.57c0-1.47.28-2.89 2.1-2.89 1.79 0 1.81 1.68 1.81 2.98V20h3.43v-6.28h-.7Z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.75 6.5h14.5v11H4.75v-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="m5.5 7.25 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7.1 4.75h2.3l1.2 4.03-1.55 1.04a10.7 10.7 0 0 0 5.13 5.13l1.04-1.55 4.03 1.2v2.3a2.35 2.35 0 0 1-2.55 2.34C10.2 18.72 5.28 13.8 4.76 7.3A2.35 2.35 0 0 1 7.1 4.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MapPinIcon = (props: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19 10.25c0 5.25-7 9-7 9s-7-3.75-7-9a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 12.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
