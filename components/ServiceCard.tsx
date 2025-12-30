import { CheckCircle, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="border-2 hover:border-nextfund-blue/50 transition-all duration-300 h-full">
      <CardHeader>
        <div className="w-14 h-14 rounded-full bg-nextfund-blue/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-nextfund-blue" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-nextfund-blue flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
