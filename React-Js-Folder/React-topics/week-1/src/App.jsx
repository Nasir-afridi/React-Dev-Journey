import Header from "./components/Header"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Message from "./components/Message"
import Counter from "./components/Counter"
import LiveInput from "./components/LiveInput"

function App() {

  return (
    <>
     <Header />
     <Footer />
     <Greeting name='Nasir' />
     <Message />
     <Counter />
     <LiveInput />
    </>
  )
}

export default App
