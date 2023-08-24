import React from 'react';
import "././ReviewForm.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

export default function ReviewForm({data, updateFieldHandler}) {
  return (
    <div className='review-form'>
     <div className='form-control score-conteiner'>
      <label className='radio-conteiner'>
        <input
        type='radio'
        value='unsatisfied'
        name='review'
        required
        checked={data.review === "unsatisfied"}
        onChange={(e) => updateFieldHandler ("review", e.target.value)}  
        />
        <BsFillEmojiFrownFill />
        <span>Insatisfeito</span>
      </label>
      <label className='radio-conteiner'>
      <input
      type='radio'
      value='neutral'
      name='review'
      required
      checked={data.review === "neutral"}
      onChange={(e) => updateFieldHandler ("review", e.target.value)}
      />
      <BsFillEmojiNeutralFill />
      <span>Poderia ser melhor</span>
    </label>
    <label className='radio-conteiner'>
      <input
      type='radio'
      value='satisfied'
      name='review'
      required
      checked={data.review === "satisfied"}
      onChange={(e) => updateFieldHandler ("review", e.target.value)}

      />
      <BsFillEmojiSmileFill />
      <span>Satisfeito</span>
    </label>
    <label className='radio-conteiner'>
      <input
      type='radio'
      value='very_satisfied'
      name='review'
      required
      checked={data.review === "very_satisfied"}
      onChange={(e) => updateFieldHandler ("review", e.target.value)}

      />
      <BsFillEmojiHeartEyesFill />
      <span>Muito Satisfeito</span>
    </label>
     </div>
      <div className='form-control'>
     <label htmlFor='coment'>Cometário:</label>
     <textarea 
     name='comment'
     id='comment' 
     placeholder='Conte como foi a sua experiencia com o produto...' 
     required
     value={data.comment ||""}
     onChange={(e) => updateFieldHandler ("comment", e.target.value)}>
     </textarea>
     </div>
    </div>
  )
}

