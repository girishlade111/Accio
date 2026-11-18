import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodepenIcon } from '@/components/ui/Icons';
import { AppShell } from '@/components/layout/AppShell';
import { faqs } from '@/content/faq';
import { profile } from '@/content/profile';
import { pageVariants } from '@/components/motion/variants';

export function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const handleToggleFaq = (id: string) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    if (!fullName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message with at least 10 characters.');
      return;
    }

    setStatus('sending');

    // Mailto fallback protocol
    const subject = encodeURIComponent(`Portfolio Inquiry from ${fullName}`);
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
    }, 600);
  };

  return (
    <AppShell>
      <motion.article
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-xl mx-auto px-6 pt-28 pb-24 text-neutral-800 dark:text-neutral-200"
      >
        {/* Top Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
            <span>Get in</span>
            <span className="inline-flex items-center justify-center p-1.5 rounded-lg bg-white/10 text-white">
              <MessageSquare size={18} />
            </span>
            <span>touch</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
            I'm always open to collaborating on exciting projects with great people. Let's bring your idea to life, drop me a message at{' '}
            <a href={`mailto:${profile.email}`} className="text-blue-500 hover:underline">
              {profile.email}
            </a>
          </p>
        </header>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-3 mb-16">
          {/* Honeypot field for bot spam prevention */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={nameId} className="sr-only">
                Full name
              </label>
              <input
                id={nameId}
                type="text"
                placeholder="Full name"
                required
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor={emailId} className="sr-only">
                E-mail
              </label>
              <input
                id={emailId}
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor={messageId} className="sr-only">
              Message
            </label>
            <textarea
              id={messageId}
              rows={5}
              placeholder="Message..."
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y"
            />
          </div>

          {/* Validation Feedback */}
          {status === 'error' && (
            <div role="alert" className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center gap-2">
              <AlertCircle size={15} />
              <span>{errorMessage}</span>
            </div>
          )}

          {status === 'success' && (
            <div role="status" className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs flex items-center gap-2">
              <CheckCircle2 size={15} />
              <span>Opening your email client with your message drafted.</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3.5 rounded-xl font-medium text-xs sm:text-sm bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-sm disabled:opacity-50"
          >
            {status === 'sending' ? 'Drafting...' : 'Send Message'}
          </button>
        </form>

        {/* FAQs Section matching screenshot */}
        <section className="mb-14">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
            FAQs
          </h2>
          <p className="text-xs text-neutral-500 mb-4">
            Find frequently asked questions people ask me:
          </p>

          <div className="space-y-2">
            {faqs.map((faq) => {
              const isExpanded = expandedFaq === faq.id;
              const buttonId = `faq-btn-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#141414] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => handleToggleFaq(faq.id)}
                    className="w-full px-4 py-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-medium text-neutral-900 dark:text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-400 shrink-0 ml-2"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-4 pb-4 pt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed border-t border-black/5 dark:border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Social Links Bottom Strip */}
        <section className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-center gap-6 text-neutral-400 text-xs">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={profile.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-white transition-colors"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={profile.social.codepen}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen Profile"
            className="hover:text-white transition-colors"
          >
            <CodepenIcon size={16} />
          </a>
        </section>
      </motion.article>
    </AppShell>
  );
}
