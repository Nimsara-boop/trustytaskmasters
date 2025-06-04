
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e7003fb5370849df8372638ff333e7d1',
  appName: 'DamnItFixIt',
  webDir: 'dist',
  server: {
    url: "https://e7003fb5-3708-49df-8372-638ff333e7d1.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#353a5f",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#9ebaf3"
    }
  }
};

export default config;
