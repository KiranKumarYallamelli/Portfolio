import { Component } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

/**
 * ErrorBoundary — catches render-time errors anywhere below it in the
 * tree and shows a friendly recovery screen instead of an unmounted,
 * blank page. Class component because React error boundaries require
 * the componentDidCatch/getDerivedStateFromError lifecycle, which has
 * no hooks equivalent.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Caught by ErrorBoundary:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5 text-center px-6 bg-background-light dark:bg-background-dark text-ink-light dark:text-ink-dark">
          <span className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center">
            <AlertTriangle size={26} aria-hidden="true" />
          </span>
          <h1 className="font-display font-semibold text-2xl">Something went wrong.</h1>
          <p className="text-muted-light dark:text-muted-dark max-w-sm">
            This section hit an unexpected error. Reloading the page usually fixes it.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-medium text-sm"
          >
            <RefreshCw size={16} aria-hidden="true" /> Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
