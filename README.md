# Dokumentasi Proyek Portofolio

## Ringkasan

Proyek ini adalah website portofolio pribadi satu halaman milik Aditya Parama Sandya. Website dibangun dengan SvelteKit dan Svelte 5 menggunakan TypeScript, Tailwind CSS, serta font Space Grotesk. Isi halaman berfokus pada profil, proyek, sertifikat, tech stack, skill, dan kanal kontak.

Aplikasi menggunakan routing SvelteKit dengan satu route utama, yaitu `/`. Tidak terdapat backend, database, endpoint API lokal, atau halaman route lain di dalam source saat ini.

## Struktur Proyek

```text
frontend/
|- src/
|  |- app.d.ts
|  |- app.html
|  |- lib/
|  |  |- index.ts
|  |  |- lenis.svelte.ts
|  |  |- assets/favicon.svg
|  |  `- vitest-examples/
|  |     |- greet.ts
|  |     |- greet.spec.ts
|  |     |- Welcome.svelte
|  |     `- Welcome.svelte.spec.ts
|  `- routes/
|     |- +layout.svelte
|     |- +page.svelte
|     `- layout.css
|- static/
|  |- 1.jpg
|  |- 2.png
|  |- AI1.png
|  |- AI2.png
|  |- Binus1.png
|  |- Binus2.png
|  |- cv.pdf
|  |- freecode.png
|  |- robots.txt
|  |- Tech.png
|  |- umm1.png
|  |- umm2.png
|  `- UPT.png
|- .vscode/
|- eslint.config.js
|- package.json
|- prettier.config.js
|- tsconfig.json
|- vite.config.ts
`- README.md
```

Folder `node_modules/` tidak termasuk dalam dokumentasi karena berisi dependency hasil instalasi. Folder `.svelte-kit/` juga merupakan output generated SvelteKit dan tidak perlu diedit secara manual.

## Arsitektur dan File Utama

### `src/app.html`

Template HTML dasar aplikasi. File ini mengatur `doctype`, bahasa dokumen, viewport, preload data SvelteKit saat hover, serta placeholder `%sveltekit.head%` dan `%sveltekit.body%`.

### `src/routes/+layout.svelte`

Layout global untuk seluruh route. Tugas utamanya:

- Mengimpor `layout.css`.
- Memasang favicon dari `src/lib/assets/favicon.svg`.
- Menginisialisasi Lenis ketika komponen dipasang di browser.
- Menjalankan loop `requestAnimationFrame` untuk scrolling halus.
- Menghancurkan instance Lenis ketika layout dilepas.
- Merender konten route melalui `{@render children()}`.

### `src/routes/+page.svelte`

Halaman utama dan pusat sebagian besar logika UI. Komponen ini menggunakan runes Svelte 5 seperti `$state`, `$effect`, dan `$props`.

Bagian halaman yang tersedia:

1. Header tetap dengan identitas `PARAMA`, navigasi desktop, tombol WhatsApp, dan tombol menu mobile.
2. Hero dengan nama `ADITYA PARAMA`, deskripsi singkat, tombol menuju proyek, dan tombol unduh CV.
3. Banner marquee dua baris yang menampilkan kata-kata terkait teknologi dan portofolio.
4. Bagian `TENTANG` dengan foto profil, status, lokasi, ringkasan kemampuan, deskripsi diri, dan fokus stack.
5. Bagian `PROYEK` dengan satu kartu proyek personal portofolio.
6. Bagian `SERTIFIKAT` yang berisi lima entri sertifikat/pelatihan dengan panel gambar yang bisa dibuka dan ditutup.
7. Bagian `STACK` yang membagi kemampuan menjadi frontend, backend, dan alat pengembangan.
8. Bagian `SKILL` dengan empat kategori: frontend developer, backend developer, artificial intelligence, dan hardware Arduino.
9. Bagian `LET'S CONNECT` dengan kontak WhatsApp, Discord, email, dan logo komunitas.
10. Menu navigasi mobile fullscreen.
11. Modal detail proyek yang menampilkan deskripsi, link website, link repositori, fitur, tujuan, dan tech stack.

### `src/routes/layout.css`

Style global berbasis Tailwind CSS. File ini:

- Mengimpor Tailwind CSS serta plugin forms dan typography.
- Mengimpor bobot font Space Grotesk 400, 500, 600, dan 700.
- Mendefinisikan token font `font-space`.
- Memberi warna latar global `#FAF9F6`.
- Mencegah overflow horizontal pada `body`.

### `src/lib/lenis.svelte.ts`

Menyediakan state bersama `lenisStore` untuk menyimpan instance Lenis. Store ini dipakai halaman utama untuk:

- Mengarahkan scrolling ke section berdasarkan ID.
- Menghentikan scrolling saat modal atau menu mobile terbuka.
- Menjalankan kembali scrolling saat overlay ditutup.

### `src/lib/index.ts`

File placeholder untuk ekspor modul yang ingin diakses melalui alias `$lib`. Saat ini belum memiliki ekspor aktif.

### `src/app.d.ts`

Deklarasi tipe global SvelteKit. Namespace `App` masih menggunakan deklarasi default tanpa tipe custom.

## Perilaku Interaktif

### Navigasi

Navigasi desktop dan mobile menggunakan anchor section berikut:

| Label      | Target        |
| ---------- | ------------- |
| TENTANG    | `#tentang`    |
| PROYEK     | `#proyek`     |
| SERTIFIKAT | `#sertifikat` |
| STACK      | `#stack`      |
| SKILL      | `#skill`      |

Scrolling dilakukan melalui `lenisStore.instance?.scrollTo()` dengan offset `-100` agar konten tidak tertutup header.

### Detail Proyek

Kartu proyek memanggil `datanya('dataone')`, kemudian menyimpan objek `oneproyek` ke `isidata` dan membuka modal melalui `showModal`. Data proyek saat ini mencakup:

- Judul: `PERSONAL PORTOFOLIO`
- Deskripsi website portofolio publik
- Link website: `https://adityaps-portofolio.netlify.app`
- Link repositori yang saat ini mengarah ke `https://github.com/NusanHuh/Portofolio`
- Fitur, fungsi, dan stack Svelte, TypeScript, Tailwind CSS, Node.js, serta Lenis

Modal dapat ditutup melalui tombol `TUTUP`. Saat terbuka, scrolling halaman dihentikan dan overflow body dikunci.

### Sertifikat

Setiap sertifikat memakai state boolean terpisah untuk menampilkan gambar:

- `upt` menampilkan `UPT.png`.
- `binus` menampilkan `Binus1.png` dan `Binus2.png`.
- `asean` menampilkan `AI1.png` dan `AI2.png`.
- `freecode` menampilkan `freecode.png`.
- `umm` menampilkan `umm1.png` dan `umm2.png`.
- `tech` menampilkan `Tech.png`.

Tampilan daftar dapat dipersempit atau diperluas memakai state `viewall`.

### Unduh CV dan Kontak

Tombol CV melakukan fetch ke:

```text
https://raw.githubusercontent.com/NusanHuh/WebCSP/main/cvcv.pdf
```

File hasil fetch dibuat menjadi object URL lalu diunduh sebagai `CV-Aditya-Parama-Sandya.pdf`. Selama proses, label tombol berubah menjadi `Mengunduh`.

Kontak diarahkan melalui navigasi browser ke WhatsApp, Discord, dan email. Website juga mengambil logo komunitas dari `https://imphnen.dev/logo.webp`.

## Teknologi dan Dependency

### Runtime dan framework

- Svelte `5.56.1`
- SvelteKit `2.63.0`
- Vite `8.0.16`
- TypeScript `6.0.3`
- Node adapter `@sveltejs/adapter-node`

### Styling

- Tailwind CSS `4.3.0`
- `@tailwindcss/forms`
- `@tailwindcss/typography`
- `@fontsource/space-grotesk`

### Interaksi dan tooling

- Lenis untuk smooth scrolling.
- ESLint dan `eslint-plugin-svelte` untuk linting.
- Prettier dengan plugin Svelte dan Tailwind.
- Vitest untuk unit test dan browser test berbasis Playwright.

## Perintah Pengembangan

Jalankan perintah dari direktori `frontend`.

### Instalasi

```sh
npm install
```

Repository juga menyimpan `bun.lock`; gunakan package manager yang sesuai dengan lockfile yang dipilih dan jangan mencampur lockfile tanpa alasan.

### Development server

```sh
npm run dev
```

Untuk membuka browser secara otomatis:

```sh
npm run dev -- --open
```

### Pemeriksaan tipe dan Svelte

```sh
npm run check
```

Mode watch tersedia melalui:

```sh
npm run check:watch
```

### Lint dan format

```sh
npm run lint
npm run format
```

`lint` menjalankan pengecekan Prettier lalu ESLint. `format` menulis ulang file yang diproses Prettier.

### Test

Menjalankan test dalam mode watch/interaktif:

```sh
npm run test:unit
```

Menjalankan seluruh test satu kali:

```sh
npm test
```

Konfigurasi Vitest memisahkan dua project:

- `client`: test komponen Svelte di browser Chromium headless melalui Playwright.
- `server`: test unit TypeScript/JavaScript di environment Node.

Contoh test yang tersedia memvalidasi fungsi `greet` dan render komponen `Welcome.svelte`.

### Build dan preview

```sh
npm run build
npm run preview
```

Build memakai adapter Node melalui konfigurasi SvelteKit di `vite.config.ts`.

## Konfigurasi Penting

- `vite.config.ts` mengaktifkan Tailwind melalui plugin Vite, SvelteKit, adapter Node, dan konfigurasi Vitest.
- Compiler Svelte dipaksa menggunakan runes mode untuk file proyek di luar `node_modules`.
- Host ngrok diizinkan melalui `server.allowedHosts` untuk domain `.ngrok-free.app`, `.ngrok.io`, dan `.ngrok.app`.
- `tsconfig.json` memperluas konfigurasi generated SvelteKit dan mengaktifkan strict TypeScript, pemeriksaan JavaScript, source map, serta module resolution bundler.
- `prettier.config.js` memakai tab, single quote, tanpa trailing comma, lebar baris 100, serta plugin Svelte dan Tailwind.
- `eslint.config.js` menggabungkan aturan ESLint, TypeScript, Svelte, Prettier, dan browser/node globals.
- `.npmrc` mengaktifkan `engine-strict`.
- `static/` tercantum dalam `.prettierignore`, sehingga aset statis tidak diformat oleh Prettier.

## Aset Statis

Semua file dalam `static/` dapat diakses dari root URL, misalnya `/UPT.png` atau `/cv.pdf`. Aset yang digunakan halaman meliputi foto profil, gambar proyek, gambar sertifikat, CV, dan `robots.txt`.

`robots.txt` mengizinkan crawler mengakses seluruh konten:

```text
User-agent: *
Disallow:
```

## Catatan Operasional

- Perubahan konten utama saat ini dilakukan langsung di `src/routes/+page.svelte`; data proyek dan metadata sertifikat belum dipisahkan ke file data.
- Sebagian SVG ikon ditulis inline di komponen halaman.
- `.svelte-kit/` dibuat ulang oleh `svelte-kit sync`; jangan mengedit hasil generated secara manual.
- Deployment produksi perlu mengikuti lingkungan Node yang sesuai dengan output adapter Node.
