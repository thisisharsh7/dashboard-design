import ComparisonGraph from "../components/ComparisonGraph"
import Header from "../components/Header"
import Hero from "../components/Hero"
import QuestionAnalysis from "../components/QuestionAnalysis"
import QuickStats from "../components/QuickStats"
import Sidebar from "../components/Sidebar"
import SyllabusAnalysis from "../components/SyllabusAnalysis"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <section>
                    <h1 className="title">Skill Test</h1>
                    <Hero />
                    <QuickStats />
                    <SyllabusAnalysis />
                    <QuestionAnalysis />
                    <ComparisonGraph />
                </section>
            </main>
        </>
    )
}

export default Home