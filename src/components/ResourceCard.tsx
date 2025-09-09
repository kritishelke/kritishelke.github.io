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
  categorySlug: string;
}

export const ResourceCard = ({ title, icon, items }: ResourceCardProps) => {
  return (
    <div className="block h-full">
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
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
                >
                  <span className="group-hover:underline">{item.title}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ) : (
                <span className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">{item.title}</span>
              )}
              {item.description && (
                <p className="text-muted-foreground text-xs mt-1 ml-4">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      </Card>
    </div>
  );
};