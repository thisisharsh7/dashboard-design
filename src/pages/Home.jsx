import ComparisonGraph from "../components/comparisonGraph/ComparisonGraph"
import Header from "../components/Header"
import Hero from "../components/htmlHeader/HtmlHeader"
import QuestionAnalysis from "../components/QuestionAnalysis/QuestionAnalysis"
import QuickStats from "../components/stats/QuickStats"
import Sidebar from "../components/Sidebar"
import SyllabusAnalysis from "../components/syllabusAnalysis/SyllabusAnalysis"

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