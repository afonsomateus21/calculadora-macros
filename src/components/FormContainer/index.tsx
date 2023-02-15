import { Container, Content } from "./styles";
import TrainingImage from '../../assets/images/diet.svg';

export function FormContainer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={TrainingImage} alt="Homem Treinando" />
        </div>

        <div>
          <h1>Calculadora de macronutrientes</h1>
        </div>
      </Content>
    </Container>
  );
}