import CallsToAction from "./sections/CallsToAction/CallsToAction";
import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import Statistics from "./sections/Statistics/Statistics";

export default function HomePage() {
    return (
        <>
            <Hero />
            <CallsToAction />
            <Features />
            <Statistics />
        </>
    );
}
