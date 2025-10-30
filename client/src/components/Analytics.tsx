import { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  data?: Record<string, any>;
}

// Track page views
export function usePageView(pageName: string) {
  useEffect(() => {
    trackEvent('page_view', { page: pageName, timestamp: new Date().toISOString() });
  }, [pageName]);
}

// Track custom events
export function trackEvent(eventName: string, data?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  const event: AnalyticsEvent = {
    event: eventName,
    data: {
      ...data,
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
    },
  };

  // Send to built-in analytics endpoint if configured
  const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (analyticsEndpoint && websiteId) {
    fetch(analyticsEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        websiteId,
        ...event,
      }),
    }).catch(() => {
      // Silently fail - don't block user experience
    });
  }

  // Also log to console in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, data);
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, section?: string) {
  trackEvent('button_click', { button: buttonName, section });
}

// Track section views (when user scrolls into view)
export function useSectionView(sectionName: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('section_view', { section: sectionName });
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(sectionName);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName]);
}

// Track performance metrics
export function trackPerformance() {
  if (typeof window === 'undefined' || !window.performance) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      trackEvent('performance', {
        pageLoadTime,
        connectTime,
        renderTime,
        dns: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcp: perfData.connectEnd - perfData.connectStart,
      });
    }, 0);
  });
}

// Initialize analytics
export function initAnalytics() {
  trackPerformance();
  
  // Track errors
  window.addEventListener('error', (event) => {
    trackEvent('error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    trackEvent('unhandled_rejection', {
      reason: event.reason?.toString(),
    });
  });
}
