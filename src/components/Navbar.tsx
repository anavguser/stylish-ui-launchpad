
import { Home, Users, FileText, Settings, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Documents', icon: FileText, href: '/documents' },
  { name: 'Analytics', icon: BarChart3, href: '/analytics' },
  { name: 'Settings', icon: Settings, href: '/settings' }
];

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-primary">Dashboard</div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button 
                key={item.name}
                variant="ghost" 
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">U</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
