import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <h1>Heroes de la Programación </h1>
      </Text>

      <Text>
        {" "}
        <h2>Charles Babbage</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/babbage.jpg")}
        />
        <p>
          Peignmouth, 1792 - Londres, 1871 Matemático e ingeniero británico,
          inventor de las máquinas calculadoras programables. A comienzos del
          siglo XIX, bien avanzada la Revolución Industrial, los errores en los
          datos matemáticos tenían graves consecuencias: por ejemplo, una tabla
          de navegación defectuosa era una causa frecuente de los naufragios.
          Charles Babbage creyó que una máquina podía hacer cálculos matemáticos
          más rápidos y más precisos que las personas.
        </p>
      </Text>
      <Text>
        {" "}
        <h2>Timothy "Tim" John Berners-Lee</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/berners-lee.jpg")}
        />
        <p>
          (Londres, Reino Unido, 8 de junio de 1955), conocido como Tim
          Berners-Lee, es un científico de la computación británico, conocido
          por ser el padre de la World Wide Web. Estableció la primera
          comunicación entre un cliente y un servidor usando el protocolo HTTP
          en diciembre de 1990.
        </p>
      </Text>
      <Text>
        <h2>Clarke Artur</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/Clarke.jpg")}
        />
        <p>
          {" "}
          Arthur Charles Clarke (Minehead, Inglaterra; 16 de diciembre de 1917 -
          Colombo, Sri Lanka; 19 de marzo de 2008), más conocido como Arthur C.
          Clarke, fue un escritor y científico británico. Autor de obras de
          divulgación científica y de ciencia ficción, como la novela 2001: Una
          odisea del espacio, El centinela o Cita con Rama y coguionista de la
          película 2001: Una odisea del espacio.
        </p>
      </Text>
      <Text>
        {" "}
        <h2>Hamimton Carl Davidson</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/Hamilton.jpg")}
        />
        <p>
          Sir Lewis Carl Davidson Hamilton 2​3​ (Stevenage, Hertfordshire,
          Inglaterra, Reino Unido; 7 de enero de 1985), es un piloto británico
          de automovilismo. En Fórmula 1 desde 2007 hasta 2012, fue piloto de la
          escudería McLaren, con la cual fue campeón en 2008 y subcampeón en
          2007. A partir de 2013, se convirtió en piloto de Mercedes, resultando
          campeón en 2014, 2015, 2017, 2018, 2019, 2020, igualando los 7 títulos
          de Michael Schumacher, y subcampeón en 2016. Ha logrado alzarse con
          más de 90 victorias en Grandes Premios a lo largo de su carrera en la
          Fórmula 1, siendo quien tiene más victorias en la historia de la
          competició.
        </p>
      </Text>
      <Text>
        <h2>Hopper Edward</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/Hopper.jpg")}
        />
        <p>
          Edward Hopper (Nyack, 22 de julio de 1882 - Nueva York, 15 de mayo de
          1967)1​ fue un pintor estadounidense, célebre sobre todo por sus
          retratos de la soledad en la vida estadounidense contemporánea. Se le
          considera uno de los pintores de la escuela Ashcan, que a través de
          Arshile Gorky llevó al expresionismo abstracto posterior a la Segunda
          Guerra Mundial.
        </p>
      </Text>
      <Text>
        {" "}
        <h2>Lovelace</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/lovelace.jpg")}
        />
        <p>
          {" "}
          Lovelace es una película biográfica del 2013, que trata sobre la
          actriz porno Linda Boreman, más conocida como Linda Lovelace, la
          estrella de Deep Throat (Garganta profunda), un vanguardista film de
          la época dorada del cine porno. La historia abarca la vida de la
          actriz entre los 20 y los 32 años. Dirigida por Rob Epstein y Jeffrey
          Friedman sobre un guion de Andy Bellin, la película cuenta con la
          presencia de Amanda Seyfried y Peter Sarsgaard en los papeles
          principales, y Sharon Stone, Adam Brody, James Franco, Chloë Sevigny y
          Juno Temple en los papeles secundarios. Estrenada el 22 de enero de
          2013 en el festival de Sundance, fue lanzada limitadamente al público
          en los Estados Unidos.
        </p>
      </Text>
      <Text>
        {" "}
        <h2>Alan Turing</h2>
        <Image
          style={{ width: 100, height: 100, marginBottom: 10 }}
          source={require("./assets/Turing.jpg")}
        />
        <p>
          Alan Mathison Turing (Paddington, Londres; 23 de junio de
          1912-Wilmslow, Cheshire; 7 de junio de 1954), fue un matemático,
          lógico, informático teórico, criptógrafo, filósofo, biólogo teórico,
          maratoniano y corredor de ultradistancia británico. Es considerado uno
          de los padres de la ciencia de la computación y precursor de la
          informática moderna. Proporcionó una influyente formalización de los
          conceptos de algoritmo y computación: la máquina de Turing. Formuló su
          propia versión que hoy es ampliamente aceptada como la tesis de
          Church-Turing (1936).
        </p>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe9e3",
    color: "black",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
