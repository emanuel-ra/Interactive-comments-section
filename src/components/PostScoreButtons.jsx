import { iconMinus, iconPlus } from "../assets/images";
import PropTypes from 'prop-types'; // 

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

PostScoreButtons.propTypes = {
  handleScorePlus: PropTypes.func ,
  handleScoreMinus: PropTypes.func ,
  score: PropTypes.number
}