import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  provider: string;
  date: string;
  url: string;
  tags: string[];
  image?: string;
};

export const CertificateCard = ({
  title,
  provider,
  date,
  url,
  tags,
  image,
}: Props) => {
  return (
    <div className="flex flex-col justify-between h-full min-h-[350px] rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
      {image && (
        <div className="h-40 w-full relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col justify-between flex-1 p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {provider} — {date}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          View Certificate
        </Link>
      </div>
    </div>
  );
};
