
import CheckoutItem from "./CheckoutItem"
import './CheckoutItem.scss'

function CheckoutListItem(props){

  const checkoutListItem = props.ingredients.map((e,index) =>{
    return <CheckoutItem ingredient={e} key={index}/>
  })

  return(
    <div>
      <div className="intacart_logo">
      <img alt="instacart logo" src="https://mms.businesswire.com/media/20210331005579/en/868438/5/instacart-logo-wordmark-4000x1600-e4f3c6f.jpg"/>
      </div>
      <ul>
        {checkoutListItem}
      </ul>
      <div className="share_and_add_to_cart">
        <div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Share
          </button>
          <button type="button" class="btn btn-primary">
           Add to Cart
          </button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-s">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <span>
              <i class="fa-solid fa-copy"></i> Copy link
              </span>
              <span>
              <i class="fa-solid fa-message"></i> Send message to phone
              </span>
        
             </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CheckoutListItem