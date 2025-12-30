export default function TeamPage() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Il Nostro Team
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Un gruppo di professionisti con esperienza pluriennale in M&A, corporate finance, private equity e advisory strategico. Il nostro team combina competenze tecniche con una profonda conoscenza del mercato italiano ed internazionale.
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>Expertise</h2>
            <p>
              I nostri professionisti provengono dai principali studi di consulenza, banche d'investimento e società di private equity, garantendo un approccio multidisciplinare e orientato ai risultati.
            </p>

            <h2>Settori di Specializzazione</h2>
            <ul>
              <li>Manufacturing & Industrial</li>
              <li>Technology & Digital</li>
              <li>Healthcare & Life Sciences</li>
              <li>Real Estate & Infrastructure</li>
              <li>Consumer & Retail</li>
              <li>Energy & Utilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
