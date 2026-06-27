import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("hello from bun server", { status: 200 });
    } else if (url.pathname === "/home") {
      return new Response("this is home page", { status: 200 });
    } else {
      return new Response("Not Found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
