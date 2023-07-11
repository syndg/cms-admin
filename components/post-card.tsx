import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  id: string;
  title: string;
  content: string;
  category: {
    name: string;
  };
  imageUrl: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  id,
  content,
  title,
  category,
  imageUrl,
}) => {
  return (
    <Link href={`/posts/${id}`}>
      <Card>
        <CardHeader className="p-4">
          <div className="relative overflow-hidden rounded-md h-52">
            <Image src={imageUrl} alt="post-card" fill />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-2">{content}</CardDescription>
        </CardContent>
        <CardFooter>
          <Badge variant="secondary" className="rounded-xl">
            {category.name}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};