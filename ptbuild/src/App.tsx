import { Banner } from './components/Banner';
import { Formulario } from './components/Form';
import { Time } from './components/Team';
import { useState } from 'react';
import { Rodape } from './components/Footer';
import { IPlayer } from './shared/interface/IPlayer';

function App() {

  const horarioTimes = [
    {horario: '07:10 ~ 10:00'},
    {horario: '10:10 ~ 13:10'},
    {horario: '13:20 ~ 16:20'},
    {horario: '16:30 ~ 19:30'},
    {horario: '19:40 ~ 22:40'},
    {horario: '22:50 ~ 01:50'},
    {horario: '02:00 ~ 05:00'}
  ]

  const vocs = [
    'Elder Druid',
    'Elite Knight',
    'Master Sorcerer',
    'Royal Paladin'
]

  const [players, setPlayers] = useState<IPlayer[]>([])

  const novaPtAdicionada = (player: IPlayer) => {
    //debugger
    setPlayers([...players, player])
  }

  return (
    <div className="App">
        <Banner enderecoImagem='/images/banner.jpg' textoAlternativo='Banner principal tela antiga Tibia'/>
        <Formulario vocs={vocs.map(vocs => vocs)} horarios={horarioTimes.map(horarioTimes => horarioTimes.horario)} ptCriada={player => novaPtAdicionada(player)}/>
        
        {horarioTimes.map(time => <Time
          key={time.horario}
          horario={time.horario}
          players={players.filter(player => player.horario === time.horario)}
        />)}

        <Rodape enderecoImagem='/images/footer.jpg' textoAlternativo='Rodape principal arte do jogo Tibia'/>
    </div>
  );
}

export default App;