import { VFC } from "react";
import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/server-side", label: "server-side" },
  { href: "/client-side", label: "client-side" },
];

export const Header: VFC = () => {
  return (
    <div>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-4 text-red-500">{label}</a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
