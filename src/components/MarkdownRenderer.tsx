import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const markdownComponents = {
  code({ inline, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { inline?: boolean; className?: string; children?: React.ReactNode }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={vscDarkPlus as any}
        language={match[1]}
        PreTag="div"
        className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg overflow-x-auto"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code
        className={`${className} bg-[var(--color-bg-secondary)] text-[var(--color-accent)] px-1.5 py-0.5 rounded`}
        {...props}
      >
        {children}
      </code>
    );
  },
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-[var(--color-text-primary)] text-3xl font-bold mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-[var(--color-text-primary)] text-2xl font-semibold mt-6 mb-3"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-[var(--color-text-primary)] text-xl font-semibold mt-4 mb-2"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[var(--color-text-secondary)] mb-4" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside mb-4 text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside mb-4 text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] px-4 py-2 my-4 text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="overflow-x-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-invert max-w-none"
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
