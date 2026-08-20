type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ThreadsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M12.3 21.7c-3.7 0-6.6-1.9-8.6-4.9l1.7-1.1c1.7 2.5 4 4 6.9 4 2 0 3.4-.5 4.3-1.4.9-.9 1.2-2.1.8-3.6-.3-1.1-.9-1.9-2-2.6-.8-.5-1.8-.9-3-1-.5-.7-.7-1.5-.4-2.4.3-.8 1-1.3 2-1.3.8 0 1.5.3 2 .8.5.5.8 1.1 1 1.9l1.9-.6c-.3-1.2-.8-2.2-1.6-3-.8-.8-2-1.3-3.3-1.3-1.9 0-3.4.8-4.3 2.3-.6 1-.7 2.1-.3 3.2.4 1 1.1 1.8 2 2.3.3.6.8 1.1 1.4 1.4.6 1.1.9 2.3.6 3.5-.3 1.1-1.2 2.1-2.6 2.6-.8.3-1.7.4-2.6.4-1.5 0-3-.4-4.2-1.2-1.6-1.1-2.6-2.8-2.7-4.7-.1-1.8.7-3.6 2.1-4.9 1.2-1.1 2.8-1.8 4.5-1.8.9 0 1.8.2 2.5.5 0-1.9-.5-3.4-1.7-4.3-.9-.7-2-1-3.2-1C5.5 3.7 3.1 5.5 2 8l-1.9-.9c1.4-3 4.4-5.3 7.7-5.3 1.6 0 3.1.4 4.3 1.3 1.5 1.1 2.3 2.9 2.3 5.3.5.2 1 .4 1.5.6 1.4.7 2.6 1.7 3.4 3 .8 1.4 1.2 3 1 4.6-.2 1.7-.9 3.1-2.1 4.2-1.2 1.2-3 1.9-5.3 1.9z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ScissorsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.2 7.6 20 17" />
      <path d="M8.2 16.4 20 7" />
    </svg>
  );
}