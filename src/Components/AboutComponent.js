import React from "react";
import {
  Card,
  Icon,
  CardTitle,
} from 'react-materialize';

const About = () => (
  
      <Card
        actions={[
          <a key="1" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">More on COVID-19</a>
        ]}
        className="KaiserText medium"
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image="/img/COVID19cells.jpg" reveal waves="light"> COVID-19 </CardTitle>}
        reveal={
          <>
            <ul>
              <li>
                <a href="https://www.baystatehealth.org/covid19/faq"><Icon left>help_outline</Icon> WHAT IS CORONAVIRUS? </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.baystatehealth.org/covid19/faq"><Icon left>help_outline</Icon> WHAT IS CORONAVIRUS DISEASE 2019 (COVID-19)? </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.baystatehealth.org/covid19/faq"><Icon left>help_outline</Icon> HOW DOES COVID-19 SPREAD? </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.baystatehealth.org/covid19/faq"><Icon left>help_outline</Icon> WHAT ARE THE SYMPTOMS TO WATCH FOR? </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.baystatehealth.org/covid19/faq"><Icon left>help_outline</Icon> WHAT IS THE DIFFERENCE BETWEEN COVID-19 SYMPTOMS AND THE FLU? </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.baystatehealth.org/covid19/faq"><Icon left>help_outline</Icon> IS THERE A CURE? </a>
              </li>
            </ul>
          </>
        }
        revealIcon={<Icon>more_vert</Icon>}
        title="FAQ"
      >
        <p>
          Coronavirus disease 2019 (COVID-19) is a respiratory (breathing) illness caused by a coronavirus that was first identified during an outbreak in China.
        </p>
      </Card>
)

export default About;