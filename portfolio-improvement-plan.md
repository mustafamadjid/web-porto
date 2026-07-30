# Portfolio Improvement Plan

**Portfolio owner:** Athaullah Mustafa Madjid  
**Primary positioning:** Backend-focused Software Engineer  
**Target roles:** Junior Backend Developer, Junior Software Engineer, Junior Fullstack Developer  
**Primary stack:** Go, Laravel, Express.js, PostgreSQL, MySQL, Vue.js, React.js, Docker, Linux

---

## 1. Executive Summary

Portofolio harus berfungsi sebagai **bukti teknis dari klaim di CV**, bukan sekadar profil pribadi atau galeri proyek. Berdasarkan CV, kekuatan utama yang perlu ditonjolkan adalah:

1. Pengembangan RESTful API menggunakan Go, Laravel, dan Express.js.
2. Perancangan relational database menggunakan PostgreSQL dan MySQL.
3. Implementasi autentikasi, RBAC, Google OAuth, session-based authentication, dan API contract.
4. Pengalaman deployment menggunakan Docker, Docker Compose, Linux, dan VPS.
5. Pengalaman membangun sistem pendidikan dan public-sector.
6. Pengalaman performance testing, concurrent usage, usability evaluation, dan workflow improvement.
7. Pengalaman memimpin tim dan mendampingi mahasiswa dalam pengembangan perangkat lunak.

Portofolio perlu diubah dari pendekatan **“menampilkan siapa saya dan teknologi yang saya kuasai”** menjadi:

> **“Menunjukkan masalah yang pernah saya selesaikan, keputusan teknis yang saya ambil, hasil yang dicapai, serta bukti implementasinya.”**

---

## 2. Target Audience

### 2.1 HR / Recruiter

Recruiter membutuhkan jawaban cepat untuk pertanyaan berikut:

- Posisi apa yang cocok untuk kandidat ini?
- Apakah teknologi kandidat sesuai dengan lowongan?
- Apakah kandidat memiliki pengalaman nyata?
- Apakah proyeknya lebih dari sekadar CRUD tutorial?
- Apakah kandidat mampu bekerja dalam tim dan berkomunikasi?
- Apakah kandidat tersedia untuk full-time employment?

### 2.2 Engineering Manager / Technical Recruiter

Hiring manager teknis akan mencari:

- Struktur arsitektur aplikasi.
- Alasan pemilihan teknologi.
- Cara kandidat mendesain database dan API.
- Penggunaan authentication dan authorization.
- Testing strategy.
- Deployment workflow.
- Performance considerations.
- Trade-off dan keterbatasan solusi.
- Kedalaman kontribusi pribadi kandidat.

### 2.3 Potential Collaborator or Client

Mereka membutuhkan:

- Gambaran kemampuan delivery end-to-end.
- Contoh sistem yang pernah dibangun.
- Cara menghubungi kandidat.
- Kejelasan peran dan tanggung jawab kandidat.

---

## 3. Positioning yang Direkomendasikan

### 3.1 Primary Positioning

Gunakan positioning utama:

> **Backend-focused Software Engineer building reliable APIs, relational data systems, and deployable web applications.**

### 3.2 Supporting Positioning

> Experienced with Go, Laravel, Express.js, PostgreSQL, MySQL, Docker, and Linux-based deployment across educational and public-sector systems.

### 3.3 Positioning yang Sebaiknya Dihindari

Hindari klaim berikut tanpa bukti skala yang kuat:

- Expert in scalable system design.
- Highly experienced software architect.
- Senior fullstack engineer.
- Expert in microservices.
- High-performance distributed systems engineer.

Gunakan istilah yang lebih defensible:

- Strong foundation in backend architecture.
- Hands-on experience designing modular backend systems.
- Experienced in building and deploying production-oriented web applications.
- Familiar with performance testing and concurrent workloads.

---

## 4. Recommended Information Architecture

Struktur navigasi yang direkomendasikan:

1. **Home**
2. **Projects**
3. **Experience**
4. **About**
5. **Resume**
6. **Contact**

Untuk portofolio satu halaman, urutannya:

1. Hero
2. Technical Focus
3. Featured Projects
4. Experience
5. Engineering Capabilities
6. Education and Leadership
7. Contact

### Rekomendasi

Gunakan model hybrid:

- Homepage ringkas untuk screening cepat.
- Halaman detail untuk setiap project case study.
- Halaman resume yang menyediakan preview dan download PDF.

---

## 5. Homepage Improvement Plan

## 5.1 Hero Section

Hero harus menjawab dalam lima detik:

- Siapa kandidatnya?
- Posisi utamanya apa?
- Teknologi intinya apa?
- Apa pembeda utamanya?
- Apa tindakan berikutnya?

### Struktur yang disarankan

**Heading:**

> Backend-focused Software Engineer

**Supporting copy:**

> I build RESTful APIs, relational database systems, and maintainable web applications using Go, Laravel, Express.js, PostgreSQL, and Docker.

**Proof line:**

> Experience delivering educational and public-sector systems from requirements analysis and database design to deployment and performance validation.

**Primary CTA:**

- View Selected Projects

**Secondary CTA:**

- Download Resume
- View GitHub

### Hindari

- Animasi teks yang terlalu panjang.
- Kalimat generik seperti “I turn ideas into reality.”
- Daftar lebih dari delapan teknologi di hero.
- Progress bar kemampuan.
- Klaim persentase kemampuan yang subjektif.

---

## 5.2 Trust Indicators

Tambahkan ringkasan bukti tepat di bawah hero:

- 3+ delivered web systems.
- Backend and fullstack internship experience.
- Led an eight-member project team.
- Guided 60+ students in database practicums.
- Docker and Linux VPS deployment experience.

Angka harus sesuai fakta dan mudah dipertanggungjawabkan saat interview.

---

## 5.3 Featured Projects

Homepage cukup menampilkan tiga proyek unggulan:

1. Web-Based Examination System.
2. HISSA Learning Platform.
3. Green Education Information System atau ITERA PPID System.

Setiap card minimal memiliki:

- Nama proyek.
- Satu kalimat masalah yang diselesaikan.
- Peran kandidat.
- Tech stack utama.
- Satu hasil terukur.
- Link Case Study.
- Link GitHub atau demo jika dapat dipublikasikan.

### Contoh card

```text
Web-Based Examination System

A school examination platform built to improve exam administration,
question management, and concurrent exam execution.

Role: Fullstack Developer
Stack: Go, React.js, PostgreSQL, Docker
Result: Supported concurrent sessions for 25 students and 5 teachers.

[Read Case Study] [GitHub] [Live Demo]
```

---

## 6. Project Case Study Standard

Setiap proyek unggulan harus memiliki halaman detail. Gunakan struktur berikut secara konsisten.

## 6.1 Project Overview

- Nama proyek.
- Periode pengerjaan.
- Konteks organisasi.
- Peran pribadi.
- Status proyek: completed, deployed, internal, research project, atau prototype.
- Ukuran tim.

## 6.2 Problem Statement

Jelaskan masalah sebelum sistem dibuat.

Contoh untuk sistem ujian:

- Administrasi ujian sulit dikelola.
- Workflow import soal tidak konsisten.
- Rekap dan pengelolaan ujian membutuhkan perbaikan.
- Sistem lama memiliki skor usability lebih rendah.

Jangan langsung membuka case study dengan daftar fitur.

## 6.3 Goals and Constraints

Contoh:

- Mendukung guru dan peserta didik SMA IT Fitrah Insani.
- Dapat digunakan melalui jaringan internet.
- Mendukung concurrent exam sessions.
- Menjaga konsistensi data soal.
- Dapat di-deploy pada resource VPS terbatas.

## 6.4 Responsibilities

Pisahkan kontribusi pribadi dari kontribusi tim.

Contoh:

- Requirements analysis.
- Backend architecture.
- REST API development.
- Database design.
- Authentication and authorization.
- Docker-based deployment.
- Performance testing.
- API documentation.

## 6.5 Architecture

Tampilkan diagram sederhana:

```text
Client Application
      |
      v
REST API / Application Layer
      |
      v
Service / Business Logic
      |
      v
Repository / Data Access
      |
      v
PostgreSQL or MySQL
```

Jelaskan:

- Layer dan tanggung jawabnya.
- Alasan pemisahan layer.
- Dependency direction.
- Penggunaan repository pattern jika memang diterapkan.
- Cara context cancellation, worker, atau background job ditangani jika relevan.

## 6.6 Database Design

Tampilkan:

- ERD yang dapat diperbesar.
- Entitas utama.
- Relasi penting.
- Normalization decisions.
- Indexing decisions.
- Constraints dan transaction boundaries.

Jangan menampilkan ERD tanpa penjelasan.

## 6.7 API Design

Sertakan contoh terbatas:

```http
POST /api/v1/exams
GET /api/v1/exams/{id}
POST /api/v1/exams/{id}/questions/import
POST /api/v1/exams/{id}/submissions
```

Tambahkan contoh:

- Request contract.
- Response contract.
- Authentication requirement.
- Error response.
- Validation rules.

Hindari menyalin seluruh dokumentasi API ke halaman portofolio. Tautkan ke Postman atau OpenAPI jika tersedia.

## 6.8 Engineering Decisions

Untuk setiap proyek, tampilkan tiga sampai lima keputusan teknis.

Contoh:

- Why Go was selected for the examination API.
- Why PostgreSQL was used for relational consistency.
- Why Docker was used for reproducible deployment.
- Why session-based authentication or token-based authentication was selected.
- Why repository pattern was used or intentionally not used.

Format yang disarankan:

```text
Decision
Use PostgreSQL for examination data.

Reason
The domain contains strongly related entities and requires transactional consistency.

Trade-off
Schema changes require controlled migrations and relational queries may become complex.
```

## 6.9 Testing and Validation

Tampilkan pengujian yang benar-benar dilakukan:

- Unit testing.
- API integration testing.
- Load testing.
- Usability testing.
- Manual acceptance testing.
- Build and deployment validation.

Untuk performance testing, sertakan:

- Test scenario.
- Virtual users.
- Test duration.
- Endpoint or workflow tested.
- p95 response time.
- Error rate.
- Throughput.
- Environment limitations.

Jangan hanya menulis “performed load testing”.

## 6.10 Results

Tampilkan hasil yang terukur dan aman secara metodologis.

Contoh untuk sistem ujian:

- Supported concurrent exam sessions for 25 students and 5 teachers in the tested environment.
- Achieved a System Usability Scale score of 71.88, compared with 60 for the previous system.
- Supported importing 50+ questions per workflow.
- Successfully deployed using Docker on an Ubuntu VPS.

Hindari klaim berikut tanpa bukti:

- Zero downtime.
- Highly scalable.
- Production-grade.
- 100% secure.
- Significantly improved usability, kecuali telah diuji secara statistik.

## 6.11 Challenges and Lessons Learned

Tambahkan minimal dua challenge:

- Handling concurrent examination sessions.
- Designing a consistent question import workflow.
- Managing authentication and authorization.
- Preventing data inconsistencies.
- Running performance tests in a limited staging environment.

Jelaskan solusi dan pelajaran teknis, bukan hanya masalah.

## 6.12 Links

Sediakan link yang relevan:

- Live demo.
- GitHub repository.
- API documentation.
- Architecture diagram.
- Research report, jika aman untuk dipublikasikan.

Jika source code bersifat privat, tulis:

> Source code is private due to organizational or academic constraints. Architecture and implementation details are available in this case study.

---

## 7. Project-Specific Improvement Plan

## 7.1 Web-Based Examination System

### Status

Harus menjadi proyek utama karena paling lengkap dari sisi domain, arsitektur, testing, deployment, dan hasil penelitian.

### Informasi yang harus ditampilkan

- Studi kasus SMA IT Fitrah Insani.
- Masalah sistem ujian sebelumnya.
- Role: fullstack developer atau software engineer.
- Go, React.js, PostgreSQL, Docker.
- Authentication and role separation for teacher and student.
- Exam lifecycle.
- Question import workflow.
- Automated grading jika memang tersedia.
- Concurrent session handling.
- Graceful shutdown dan worker lifecycle jika diterapkan.
- Load testing scenario.
- SUS result and methodological note.

### Visual yang diperlukan

- System architecture diagram.
- Exam flow diagram.
- ERD.
- Screenshots guru dan peserta didik.
- Performance result chart.
- Before-versus-after workflow comparison.

### Acceptance criteria

- Recruiter dapat memahami masalah dan hasil dalam kurang dari dua menit.
- Hiring manager dapat melihat minimal tiga keputusan teknis.
- Semua angka memiliki konteks pengujian.
- Tidak ada klaim “without downtime” tanpa evidence.

---

## 7.2 HISSA Learning Platform

### Status

Gunakan sebagai bukti fullstack delivery dan integrasi authentication.

### Informasi yang harus diperjelas

- Durasi internship yang sebenarnya.
- Apakah proyek dikerjakan sendiri atau dalam tim.
- Fitur yang benar-benar menjadi kontribusi pribadi.
- Jumlah endpoint atau module jika tersedia.
- Google OAuth flow.
- Laravel Sanctum session authentication.
- RBAC design.
- Learning progress tracking.
- Quiz and certificate workflow.
- Docker deployment.

### Risiko yang harus dihindari

Cakupan kontribusi terlihat sangat luas jika periode hanya satu bulan. Case study harus secara eksplisit membedakan:

- Existing system.
- Features implemented by the candidate.
- Features implemented by other contributors.
- Features improved versus created from scratch.

---

## 7.3 ITERA PPID System

### Status

Gunakan sebagai bukti pengalaman menangani kebutuhan organisasi dan legacy replacement.

### Fokus case study

- Kondisi legacy system.
- Public information workflow.
- Administrative content management.
- Laravel and MySQL implementation.
- Database design.
- Separation of administrative workflow, application logic, and data model.
- Maintainability improvements.

### Improvement penting

Jangan menduplikasi seluruh isi pengalaman kerja. Pada halaman project, fokus pada:

- System context.
- Architecture.
- Data model.
- Workflow before and after.
- Technical constraints.

---

## 7.4 Green Education Information System

### Status

Gunakan sebagai bukti leadership dan backend collaboration.

### Fokus case study

- Peran sebagai team lead dan backend developer.
- Pembagian tanggung jawab delapan anggota.
- API untuk environmental reporting.
- Data lokasi pembuangan sampah ilegal.
- Express.js and MySQL architecture.
- Cara menjaga koordinasi frontend-backend.
- API contract atau documentation.

### Hasil yang perlu diperjelas

- Apakah sistem digunakan oleh perangkat desa.
- Jumlah endpoint.
- Jumlah laporan yang dapat ditangani.
- Status deployment.
- Hasil user acceptance testing.

Jika data tersebut tidak tersedia, jangan mengarang angka.

---

## 8. Experience Section Improvement

Experience di portofolio tidak perlu menyalin CV kata per kata.

Gunakan format:

```text
Role
Organization | Period

Context
One sentence explaining the organization or project.

Key Contributions
- Contribution with scope and outcome.
- Contribution with technology and engineering decision.
- Contribution with measurable result.

Related Project
[View case study]
```

### Prioritas pengalaman

1. Fullstack Engineer Intern — HISSA.
2. Backend Developer Intern — ITERA PPID.
3. Database Practicum Assistant.
4. Lecturer Assistant — Kapita Selekta.
5. Introduction to Computers and Software Course Assistant.
6. Education Mentor — cukup ringkas sebagai supporting experience.

---

## 9. Technical Skills Section Improvement

Jangan menampilkan puluhan badge tanpa hierarki.

Gunakan kategori berikut:

### Languages

- Go
- PHP
- JavaScript / TypeScript
- SQL
- C++

### Backend

- Laravel
- Express.js
- RESTful API
- GORM
- Eloquent ORM
- Authentication and RBAC

### Frontend

- Vue.js
- React.js

### Databases

- PostgreSQL
- MySQL
- Relational modeling
- Normalization
- Transactions
- Constraints
- Indexing

### DevOps and Tools

- Docker
- Docker Compose
- Linux
- Git and GitHub
- VPS deployment
- Postman

### Engineering Practices

- Modular architecture
- Repository pattern
- Unit testing
- API documentation
- Database migration
- Code review

### Capability level

Jangan gunakan progress bar seperti “Go 90%”. Gunakan salah satu pendekatan:

- Core tools.
- Working experience.
- Familiar.

Contoh:

```text
Core: Go, Laravel, PostgreSQL, MySQL, Docker
Working experience: Express.js, Vue.js, React.js
Familiar: CI/CD fundamentals, cloud services
```

Pastikan levelnya jujur dan konsisten dengan proyek.

---

## 10. About Page Improvement

About page harus ringkas dan relevan untuk pekerjaan.

### Konten yang disarankan

1. Latar belakang pendidikan.
2. Fokus backend engineering.
3. Jenis sistem yang pernah dibangun.
4. Cara bekerja dan prinsip engineering.
5. Minat pengembangan berikutnya.

### Contoh arah narasi

> I am an Informatics Engineering graduate from Institut Teknologi Sumatera with hands-on experience developing backend and web-based systems for education and public-sector use cases. My work focuses on RESTful API design, relational database modeling, maintainable application architecture, and Docker-based deployment.
>
> I prefer clear separation of concerns, explicit API contracts, normalized data models, and engineering decisions that can be explained and tested. I have worked with Go, Laravel, Express.js, PostgreSQL, MySQL, Vue.js, and React.js across internships, academic projects, and team-based development.

Tambahkan minat DevOps hanya sebagai direction, bukan kompetensi utama yang belum terbukti:

> I am currently expanding my skills in CI/CD, infrastructure automation, observability, and container orchestration.

---

## 11. Resume Page Improvement

Sediakan:

- Preview ringkas.
- Download button untuk versi PDF.
- Last updated date.
- Target role.
- Contact links.

### Naming file

Gunakan nama profesional:

```text
Athaullah-Mustafa-Madjid-Software-Engineer-CV.pdf
```

Hindari nama file seperti:

```text
CV_Mustafa_English_2026_New(3).pdf
```

---

## 12. Contact Section Improvement

Sediakan:

- Email.
- LinkedIn.
- GitHub.
- Location: Lampung, Indonesia.
- Resume download.

### CTA

Gunakan CTA profesional:

> Interested in discussing a backend or software engineering opportunity? Contact me by email or LinkedIn.

### Contact form

Contact form bersifat opsional. Jika digunakan:

- Gunakan field name, email, subject, dan message.
- Terapkan validation.
- Tambahkan spam protection.
- Berikan success dan error state yang jelas.
- Jangan menyimpan message tanpa kebutuhan yang jelas.

Email langsung sering lebih sederhana dan terpercaya untuk portfolio personal.

---

## 13. GitHub Integration Plan

## 13.1 Pinned Repositories

Pin tiga sampai lima repository terbaik:

1. Examination system.
2. HISSA-related public repository jika diizinkan.
3. Express.js environmental reporting API.
4. Satu project yang menunjukkan Docker, CI/CD, atau observability.
5. Satu project Go dengan testing dan clean architecture.

## 13.2 Repository Quality Standard

Setiap featured repository harus memiliki:

- Clear README.
- Problem statement.
- Feature list.
- Tech stack.
- Architecture explanation.
- Setup instructions.
- Environment variable example.
- Migration and seed instructions.
- Test command.
- API documentation.
- Screenshot or diagram.
- License jika relevan.

## 13.3 Repository Hygiene

Pastikan:

- Tidak ada `.env`.
- Tidak ada credentials.
- Tidak ada database dump sensitif.
- Commit message dapat dipahami.
- Branch utama dapat di-build.
- CI status tidak merah.
- Dependency tidak memiliki vulnerability kritis yang diketahui.

---

## 14. Visual Design Direction

Gunakan visual yang mendukung kredibilitas engineering.

### Recommended direction

- Clean and minimal.
- Strong typography.
- High contrast.
- Limited accent color.
- Consistent spacing.
- Rounded cards secukupnya.
- Diagram dan screenshot lebih dominan daripada dekorasi.

### Hindari

- Terlalu banyak gradient.
- Animasi berlebihan.
- Parallax berat.
- Custom cursor yang mengganggu.
- Typing animation berulang.
- Skill logo bergerak terus-menerus.
- Background particle yang membebani performa.
- Card proyek yang hanya menampilkan mockup tanpa informasi teknis.

### Responsive behavior

Pastikan:

- Navigation mudah digunakan pada mobile.
- Project screenshots tidak terpotong.
- Diagram dapat diperbesar.
- CTA tetap jelas.
- Tidak ada horizontal scrolling.
- Font body minimal sekitar 16px.

---

## 15. Accessibility Requirements

Target minimal mengikuti WCAG 2.2 level AA untuk elemen utama.

Checklist:

- Semua gambar memiliki alt text.
- Heading hierarchy berurutan.
- Semua fungsi dapat digunakan dengan keyboard.
- Focus indicator terlihat.
- Contrast mencukupi.
- Link memiliki label yang jelas.
- Icon-only button memiliki accessible name.
- Motion menghormati `prefers-reduced-motion`.
- Form memiliki label dan error message yang dapat dibaca screen reader.
- Jangan menggunakan warna sebagai satu-satunya pembeda status.

---

## 16. Performance Requirements

Target awal:

- Lighthouse Performance: minimal 90 pada production build.
- Accessibility: minimal 95.
- Best Practices: minimal 95.
- SEO: minimal 95.
- Largest Contentful Paint: di bawah 2.5 detik pada koneksi mobile yang wajar.
- Cumulative Layout Shift: di bawah 0.1.
- Interaction to Next Paint: di bawah 200 ms jika memungkinkan.

### Optimization actions

- Gunakan WebP atau AVIF.
- Gunakan responsive images.
- Lazy-load gambar di bawah fold.
- Jangan lazy-load hero image yang menjadi LCP.
- Minify JavaScript dan CSS.
- Kurangi third-party scripts.
- Lazy-load project case study modules.
- Self-host font atau gunakan system font stack.
- Tambahkan caching header.
- Gunakan compression Brotli atau gzip.
- Hindari video autoplay berukuran besar.

---

## 17. SEO and Discoverability Plan

### Global metadata

- Descriptive page title.
- Meta description.
- Canonical URL.
- Open Graph image.
- Twitter card.
- Favicon.
- Sitemap.
- Robots.txt.

### Homepage title example

```text
Athaullah Mustafa Madjid | Backend Software Engineer
```

### Meta description example

```text
Backend-focused software engineer experienced in Go, Laravel, Express.js,
PostgreSQL, MySQL, Docker, and web application development.
```

### Project page title example

```text
Web-Based Examination System Case Study | Athaullah Mustafa Madjid
```

### Structured data

Tambahkan JSON-LD:

- `Person`
- `WebSite`
- `ProfilePage`
- `CreativeWork` atau `SoftwareApplication` untuk project case study jika sesuai

Jangan menambahkan rating atau employment information yang tidak dapat diverifikasi.

---

## 18. Security and Privacy Plan

Checklist:

- Gunakan HTTPS.
- Tambahkan security headers.
- Hindari mengekspos email melalui source secara mudah jika spam menjadi masalah.
- Jangan tampilkan nomor telepon jika tidak diperlukan.
- Jangan mempublikasikan data siswa, pengguna, atau organisasi.
- Blur atau gunakan dummy data pada screenshot.
- Jangan menyertakan production credentials.
- Jangan menampilkan internal host, token, atau environment configuration.
- Pastikan analytics menghormati privacy.

Recommended headers:

- Content-Security-Policy.
- X-Content-Type-Options.
- Referrer-Policy.
- Permissions-Policy.
- Strict-Transport-Security.

---

## 19. Analytics Plan

Analytics harus menjawab pertanyaan yang berguna:

- Project mana yang paling sering dibuka?
- Berapa banyak pengunjung membuka resume?
- Berapa banyak pengunjung menuju GitHub?
- Berapa banyak pengunjung menggunakan contact CTA?

Event yang disarankan:

- `view_project_case_study`
- `download_resume`
- `open_github`
- `open_linkedin`
- `open_live_demo`
- `contact_email_click`

Hindari analytics invasif atau pengumpulan data yang tidak relevan.

---

## 20. Recommended Technical Architecture

Framework saat ini dapat dipertahankan jika sudah stabil. Jangan melakukan rewrite hanya untuk mengikuti tren.

### Opsi SPA

Cocok jika menggunakan Vue atau React dan deployment statis sederhana.

Risiko:

- Konten dapat sulit diekstrak crawler jika metadata dan rendering tidak ditangani.
- First load dapat lebih berat.

### Opsi SSR / SSG

Direkomendasikan untuk SEO dan project case study:

- Nuxt untuk Vue.
- Next.js untuk React.
- Astro untuk content-heavy portfolio.

### Rekomendasi

Jika website saat ini adalah SPA Vue atau React dan konten sulit diindeks, pertimbangkan:

1. Migrasi ke Nuxt/Next/Astro; atau
2. Pre-render halaman penting; atau
3. Tambahkan static generation untuk homepage dan project pages.

Prioritaskan perbaikan rendering metadata sebelum rewrite total.

---

## 21. Content Model

Gunakan data terstruktur untuk projects.

```ts
interface PortfolioProject {
  slug: string;
  title: string;
  summary: string;
  context: string;
  role: string;
  period: string;
  teamSize?: number;
  status: "deployed" | "completed" | "internal" | "prototype";
  technologies: string[];
  responsibilities: string[];
  problems: string[];
  decisions: EngineeringDecision[];
  architecture?: string;
  results: ProjectResult[];
  challenges: ProjectChallenge[];
  links: ProjectLinks;
  images: ProjectImage[];
}
```

Manfaat:

- Content konsisten.
- Card dan detail page menggunakan source yang sama.
- Mudah menambahkan proyek.
- Mudah divalidasi.
- Mengurangi hardcoded duplicate content.

---

## 22. Implementation Milestones

## Milestone P0 — Credibility and Content Foundation

**Tujuan:** memperbaiki positioning dan memastikan recruiter memahami kompetensi utama.

### Scope

- Perbaiki hero copy.
- Tambahkan CTA View Projects, Download Resume, dan GitHub.
- Pilih tiga featured projects.
- Buat halaman case study untuk Examination System.
- Perbaiki About section.
- Susun ulang skill hierarchy.
- Tambahkan Experience section yang tidak menyalin CV secara mentah.
- Gunakan nama file resume profesional.
- Pastikan semua link bekerja.
- Perbaiki mobile responsiveness dasar.

### Exit criteria

- Homepage menjelaskan role dan stack dalam satu viewport.
- Featured projects memiliki problem, role, stack, dan result.
- Examination System memiliki full case study.
- Resume dapat diunduh.
- Tidak ada broken links.
- Tidak ada typo yang terlihat.

---

## Milestone P1 — Technical Evidence

**Tujuan:** menunjukkan kedalaman engineering kepada technical recruiter.

### Scope

- Tambahkan architecture diagram.
- Tambahkan ERD.
- Tambahkan API examples.
- Tambahkan engineering decisions dan trade-offs.
- Tambahkan testing and validation section.
- Tambahkan performance testing results.
- Buat case study HISSA.
- Buat case study ITERA PPID atau Green Education.
- Hubungkan setiap project dengan GitHub, demo, atau documentation.
- Tingkatkan README repository unggulan.

### Exit criteria

- Minimal tiga project case studies tersedia.
- Setiap case study memiliki kontribusi pribadi yang jelas.
- Minimal satu project memiliki architecture diagram.
- Minimal satu project memiliki ERD.
- Minimal satu project memiliki performance evidence.
- Semua klaim hasil dapat dijelaskan saat interview.

---

## Milestone P2 — Quality, SEO, and Accessibility

**Tujuan:** meningkatkan discoverability, performa, dan kualitas delivery.

### Scope

- Implement metadata per halaman.
- Tambahkan sitemap dan robots.txt.
- Tambahkan Open Graph images.
- Tambahkan structured data.
- Optimalkan image loading.
- Audit keyboard navigation.
- Implement reduced motion.
- Audit contrast.
- Tambahkan security headers.
- Tambahkan privacy-conscious analytics.
- Audit Lighthouse.

### Exit criteria

- Performance minimal 90.
- Accessibility minimal 95.
- Best Practices minimal 95.
- SEO minimal 95.
- Semua halaman penting dapat diindeks.
- Social preview tampil benar.

---

## Milestone P3 — Differentiation

**Tujuan:** membedakan kandidat dari portofolio junior lain.

### Scope

- Tambahkan technical writing section.
- Publikasikan artikel dari masalah yang benar-benar pernah diselesaikan.
- Tambahkan interactive architecture walkthrough jika relevan.
- Tambahkan CI pipeline status untuk public repository.
- Tambahkan observability atau deployment case study.
- Tambahkan project baru yang menunjukkan CI/CD dan cloud fundamentals.

### Topik artikel yang sesuai

- Graceful shutdown pada Go HTTP server dan worker.
- Goroutine, WaitGroup, dan context cancellation.
- Menghindari `ONLY_FULL_GROUP_BY` errors pada aggregate query.
- Structuring Vue 3 feature modules with TanStack Query.
- Designing a question import workflow with data consistency.
- Running load tests for a school examination system.
- Choosing repository pattern boundaries in Go or Laravel.

### Exit criteria

- Minimal tiga technical articles tersedia.
- Artikel terhubung dengan proyek nyata.
- Public repository memiliki CI yang lulus.
- Portofolio menunjukkan perkembangan ke DevOps tanpa mengaburkan positioning backend.

---

## 23. Prioritized Backlog

### Must Have

- Clear backend-focused hero.
- Three featured projects.
- Examination System case study.
- Working resume download.
- GitHub links.
- Responsive layout.
- Correct English copy.
- Accurate project claims.
- Clear role and contribution.

### Should Have

- Architecture diagrams.
- ERD.
- API examples.
- Performance results.
- Testing strategy.
- Project-specific SEO metadata.
- Accessibility audit.
- Open Graph images.

### Could Have

- Blog.
- Dark mode.
- Interactive diagrams.
- Analytics dashboard.
- Contact form.
- Timeline animation.

### Avoid Until Core Content Is Strong

- Full visual rewrite.
- Complex 3D animation.
- Heavy page transitions.
- Custom CMS.
- Authentication for portfolio visitors.
- Microservices architecture.
- Real-time chat widget.

---

## 24. Content Collection Checklist

Sebelum implementasi, siapkan data berikut.

### Examination System

- Final project period.
- Repository link.
- Live demo link.
- Architecture diagram.
- ERD.
- Number of API endpoints.
- Unit test coverage jika tersedia.
- Load test configuration.
- p95 response time.
- Error rate.
- Screenshots.
- SUS sample and interpretation note.

### HISSA

- Exact internship period.
- Team size.
- Exact personal contribution.
- Number of modules or endpoints.
- Authentication flow.
- Deployment status.
- Screenshots with safe data.

### ITERA PPID

- Legacy problems.
- Modules developed.
- Number of relevant entities or tables.
- Deployment status.
- Screenshots with public-safe data.

### Green Education

- Team responsibilities.
- API scope.
- Deployment status.
- User or stakeholder validation.
- Repository and documentation links.

---

## 25. Final Acceptance Checklist

### Content

- [ ] Role positioning is clear.
- [ ] No unsupported “expert” claims.
- [ ] Every featured project starts with a problem statement.
- [ ] Personal contribution is separated from team contribution.
- [ ] Every metric includes context.
- [ ] Project dates match the CV.
- [ ] GPA and graduation information are consistent.
- [ ] English copy has been proofread.

### Technical Evidence

- [ ] At least one architecture diagram.
- [ ] At least one ERD.
- [ ] At least one API contract example.
- [ ] At least one testing result.
- [ ] At least one deployment explanation.
- [ ] GitHub repositories have clear README files.

### UX

- [ ] Recruiter can find projects within one click.
- [ ] Resume download is visible.
- [ ] Contact information is visible.
- [ ] Mobile navigation works.
- [ ] Screenshots can be enlarged.
- [ ] Text remains readable without animation.

### Quality

- [ ] No broken links.
- [ ] No missing images.
- [ ] No console errors.
- [ ] No exposed secrets.
- [ ] Lighthouse targets are met.
- [ ] Metadata and social previews are valid.
- [ ] Main pages are crawlable and indexable.

---

## 26. Recommended Final Outcome

Setelah roadmap selesai, portofolio harus menyampaikan pesan berikut dengan jelas:

> Athaullah Mustafa Madjid is a backend-focused software engineer with hands-on experience designing RESTful APIs, relational databases, and maintainable web systems using Go, Laravel, Express.js, PostgreSQL, MySQL, and Docker. His portfolio demonstrates not only implemented features, but also architecture decisions, testing practices, deployment experience, measurable results, and lessons learned from real educational and public-sector projects.

Keberhasilan portofolio tidak diukur dari jumlah animasi atau jumlah teknologi yang ditampilkan. Keberhasilannya diukur dari apakah recruiter dan engineering manager dapat memverifikasi kompetensi kandidat dengan cepat dan memperoleh alasan konkret untuk melanjutkan ke interview.
