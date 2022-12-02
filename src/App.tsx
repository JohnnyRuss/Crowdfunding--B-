import Header from "./components/header/Header";
import MastercraftIntro from "./components/mastercraftIntro/MastercraftIntro";
import ProcessBar from "./components/process/ProcessBar";
import AboutProject from "./components/aboutProject/AboutProject";
import SuccessModal from "./components/layouts/SuccessModal";
import ProjectModal from "./components/layouts/ProjectModal";

function App() {
  return (
    <>
      <Header />
      <MastercraftIntro />
      <ProcessBar />
      <AboutProject />
      <SuccessModal />
      <ProjectModal />
    </>
  );
}

export default App;
