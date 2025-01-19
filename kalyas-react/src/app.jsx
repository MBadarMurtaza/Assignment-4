import Header from "./components/header";
import Footer from "./components/footer";
import LowerHeader from "./components/lower header";
import ServicesSection from "./components/services";
import BusinessPlanSection from "./components/businessPlan";
import EffectiveService from "./components/effectiveService";
import Facilities from "./components/facilities";
import Clients from "./components/clients";
import Brand from "./components/brands";
import Design from "./components/design";
import Contact from "./components/contact";

const App = () => {
    return (
        <>
            <Header />
            <LowerHeader />
            <ServicesSection />
            <BusinessPlanSection />
            <EffectiveService />
            <Facilities />
            <Clients />
            <Brand />
            <Design />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
