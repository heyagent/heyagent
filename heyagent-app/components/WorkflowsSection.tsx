import SectionHeader from "@/components/shared/SectionHeader";
import WorkflowCard from "@/components/shared/WorkflowCard";
import { 
  FiShoppingCart, 
  FiCreditCard, 
  FiPackage, 
  FiTruck,
  FiTrello,
  FiGithub,
  FiCalendar,
  FiUsers,
  FiBarChart,
  FiMail,
  FiTarget,
  FiTrendingUp,
  FiPieChart,
  FiDatabase,
  FiActivity,
  FiFileText
} from "react-icons/fi";

const workflows = [
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    subtitle: 'Streamline your online store operations with automated inventory management and order processing',
    integrations: [FiShoppingCart, FiCreditCard, FiPackage, FiTruck]
  },
  {
    id: 'project',
    title: 'Project',
    subtitle: 'Manage tasks, track progress, and collaborate with your team in real-time',
    integrations: [FiTrello, FiGithub, FiCalendar, FiUsers]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Automate campaigns, track engagement, and optimize your marketing efforts',
    integrations: [FiBarChart, FiMail, FiTarget, FiTrendingUp]
  },
  {
    id: 'analytics',
    title: 'Analytics',
    subtitle: 'Gain insights with real-time data visualization and automated reporting',
    integrations: [FiPieChart, FiDatabase, FiActivity, FiFileText]
  }
];

export default function WorkflowsSection() {
  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeader 
          title="Built for Any Project, Big or Small"
          description="Whether you need an admin panel, an interactive dashboard, or a full-featured application, HeyAgent is the ultimate solution"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {workflows.map((workflow) => (
            <WorkflowCard
              key={workflow.id}
              title={workflow.title}
              subtitle={workflow.subtitle}
              integrations={workflow.integrations}
            />
          ))}
        </div>
      </div>
    </section>
  );
}