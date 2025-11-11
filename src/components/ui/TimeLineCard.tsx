import { motion } from 'framer-motion';
import TimeLine from "@ui/TimeLine";
import ReactMarkdown from 'react-markdown';
import { markdownComponents } from '@lib/markdownComponents';
import { TimeLineCardProps } from '@typings/timeLineCard';

interface ExtendedTimeLineCardProps extends TimeLineCardProps {
  onFullStackClick?: () => void;
}

export default function TimeLineCard({ data, index, onFullStackClick }: ExtendedTimeLineCardProps) {
  const id = data.id || data.id;
  const title = data.role || data.title;
  const subtitle = data.company || data.institution;

  const isFullStack = id === "fullstack";

  const handleClick = () => {
    if (isFullStack && onFullStackClick) onFullStackClick();
  };

  const renderDescription = () => {
    if (!data.description) {
      return null;
    }

    if (Array.isArray(data.description)) {
      return (
        <ul className="list-disc list-outside ml-4 text-text/80 space-y-1">
          {data.description.map((line, j) => (
            <li key={j} className="text-sm">
              <ReactMarkdown components={markdownComponents}>
                {line}
              </ReactMarkdown>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div className="text-sm text-text/80">
          <ReactMarkdown components={markdownComponents}>
            {data.description}
          </ReactMarkdown>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative pl-2"
    >
      <TimeLine />
      <div
        onClick={handleClick}
        className={`relative p-4 rounded-xl bg-secondary/40 border border-secondary/60 duration-300 ${isFullStack
          ? "pb-8 cursor-pointer hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-1"
          : ""
          }`}>
        <h3 className="font-semibold text-text">{title}</h3>
        <p className="text-sm text-text/60 mb-2">
          {subtitle} • {data.period}
        </p>
        {renderDescription()}
        {isFullStack && <p className='absolute right-0 mr-4'>Ver certificados →</p>}
      </div>
    </motion.div>
  );
}
