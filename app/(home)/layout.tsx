import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
