import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, deleteTask } from './services/api';
import { XCircle, X } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState('');

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setError('');
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      setError('Failed to load tasks. Please try again later.');
      console.error('Error fetching tasks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    try {
      setIsAdding(true);
      setError('');
      const response = await createTask(title);
      setTasks([response.data, ...tasks]);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to add task';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
      throw err;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600">
            Organize your tasks efficiently
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <div className="shrink-0">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
                <div className="ml-auto pl-3">
                  <button
                    onClick={() => setError('')}
                    className="inline-flex text-red-400 hover:text-red-500"
                  >
                    <span className="sr-only">Dismiss</span>
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Task Form */}
          <TaskForm onAddTask={handleAddTask} isLoading={isAdding} />

          {/* Task Count */}
          {!isLoading && (
            <div className="mb-4 text-sm text-gray-600">
              {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
            </div>
          )}

          {/* Task List */}
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            isLoading={isLoading}
          />
        </div>

        
      </div>
    </div>
  );
}

export default App;