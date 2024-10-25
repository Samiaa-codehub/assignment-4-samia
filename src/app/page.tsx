import Footer from "./componenter/footer/footer"
import Header from "./componenter/header/header"
import Hero from "./componenter/hero/hero"

const Home=()=>{
  return(
    <div className="custom-bg">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}
export default Home