import React from 'react'
import Heading from '../../Component/Heading'
import axios from 'axios';
import { BASE_URL, IMAGE_URL } from '../../Apis';
import { Link } from 'react-router-dom';
// import remedies1 from '../../assets/Image/remedies1.png'
// import remedies2 from '../../assets/Image/remedies2.png'
// import remedies3 from '../../assets/Image/remedies3.png'

const Remedies = () => {
   const [items, setItems] = React.useState([]);
   const getitems = async () => {
      const resp = await axios.get(BASE_URL + "advertise");
      setItems(resp.data.data);
   }
   React.useEffect(() => {
      getitems();
   }, []);
   return (
      <section className='py-5'>
         <div className="container">
            <div className="grid grid-cols-1 ">
               <div className="col-span-1">
                  <Heading title="Remedies Solutions" />
               </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
               {
                  items.map(itm => (
                     <>
                        <div className="col-span-1 ">
                           <Link to={itm.return_url} target='_blank' className="w-full border h-full border-blue-100 rounded-xl overflow-hidden block">
                              <img src={IMAGE_URL + itm.image} className='w-full h-full object-cover' />
                           </Link>

                        </div>
                     </>
                  ))
               }


            </div>
         </div>
      </section>
   )
}

export default Remedies
