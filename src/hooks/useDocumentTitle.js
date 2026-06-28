import { useEffect } from 'react';

/**
 * useDocumentTitle — updates the document title (and optionally the meta
 * description) per route, keeping SEO metadata correct beyond the home page.
 */
export function useDocumentTitle(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    let descTag;
    if (description) {
      descTag = document.querySelector('meta[name="description"]');
      if (descTag) descTag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
