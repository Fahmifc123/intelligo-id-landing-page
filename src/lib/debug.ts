/**
 * Development debugging utilities
 * Automatically logs errors and warnings during development
 */

export const isDev = import.meta.env.DEV;

// Color-coded console logging for development
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

export const debug = {
  /**
   * Log an informational message
   */
  log: (message: string, data?: any) => {
    if (!isDev) return;
    console.log(`${colors.cyan}[INFO]${colors.reset} ${message}`, data || '');
  },

  /**
   * Log a warning message
   */
  warn: (message: string, data?: any) => {
    if (!isDev) return;
    console.warn(`${colors.yellow}[WARN]${colors.reset} ${message}`, data || '');
  },

  /**
   * Log an error message with stack trace
   */
  error: (message: string, error?: any) => {
    if (!isDev) return;
    console.error(`${colors.red}[ERROR]${colors.reset} ${message}`, error || '');
    if (error?.stack) {
      console.error(`${colors.red}Stack:${colors.reset}`, error.stack);
    }
  },

  /**
   * Log a success message
   */
  success: (message: string, data?: any) => {
    if (!isDev) return;
    console.log(`${colors.green}[SUCCESS]${colors.reset} ${message}`, data || '');
  },

  /**
   * Log component render (useful for debugging re-renders)
   */
  componentRender: (componentName: string, props?: any) => {
    if (!isDev) return;
    console.log(`${colors.bright}${colors.blue}[RENDER]${colors.reset} ${componentName}`, props || '');
  },

  /**
   * Log API calls
   */
  api: (method: string, url: string, data?: any) => {
    if (!isDev) return;
    console.log(`${colors.bright}${colors.cyan}[API]${colors.reset} ${method} ${url}`, data || '');
  },

  /**
   * Log state changes
   */
  stateChange: (componentName: string, stateName: string, oldValue: any, newValue: any) => {
    if (!isDev) return;
    console.log(
      `${colors.bright}${colors.blue}[STATE]${colors.reset} ${componentName}.${stateName}:`,
      { old: oldValue, new: newValue }
    );
  },

  /**
   * Performance timing
   */
  time: (label: string) => {
    if (!isDev) return;
    console.time(`${colors.cyan}${label}${colors.reset}`);
  },

  timeEnd: (label: string) => {
    if (!isDev) return;
    console.timeEnd(`${colors.cyan}${label}${colors.reset}`);
  },

  /**
   * Group related logs
   */
  group: (label: string) => {
    if (!isDev) return;
    console.group(`${colors.bright}${label}${colors.reset}`);
  },

  groupEnd: () => {
    if (!isDev) return;
    console.groupEnd();
  },

  /**
   * Log React component lifecycle
   */
  lifecycle: (componentName: string, stage: 'mount' | 'update' | 'unmount', details?: any) => {
    if (!isDev) return;
    const stages = { mount: '🟢', update: '🟡', unmount: '🔴' };
    console.log(`${stages[stage]} [${componentName}] ${stage.toUpperCase()}`, details || '');
  },
};

// Global error handler for development
if (isDev && typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    debug.error('Uncaught Error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      error: event.error,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    debug.error('Unhandled Promise Rejection', {
      reason: event.reason,
      promise: event.promise,
    });
  });
}

export default debug;
