import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="prose prose-invert max-w-none"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg"
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
        h1: (props) => (
          <h1
            className="text-[var(--color-text-primary)] text-3xl font-bold mt-8 mb-4"
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            className="text-[var(--color-text-primary)] text-2xl font-semibold mt-6 mb-3"
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className="text-[var(--color-text-primary)] text-xl font-semibold mt-4 mb-2"
            {...props}
          />
        ),
        p: (props) => (
          <p className="text-[var(--color-text-secondary)] mb-4" {...props} />
        ),
        a: (props) => (
          <a
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
            {...props}
          />
        ),
        ul: (props) => (
          <ul
            className="list-disc list-inside mb-4 text-[var(--color-text-secondary)]"
            {...props}
          />
        ),
        ol: (props) => (
          <ol
            className="list-decimal list-inside mb-4 text-[var(--color-text-secondary)]"
            {...props}
          />
        ),
        blockquote: (props) => (
          <blockquote
            className="border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] px-4 py-2 my-4 text-[var(--color-text-secondary)]"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
