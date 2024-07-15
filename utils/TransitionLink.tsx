"use client"

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // TODO Run some exit animation 
    // sleep for some time
    router.push(href);
    // TODO Run some enter animation
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};
