import { useGame } from '../../../hooks/useGame'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function RogueLikePage() {
  const { rogueLike } = useGame()

  return (
    <>
      <Head title="ROGUELIKE" />
      <GameTitle>Roguelike</GameTitle>
      <Games games={rogueLike} />
    </>
  )
}
