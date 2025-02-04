import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/Auth/authSlice";
import { resetOrder } from "../features/order/orderSlice";
import { selectProductById } from "../features/product/ProductSlice";

function OrderSuccessPage() {
  const params = useParams();
  const dispatch = useDispatch();

  // Mock product details (replace with API call or Redux selector if available)
  const product = useSelector((state) => selectProductById(state, params?.id));

  useEffect(() => {
    // Reset cart
    dispatch(resetCartAsync());
    // Reset current order
    dispatch(resetOrder());
  }, [dispatch]);

  return (
    <>
      {!params.id && <Navigate to="/" replace={true}></Navigate>}
      <main className="grid min-h-full place-items-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Success Message */}
          <p className="text-base font-semibold text-indigo-600">
            Order Successfully Placed
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thank You for Your Order!
          </h1>
          <h2 className="mt-2 text-lg text-gray-700">
            Your Order Number: <span className="font-medium">#{params?.id}</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            {`You can track your order in My Account > My Orders.`}
          </p>

          {/* Product Details */}
          {product && (
            <div className="mt-10 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-6">
                <img
                  src={product?.images?.[0] || "/placeholder-image.jpg"}
                  alt={product?.title || "Product Image"}
                  className="w-32 h-32 object-cover rounded-md border border-gray-200"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product?.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{product?.description}</p>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">Price: </span>
                      ${product?.discountPrice || product?.price}
                    </p>
                    <p className="text-gray-500 line-through">
                      {product?.discountPrice && `$${product?.price}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Go Back Button */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderSuccessPage;
