"use client";

import { useState, useEffect } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import WorkflowCard from "@/components/shared/WorkflowCard";
import { 
  FiGrid,
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
  FiCpu,
  FiHelpCircle,
  FiLayers,
  FiUser,
  FiShield,
  FiDollarSign,
  FiTag,
  FiSlack,
  FiMessageSquare,
  FiZap,
  FiCloud,
  FiServer,
  FiActivity,
  FiPieChart,
  FiDatabase
} from "react-icons/fi";

const workflows = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    subtitle: 'Real-time analytics and monitoring dashboards',
    integrations: [FiBarChart, FiTrendingUp, FiActivity, FiPieChart, FiDatabase]
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    subtitle: 'Complete online store management system',
    integrations: [FiShoppingCart, FiCreditCard, FiPackage, FiTruck, FiDollarSign, FiTag]
  },
  {
    id: 'project',
    title: 'Project',
    subtitle: 'Collaborative project management tools',
    integrations: [FiTrello, FiGithub, FiCalendar, FiUsers, FiSlack, FiMessageSquare, FiZap]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Campaign automation and analytics',
    integrations: [FiBarChart, FiMail, FiTarget, FiTrendingUp]
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'AI-powered automation workflows',
    integrations: [FiCpu, FiZap, FiCloud, FiServer, FiDatabase]
  },
  {
    id: 'help-center',
    title: 'Help Center',
    subtitle: 'Customer support and knowledge base',
    integrations: [FiHelpCircle, FiMessageSquare, FiMail, FiUsers]
  },
  {
    id: 'accounts',
    title: 'Accounts',
    subtitle: 'User management and authentication',
    integrations: [FiUser, FiUsers, FiShield, FiMail, FiSlack]
  },
  {
    id: 'hr-operations',
    title: 'HR Operations',
    subtitle: 'Employee onboarding and HR workflows',
    integrations: [FiUsers, FiCalendar, FiMail, FiTrello, FiSlack]
  },
  {
    id: 'finance',
    title: 'Finance',
    subtitle: 'Expense approvals and financial workflows',
    integrations: [FiDollarSign, FiCreditCard, FiPieChart, FiTrendingUp, FiDatabase]
  }
];

export default function PlatformWorkflowsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Calculate responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(workflows.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel with infinite scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeader 
          title="Pre-Built Workflows for Every Department"
          description="Get started instantly with our library of enterprise-ready workflow templates designed for common business processes"
        />
        
        <div className="mt-8 sm:mt-10 lg:mt-12">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className={`grid grid-cols-1 ${cardsPerSlide === 2 ? 'sm:grid-cols-2' : cardsPerSlide === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''} gap-4 sm:gap-6`}>
                    {workflows
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((workflow) => (
                        <WorkflowCard
                          key={workflow.id}
                          title={workflow.title}
                          subtitle={workflow.subtitle}
                          integrations={workflow.integrations}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 bg-amber-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}