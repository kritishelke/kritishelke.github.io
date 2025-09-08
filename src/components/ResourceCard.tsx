import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ResourceItem {
  title: string;
  url?: string;
  description?: string;
}

interface ResourceCardProps {
  title: string;
  icon: React.ReactNode;
  items: ResourceItem[];
}

export const ResourceCard = ({ title, icon, items }: ResourceCardProps) => {
  return (
    <Card className="h-full shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl text-primary">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="group">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
                >
                  <span className="group-hover:underline">{item.title}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ) : (
                <span className="text-foreground text-sm leading-relaxed">{item.title}</span>
              )}
              {item.description && (
                <p className="text-muted-foreground text-xs mt-1 ml-4">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};