"use client";

import Link from "next/link";
import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { HomeIcon } from "lucide-react";
import { unslugify } from "@/lib/utils/slugify";

export function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  let currentLink = "";

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => unslugify(crumb));

  return (
    <div className="relative">
      <ShadcnBreadcrumb className="scrollbar-hide overflow-x-auto">
        <BreadcrumbList className="w-full flex-nowrap px-4">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="flex items-center gap-x-2 text-nowrap"
                aria-label="Przejdź do strony głównej"
              >
                <HomeIcon /> Strona główna
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {crumbs.map((crumb, index) => {
            currentLink += `/${crumb}`;
            const name = crumb.replaceAll("-", " ");
            return (
              <Fragment key={index}>
                <BreadcrumbSeparator />
                {index < crumbs.length - 1 ? (
                  <>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink asChild>
                        <Link
                          href={currentLink}
                          className="capitalize"
                          aria-label={`Przejdź do strony ${name}`}
                        >
                          {name}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-nowrap pr-4 capitalize">
                      {crumb}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </ShadcnBreadcrumb>
      <div className="absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-r from-transparent to-background"></div>
    </div>
  );
}
