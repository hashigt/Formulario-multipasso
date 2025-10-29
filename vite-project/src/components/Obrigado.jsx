import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import "./Obrigado.css"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutro: <BsFillEmojiNeutralFill />,
  satisfeito: <BsFillEmojiSmileFill />,
  muito_satisfeito: <BsFillEmojiHeartEyesFill />,
}; 

const Obrigado = ({data}) => {
  return (
    <div className="obrigado-container">
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito inpotante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
        <p>Para concluir a avaliação clique no botão de Enviar abaixo</p>
        <h3>Aqui está o resumo da sua avalição: </h3>
        <p className="review-data">
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Obrigado