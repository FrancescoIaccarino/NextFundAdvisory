import type { Insight } from "./types"

export const insights: Insight[] = [
  {
    id: "1",
    slug: "trend-ma-2025",
    title: "Trend M&A 2025: Opportunità e Sfide per le PMI Italiane",
    excerpt: "Analisi delle principali tendenze nel mercato delle fusioni e acquisizioni per il 2025, con focus sulle opportunità per le PMI italiane e i settori più attivi.",
    content: `Il mercato M&A italiano si prepara ad affrontare un 2025 ricco di opportunità, caratterizzato da una ripresa delle valutazioni e da un rinnovato interesse degli investitori internazionali.

## Scenario di Mercato

Dopo un 2024 di consolidamento, il mercato M&A italiano mostra segnali di ripresa con un incremento stimato del 15-20% nel numero di operazioni. Le valutazioni si stanno normalizzando, creando opportunità sia per acquirenti che per venditori.

## Settori Chiave

I settori che si prevedono più attivi nel 2025 includono:

- **Technology & Digital**: Continua forte domanda per aziende tech e digitali
- **Healthcare**: Consolidamento del settore e interesse per innovazione
- **Manufacturing**: Ricerca di eccellenze italiane da parte di player internazionali
- **Green Economy**: Crescente attenzione per aziende sostenibili

## Fattori Abilitanti

Diversi fattori favoriranno le operazioni M&A:

1. Disponibilità di liquidità presso fondi di private equity
2. Tassi di interesse in stabilizzazione
3. Necessità di consolidamento in molti settori
4. Digitalizzazione e transizione energetica come driver

## Raccomandazioni

Per le PMI che considerano un'operazione M&A nel 2025, suggeriamo di:

- Prepararsi con anticipo, mettendo ordine nei dati e nei processi aziendali
- Valutare accuratamente il momento giusto per entrare sul mercato
- Affidarsi a professionisti esperti per massimizzare il valore
- Considerare anche operazioni di buy-side per crescita per linee esterne`,
    author: "NextFund Advisory",
    category: "Market Trends",
    tags: ["M&A", "PMI", "Market Outlook"],
    publishDate: new Date("2025-01-15"),
    featured: true,
    readTime: 5
  },
  {
    id: "2",
    slug: "esg-obblighi-normativi",
    title: "ESG: Nuovi Obblighi Normativi per le Aziende Italiane",
    excerpt: "Guida completa ai nuovi obblighi di reporting ESG introdotti dalla CSRD europea e impatto sulle aziende italiane.",
    content: `La Corporate Sustainability Reporting Directive (CSRD) sta rivoluzionando il modo in cui le aziende europee rendicontano la loro performance di sostenibilità.

## Cosa Cambia

Dal 2025, migliaia di aziende europee, incluse molte italiane, dovranno pubblicare report di sostenibilità secondo i nuovi standard ESRS (European Sustainability Reporting Standards).

## Chi è Coinvolto

La CSRD si applica progressivamente:

- **2025**: Grandi imprese già soggette a NFRD (> 500 dipendenti)
- **2026**: Grandi imprese non ancora soggette (> 250 dipendenti, €50M fatturato, o €25M totale attivo)
- **2027**: PMI quotate
- **2028**: Imprese extra-UE con rilevante presenza europea

## Cosa Bisogna Rendicontare

Il reporting deve coprire:

1. **Environmental**: emissioni, uso risorse, biodiversità, economia circolare
2. **Social**: condizioni lavoro, diversità, diritti umani
3. **Governance**: etica aziendale, anti-corruzione, board diversity

## Come Prepararsi

Per affrontare con successo i nuovi obblighi:

- Condurre una gap analysis rispetto agli standard ESRS
- Implementare sistemi di raccolta dati affidabili
- Definire KPI misurabili e target credibili
- Considerare la certificazione esterna del report
- Coinvolgere il board e i top manager nel processo

## Opportunità

Oltre all'obbligo normativo, un buon reporting ESG può:

- Migliorare l'accesso al capitale (finanza sostenibile)
- Aumentare l'attrattività verso investitori ESG-focused
- Rafforzare la reputazione aziendale
- Identificare aree di efficientamento operativo`,
    author: "NextFund Advisory",
    category: "Regulatory Updates",
    tags: ["ESG", "CSRD", "Compliance", "Sustainability"],
    publishDate: new Date("2025-01-10"),
    featured: true,
    readTime: 7
  },
  {
    id: "3",
    slug: "valutazione-aziende-metodi",
    title: "Valutazione d'Azienda: Metodologie e Best Practice",
    excerpt: "Panoramica dei principali metodi di valutazione aziendale e quando utilizzarli per ottenere risultati accurati e difendibili.",
    content: `La valutazione d'azienda è un processo complesso che richiede competenze tecniche e esperienza di mercato. Ecco una guida ai principali metodi utilizzati.

## Metodi Finanziari

### Discounted Cash Flow (DCF)
Il metodo più utilizzato per aziende mature con flussi prevedibili. Si basa sull'attualizzazione dei flussi di cassa futuri.

**Quando usarlo**: Aziende con storico solido e business plan credibile

### Dividend Discount Model (DDM)
Variante del DCF basata sui dividendi distribuibili.

**Quando usarlo**: Holding e società finanziarie

## Metodi di Mercato

### Multipli di Mercato
Confronto con società comparabili quotate o transazioni recenti.

**Quando usarlo**: Disponibilità di comparables affidabili

Multipli più usati:
- EV/EBITDA
- EV/Sales
- P/E (Price/Earnings)

## Metodi Patrimoniali

### Net Asset Value
Valutazione basata sul patrimonio netto rettificato.

**Quando usarlo**: Holding, real estate, situazioni di stress

## Metodi Misti

Combinazione di approcci finanziari e patrimoniali per avere una valutazione più robusta.

## Best Practice

Per una valutazione accurata:

1. Utilizzare sempre più metodi (cross-check)
2. Analizzare sensibilità ai principali assunti
3. Considerare il contesto di mercato
4. Documentare approfonditamente le assunzioni
5. Aggiornare la valutazione periodicamente

## Conclusioni

Non esiste un metodo "giusto" in assoluto: la scelta dipende dal tipo di azienda, dall'obiettivo della valutazione, e dalla disponibilità di dati.`,
    author: "NextFund Advisory",
    category: "Best Practices",
    tags: ["Valuation", "Corporate Finance", "M&A"],
    publishDate: new Date("2024-12-20"),
    featured: false,
    readTime: 6
  }
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug)
}

export function getFeaturedInsights(count: number = 3): Insight[] {
  return insights
    .filter((insight) => insight.featured)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    .slice(0, count)
}

export function getLatestInsights(count: number = 3): Insight[] {
  return insights
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    .slice(0, count)
}

export function getInsightsByCategory(category: string): Insight[] {
  return insights.filter((insight) => insight.category === category)
}
