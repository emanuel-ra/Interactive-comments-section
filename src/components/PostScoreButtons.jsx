import { iconMinus, iconPlus } from "../assets/images";

export default function PostScoreButtons({handleScorePlus,handleScoreMinus, score}) {
  return (
    <>
        <button onClick={handleScorePlus}>
            <img src={iconPlus} alt="Plus One" />
        </button>
        <button>{score}</button>
        <button type='button' onClick={handleScoreMinus}>
            <img src={iconMinus} alt="Minus One" />
        </button>
    </>
  )
}
