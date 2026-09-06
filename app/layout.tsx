import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/lib/resume-data";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.links.portfolio),
  title: {
    default: `${RESUME_DATA.personal.name} | ${RESUME_DATA.personal.title}`,
    template: `%s | ${RESUME_DATA.personal.name}`,
  },
  description: `${RESUME_DATA.personal.name} – ${RESUME_DATA.personal.title} based in ${RESUME_DATA.personal.location}. Architect of SmartERP (multi-tenant SaaS with PostgreSQL RLS & AI ReAct agents), scalable full-stack web applications, and modern cloud systems.`,
  keywords: [
    "Preetham Gowda B",
    "Preetham Gowda",
    "Full Stack Web Developer",
    "Software Engineer Bangalore",
    "Next.js Developer",
    "SmartERP",
    "PostgreSQL RLS",
    "React Developer",
    "Node.js Express",
    "AI/ML Engineer",
    "Prozync Innovations",
  ],
  authors: [{ name: RESUME_DATA.personal.name, url: RESUME_DATA.links.portfolio }],
  creator: RESUME_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: RESUME_DATA.links.portfolio,
    title: `${RESUME_DATA.personal.name} | ${RESUME_DATA.personal.title}`,
    description: RESUME_DATA.personal.summary,
    siteName: `${RESUME_DATA.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.personal.name} | ${RESUME_DATA.personal.title}`,
    description: RESUME_DATA.personal.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.personal.name,
    jobTitle: RESUME_DATA.personal.title,
    url: RESUME_DATA.links.portfolio,
    sameAs: [
      RESUME_DATA.links.github,
      RESUME_DATA.links.linkedin,
      RESUME_DATA.links.portfolio,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "India",
    },
    email: RESUME_DATA.personal.email,
    telephone: RESUME_DATA.personal.phone,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "East West Institute of Engineering",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "East West Polytechnic",
      },
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "Next.js",
      "React.js",
      "Node.js",
      "PostgreSQL RLS",
      "Multi-Tenant SaaS Architecture",
      "Google Gemini AI Agents",
      "Redis BullMQ",
      "REST APIs",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
      data-theme="dark"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-(--bg-primary) text-(--text-primary) font-sans selection:bg-cyan-500/25 selection:text-white flex flex-col transition-colors duration-250">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
