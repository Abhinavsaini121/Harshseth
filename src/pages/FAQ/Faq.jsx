import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://your-domain.com"; // 🔁 Replace with your actual API base URL

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({ id: "", question: "", answer: "" });

  // Load FAQs
  const fetchFaqs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/get-faqs`);
      setFaqs(res.data);
    } catch (err) {
      console.error("Failed to fetch FAQs:", err);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  // Add FAQ
  const handleAddFaq = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/add-faqs`, newFaq);
      setFaqs([...faqs, res.data]);
      setNewFaq({ question: "", answer: "" });
    } catch (err) {
      console.error("Error adding FAQ:", err);
    }
  };

  // Delete FAQ
  const handleDeleteFaq = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-faqs`, { data: { id } });
      setFaqs(faqs.filter((faq) => faq.id !== id));
    } catch (err) {
      console.error("Error deleting FAQ:", err);
    }
  };

  // Open Edit Modal
  const openEditModal = (faq) => {
    setCurrentEdit(faq);
    setEditModalOpen(true);
  };

  // Update FAQ
  const handleUpdateFaq = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/edit-faqs`, currentEdit);
      setFaqs(faqs.map((faq) => (faq.id === currentEdit.id ? res.data : faq)));
      setEditModalOpen(false);
    } catch (err) {
      console.error("Error updating FAQ:", err);
    }
  };

  return (
    <div className="p-6 space-y-8 bg-[#f9fafb] min-h-screen text-gray-800">
      <h1 className="text-2xl font-semibold mb-6">Manage FAQs</h1>

      {/* Add FAQ */}
      <div className="bg-white border p-4 rounded-lg shadow-sm space-y-2">
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        <button
          onClick={handleAddFaq}
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200"
        >
          Add FAQ
        </button>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.length === 0 ? (
          <p>No FAQs available.</p>
        ) : (
          faqs.map((faq) => (
            <div key={faq.id} className="bg-white border p-4 rounded-lg shadow-sm">
              <div className="font-semibold">Q: {faq.question}</div>
              <div className="text-gray-700">A: {faq.answer}</div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => openEditModal(faq)}
                  className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteFaq(faq.id)}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md border shadow space-y-4">
            <h2 className="text-xl font-semibold">Edit FAQ</h2>
            <input
              type="text"
              value={currentEdit.question}
              onChange={(e) => setCurrentEdit({ ...currentEdit, question: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              value={currentEdit.answer}
              onChange={(e) => setCurrentEdit({ ...currentEdit, answer: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditModalOpen(false)} className="px-4 py-2 bg-gray-100 rounded">
                Cancel
              </button>
              <button
                onClick={handleUpdateFaq}
                className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
