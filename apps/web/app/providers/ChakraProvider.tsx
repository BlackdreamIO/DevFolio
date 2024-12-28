import { Provider } from "../components/ui/provider";

interface IChakraProvider {
    children: React.ReactNode;
}

export const ChakraProvider : React.FC<IChakraProvider> = ({ children }) => {
    return (
        <Provider enableSystem={false}>
            {children}
        </Provider>
    )
}
