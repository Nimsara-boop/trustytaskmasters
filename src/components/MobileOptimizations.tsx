
import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';

const MobileOptimizations = () => {
  useEffect(() => {
    // Only run on mobile devices
    if (Capacitor.isNativePlatform()) {
      // Prevent zoom on input focus (iOS)
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        );
      }

      // Add mobile-specific styling
      document.body.classList.add('mobile-app');
    }
  }, []);

  return null;
};

export default MobileOptimizations;
