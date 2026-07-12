'use client';

import { useState } from 'react';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import FormPage from '../templates/FormPage';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactContent() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok !== false) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const infoContent = (
    <>
      <div>
        <span className="section-label">Get in Touch</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mt-2 mb-6">
          We&apos;d love to hear from you
        </h2>
        <p className="text-text-muted text-lg mb-8 leading-relaxed">
          Whether you have a question about admissions, fees, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Mail size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-text-dark mb-1">Email Us</h3>
            <p className="text-text-muted mb-1">Our friendly team is here to help.</p>
            <a href="mailto:info@mnara.co.ke" className="text-primary font-medium hover:underline">
              info@mnara.co.ke
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Phone size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-text-dark mb-1">Call Us</h3>
            <p className="text-text-muted mb-1">Mon–Fri from 8am to 5pm.</p>
            <a href="tel:+254713801024" className="text-primary font-medium hover:underline">
              +254 713 801 024
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-text-dark mb-1">Visit Us</h3>
            <p className="text-text-muted mb-3">Come say hello today.</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-text-dark font-bold">Kileleshwa,</strong> off Nyeri Road, Nairobi
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const formContent = (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="mb-8">
        <h3 className="font-heading text-2xl font-bold text-text-dark mb-2">Send us a message</h3>
        <p className="text-text-muted text-sm">Please fill out the form below and we will get back to you shortly.</p>
      </div>

      {status === 'success' && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
          <CheckCircle size={20} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Message sent!</p>
            <p className="text-sm mt-0.5">Thank you for reaching out. We&apos;ll be in touch within one business day.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Something went wrong</p>
            <p className="text-sm mt-0.5">Please try again or email us directly at info@mnara.co.ke</p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="First Name" name="firstName" placeholder="Enter your first name" required disabled={status === 'submitting'} />
        <Input label="Last Name" name="lastName" placeholder="Enter your last name" required disabled={status === 'submitting'} />
      </div>

      <Input label="Email Address" name="email" type="email" placeholder="Enter your email address" required disabled={status === 'submitting'} />
      <Input label="Phone Number" name="phone" type="tel" placeholder="+254 7XX XXX XXX" disabled={status === 'submitting'} />

      <div className="mb-4 w-full">
        <label htmlFor="interest" className="block text-sm font-medium text-text-dark mb-2">
          I am interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-primary focus:border-primary bg-white text-text-dark focus:outline-none focus:ring-2 transition-all duration-200"
          disabled={status === 'submitting'}
        >
          <option value="">Select an option</option>
          <option value="admissions">Admissions</option>
          <option value="tour">Booking a Tour</option>
          <option value="fees">Fee Structure</option>
          <option value="other">Other</option>
        </select>
      </div>

      <Textarea label="Message" name="message" placeholder="How can we help you?" rows={5} required disabled={status === 'submitting'} />

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : status === 'success' ? (
          'Message Sent'
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );

  return (
    <FormPage
      title="Contact Us"
      image="/images/hero-3.jpg"
      breadcrumbs={[{ label: 'Contact Us' }]}
      infoContent={infoContent}
      formContent={formContent}
    />
  );
}
