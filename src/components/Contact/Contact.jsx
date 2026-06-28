import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Github, Linkedin, Mail, Code2, Send, CheckCircle2 } from 'lucide-react';
import { emailJsConfig, personalInfo, socialLinks } from '../../data/data';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import RippleButton from '../Common/RippleButton';
import { fadeUp } from '../../utils/motionVariants';

const initialForm = { name: '', email: '', subject: '', message: '' };

const socialItems = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: socialLinks.leetcode, label: 'LeetCode' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailJsConfigured = ![emailJsConfig.serviceId, emailJsConfig.templateId, emailJsConfig.publicKey].some(
  (v) => !v || v.startsWith('YOUR_')
);

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = 'That email address doesn\u2019t look right.';
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error('Please fix the highlighted fields.');
      return;
    }

    if (!isEmailJsConfigured) {
      toast.info(
        'Contact form is in demo mode — add your EmailJS service, template and public key in src/data/data.js to enable real sending.'
      );
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: personalInfo.email,
        },
        emailJsConfig.publicKey
      );
      toast.success('Message sent — thanks for reaching out!');
      setSent(true);
      setValues(initialForm);
      setTimeout(() => setSent(false), 3500);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      toast.error('Something went wrong sending your message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const fieldClasses = (field) =>
    `w-full px-4 py-3 rounded-xl glass border text-sm text-ink-light dark:text-ink-dark placeholder:text-muted-light dark:placeholder:text-muted-dark outline-none transition-colors ${
      errors[field] ? 'border-red-400/70 focus:border-red-400' : 'border-primary/15 focus:border-primary'
    }`;

  return (
    <SectionWrapper id="contact" label="Contact" className="bg-background-light dark:bg-background-dark">
      <SectionHeading
        index="08"
        eyebrow="Contact"
        title="Let's build something together."
        subtitle="Have a project, an internship opportunity, or just want to talk cloud and React? My inbox is open."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 gradient-border"
        >
          <div className="glass rounded-xl2 p-6 sm:p-8 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-muted-light dark:text-muted-dark mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={fieldClasses('name')}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400 mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-muted-light dark:text-muted-dark mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={fieldClasses('email')}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wide text-muted-light dark:text-muted-dark mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className={fieldClasses('subject')}
              />
              {errors.subject && (
                <p id="subject-error" className="text-xs text-red-400 mt-1.5">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-muted-light dark:text-muted-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you have in mind..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${fieldClasses('message')} resize-none`}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-400 mt-1.5">{errors.message}</p>
              )}
            </div>

            <RippleButton type="submit" variant="primary" className="self-start mt-1" ariaLabel="Send message">
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Sent!
                </>
              ) : (
                <>
                  <Send size={16} /> {sending ? 'Sending…' : 'Send Message'}
                </>
              )}
            </RippleButton>

            {!isEmailJsConfigured && (
              <p className="text-xs text-muted-light dark:text-muted-dark -mt-1">
                Demo mode: connect EmailJS in <code className="font-mono">src/data/data.js</code> to send real emails.
              </p>
            )}
          </div>
        </motion.form>

        {/* Side info */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-6">
          <div className="gradient-border">
            <div className="glass rounded-xl2 p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="font-display font-semibold text-lg text-ink-light dark:text-ink-dark">
                Reach me directly
              </h3>
              <a href={socialLinks.email} className="text-primary hover:text-accent transition-colors break-all text-sm">
                {personalInfo.email}
              </a>
              <p className="text-sm text-muted-light dark:text-muted-dark">{personalInfo.location}</p>
              <ul className="flex items-center gap-3 mt-2" aria-label="Social links">
                {socialItems.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="w-11 h-11 rounded-full glass border border-primary/20 flex items-center justify-center text-ink-light dark:text-ink-dark hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
