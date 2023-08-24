import React from 'react';
import "./Thenks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

export default function thenks({data}) {
  return (
    <div className='thenks-conteiner'>
    <h2>Falta pouco...</h2>
    <span>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para sua proxima compra.</span>
    <span>Para concluir sua avaliação clique no botão de Enviar abaixo.</span>
    <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
    <h4 className='review-data'>
      <span>Satisfação com o produto:</span>
      {emojiData[data.review]}
    </h4>
    <h4 className='review-data'>
      <span>Comentário:</span>
      {data.comment}
    </h4>
    </div>
    
  )
}