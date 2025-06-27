
import { Home, Zap, TestTube, BarChart, Headphones } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Automations', icon: Zap, href: '/automations' },
  { name: 'Tests', icon: TestTube, href: '/tests' },
  { name: 'Reporting', icon: BarChart, href: '/reporting' },
  { name: 'Support Tickets', icon: Headphones, href: '/support' }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">W</span>
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-primary">Workflows</span>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                    tooltip={isCollapsed ? item.name : undefined}
                  >
                    <item.icon className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                    {!isCollapsed && (
                      <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
