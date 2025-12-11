import React, { useState, useEffect } from "react";
import {
  Search,
  Mail,
  Phone,
  User,
  Calendar,
  RefreshCw,
  Clock,
  Eye,
} from "lucide-react";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages from API
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/contact/all`,
        {
          withCredentials: true,
        }
      );
      // Your backend wraps data in response.data.data.messages
      const messagesArray = response.data?.data?.messages || [];

      setMessages(messagesArray);
    } catch (error) {
      console.error("Error fetching messages:", error);
      console.error("Error details:", error.response?.data);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    if (isToday) return `Today at ${timeStr}`;
    if (isYesterday) return `Yesterday at ${timeStr}`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const truncateMessage = (message, wordLimit = 20) => {
    const words = message.split(" ");
    if (words.length <= wordLimit) return message;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const filteredMessages = messages.filter((msg) => {
    return (
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.phone.includes(searchTerm) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-teal-50 scroll-smooth">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* Header */}
      <div className="bg-blue-400 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Mail className="w-8 h-8 animate-pulse" />
                Mitan Pharma Admin
              </h1>
              <p className="text-white mt-1">Customer Messages Dashboard</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchMessages}
                className="bg-red-500 px-5 py-2.5 rounded-full text-white font-semibold hover:bg-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <RefreshCw
                  className={`w-5 h-5 ${loading ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
              <div className="bg-lime-400 px-6 py-2.5 rounded-full shadow-lg">
                <p className="text-white font-semibold">
                  {messages.length} Messages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, phone, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}

        {/* Messages Grid */}
        {!loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMessages.map((msg, index) => (
              <div
                key={msg._id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-fade-in"
              >
                <div className="bg-linear-to-r from-blue-400 to-blue-500 p-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-white" />
                    <h3 className="font-bold text-white text-lg capitalize">
                      {msg.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-teal-500" />
                    <span className="text-sm font-medium">{msg.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">
                      {formatDate(msg.submittedAt)}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {truncateMessage(msg.message)}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedMessage(msg)}
                    className="w-full mt-4 bg-linear-to-r from-cyan-400 to-cyan-500 text-white py-2.5 rounded-lg font-semibold hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredMessages.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Mail className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No Messages Found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-linear-to-r from-blue-600 to-teal-600 p-6 sticky top-0">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Message Details
                </h2>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <User className="w-5 h-5" />
                    <span className="font-semibold">Name</span>
                  </div>
                  <p className="text-gray-800 font-medium capitalize">
                    {selectedMessage.name}
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-teal-600 mb-2">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <p className="text-gray-800 font-medium break-all">
                    {selectedMessage.email}
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <p className="text-gray-800 font-medium">
                    {selectedMessage.phone}
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-orange-600 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Submitted</span>
                  </div>
                  <p className="text-gray-800 font-medium text-sm">
                    {formatDate(selectedMessage.submittedAt)}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-gray-700 mb-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold text-lg">Full Message</span>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              <button
                onClick={() => setSelectedMessage(null)}
                className="w-full bg-linear-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
