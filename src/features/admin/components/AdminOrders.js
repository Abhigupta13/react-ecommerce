import { useEffect, useState } from 'react';
import { ITEMS_PER_PAGE } from '../../../app/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from '../../order/orderSlice';
import {
  PencilIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';
import Pagination from '../../common/Pagination';

function AdminOrders() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };

  const handleShow = () => {
    console.log('handleShow');
  };

  const handleOrderStatus = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handleOrderPaymentStatus = (e, order) => {
    const updatedOrder = { ...order, paymentStatus: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const handleSort = (sortOption) => {
    const newSort = { _sort: sortOption.sort, _order: sortOption.order };
    setSort(newSort);
  };

  const chooseColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-purple-100 text-purple-800';
      case 'dispatched':
        return 'bg-amber-100 text-amber-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'received':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ sort, pagination }));
  }, [dispatch, page, sort]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {/* <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        handleSort({
                          sort: 'id',
                          order: sort?._order === 'asc' ? 'desc' : 'asc',
                        })
                      }
                    >
                      <div className="flex items-center">
                        Order #
                        {sort._sort === 'id' && (
                          <span className="ml-2">
                            {sort._order === 'asc' ? (
                              <ArrowUpIcon className="h-4 w-4" />
                            ) : (
                              <ArrowDownIcon className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </th> */}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Items & Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        handleSort({
                          sort: 'totalAmount',
                          order: sort?._order === 'asc' ? 'desc' : 'asc',
                        })
                      }
                    >
                      <div className="flex items-center">
                        Total Amount
                        {sort._sort === 'totalAmount' && (
                          <span className="ml-2">
                            {sort._order === 'asc' ? (
                              <ArrowUpIcon className="h-4 w-4" />
                            ) : (
                              <ArrowDownIcon className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Shipping Address
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Order Status
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Payment Method
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Payment Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        handleSort({
                          sort: 'createdAt',
                          order: sort?._order === 'asc' ? 'desc' : 'asc',
                        })
                      }
                    >
                      <div className="flex items-center">
                        Order Time
                        {sort._sort === 'createdAt' && (
                          <span className="ml-2">
                            {sort._order === 'asc' ? (
                              <ArrowUpIcon className="h-4 w-4" />
                            ) : (
                              <ArrowDownIcon className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        handleSort({
                          sort: 'updatedAt',
                          order: sort?._order === 'asc' ? 'desc' : 'asc',
                        })
                      }
                    >
                      <div className="flex items-center">
                        Last Updated
                        {sort._sort === 'updatedAt' && (
                          <span className="ml-2">
                            {sort._order === 'asc' ? (
                              <ArrowUpIcon className="h-4 w-4" />
                            ) : (
                              <ArrowDownIcon className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {order.id}
                      </td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <img
                                className="h-10 w-10 flex-none rounded-lg border border-gray-200 object-cover"
                                src={item.product.thumbnail}
                                alt={item.product.title}
                              />
                              <div>
                                <div className="font-medium text-gray-700">
                                  {item.product.title}
                                </div>
                                <div className="text-gray-500">
                                  Qty: {item.quantity} · $
                                  {item.product.discountPrice}
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="text-xs text-gray-400">
                            Order ID: {order.id}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-medium">
                        ${order.totalAmount}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">
                            {order.selectedAddress.name}
                          </div>
                          <div>{order.selectedAddress.street}</div>
                          <div>
                            {order.selectedAddress.city}, {order.selectedAddress.state}
                          </div>
                          <div>{order.selectedAddress.pinCode}</div>
                          <div className="text-indigo-600">
                            {order.selectedAddress.phone}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {order.id === editableOrderId ? (
                          <select
                            onChange={(e) => handleOrderStatus(e, order)}
                            className="block w-full rounded-md border-gray-300 py-1 pl-3 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="pending">Pending</option>
                            <option value="dispatched">Dispatched</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        ) : (
                          <span
                            className={`${chooseColor(
                              order.status
                            )} inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide`}
                          >
                            {order.status}
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.paymentMethod}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {order.id === editableOrderId ? (
                          <select
                            onChange={(e) => handleOrderPaymentStatus(e, order)}
                            className="block w-full rounded-md border-gray-300 py-1 pl-3 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="pending">Pending</option>
                            <option value="received">Received</option>
                          </select>
                        ) : (
                          <span
                            className={`${chooseColor(
                              order.paymentStatus
                            )} inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide`}
                          >
                            {order.paymentStatus}
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.createdAt && (
                          <div>
                            <div>
                              {new Date(order.createdAt).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-400">
                              {new Date(order.createdAt).toLocaleTimeString()}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.updatedAt && (
                          <div>
                            <div>
                              {new Date(order.updatedAt).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-400">
                              {new Date(order.updatedAt).toLocaleTimeString()}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleShow(order)}
                            className="text-gray-400 hover:text-indigo-600 transition-colors"
                          >
                            <EyeIcon className="h-6 w-6" />
                          </button>
                          <button
                            onClick={() => handleEdit(order)}
                            className="text-gray-400 hover:text-indigo-600 transition-colors"
                          >
                            <PencilIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                page={page}
                setPage={setPage}
                handlePage={handlePage}
                totalItems={totalOrders}
                className="border-t border-gray-200 px-4 py-3 sm:px-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;