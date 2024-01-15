import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./Task/TaskBoard";

export default function App() {
  return (
    < >
      <Header/>
      <div className="d-flex justify-center align-center">
        <HeroSection/>
        <TaskBoard/>  
      </div>
      <Footer/>
    </>
  )
}