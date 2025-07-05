import Header from "./components/Header"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Message from "./components/Message"
import Counter from "./components/Counter"
import LiveInput from "./components/LiveInput"
import Map from "./components/Map"
import Project from "./components/Project"
import ProjectGreeting from "./components/ProjectGreeting"

function App() {

  return (
    <>
     <Header />
     <Footer />
     <Greeting name='Nasir' />
     <Message />
     <Counter />
     <LiveInput />
     <Map />

     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🔥 React Mini Project</h1>
      <Project />
      <hr />
      <ProjectGreeting />
    </div>
    
    </>
  )
}

export default App
