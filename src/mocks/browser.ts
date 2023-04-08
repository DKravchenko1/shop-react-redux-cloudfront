import { setupWorker } from "msw";
import { handlers } from "./handlers";
// This configures a Service Worker with the given request product-service-handlers.
export const worker = setupWorker(...handlers);
