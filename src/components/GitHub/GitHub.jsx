import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, RefreshCw, AlertTriangle } from 'lucide-react';
import { githubUsername, socialLinks } from '../../data/data';
import { useGitHubData } from '../../hooks/useGitHubData';
import { useThemeContext } from '../../context/ThemeContext';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

const EVENT_LABELS = {
  PushEvent: 'Pushed commits to',
  CreateEvent: 'Created',
  PullRequestEvent: 'Opened a pull request in',
  WatchEvent: 'Starred',
  ForkEvent: 'Forked',
  IssuesEvent: 'Opened an issue in',
  IssueCommentEvent: 'Commented on an issue in',
  PublicEvent: 'Made public',
};

function describeEvent(event) {
  const label = EVENT_LABELS[event.type] ?? event.type.replace('Event', '');
  return `${label} ${event.repo?.name ?? ''}`;
}

export default function GitHub() {
  const { isDark } = useThemeContext();
  const { repos, events, status } = useGitHubData(githubUsername);
  const themeParam = isDark ? 'dark' : 'default';
  const activityTheme = isDark ? 'react-dark' : 'minimal';

  return (
    <SectionWrapper id="github" label="GitHub activity" className="bg-background-light dark:bg-background-dark">
      <SectionHeading
        index="06"
        eyebrow="GitHub"
        title="What I've been building, straight from GitHub."
        subtitle="Live stats, streaks, and activity — fetched directly from the GitHub API and refreshed every time you load this page."
      />

      {/* Stat images — dynamically generated per-username, theme synced */}
      <motion.div variants={staggerContainer(0.1)} className="grid lg:grid-cols-2 gap-6 mb-8">
        <motion.div variants={fadeUp} className="gradient-border">
          <div className="glass rounded-xl2 p-4 sm:p-5 overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${themeParam}&bg_color=00000000&hide_border=true&include_all_commits=true&count_private=true`}
              alt={`${githubUsername}'s GitHub stats`}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="gradient-border">
          <div className="glass rounded-xl2 p-4 sm:p-5 overflow-hidden">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${themeParam}&background=00000000&border=0000`}
              alt={`${githubUsername}'s GitHub streak stats`}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} className="gradient-border mb-8">
        <div className="glass rounded-xl2 p-4 sm:p-5 overflow-x-auto">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=${activityTheme}&hide_border=true&bg_color=00000000`}
            alt={`${githubUsername}'s contribution activity graph`}
            loading="lazy"
            className="w-full min-w-[600px] h-auto"
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="gradient-border mb-12 max-w-md">
        <div className="glass rounded-xl2 p-4 sm:p-5 overflow-hidden">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${themeParam}&bg_color=00000000&hide_border=true`}
            alt={`${githubUsername}'s most used languages`}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Repos + recent activity, fetched live from the REST API */}
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display font-semibold text-lg text-ink-light dark:text-ink-dark mb-5">
            Top Repositories
          </h3>

          {status === 'loading' && (
            <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
              <RefreshCw size={16} className="animate-spin" /> Fetching repositories…
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
              <AlertTriangle size={16} /> Couldn&apos;t load live repository data right now — visit the{' '}
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                GitHub profile
              </a>{' '}
              directly.
            </div>
          )}

          {status === 'success' && (
            <motion.ul variants={staggerContainer(0.08)} className="grid sm:grid-cols-2 gap-4">
              {repos.map((repo) => (
                <motion.li key={repo.id} variants={fadeUp} className="gradient-border">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl2 p-5 h-full flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-300 block"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm text-ink-light dark:text-ink-dark truncate">
                        {repo.name}
                      </span>
                      <ExternalLink size={14} className="text-muted-light dark:text-muted-dark shrink-0" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-muted-light dark:text-muted-dark line-clamp-2 min-h-[2rem]">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-muted-light dark:text-muted-dark">
                      <span className="flex items-center gap-1">
                        <Star size={13} aria-hidden="true" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={13} aria-hidden="true" /> {repo.forks_count}
                      </span>
                      {repo.language && <span className="font-mono">{repo.language}</span>}
                    </div>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg text-ink-light dark:text-ink-dark mb-5">
            Recent Activity
          </h3>

          {status === 'loading' && (
            <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
              <RefreshCw size={16} className="animate-spin" /> Fetching recent activity…
            </div>
          )}

          {status === 'success' && events.length === 0 && (
            <p className="text-sm text-muted-light dark:text-muted-dark">No recent public activity to show.</p>
          )}

          {status === 'success' && events.length > 0 && (
            <motion.ol variants={staggerContainer(0.08)} className="flex flex-col gap-4 border-l border-primary/20 pl-5">
              {events.map((event) => (
                <motion.li key={event.id} variants={fadeUp} className="relative text-sm">
                  <span className="absolute -left-[1.45rem] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <p className="text-ink-light dark:text-ink-dark">{describeEvent(event)}</p>
                  <p className="text-xs text-muted-light dark:text-muted-dark mt-0.5">
                    {new Date(event.created_at).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
