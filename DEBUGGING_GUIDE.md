# 🐛 Auto-Debug Development Guide

Your project is now configured with **automatic debugging** during development. Here's how to use it:

## 🚀 Quick Start

### Start Development with Auto-Debug
```bash
npm run dev
```
This automatically enables:
- ✅ Hot Module Replacement (HMR) with automatic reload
- ✅ Source maps for better error tracking
- ✅ React Fast Refresh for component updates
- ✅ Error logging to console
- ✅ ESLint warnings in real-time

## 📋 Available Debug Commands

### 1. **Standard Development** (Recommended)
```bash
npm run dev
```
- Starts the dev server on http://localhost:8080
- Enables HMR and auto-reload
- Shows TypeScript errors in console
- Real-time ESLint warnings

### 2. **Strict Mode** - Fix errors before running
```bash
npm run dev:strict
```
- Automatically fixes ESLint errors
- Then starts the dev server
- Good for cleaning code before testing

### 3. **Type Checking**
```bash
npm run type-check
```
- Check for TypeScript errors (one-time)
- Use with CI/CD pipelines

### 4. **Watch Type Errors**
```bash
npm run type-check:watch
```
- Continuous TypeScript checking
- Alerts you to type errors as you code
- Run in a separate terminal

### 5. **Lint Checking**
```bash
npm run lint
```
- Check code style and quality

### 6. **Auto-Fix Linting**
```bash
npm run lint:fix
```
- Automatically fix ESLint issues

### 7. **Watch Linting**
```bash
npm run lint:watch
```
- Real-time ESLint checking
- Run in a separate terminal alongside `npm run dev`

## 🎯 Using the Debug Utility

Import the debug utility in your components:

```tsx
import debug from '@/lib/debug';

// Log information
debug.log('Component loaded', { userId: 123 });

// Log warnings
debug.warn('This might be an issue', { status: 'pending' });

// Log errors
debug.error('Something went wrong', error);

// Log success
debug.success('Data saved successfully');

// Component render tracking
debug.componentRender('UserProfile', { userId: 123 });

// API calls tracking
debug.api('GET', '/api/users/123', { headers: {...} });

// State changes tracking
debug.stateChange('UserProfile', 'isLoading', false, true);

// Performance timing
debug.time('DataFetch');
// ... do something
debug.timeEnd('DataFetch');

// Component lifecycle
debug.lifecycle('UserProfile', 'mount', { props: {...} });
debug.lifecycle('UserProfile', 'update');
debug.lifecycle('UserProfile', 'unmount');

// Group related logs
debug.group('User Operations');
debug.log('Loading user');
debug.log('User loaded');
debug.groupEnd();
```

## 🔍 Console Features

### Real-Time Error Tracking
- All uncaught errors are logged automatically
- Unhandled promise rejections are captured
- Full stack traces included

### Color-Coded Output
- 🔵 **[INFO]** - Information messages (cyan)
- 🟡 **[WARN]** - Warning messages (yellow)
- 🔴 **[ERROR]** - Error messages (red)
- 🟢 **[SUCCESS]** - Success messages (green)
- 🎨 **[RENDER]** - Component renders (blue)
- 📡 **[API]** - API calls (cyan)

### Browser DevTools Integration
1. Open Browser DevTools (`F12` or `Ctrl+Shift+I`)
2. Go to **Console** tab
3. All debug output appears here in real-time
4. Filter by type: `[ERROR]`, `[WARN]`, etc.

## ⚙️ VSCode Integration

The `.vscode/settings.json` file enables:

### Auto-Fix on Save
- ESLint errors automatically fix on file save
- Auto-import organization
- TypeScript strict mode diagnostics

### Extensions Recommended
For best experience, install:
1. **ESLint** - `dbaeumer.vscode-eslint`
2. **Prettier** - `esbenp.prettier-vscode` (optional)
3. **TypeScript Vue Plugin** - `Vue.vscode-typescript-vue-plugin`

## 🔧 Vite Configuration

Enhanced server configuration includes:
- **Source maps** - Better error tracking in development
- **HMR** - Hot Module Replacement for instant updates
- **Dev flag** - `import.meta.env.DEV` for development checks

## 📊 Debugging Workflow

### 1. Make a Code Change
```tsx
// src/components/MyComponent.tsx
const MyComponent = () => {
  debug.log('Component mounted');
  // Your code...
};
```

### 2. Save the File
- ESLint auto-fixes errors (via VSCode)
- Dev server hot-reloads
- Debug messages appear in console

### 3. Check Console
- Open browser DevTools
- Look for `[INFO]`, `[ERROR]`, etc.
- Follow the debug trace

### 4. Fix Issues
- Edit code
- Console auto-updates
- Rinse and repeat

## 💡 Pro Tips

### Separate Terminal Windows
```bash
# Terminal 1: Dev server
npm run dev

# Terminal 2: Type checking (in another terminal)
npm run type-check:watch

# Terminal 3: Linting (in another terminal)
npm run lint:watch
```

### Filter Console Output
In DevTools Console:
- Type `filter = "[ERROR]"` to show only errors
- Type `filter = "[WARN]"` to show only warnings
- Type `filter = ""` to clear filters

### Performance Profiling
```tsx
debug.time('ExpensiveOperation');
// ... your code
debug.timeEnd('ExpensiveOperation');
// Output: ExpensiveOperation: 123.45ms
```

### Disable in Production
Debug utilities automatically disable in production builds:
```tsx
if (import.meta.env.DEV) {
  // This code only runs in development
  debug.log('Development mode');
}
```

## 🚨 Common Issues

### "Module not found: @/lib/debug"
- Make sure the file exists at `src/lib/debug.ts`
- Check the alias in `vite.config.ts`

### ESLint not auto-fixing
- Install ESLint extension in VSCode
- Enable "ESLint" in VSCode settings
- Reload VSCode window

### TypeScript errors not showing
- Run `npm run type-check` to verify
- Check `tsconfig.json` settings
- Restart VSCode if needed

## 📚 Reference

### Debug Object Methods
| Method | Purpose |
|--------|---------|
| `log()` | General information |
| `warn()` | Warnings |
| `error()` | Error tracking |
| `success()` | Success messages |
| `componentRender()` | Track component renders |
| `api()` | Track API calls |
| `stateChange()` | Track state updates |
| `time()` / `timeEnd()` | Performance timing |
| `lifecycle()` | Component lifecycle tracking |
| `group()` / `groupEnd()` | Group related logs |

---

**Happy debugging! 🎉**
