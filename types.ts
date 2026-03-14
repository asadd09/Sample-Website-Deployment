
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  longDescription: string;
  benefits: string[];
  useCases: string[];
  imageUrl: string;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/**
 * Interface for portfolio gallery items.
 * Added to fix the 'Module "../types" has no exported member PortfolioItem' error.
 */
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  imageUrl: string;
}
