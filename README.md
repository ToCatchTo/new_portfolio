# TT_SYSTEM – portfolio Tomáše Terče

Jednostránkové portfolio postavené na React 19, TypeScriptu, MUI a Vite. Překlady (cs/en) řeší i18next, kontaktní formulář posílá EmailJS, nasazeno na Vercelu.

## Skripty

```bash
npm install
npm run dev      # vývojový server
npm run build    # typecheck + produkční build do dist/
npm run preview  # náhled produkčního buildu
npm run lint     # ESLint
```

## Struktura

- `src/components/` – jednotlivé sekce stránky (navBar, header, about, experience, projects, contact, footer)
- `src/components/sectionHeading.tsx` – sdílený nadpis sekce
- `src/utils/globalVariables.tsx` – barvy a sdílené `sx` styly
- `src/i18n.ts` – překlady
- `public/` – ikony technologií (SVG), `public/files/` – CV a náhledy projektů
