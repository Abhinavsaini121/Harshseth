import React, { useState } from 'react';

const Feedback = () => {
  const [clientFeedback, setClientFeedback] = useState({
    satisfaction: '',
    safe: '',
    helpfulness: '',
    suggestions: '',
  });

  const [therapistFeedback, setTherapistFeedback] = useState({
    reflection: '',
    concerns: false,
    concernText: '',
    outcome: '',
  });

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen text-[#333]">
      <h2 className="text-2xl font-semibold mb-6">Feedback Collection</h2>

      {/* Client Post-Session Feedback */}
      <div className="bg-white border border-gray-200 rounded p-5 mb-8 shadow-sm">
        <h3 className="text-xl font-medium mb-4">Client Post-Session Feedback (Anonymous)</h3>

        {/* Satisfaction Rating */}
        <label className="block mb-2 text-sm font-medium">Satisfaction Rating (1–5)</label>
        <select
          value={clientFeedback.satisfaction}
          onChange={(e) =>
            setClientFeedback({ ...clientFeedback, satisfaction: e.target.value })
          }
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        {/* Safe and Heard */}
        <label className="block mb-2 text-sm font-medium">Felt Safe and Heard?</label>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="safe"
              value="Yes"
              checked={clientFeedback.safe === 'Yes'}
              onChange={(e) =>
                setClientFeedback({ ...clientFeedback, safe: e.target.value })
              }
              className="mr-1"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="safe"
              value="No"
              checked={clientFeedback.safe === 'No'}
              onChange={(e) =>
                setClientFeedback({ ...clientFeedback, safe: e.target.value })
              }
              className="mr-1"
            />
            No
          </label>
        </div>

        {/* Helpfulness Score */}
        <label className="block mb-2 text-sm font-medium">Helpfulness Score (1–5)</label>
        <select
          value={clientFeedback.helpfulness}
          onChange={(e) =>
            setClientFeedback({ ...clientFeedback, helpfulness: e.target.value })
          }
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Select score</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        {/* Suggestions */}
        <label className="block mb-2 text-sm font-medium">Suggestions / Comments</label>
        <textarea
          rows={3}
          value={clientFeedback.suggestions}
          onChange={(e) =>
            setClientFeedback({ ...clientFeedback, suggestions: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Write anonymously..."
        />
      </div>

      {/* Therapist & Listener Feedback */}
      <div className="bg-white border border-gray-200 rounded p-5 shadow-sm">
        <h3 className="text-xl font-medium mb-4">Therapist / Listener Internal Feedback</h3>

        {/* Reflection */}
        <label className="block mb-2 text-sm font-medium">Self Reflection / Notes</label>
        <textarea
          rows={3}
          value={therapistFeedback.reflection}
          onChange={(e) =>
            setTherapistFeedback({ ...therapistFeedback, reflection: e.target.value })
          }
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          placeholder="Reflect on session..."
        />

        {/* Concerns */}
        <label className="block mb-2 text-sm font-medium">Flag Any Concerns</label>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={therapistFeedback.concerns}
              onChange={(e) =>
                setTherapistFeedback({ ...therapistFeedback, concerns: e.target.checked })
              }
              className="mr-2"
            />
            Yes, there were concerns
          </label>
          {therapistFeedback.concerns && (
            <textarea
              rows={2}
              value={therapistFeedback.concernText}
              onChange={(e) =>
                setTherapistFeedback({ ...therapistFeedback, concernText: e.target.value })
              }
              className="mt-2 w-full p-2 border border-gray-300 rounded"
              placeholder="Describe concern..."
            />
          )}
        </div>

        {/* Outcome Tag */}
        <label className="block mb-2 text-sm font-medium">Session Outcome Tag</label>
        <select
          value={therapistFeedback.outcome}
          onChange={(e) =>
            setTherapistFeedback({ ...therapistFeedback, outcome: e.target.value })
          }
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Select tag</option>
          <option value="neutral">Neutral</option>
          <option value="progress">Progress</option>
          <option value="concern">Concern</option>
        </select>
      </div>
    </div>
  );
};

export default Feedback;
