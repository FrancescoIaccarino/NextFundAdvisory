import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, Users, Award } from "lucide-react"

export default function ChiSiamoPage() {
  return (
    <div className="py-16">
      {/* Hero */}
      <div className="container px-4 mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Chi Siamo
          </h1>
          <p className="text-lg text-muted-foreground">
            NextFund Advisory è una boutique di consulenza finanziaria specializzata in operazioni straordinarie e advisory strategico per aziende e imprenditori.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>La Nostra Missione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accompagnare aziende e imprenditori verso la crescita attraverso soluzioni finanziarie innovative e personalizzate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Il Nostro Approccio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un team di professionisti esperti che lavora fianco a fianco con i clienti, garantendo massima trasparenza e risultati misurabili.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>La Nostra Esperienza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oltre 20 anni di esperienza in M&A, corporate finance e advisory strategico con più di €2 miliardi di transazioni gestite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Scopri di Più
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/chi-siamo/team">
                Conosci il Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/chi-siamo/metodologia">La Nostra Metodologia</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
