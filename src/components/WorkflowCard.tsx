
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShoppingCart } from 'lucide-react';

interface WorkflowCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  ctaText: string;
  href: string;
}

const WorkflowCard = ({ title, description, icon: Icon, ctaText, href }: WorkflowCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          onClick={() => window.open(href, '_blank')}
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkflowCard;
