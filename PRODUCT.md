# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is recruiters, hiring managers, engineering managers, and software engineers reviewing Athaullah Mustafa Madjid's profile. They are evaluating the candidate quickly, often within the first 5-10 seconds, and need to understand his role, strengths, experience, project evidence, and ways to make contact.

## Product Purpose

This is a personal software engineering portfolio website. It communicates Athaullah Mustafa Madjid's backend-focused and full-stack engineering profile through real experience, project case studies, technical strengths, measurable outcomes, a resume, and direct contact paths.

Success means a qualified visitor can quickly understand who Mustafa is, what engineering work he specializes in, what he has delivered, and how to review evidence or start a conversation.

## Positioning

The portfolio is positioned around production-oriented engineering evidence rather than generic skill listing: projects connect a real problem to the candidate's role, technical approach, validation, deployment context, and measurable result when evidence exists.

## Operating Context

Visitors primarily scan the home page on mobile, tablet, or desktop, then move into selected project case studies, work experience, technical focus, education, resume, GitHub, LinkedIn, or email. The site includes a home route and dedicated project-detail routes, with project screenshots and structured case-study content.

## Capabilities and Constraints

- Home page sections cover hero/profile, about, selected projects, work experience, technical focus, education, and contact.
- Project detail pages provide problem, overview, responsibilities, features, results, engineering decisions, testing and validation, challenges, lessons learned, screenshots, and external links when available.
- Important actions include viewing projects, downloading the resume, opening GitHub, opening LinkedIn, and contacting by email.
- The existing application uses Vite, React, TypeScript, React Router, and Tailwind CSS.
- Preserve real portfolio facts, project outcomes, experience history, links, resume access, and existing architecture unless a clear implementation problem requires change.
- Do not invent employers, clients, testimonials, metrics, project outcomes, or deployment claims.
- Responsive targets are approximately 375px mobile, 768px tablet, and 1440px desktop.
- Performance should take priority over visual effects; avoid unnecessary animation, heavy media, or decorative complexity.

## Brand Commitments

- The existing personal identity and content should remain recognizable.
- The visual direction should stay clean, professional, modern, engineering-oriented, minimal but not empty, and highly readable.
- Existing black-and-white visual decisions may be preserved where they support clarity and the personal brand.
- Important portfolio content receives stronger visual priority than decoration.

## Evidence on Hand

- Personal and portfolio content: `src/data/portfolio-data.ts`.
- Resume: `public/Athaullah-Mustafa-Madjid-Software-Engineer-CV.pdf`.
- Project screenshots and supporting imagery: `src/assets/images/project/` and `src/assets/images/`.
- GitHub, LinkedIn, email, location, experience history, skills, project outcomes, and case-study details are represented in the portfolio data.
- The repository contains no separate customer testimonials or press evidence; future work must not fabricate them.

## Product Principles

- Make the engineering profile understandable in the first 5-10 seconds.
- Lead with real work, production context, and measurable evidence.
- Make technical depth scannable for both technical and non-technical reviewers.
- Keep access to projects, experience, resume, GitHub, LinkedIn, and contact information obvious.
- Prioritize clarity, usability, consistency, accessibility, and performance before visual decoration.

## Accessibility & Inclusion

Aim for reasonable WCAG AA compliance where applicable. Maintain readable contrast, clear hierarchy, keyboard-visible focus states, semantic navigation and headings, useful image alternatives, usable responsive layouts, and reduced-motion support. Important content and actions must not depend on animation or hover alone.
