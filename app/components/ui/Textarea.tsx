'use client';

import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, helperText, rows = 4, ...props }, ref) => {
    const textareaId = props.id || props.name || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className={`mb-4 w-full ${className}`}>
        <label htmlFor={textareaId} className="block text-sm font-medium text-text-dark mb-2">
          {label}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={`w-full px-4 py-3 rounded-xl border ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary focus:border-primary'
          } bg-white text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-text-muted">{helperText}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export default Textarea;
