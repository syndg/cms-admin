import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AddNew } from "@/components/add-new";
import { Separator } from "@/components/ui/separator";

interface MenuBarProps {
  heading: string;
  viewButtonText: string;
  viewButtonhref: string;
}

export const Menubar: React.FC<MenuBarProps> = ({
  heading,
  viewButtonText,
  viewButtonhref,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">{heading}</h1>
        <div className="flex space-x-4">
          <Link href={viewButtonhref}>
            <Button variant="outline">{viewButtonText}</Button>
          </Link>
          <AddNew />
        </div>
      </div>
      <Separator />
    </>
  );
};
