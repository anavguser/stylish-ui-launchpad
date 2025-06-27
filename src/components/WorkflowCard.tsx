
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface WorkflowCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  ctaText: string;
  href: string;
}

const WorkflowCard = ({ title, description, icon: Icon, ctaText, href }: WorkflowCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 bg-white overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
            <Icon className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md group-hover:scale-[1.02]"
          onClick={() => window.open(href, '_blank')}
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkflowCard;
