import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { insights } from "@/lib/data/insights"

export default function InsightsPage() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Insights
          </h1>
          <p className="text-lg text-muted-foreground">
            Analisi, trend e best practice dal mondo della finanza e del business advisory
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Card key={insight.id} className="group flex flex-col transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="secondary">{insight.category}</Badge>
                  {insight.readTime && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {insight.readTime} min
                    </span>
                  )}
                </div>
                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                  {insight.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {insight.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(insight.publishDate).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <Button asChild variant="ghost" className="group/btn w-full justify-between">
                  <Link href={`/insights/${insight.slug}`}>
                    Leggi l'articolo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
