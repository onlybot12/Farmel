import type { SVGProps } from 'react'

const paths: Record<string, JSX.Element> = {
  droplet: (
    <>
      <path d="M12 2.5c-3.5 4.5-6 7.6-6 11a6 6 0 0 0 12 0c0-3.4-2.5-6.5-6-11z" />
      <path d="M9 15a3 3 0 0 0 3 3" strokeLinecap="round" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 19h-2.5a2.5 2.5 0 0 1-2.1-3.9l2-3.2" />
      <path d="M9.5 4.8 11 2.3a2.5 2.5 0 0 1 4.3 0l1.7 2.8" />
      <path d="M19 9.5l2.2 3.6a2.5 2.5 0 0 1-2.1 3.9H16" />
      <path d="m7 19 2-3.5M17 5l-2 3.5M14.5 16l2.5 3M9.5 8 7 5" strokeLinecap="round" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M15 21V9h3a2 2 0 0 1 2 2v10" />
      <path d="M7 7h3M7 11h3M7 15h3M2 21h20" strokeLinecap="round" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6.5L5.2 18a2 2 0 0 0 1.8 3h10a2 2 0 0 0 1.8-3L14 9.5V3" />
      <path d="M7.5 14h9" strokeLinecap="round" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 5 5v6c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V5l-7-2.5z" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M19 14l.7 1.8L21.5 16.5 19.7 17.2 19 19l-.7-1.8L16.5 16.5l1.8-.7L19 14z" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z" />
      <path d="M8 11h8M8 14h5" strokeLinecap="round" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5z" />
      <path d="M4 4.5A2.5 2.5 0 0 0 6.5 7H20" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.5-9.5-9A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9z" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 3h3l1.5 5-2 1.5a13 13 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A18 18 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19c4-4 8-6 12-7" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

type IconProps = SVGProps<SVGSVGElement> & { name: string }

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  )
}
