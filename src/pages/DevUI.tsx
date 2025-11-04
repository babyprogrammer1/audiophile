import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any) {
    console.error("Error in UI demo component:", error);
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-4 bg-red-50 text-red-700">Component threw an error</div>;
    }
    return this.props.children as React.ReactElement;
  }
}

export default function DevUI() {
  // Import all ui modules (TSX/TS) eagerly (recursive)
  const modules = import.meta.glob('/src/components/ui/**/*.{tsx,ts}', { eager: true }) as Record<string, any>;

  const entries = Object.entries(modules).map(([path, mod]) => ({ path, mod }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Dev: UI Components Showcase</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {entries.map(({ path, mod }) => {
            const name = path.split('/').pop();
            // collect mountable exports (default + named functions)
            const exports: Array<{ key: string; comp: any }> = [];
            if (mod?.default && typeof mod.default === 'function') exports.push({ key: 'default', comp: mod.default });
            Object.entries(mod).forEach(([k, v]) => {
              if (k !== 'default' && typeof v === 'function') exports.push({ key: k, comp: v });
            });

            return (
              <div key={path} className="bg-white rounded shadow p-4 group hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-500 break-all">{name}</div>
                  <div className="text-xs text-gray-400 italic">{exports.length} render(s)</div>
                </div>

                <ErrorBoundary>
                  {exports.length > 0 ? (
                    <div className="space-y-3">
                      {exports.map(({ key, comp }) => (
                        <div key={key} className="p-2 border rounded hover:shadow-lg">
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                          {/* @ts-ignore */}
                          {React.createElement(comp, {})}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">No mountable export (component)</div>
                  )}
                </ErrorBoundary>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
