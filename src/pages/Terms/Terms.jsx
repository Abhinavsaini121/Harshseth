// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Toast = ({ message, type, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className={`fixed top-4 right-4 ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded-md shadow-lg flex items-center`}>
//       <span>{message}</span>
//       <button onClick={onClose} className="ml-4 text-white font-bold">&times;</button>
//     </div>
//   );
// };

// const API_BASE_URL = 'https://server1.pearl-developer.com/harshet/public/api/admin';

// const Terms = () => {
//   const [state, setState] = useState({
//     termsList: [],
//     loading: false,
//     formData: { terms: '', conditions: '', id: null },
//     toasts: []
//   });

//   const { termsList, loading, formData, toasts } = state;

//   const setStateData = (newState) => setState(prev => ({ ...prev, ...newState }));

//   const addToast = (message, type = 'success') => {
//     const id = Date.now();
//     setStateData({ toasts: [...toasts, { id, message, type }] });
//   };

//   const removeToast = (id) => {
//     setStateData({ toasts: toasts.filter(toast => toast.id !== id) });
//   };

//   useEffect(() => { fetchTerms(); }, []);

//   const fetchTerms = async () => {
//     try {
//       setStateData({ loading: true });
//       const { data } = await axios.get(`${API_BASE_URL}/get-terms`);
//       if (data.success) setStateData({ termsList: data.data });
//     } catch (err) {
//       addToast(err.response?.data?.message || 'Failed to fetch terms', 'error');
//     } finally {
//       setStateData({ loading: false });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setStateData({ formData: { ...formData, [name]: value } });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setStateData({ loading: true });
      
//       if (formData.id) {
//         await axios.put(`${API_BASE_URL}/edit-terms/${formData.id}`, {
//           terms: formData.terms,
//           conditions: formData.conditions
//         });
//         addToast('Terms updated successfully!');
//       }
      
//       await fetchTerms();
//       setStateData({ formData: { terms: '', conditions: '', id: null } });
//     } catch (err) {
//       addToast(err.response?.data?.message || 'Operation failed', 'error');
//     } finally {
//       setStateData({ loading: false });
//     }
//   };

//   const handleEdit = (terms) => {
//     setStateData({ formData: { ...terms, id: terms.id } });
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete these terms?')) {
//       try {
//         setStateData({ loading: true });
//         await axios.delete(`${API_BASE_URL}/delete-terms/${id}`);
//         addToast('Terms deleted successfully!');
//         await fetchTerms();
//       } catch (err) {
//         addToast('Failed to delete terms', 'error');
//       } finally {
//         setStateData({ loading: false });
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="fixed top-4 right-4 z-50 space-y-2">
//         {toasts.map(toast => (
//           <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
//         ))}
//       </div>
      
//       <h1 className="text-2xl font-semibold mb-6">Terms & Conditions Management</h1>
      
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
//         <h2 className="text-xl font-semibold mb-4">
//           {formData.id ? 'Edit Terms' : 'Add New Terms'}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="terms">
//               Terms
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//               id="terms"
//               name="terms"
//               value={formData.terms}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conditions">
//               Conditions
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//               id="conditions"
//               name="conditions"
//               value={formData.conditions}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? 'Processing...' : (formData.id ? 'Update Terms' : 'Add Terms')}
//             </button>
//             {formData.id && (
//               <button
//                 type="button"
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setStateData({ formData: { terms: '', conditions: '', id: null } })}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
      
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//         <h2 className="text-xl font-semibold mb-4">Terms & Conditions List</h2>
//         {loading && !termsList.length ? (
//           <p>Loading terms...</p>
//         ) : !termsList.length ? (
//           <p>No terms found.</p>
//         ) : (
//           <div className="space-y-6">
//             {termsList.map(terms => (
//               <div key={terms.id} className="border-b border-gray-200 pb-4">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-semibold">Terms ID: {terms.id}</h3>
//                     <p className="text-sm text-gray-500">
//                       Created: {new Date(terms.created_at).toLocaleString()} | 
//                       Updated: {new Date(terms.updated_at).toLocaleString()}
//                     </p>
//                   </div>
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => handleEdit(terms)}
//                       className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(terms.id)}
//                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <h4 className="font-medium">Terms:</h4>
//                   <p className="whitespace-pre-line">{terms.terms}</p>
//                 </div>
//                 <div className="mt-2">
//                   <h4 className="font-medium">Conditions:</h4>
//                   <p className="whitespace-pre-line">{terms.conditions}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Terms;


import React from 'react'

const Terms = () => {
  return (
    <div>Terms</div>
  )
}

export default Terms