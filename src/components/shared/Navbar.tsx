"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github} from "lucide-react";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 justify-between inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Services Menu */}
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/myskills">
          <MenuItem
            setActive={setActive}
            active={active}
            item="My Skills"
          ></MenuItem>
        </Link>

        {/* Products Menu */}
        <Link href="/projects">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>

        {/* Pricing Menu */}
        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        <a href="https://github.com/parmeet20" target="_blank">
        <Github/>
        </a>
      </Menu>
    </div>
  );
}
