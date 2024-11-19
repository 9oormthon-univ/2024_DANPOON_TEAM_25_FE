interface SimplePolicyProps extends BaseProps {
  title: string;
  content: string;
}

interface PolicySectionProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
}

interface PolicyListProps {
  items: string[];
}

interface PolicyTableProps {
  data: { law: string; retention: { content: string; period: string }[] }[];
}

export const SimplePolicy = ({ title, content }: SimplePolicyProps) => (
  <div className="space-y-2">
    <div className="font-semibold text-xl">{title}</div>
    <p className="whitespace-pre-line">{content}</p>
  </div>
);

export const PolicySection = ({
  title,
  content,
  children,
}: PolicySectionProps) => (
  <section className="space-y-3">
    <div className="font-semibold text-xl">{title}</div>
    {content && <p>{content}</p>}
    {children}
  </section>
);

export const PolicyList = ({ items }: PolicyListProps) => (
  <ul className="list-disc pl-8 space-y-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const PolicyTable = ({ data }: PolicyTableProps) => (
  <div>
    {data.map((item, index) => (
      <div key={index} className="space-y-2">
        <div className="font-medium mt-2">{item.law}</div>
        <ul className="list-disc pl-8 space-y-2">
          {item.retention.map((retentionItem, retentionIndex) => (
            <li key={retentionIndex}>
              {retentionItem.content} - {retentionItem.period}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
