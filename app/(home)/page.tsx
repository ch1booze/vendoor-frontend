import CallsToAction from "./components/CallsToAction/CallsToAction";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <CallsToAction />
            <Features />
            <Statistics />
            <Footer />
        </>
    );
}
