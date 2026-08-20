type NinjaMarkProps = {
  className?: string;
  /** Color del ninja (use `currentColor` para heredar). */
};

export default function NinjaMark({ className }: NinjaMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M4 6.5h16V9H4z" />
      <path d="M4 6.5 1.2 4.6v2.4L4 9z" />
      <path
        d="M5 9h14l-.2 5.1c-.2 3.4-3.4 6.4-6.8 6.4s-6.6-3-6.8-6.4z"
        fill="currentColor"
      />
      <rect x="7.6" y="10.6" width="2.6" height="3.1" rx="0.4" fill="var(--color-paper)" />
      <rect x="13.8" y="10.6" width="2.6" height="3.1" rx="0.4" fill="var(--color-paper)" />
    </svg>
  );
}
