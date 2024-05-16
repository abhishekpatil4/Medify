// import { autocompleteClasses, requirePropFactory } from "@mui/material";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import Offer from "./Offer";
// import OfferImage1 from "../../assets/Healthcare Consultation-1.png"
// import OfferImage2 from "../../assets/Healthcare Consultation-2.png"
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const data = [
//     {
//         id: 1,
//         path: OfferImage1
//     },
//     {
//         id: 2,
//         path: OfferImage2
//     },
//     {
//         id: 3,
//         path: OfferImage1
//     },
//     {
//         id: 4,
//         path: OfferImage2
//     },
//     {
//         id: 5,
//         path: OfferImage1
//     },
//     {
//         id: 6,
//         path: OfferImage2
//     },
// ]

// const Offers = () => {
//     return <div style={{transform: 'translate(0, -10%)', padding: '10rem 5rem 5rem 5rem', backgroundColor: 'white'}}>
//             <Swiper
//                 modules={[Navigation, Pagination, Scrollbar]}
//                 // spaceBetween={10} 
//                 // navigation
//                 pagination
//                 slidesPerView={"auto"}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >

//                 {
//                     data && data.map((d) =>
//                         <SwiperSlide key={d.id} style={{ maxWidth: '399px' }}><Offer image={d.path}/></SwiperSlide>
//                     )
//                 }
//             </Swiper>
//         </div>
// }

// export default Offers;
