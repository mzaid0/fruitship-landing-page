import Hero from "./components/Hero/Hero"
import MainButton from "./components/Hero/MainButton"
import image1 from "./assets/strawberry.png"
const App = () => {
  return (
    <div >
      <Hero 
      heading={"A Healthy fruit"}
      description={"Fruits are the best in the world, They make us healthy and produce good products for everyone..."}
      mainButton={<MainButton/>}
      image1={image1}
      />
    </div>
  )
}

export default App
