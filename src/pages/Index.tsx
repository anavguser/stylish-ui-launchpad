
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import WorkflowCard from '@/components/WorkflowCard';
import { Package, ShoppingCart, Menu } from 'lucide-react';

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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#fafafa]">
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-6">
            <SidebarTrigger className="text-gray-600 hover:text-primary" />
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">Workflows</h1>
            </div>
          </header>
          
          <main className="flex-1 p-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Available Workflows</h2>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Streamline your business processes with our automated workflow solutions. 
                  Select a workflow below to get started.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
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

              <div className="mt-12 text-center">
                <div className="inline-flex items-center px-4 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600 font-medium">All systems operational</span>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
