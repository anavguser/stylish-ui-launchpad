
import Navbar from '@/components/Navbar';
import WorkflowCard from '@/components/WorkflowCard';
import { Package, ShoppingCart } from 'lucide-react';

const Index = () => {
  const workflows = [
    {
      title: 'Create Material Master',
      description: 'Set up and manage material master data with comprehensive details including specifications, pricing, and inventory parameters.',
      icon: Package,
      ctaText: 'Activate Workflow',
      href: 'https://google.com'
    },
    {
      title: 'Create Purchase Order',
      description: 'Generate and process purchase orders efficiently with automated approval workflows and vendor management integration.',
      icon: ShoppingCart,
      ctaText: 'Activate Workflow',
      href: 'https://google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Workflows</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Streamline your business processes with our automated workflow solutions. 
            Select a workflow below to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
          {workflows.map((workflow, index) => (
            <div key={workflow.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <WorkflowCard
                title={workflow.title}
                description={workflow.description}
                icon={workflow.icon}
                ctaText={workflow.ctaText}
                href={workflow.href}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm text-gray-600">All systems operational</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
