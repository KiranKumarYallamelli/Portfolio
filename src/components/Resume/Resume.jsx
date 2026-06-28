import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../../data/data';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import RippleButton from '../Common/RippleButton';
import { fadeUp } from '../../utils/motionVariants';

/**
 * Resume — embeds the actual PDF inline via the browser's native PDF
 * viewer (fast, zero extra dependencies, works everywhere) alongside
 * download and open-in-new-tab actions.
 */
export default function Resume() {
  return (
    <SectionWrapper id="resume" label="Resume" className="bg-background-light dark:bg-background-dark">
      <SectionHeading index="07" eyebrow="Resume" title="My resume, right here." />

      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-8">
        <RippleButton
          variant="primary"
          href={personalInfo.resumeUrl}
          download={personalInfo.resumeFileName}
          ariaLabel="Download resume PDF"
        >
          <Download size={16} /> Download PDF
        </RippleButton>
        <RippleButton
          variant="outline"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Open resume in a new tab"
        >
          <ExternalLink size={16} /> Open in New Tab
        </RippleButton>
      </motion.div>

      <motion.div variants={fadeUp} className="gradient-border">
        <div className="glass rounded-xl2 p-3 sm:p-4">
          <div className="rounded-xl overflow-hidden border border-primary/10 bg-surface-light dark:bg-surface-dark">
            <object
              data={personalInfo.resumeUrl}
              type="application/pdf"
              className="w-full h-[70vh] sm:h-[80vh]"
              aria-label="Kiran Kumar Yallamelli's resume preview"
            >
              <div className="w-full h-[40vh] flex flex-col items-center justify-center gap-3 text-center px-6">
                <FileText size={36} className="text-primary" aria-hidden="true" />
                <p className="text-sm text-muted-light dark:text-muted-dark">
                  Your browser can&apos;t preview PDFs inline. Use the buttons above to download or open it in a new tab instead.
                </p>
              </div>
            </object>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
