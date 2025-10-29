import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import './ReviewForm.css';

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input
           type="radio" 
           value="unsatisfied" 
           name="review" 
           required
           checked={data.review === "unsatisfied"} 
           onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className='radio-container'>
          <input 
            type="radio" 
            value="neutro" 
            name="review" 
            required
            checked={data.review === "neutro"} 
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor o texto</p>
        </label>

        <label className='radio-container'>
          <input 
            type="radio" 
            value="satisfeito" 
            name="review" 
            required
            checked={data.review === "satisfeito"} 
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className='radio-container'>
          <input 
            type="radio" 
            value="muito_satisfeito" 
            name="review" 
            required
            checked={data.review === "muito_satisfeito"} 
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
          name="comment" 
          id="comment" 
          placeholder="Conte como foi sua experiência com o produto..." 
          required
          value={data.comment || ""} 
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm