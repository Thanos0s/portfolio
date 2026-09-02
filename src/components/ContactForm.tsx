'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useSound } from '@/context/SoundContext';

interface ContactFormProps {
  recipientEmail: string;
}

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const { playClick, playPop } = useSound();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = email.includes('@') && message.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    playClick();
    setIsSubmitting(true);

    // Simulate reliable delivery / mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playPop();

      // Open mailto as practical local delivery trigger
      const mailtoUrl = `mailto:${recipientEmail}?subject=Portfolio Inquiry from ${encodeURIComponent(
        email
      )}&body=${encodeURIComponent(message)}`;
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <div className="space-y-5">
      <p className="text-muted-foreground mb-5 max-w-prose text-sm leading-relaxed">
        Write here and it lands in my inbox. Engineering roles, blockchain development, freelance projects, or a question about something I&apos;ve built - all welcome.
      </p>

      {submitted ? (
        <div className="border-border bg-muted/40 flex flex-col items-center justify-center gap-3 rounded-xl border p-8 text-center">
          <CheckCircle2 className="size-8 text-emerald-500" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            Message Prepared!
          </h3>
          <p className="text-muted-foreground max-w-sm text-sm">
            Your email client has been opened to send this directly to{' '}
            <span className="text-foreground font-medium">{recipientEmail}</span>.
          </p>
          <button
            type="button"
            onClick={() => {
              playClick();
              setSubmitted(false);
              setMessage('');
            }}
            className="text-foreground mt-2 text-xs font-semibold underline underline-offset-4 cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email input */}
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="text-foreground flex items-center gap-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="contact-email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-border placeholder:text-muted-foreground focus-visible:ring-ring/50 dark:bg-neutral-900/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:ring-[3px]"
            />
          </div>

          {/* Message input */}
          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="text-foreground flex items-center gap-2 text-sm font-medium"
            >
              Your message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              required
              placeholder="What are you building, and where do you want help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-border placeholder:text-muted-foreground focus-visible:ring-ring/50 dark:bg-neutral-900/30 flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-colors outline-none focus-visible:ring-[3px] min-h-32 resize-none"
            />
            <p className="text-muted-foreground text-xs">
              {message.trim().length < 10
                ? `At least 10 characters so I know what you need (${message.trim().length}/10)`
                : `Character count: ${message.trim().length}`}
            </p>
          </div>

          {/* Submit button */}
          <div className="space-y-2 pt-1">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-foreground text-background inline-flex h-11 w-full items-center justify-center gap-2 rounded-md text-sm font-semibold shadow-xs transition-opacity hover:opacity-90 disabled:opacity-45 cursor-pointer outline-none focus-visible:ring-[3px]"
            >
              <Send className="size-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
            </button>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
              <p className="text-muted-foreground ml-auto">
                Goes straight to{' '}
                <span className="text-foreground font-medium">{recipientEmail}</span>
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
