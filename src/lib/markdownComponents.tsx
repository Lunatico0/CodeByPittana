import type { PropsWithChildren } from "react";
import type { Components } from "react-markdown";

export const markdownComponents: Components = {
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2 text-primary/90">
      {children}
    </h3>
  ),

  p: ({ children }: PropsWithChildren) => (
    <p className="mb-4 leading-relaxed text-text/80">
      {children}
    </p>
  ),

  ul: ({ children }: PropsWithChildren) => (
    <ul className="list-disc ml-6 space-y-1 mb-4 text-text/80">
      {children}
    </ul>
  ),
  li: ({ children }: PropsWithChildren) => (
    <li className="pl-1">
      {children}
    </li>
  ),

  hr: () => <hr className="my-6 border-t border-secondary" />,

  strong: ({ children }: PropsWithChildren) => (
    <strong className="font-extrabold text-tertiary">
      {children}
    </strong>
  ),

  code: ({ children }: PropsWithChildren) => (
    <code className="bg-secondary/50 px-1 py-0.5 rounded text-sm text-accent font-mono">
      {children}
    </code>
  ),
};
