# Web Portfolio Planning — Athaullah Mustafa Madjid

## 1. Overview

Membangun website portofolio statis untuk **Athaullah Mustafa Madjid** — mahasiswa Teknik Informatika tingkat akhir di Institut Teknologi Sumatera. Website ini menampilkan profil, skill, pengalaman, dan proyek dalam bahasa Inggris dengan tema **hitam-putih** mengikuti referensi desain yang diberikan.

---

## 2. Tech Stack

| Teknologi | Keterangan |
|---|---|
| **React + TypeScript** | UI framework (sudah ter-setup via Vite) |
| **Tailwind CSS v3** | Styling utility-first (sudah ter-install) |
| **Vite** | Build tool & dev server (sudah ter-setup) |
| **Lucide React** | Library icon utama |
| **shadcn/ui** | Komponen UI jika dibutuhkan (Button, Card, dll) |
| **Google Fonts — Sora** | Font utama seluruh website |
| **react-router v7** | Routing (sudah ter-install, single page scroll) |

---

## 3. Dependency yang Perlu Di-install

```bash
# Icon library
npm install lucide-react

# shadcn/ui prerequisites
npx shadcn@latest init

# Scroll animation (optional, untuk smooth section reveal)
npm install framer-motion
```

> **Note:** Font Sora akan di-import via Google Fonts CDN di `index.html` atau `index.css`.

---

## 4. Referensi Desain (Berdasarkan Gambar)

Berdasarkan 3 gambar referensi yang diberikan, desain mengikuti pola berikut:

### Layout & Style
- **Tema:** Hitam-putih monokrom, clean, minimalis
- **Font:** Sora (bold untuk heading, regular untuk body)
- **Navbar:** Logo "Personal" di kiri, menu navigasi di tengah (About Me, Skills, Project, Contact Me), tombol "Resume" di kanan dengan icon download
- **Hero Section:** Teks sapaan di kiri, ilustrasi orang dengan laptop di kanan, social media icons di bawah teks
- **Skills Section:** Grid kartu dengan logo teknologi asli (bukan emoji)
- **Experience Section:** Card list dengan logo perusahaan/institusi, judul posisi, periode, dan deskripsi
- **Projects Section:** Card dengan detail proyek
- **About Me Section:** Foto/ilustrasi di atas, teks deskripsi panjang di bawah
- **Contact Section:** Form atau info kontak
- **Responsive:** Mobile-first, hamburger menu pada mobile

### Elemen Visual
- Ilustrasi hitam-putih untuk hero section (orang dengan laptop)
- Logo teknologi asli (bukan placeholder) untuk skills
- Social media icons menggunakan Lucide React
- Border-radius pada card skills
- Highlight kata kunci dengan **bold** atau background hitam dengan teks putih (contoh: "Developer" di-highlight)

---

## 5. Struktur Halaman (Single Page — Scroll Sections)

Website adalah **single page** dengan navigasi scroll ke section berikut:

### 5.1 Navbar
- Logo/Brand: "Mustafa" atau inisial
- Menu: About Me | Skills | Experience | Projects | Contact
- Tombol: "Resume" (download CV PDF)
- Mobile: Hamburger menu
- Sticky/fixed di atas saat scroll

### 5.2 Hero Section
- Greeting: `Hello I'm **Athaullah Mustafa Madjid**.`
- Role: `Backend **Developer**` (kata "Developer" di-highlight dengan background hitam)
- Location: `Based in **Lampung, Indonesia**.`
- Short bio dari profile CV
- Social media icons: GitHub, LinkedIn, Email, Phone
- Ilustrasi: Gambar orang dengan laptop (hitam-putih, generated)
- CTA Button: "Resume" download PDF

### 5.3 About Me Section
- Heading: "About **Me**"
- Ilustrasi gambar (hitam-putih)
- Paragraf deskripsi lengkap dari profil CV
- Informasi pendidikan bisa dimasukkan di sini

### 5.4 Skills Section
- Heading: "My **Skills**"
- Grid layout (responsive: 2 kolom mobile, 5 kolom desktop)
- Setiap skill card berisi:
  - Logo teknologi asli (SVG/icon)
  - Nama teknologi
- Daftar skill berdasarkan CV:
  - **Programming & Frameworks:** Golang, JavaScript, Express.js, React.js, C++, HTML, CSS, Laravel
  - **Backend & Database:** PostgreSQL, MySQL
  - **Tools & Practices:** Git, GitHub

### 5.5 Experience Section
- Heading: "My **Experience**"
- Timeline atau card list
- Setiap entry berisi:
  - Logo/icon institusi
  - Posisi & nama institusi
  - Periode
  - Deskripsi tugas (bullet points)
- Data dari CV:
  1. **Backend Developer Intern** — Public Relations Office of ITERA (Jul 2025 – Aug 2025)
  2. **Database Practicum Assistant** — ITERA (Feb 2026)
  3. **Lecturer Assistant – Selected Topics** — ITERA (Sep 2025 – Nov 2025)
  4. **Course Assistant (Intro to CS)** — ITERA (Feb 2024 – May 2024)
  5. **Education Mentor** — HMIF Mengabdi (Nov 2024)

### 5.6 Projects Section
- Heading: "My **Projects**"
- Card grid layout
- Setiap project card berisi:
  - Nama proyek
  - Deskripsi singkat
  - Tech stack badges
  - Periode
  - Link (jika ada)
- Data dari CV:
  1. **ITERA PPID System** — Laravel, MySQL (Jul 2025 – Aug 2025)
  2. **Web-Based Examination System** — Golang, React.js, PostgreSQL (Mar 2026)
  3. **Green Education Information System** — Express.js, MySQL (Sep 2024 – Dec 2024)

### 5.7 Education Section
- Heading: "My **Education**"
- Timeline cards:
  1. **Institut Teknologi Sumatera** — B.S. Informatics Engineering, GPA: 3.51/4.00 (Aug 2022 – Present)
  2. **SMA IT Fitrah Insani Bandar Lampung** — Natural Sciences, Score: 90 (May 2019 – May 2022)

### 5.8 Contact Section
- Heading: "Contact **Me**"
- Info kontak:
  - Email: madjidmustafa@gmail.com
  - Phone: +62 821 7567 3461
  - Location: Lampung, Indonesia
- Social links: GitHub, LinkedIn
- Atau simple contact form (nama, email, pesan)

### 5.9 Footer
- Copyright text
- Social media links
- Quick navigation links

---

## 6. Struktur Folder Proyek

```
src/
├── assets/
│   ├── images/              # Ilustrasi & gambar
│   │   ├── hero-illustration.svg
│   │   └── about-illustration.svg
│   └── icons/               # Logo teknologi (SVG)
│       ├── golang.svg
│       ├── javascript.svg
│       ├── react.svg
│       ├── expressjs.svg
│       ├── postgresql.svg
│       ├── mysql.svg
│       ├── laravel.svg
│       ├── git.svg
│       ├── github.svg
│       ├── html.svg
│       ├── css.svg
│       └── cpp.svg
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                  # Komponen reusable
│       ├── SkillCard.tsx
│       ├── ExperienceCard.tsx
│       ├── ProjectCard.tsx
│       ├── EducationCard.tsx
│       ├── SocialIcons.tsx
│       └── SectionHeading.tsx
├── data/
│   └── portfolio-data.ts    # Semua data CV dalam format TypeScript
├── lib/
│   └── utils.ts             # Utility functions (shadcn)
├── pages/
│   └── Home.tsx             # Single page utama
├── index.css                # Tailwind directives + custom styles
├── main.tsx                 # Entry point
└── App.tsx                  # App wrapper
```

---

## 7. Konfigurasi yang Perlu Diupdate

### 7.1 `tailwind.config.js`
```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
};
```

### 7.2 `index.html`
- Tambahkan Google Fonts Sora
- Update title & meta description
- Tambahkan favicon

### 7.3 `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'Sora', sans-serif;
}
```

---

## 8. Data Portofolio (dari CV)

### Personal Info
- **Nama:** Athaullah Mustafa Madjid
- **Role:** Backend Developer / Informatics Engineering Student
- **Lokasi:** Lampung, Indonesia
- **Email:** madjidmustafa@gmail.com
- **Phone:** +62 821 7567 3461

### Profile Summary
> Final-year Informatics Engineering student with experience as a Backend Developer Intern, project team lead, as well as practicum and lecturer assistant. Strong interest in backend and full-stack development using Golang, JavaScript, Express.js, React.js, PostgreSQL, and MySQL. Experienced in building RESTful APIs, managing relational databases, leading teams of up to 8 people, and assisting students in understanding database and programming fundamentals.

### Education
1. **Institut Teknologi Sumatera** — B.S. Informatics Engineering | GPA: 3.51/4.00 (Aug 2022 – Present)
2. **SMA IT Fitrah Insani Bandar Lampung** — Natural Sciences | Score: 90 | Best student (May 2019 – May 2022)

### Skills
- **Programming & Frameworks:** Golang, JavaScript, Express.js, React.js, C++, HTML, CSS, Laravel
- **Backend & Database:** RESTful API, PostgreSQL, MySQL, Database Design, SQL
- **Tools:** Git, GitHub
- **Soft Skills:** Leadership, Communication, Collaboration, Adaptability, Mentoring

### Experience
| # | Position | Organization | Period |
|---|----------|-------------|--------|
| 1 | Backend Developer Intern | Public Relations Office of ITERA | Jul 2025 – Aug 2025 |
| 2 | Database Practicum Assistant | Institut Teknologi Sumatera | Feb 2026 |
| 3 | Lecturer Assistant – Selected Topics | Institut Teknologi Sumatera | Sep 2025 – Nov 2025 |
| 4 | Course Assistant (Intro to CS & Software) | Institut Teknologi Sumatera | Feb 2024 – May 2024 |
| 5 | Education Mentor & PR Staff | HMIF Mengabdi | Nov 2024 |

### Projects
| # | Project | Tech Stack | Period |
|---|---------|-----------|--------|
| 1 | ITERA PPID System | Laravel, MySQL | Jul 2025 – Aug 2025 |
| 2 | Web-Based Examination System (Final Project) | Golang, React.js, PostgreSQL | Mar 2026 |
| 3 | Green Education Information System | Express.js, MySQL | Sep 2024 – Dec 2024 |

### Languages
- Indonesian: Native
- English: 540 (ITERA English Proficiency Test)

---

## 9. Aset yang Perlu Disiapkan

### Ilustrasi (Generate menggunakan AI)
1. **Hero Illustration** — Ilustrasi hitam-putih orang duduk dengan laptop (sesuai referensi)
2. **About Me Illustration** — Ilustrasi hitam-putih developer (sesuai referensi)

### Logo Teknologi (SVG)
Semua logo teknologi harus menggunakan file SVG asli atau dari library seperti [devicons](https://devicon.dev/) atau [simple-icons](https://simpleicons.org/):
- Golang, JavaScript, TypeScript, React.js, Express.js, Laravel
- PostgreSQL, MySQL
- HTML5, CSS3, C++
- Git, GitHub

### Lainnya
- Favicon (inisial "M" atau logo personal)
- CV PDF file (`CV_Mustafa_English.pdf`) — sudah tersedia di root project, pindahkan ke `public/`

---

## 10. Urutan Implementasi

### Phase 1: Setup & Konfigurasi
1. Install dependencies (lucide-react, framer-motion, shadcn/ui)
2. Konfigurasi Tailwind (font Sora, color palette hitam-putih)
3. Setup Google Fonts di `index.html`
4. Update `index.css` dengan Tailwind directives
5. Buat `App.tsx` sebagai wrapper
6. Update `main.tsx` untuk render App
7. Pindahkan `CV_Mustafa_English.pdf` ke `public/`

### Phase 2: Data & Assets
1. Buat `src/data/portfolio-data.ts` — semua konten dari CV
2. Generate ilustrasi hero & about (hitam-putih)
3. Kumpulkan/download semua logo teknologi SVG
4. Siapkan favicon

### Phase 3: Layout Components
1. Buat `Navbar.tsx` — responsive dengan hamburger menu
2. Buat `Footer.tsx`
3. Buat `SectionHeading.tsx` — komponen heading reusable

### Phase 4: Section Components
1. Buat `HeroSection.tsx` — greeting, bio, social icons, ilustrasi, CTA
2. Buat `AboutSection.tsx` — ilustrasi + deskripsi profil
3. Buat `SkillsSection.tsx` + `SkillCard.tsx` — grid logo teknologi
4. Buat `ExperienceSection.tsx` + `ExperienceCard.tsx` — timeline cards
5. Buat `ProjectsSection.tsx` + `ProjectCard.tsx` — project cards
6. Buat `EducationSection.tsx` + `EducationCard.tsx` — education timeline
7. Buat `ContactSection.tsx` — info kontak + social links

### Phase 5: Assembly & Integration
1. Susun semua section di `Home.tsx`
2. Implementasi smooth scroll navigation
3. Tambahkan animasi (framer-motion) untuk section reveal
4. Test responsive di berbagai breakpoint

### Phase 6: Polish & Finalisasi
1. Optimasi performa (lazy loading gambar, dll)
2. SEO meta tags (title, description, Open Graph)
3. Accessibility check (alt text, keyboard nav, contrast)
4. Cross-browser testing
5. Build production & test

---

## 11. Responsive Breakpoints

| Breakpoint | Keterangan |
|---|---|
| `sm` (640px) | Mobile landscape |
| `md` (768px) | Tablet |
| `lg` (1024px) | Desktop kecil |
| `xl` (1280px) | Desktop besar |

### Layout per Breakpoint
- **Mobile (< 768px):** Single column, hamburger menu, stacked cards
- **Tablet (768px – 1024px):** 2-column grid skills, side-by-side hero
- **Desktop (> 1024px):** Full layout sesuai referensi, 5-column skills grid

---

## 12. Catatan Penting

- ❌ **JANGAN** gunakan emoticon/emoji sebagai icon — gunakan Lucide React atau SVG logo
- ✅ Gunakan **logo teknologi asli** (SVG) untuk section skills
- ✅ Semua teks dalam **Bahasa Inggris**
- ✅ Data harus sesuai dengan **CV_Mustafa_English.docx**
- ✅ Font **Sora** untuk seluruh website
- ✅ Tema **hitam-putih** monokrom
- ✅ **Responsive** di semua ukuran layar
- ✅ Website bersifat **statis** (tidak ada backend/API)
