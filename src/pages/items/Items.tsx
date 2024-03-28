import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./items.scss"

const Items = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Items;