import { Title } from "../../components/Title"
import "./styles.css"
import Img from "../../assets/img/Ilustra.png"
import { Button } from "../../components/Button"

export const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <div>
          <Title />
          <p>Divirta-se nesse jogo</p>
        </div>
        <Button path="game" color="secondary">Iniciar</Button>
      </div>
      <img src={Img} alt="Ilustration" />
    </div>
  )
}
