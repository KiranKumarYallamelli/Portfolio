import { useEffect, useState } from 'react';

/**
 * useGitHubData — fetches public repository and recent activity data
 * directly from the GitHub REST API in the visitor's browser (no token
 * required, since both endpoints are public). Used to power the GitHub
 * section's "Top Repositories" and "Recent Activity" panels.
 */
export function useGitHubData(username) {
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!username) return;
    let cancelled = false;

    async function load() {
      setStatus('loading');
      try {
        const [repoRes, eventRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=10`),
        ]);

        if (!repoRes.ok || !eventRes.ok) throw new Error('GitHub API request failed');

        const repoData = await repoRes.json();
        const eventData = await eventRes.json();

        if (cancelled) return;

        const topRepos = [...repoData]
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);

        setRepos(topRepos);
        setEvents(Array.isArray(eventData) ? eventData.slice(0, 6) : []);
        setStatus('success');
      } catch (err) {
        if (!cancelled) {
          console.error('GitHub data fetch failed:', err);
          setStatus('error');
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { repos, events, status };
}
