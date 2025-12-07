import { HeroSection } from "@/components/portfolio/HeroSection";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
            <HeroSection
                name="Rashika Singh Gurjar"
                tagline="Computer Science Student & Full Stack Developer"
            />
        </div>
    );
};

export default Home;
