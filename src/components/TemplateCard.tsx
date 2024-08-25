import React from "react";
import { Template } from "./Templates";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: Template) => {
  return (
    <Link href={"/content/" + item.slug}>
      <Card className="h-full hover:scale-105 hover:bg-neutral-gray transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <img src={item.icon} alt={item.name} width={50} height={50} />
            {item.name}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {item.desc}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default TemplateCard;
