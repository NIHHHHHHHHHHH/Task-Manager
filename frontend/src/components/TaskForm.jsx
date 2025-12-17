import { useState } from 'react';

const TaskForm = ({ onAddTask, isLoading }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!title.trim()) {
      setError('Task title cannot be empty');
      return;
    }

    if (title.length > 200) {
      setError('Task title cannot exceed 200 characters');
      return;
    }

    try {
      await onAddTask(title.trim());
      setTitle('');
    } catch (err) {
      setError(err.message || 'Failed to add task');
    }
  };

  return (
      <form onSubmit={handleSubmit} className="mb-8">
  <div className="flex flex-col gap-3">
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        disabled={isLoading}
        maxLength={200}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium whitespace-nowrap"
      >
        {isLoading ? 'Adding...' : 'Add Task'}
      </button>
    </div>
    {error && (
      <p className="text-red-500 text-sm">{error}</p>
    )}
    <p className="text-gray-500 text-xs">
      {title.length}/200 characters
    </p>
  </div>
</form>
  );
};

export default TaskForm;