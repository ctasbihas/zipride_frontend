import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { router } from "./routes/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider
			defaultTheme="system"
			storageKey="theme"
		>
			<RouterProvider router={router} />
			<Toaster />
		</ThemeProvider>
	</StrictMode>
);
