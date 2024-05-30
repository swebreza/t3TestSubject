import { cache } from "react";
import { headers } from "next/headers";

import { createCaller, createTRPCContext } from "@acme/api";
import { auth } from "@acme/auth";

const createContext = cache(async () => {
  console.log("Creating context...");

  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  const context = createTRPCContext({
    session: await auth(),
    headers: heads,
  });
  console.log("Context:", context);
  return context;
});

export const api = createCaller(createContext);
