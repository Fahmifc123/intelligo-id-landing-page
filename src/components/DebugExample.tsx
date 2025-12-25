/**
 * Example Component - Shows how to use the debug utility
 * This component demonstrates all debugging features
 * You can remove this file after reviewing the patterns
 */

import debug from '@/lib/debug';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export const DebugExample = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Lifecycle tracking
  useEffect(() => {
    debug.lifecycle('DebugExample', 'mount', { initialCount: count });
    return () => {
      debug.lifecycle('DebugExample', 'unmount');
    };
  }, []);

  // Track count changes
  useEffect(() => {
    debug.stateChange('DebugExample', 'count', count - 1, count);
    debug.lifecycle('DebugExample', 'update', { newCount: count });
  }, [count]);

  // Simulate API call
  const handleFetchData = async () => {
    debug.api('GET', '/api/example', {});
    debug.log('Starting data fetch...');
    setIsLoading(true);

    debug.time('DataFetch');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData = { id: 1, name: 'Example', timestamp: new Date() };
      setData(mockData);

      debug.timeEnd('DataFetch');
      debug.success('Data fetched successfully', mockData);
    } catch (error) {
      debug.error('Failed to fetch data', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle click with logging
  const handleClick = () => {
    debug.log('Button clicked', { currentCount: count });
    setCount((prev) => prev + 1);
    debug.success('Count incremented', { newCount: count + 1 });
  };

  // Show grouped operations
  const handleGroupedOperation = () => {
    debug.group('Complex Operation');
    debug.log('Step 1: Initializing...');
    setTimeout(() => {
      debug.log('Step 2: Processing...');
      setTimeout(() => {
        debug.success('Step 3: Completed!');
        debug.groupEnd();
      }, 500);
    }, 500);
  };

  // Component render tracking
  debug.componentRender('DebugExample', { count, isLoading, hasData: !!data });

  return (
    <div className="p-4 space-y-4 bg-slate-100 rounded-lg">
      <h2 className="text-lg font-bold">🐛 Debug Example Component</h2>

      <div className="bg-white p-4 rounded space-y-3">
        <h3 className="font-semibold">Console Output Examples</h3>
        <p className="text-sm text-gray-600">
          Open DevTools (F12) → Console to see debug output
        </p>

        {/* Count Display */}
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-sm">Current Count: <strong>{count}</strong></p>
          <p className="text-xs text-gray-500 mt-1">
            👉 Click button below to increment and see state tracking
          </p>
        </div>

        {/* Data Display */}
        {data && (
          <div className="bg-green-50 p-3 rounded">
            <p className="text-sm font-semibold text-green-800">✅ Data Loaded:</p>
            <pre className="text-xs mt-2 bg-white p-2 rounded overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Button Group */}
      <div className="bg-white p-4 rounded space-y-2">
        <h3 className="font-semibold text-sm">Debug Actions</h3>

        <Button
          onClick={handleClick}
          className="w-full"
          variant="default"
        >
          📊 Increment Counter
        </Button>
        <p className="text-xs text-gray-500">
          → Logs: state change, component update, success message
        </p>

        <Button
          onClick={handleFetchData}
          disabled={isLoading}
          className="w-full"
          variant="outline"
        >
          {isLoading ? '⏳ Fetching...' : '🌐 Fetch Data'}
        </Button>
        <p className="text-xs text-gray-500">
          → Logs: API call, timing, success/error messages
        </p>

        <Button
          onClick={handleGroupedOperation}
          className="w-full"
          variant="outline"
        >
          📋 Grouped Operations
        </Button>
        <p className="text-xs text-gray-500">
          → Logs: grouped operations with steps
        </p>
      </div>

      {/* Console Output Guide */}
      <div className="bg-blue-50 p-4 rounded text-sm">
        <h3 className="font-semibold text-blue-900 mb-2">📖 What to Look For:</h3>
        <ul className="space-y-1 text-blue-800 text-xs">
          <li>✓ <code className="bg-white px-1 rounded">[INFO]</code> - General logs</li>
          <li>✓ <code className="bg-white px-1 rounded">[RENDER]</code> - Component renders</li>
          <li>✓ <code className="bg-white px-1 rounded">[STATE]</code> - State changes</li>
          <li>✓ <code className="bg-white px-1 rounded">[API]</code> - API calls</li>
          <li>✓ <code className="bg-white px-1 rounded">[SUCCESS]</code> - Success messages</li>
          <li>✓ Timing logs like <code className="bg-white px-1 rounded">DataFetch: 1000ms</code></li>
        </ul>
      </div>

      {/* Usage Instructions */}
      <div className="bg-purple-50 p-4 rounded text-sm space-y-2">
        <h3 className="font-semibold text-purple-900">💡 How to Use in Your Code:</h3>
        <code className="block bg-white p-2 rounded text-xs overflow-auto">
{`import debug from '@/lib/debug';

// Simple logging
debug.log('User logged in', { userId: 123 });

// State tracking
debug.stateChange('Component', 'isOpen', false, true);

// API tracking
debug.api('POST', '/api/users', { name: 'John' });

// Error handling
debug.error('Something went wrong', error);
`}
        </code>
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 p-4 rounded text-sm text-yellow-900 border border-yellow-200">
        <strong>ℹ️ Note:</strong> All debug output is automatically disabled in production builds.
        Only development mode shows console logs.
      </div>
    </div>
  );
};

export default DebugExample;
