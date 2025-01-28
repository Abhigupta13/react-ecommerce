// import { useState, useEffect } from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchProductByIdAsync,
//   selectProductById,
//   selectProductListStatus,
// } from '../../product/ProductSlice';
// import { useParams } from 'react-router-dom';
// import { addToCartAsync, selectItems } from '../../cart/cartSlice';
// import { useAlert } from 'react-alert';
// import { Grid } from 'react-loader-spinner';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function ProductDetail() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const items = useSelector(selectItems);
//   const product = useSelector(selectProductById);
//   const dispatch = useDispatch();
//   const params = useParams();
//   const alert = useAlert();
//   const status = useSelector(selectProductListStatus);

//   useEffect(() => {
//     dispatch(fetchProductByIdAsync(params.id));
//   }, [dispatch, params.id]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (product?.images?.length) {
//         setSelectedImage((prev) => (prev + 1) % product.images.length);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [product?.images]);

//   const handleCart = (e) => {
//     e.preventDefault();
  
//     const itemIndex = items.findIndex((item) => item.product.id === product.id);
  
//     if (itemIndex >= 0) {
//       // Item exists in cart, update quantity
//       const updatedItem = {
//         product: product.id,
//         quantity: items[itemIndex].quantity + quantity, // Update quantity
//       };
//       dispatch(addToCartAsync({ item: updatedItem, alert }));
//       alert.success('Cart updated successfully');
//     } else {
//       // Item does not exist in cart, add new item
//       const newItem = {
//         product: product.id,
//         quantity,
//       };
//       dispatch(addToCartAsync({ item: newItem, alert }));
//       alert.success('Item added to cart');
//     }
//   };
  

//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       {/* Loader */}
//       {status === 'loading' ? (
//         <div className="flex items-center justify-center h-screen">
//           <Grid
//             height="80"
//             width="80"
//             color="rgb(79, 70, 229)"
//             ariaLabel="grid-loading"
//             radius="12.5"
//             wrapperStyle={{}}
//             visible={true}
//           />
//         </div>
//       ) : (
//         product && (
//           <div className="flex-grow pt-6 pb-32">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               {/* Image Slider */}
//               <div className="relative">
//                 <img
//                   src={product.images[selectedImage]}
//                   alt={product.title}
//                   className="w-full h-96 object-cover rounded-lg shadow-md"
//                 />
//               </div>

//               {/* Product Details */}
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
//                 <p className="mt-4 text-base text-gray-700">{product.description}</p>

//                 {/* Price and Discount */}
//                 <div className="mt-4">
//                   <p className="text-xl line-through text-gray-500">${product.price}</p>
//                   <p className="text-2xl font-bold text-gray-900">${product.discountPrice}</p>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center mt-4">
//                   {[0, 1, 2, 3, 4].map((rating) => (
//                     <StarIcon
//                       key={rating}
//                       className={classNames(
//                         product.rating > rating ? 'text-yellow-500' : 'text-gray-300',
//                         'h-5 w-5'
//                       )}
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-gray-500">{product.rating} / 5</span>
//                 </div>

//                 {/* Categories */}
//                 {product.category && (
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-600">Category: {product.category}</p>
//                   </div>
//                 )}

//                 {/* Quantity Management */}
//                 <div className="mt-6 flex items-center space-x-4">
//                   <button
//                     onClick={decreaseQuantity}
//                     className="px-4 py-2 bg-gray-200 rounded-md"
//                   >
//                     -
//                   </button>
//                   <p>{quantity}</p>
//                   <button
//                     onClick={increaseQuantity}
//                     className="px-4 py-2 bg-gray-200 rounded-md"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={handleCart}
//                   className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }
