import CardUnit from "./Card"
import fullData from "../data/dataCards"


const CardGroup = () => {
  return (
    <div className="container card-group">
      {fullData.map((item) => {
        return (
          <CardUnit
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
            width={280}
            height={180}
          />
        )
      })}
    </div>
  )
}

export default CardGroup