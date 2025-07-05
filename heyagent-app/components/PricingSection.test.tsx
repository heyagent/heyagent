import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PricingSection from './PricingSection';

describe('PricingSection', () => {
  describe('Pricing calculations', () => {
    it('displays correct monthly prices', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Free plan should always be $0
      expect(screen.getByText('0')).toBeInTheDocument();
      
      // Business plan should be $20/month
      const businessPrices = screen.getAllByText('20');
      expect(businessPrices.length).toBeGreaterThan(0);
      
      // Professional plan should be $40/month
      const professionalPrices = screen.getAllByText('40');
      expect(professionalPrices.length).toBeGreaterThan(0);
    });

    it('applies 20% discount for annual billing', () => {
      render(<PricingSection isAnnual={true} />);
      
      // Free plan should still be $0
      expect(screen.getByText('0')).toBeInTheDocument();
      
      // Business plan should be $16/month (20% off $20)
      const businessPrices = screen.getAllByText('16');
      expect(businessPrices.length).toBeGreaterThan(0);
      
      // Professional plan should be $32/month (20% off $40)
      const professionalPrices = screen.getAllByText('32');
      expect(professionalPrices.length).toBeGreaterThan(0);
    });

    it('displays correct billing period text', () => {
      const { rerender } = render(<PricingSection isAnnual={false} />);
      
      // Monthly billing
      const monthlyTexts = screen.getAllByText('per month');
      expect(monthlyTexts.length).toBeGreaterThan(0);
      
      // Annual billing
      rerender(<PricingSection isAnnual={true} />);
      const annualTexts = screen.getAllByText('per month (billed annually)');
      expect(annualTexts.length).toBeGreaterThan(0);
    });
  });

  describe('User count sliders', () => {
    it('updates Business plan price when user count changes', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Find the Business plan slider (first slider)
      const sliders = screen.getAllByRole('slider');
      const businessSlider = sliders[0];
      
      // Change to 5 users (multiplier = 5)
      fireEvent.change(businessSlider, { target: { value: '5' } });
      
      // Price should be $20 * 5 = $100
      expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('updates Professional plan price when user count changes', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Find the Professional plan slider (second slider)
      const sliders = screen.getAllByRole('slider');
      const professionalSlider = sliders[1];
      
      // Change to 3 users (multiplier = 3)
      fireEvent.change(professionalSlider, { target: { value: '3' } });
      
      // Price should be $40 * 3 = $120
      expect(screen.getByText('120')).toBeInTheDocument();
    });

    it('applies discount to multiplied prices for annual billing', () => {
      render(<PricingSection isAnnual={true} />);
      
      const sliders = screen.getAllByRole('slider');
      const businessSlider = sliders[0];
      
      // Change to 5 users with annual billing
      fireEvent.change(businessSlider, { target: { value: '5' } });
      
      // Price should be $16 * 5 = $80 (with 20% annual discount)
      expect(screen.getByText('80')).toBeInTheDocument();
    });

    it('displays correct multiplier values', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Both sliders should show "1.0X" by default
      const multiplierDisplays = screen.getAllByText('1.0');
      expect(multiplierDisplays).toHaveLength(2);
      
      // Business plan shows "50 employees" (1 * 50)
      expect(screen.getByText('50')).toBeInTheDocument();
      
      // Change Business slider to 5
      const sliders = screen.getAllByRole('slider');
      fireEvent.change(sliders[0], { target: { value: '5' } });
      
      // Should show "5.0X" multiplier
      expect(screen.getByText('5.0')).toBeInTheDocument();
      // Should show 250 employees (5 * 50)
      expect(screen.getByText('250')).toBeInTheDocument();
    });
  });

  describe('Plan features', () => {
    it('displays correct features for Free plan', () => {
      render(<PricingSection isAnnual={false} />);
      
      expect(screen.getByText('5 workflows/mo')).toBeInTheDocument();
      expect(screen.getByText('3 users')).toBeInTheDocument();
      // "Basic" appears with "integrations" - use getAllByText since it might appear multiple times
      const basicTexts = screen.getAllByText('Basic');
      expect(basicTexts.length).toBeGreaterThan(0);
      expect(screen.getByText('Custom workflows')).toBeInTheDocument();
      expect(screen.getByText('Analytics dashboard')).toBeInTheDocument();
    });

    it('shows most popular badge on Business plan', () => {
      render(<PricingSection isAnnual={false} />);
      
      expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
    });

    it('displays correct CTAs for Professional plan', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Professional plan should have "Buy Now" button
      expect(screen.getByText('Buy Now')).toBeInTheDocument();
    });
  });

  describe('Visual indicators', () => {
    it('shows checkmarks for included features', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Look for check icons by finding parent elements with text
      const includedFeatures = screen.getByText('5 workflows/mo').parentElement;
      expect(includedFeatures?.querySelector('svg')).toBeInTheDocument();
    });

    it('shows X marks for excluded features', () => {
      render(<PricingSection isAnnual={false} />);
      
      // Look for X icons by finding parent elements with text
      const excludedFeatures = screen.getByText('Custom workflows').parentElement;
      expect(excludedFeatures?.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Call to action buttons', () => {
    it('renders correct CTA for each plan', () => {
      render(<PricingSection isAnnual={false} />);
      
      expect(screen.getByText('Try For Free')).toBeInTheDocument();
      expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
      expect(screen.getByText('Buy Now')).toBeInTheDocument();
    });

    it('shows trial info for free plan', () => {
      render(<PricingSection isAnnual={false} />);
      
      expect(screen.getByText('No credit card required. Free 14-days trial')).toBeInTheDocument();
    });
  });
});