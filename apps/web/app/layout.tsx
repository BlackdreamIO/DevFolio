import type { Metadata } from "next";
import { Provider } from "./components/ui/provider";
import ReduxProviders from "./providers/ReduxProviders";
import "./styles/globals.css";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ReduxProviders>
                    <Provider enableSystem={false}>
                        {children}
                    </Provider>
                </ReduxProviders>
            </body>
        </html>
    )
}
