// ==================== FILE: AdminDashboard.jsx ====================
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  CheckCircle,
  Clock,
  AlertCircle,
  Activity,
  Calendar,
  Download,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  FileCheck,
  Send,
  Star,
  BarChart3,
  PieChart,
  LogOut,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const Navigate = useNavigate();

  const adminLogout = async () => {
    try {
      const Response = await axios.post(
        `${import.meta.env.VITE_API_URL}/User/logout`,
        {}, 
        {
          withCredentials: true, 
        }
      );
      Navigate("/");
      toast.success("Admin Logout Succesfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Can't Logout Right Now!");
    }
  };

  const usermessages = () => {
    Navigate("/messageDetails");
  };

  // Dashboard Stats
  const stats = [
    {
      title: "Total Projects",
      value: "248",
      change: "+12.5%",
      trend: "up",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Clients",
      value: "89",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Revenue",
      value: "$145K",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Pending Tasks",
      value: "23",
      change: "-5.4%",
      trend: "down",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  // Recent Projects
  const recentProjects = [
    {
      id: "PRJ-001",
      name: "CTD Dossier - ABC Pharma",
      client: "ABC Pharmaceuticals",
      status: "In Progress",
      progress: 75,
      deadline: "2024-02-15",
      priority: "High",
    },
    {
      id: "PRJ-002",
      name: "BA/BE Study - XYZ Labs",
      client: "XYZ Laboratories",
      status: "Review",
      progress: 90,
      deadline: "2024-01-28",
      priority: "Medium",
    },
    {
      id: "PRJ-003",
      name: "Plant Setup - DEF Corp",
      client: "DEF Corporation",
      status: "Planning",
      progress: 30,
      deadline: "2024-03-10",
      priority: "Low",
    },
    {
      id: "PRJ-004",
      name: "CGMP Audit - GHI Industries",
      client: "GHI Industries",
      status: "Completed",
      progress: 100,
      deadline: "2024-01-20",
      priority: "High",
    },
  ];

  // Recent Activities
  const recentActivities = [
    {
      user: "Dr. Rajesh Kumar",
      action: "Submitted CTD Module 3 for review",
      time: "2 hours ago",
      icon: FileCheck,
      color: "text-blue-600",
    },
    {
      user: "Ms. Sneha Patel",
      action: "Completed CGMP training session",
      time: "4 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      user: "Mr. Anil Verma",
      action: "Updated plant design documentation",
      time: "5 hours ago",
      icon: Edit,
      color: "text-indigo-600",
    },
    {
      user: "Dr. Priya Sharma",
      action: "Approved quality audit report",
      time: "1 day ago",
      icon: Star,
      color: "text-yellow-600",
    },
  ];

  // Sidebar Menu Items
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "projects", name: "Projects", icon: FileText },
    { id: "clients", name: "Clients", icon: Users },
    { id: "team", name: "Team Members", icon: UserPlus },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "reports", name: "Reports", icon: PieChart },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Review":
        return "bg-yellow-100 text-yellow-700";
      case "Planning":
        return "bg-purple-100 text-purple-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-indigo-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-xl transition-all duration-500 ease-in-out fixed h-full z-40 border-r border-gray-200`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shrink-0">
              <svg viewBox="0 0 200 200" className="w-6 h-6">
                <ellipse
                  cx="60"
                  cy="100"
                  rx="15"
                  ry="25"
                  fill="white"
                  opacity="0.9"
                />
                <ellipse
                  cx="140"
                  cy="100"
                  rx="15"
                  ry="25"
                  fill="white"
                  opacity="0.9"
                />
                <rect x="90" y="90" width="20" height="20" fill="white" />
                <line
                  x1="90"
                  y1="100"
                  x2="75"
                  y2="100"
                  stroke="white"
                  strokeWidth="4"
                />
                <line
                  x1="110"
                  y1="100"
                  x2="125"
                  y2="100"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            </div>
            {sidebarOpen && (
              <div className="animate-fade-in">
                <h2 className="text-lg font-bold text-gray-900">
                  Mitan Pharma
                </h2>
                <p className="text-xs text-gray-500">Admin Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                activeTab === item.id
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  activeTab === item.id
                    ? "text-white"
                    : "text-gray-500 group-hover:text-blue-600"
                } transition-colors duration-300`}
              />
              {sidebarOpen && (
                <span className="font-medium animate-fade-in">{item.name}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && (
              <span onClick={adminLogout} className="font-medium">
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 ${
          sidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-500`}
      >
        {/* Top Bar */}
        <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, clients..."
                  className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 group">
                <Bell className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-xl transition-all duration-300 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
                  alt="Admin"
                  className="w-10 h-10 rounded-full border-2 border-blue-600 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">
                    Admin - Naveen Badgujar
                  </p>
                  <p className="text-xs text-gray-500">admin@mitanpharma.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Naveen ! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your projects today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-sm font-semibold ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Projects */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    Recent Projects
                  </h2>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300">
                      <Filter className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300">
                      <Download className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Project
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Progress
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentProjects.map((project, index) => (
                        <tr
                          key={index}
                          className="hover:bg-blue-50 transition-colors duration-300 group"
                        >
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {project.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {project.id}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {project.client}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                project.status
                              )}`}
                            >
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full bg-linear-to-r ${
                                    project.progress === 100
                                      ? "from-green-500 to-green-600"
                                      : "from-blue-500 to-indigo-600"
                                  } transition-all duration-500`}
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-semibold text-gray-600">
                                {project.progress}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button className="p-2 hover:bg-blue-100 rounded-lg transition-all duration-300 group">
                                <Eye className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                              </button>
                              <button className="p-2 hover:bg-indigo-100 rounded-lg transition-all duration-300 group">
                                <Edit className="w-4 h-4 text-gray-600 group-hover:text-indigo-600" />
                              </button>
                              <button className="p-2 hover:bg-red-100 rounded-lg transition-all duration-300 group">
                                <Trash2 className="w-4 h-4 text-gray-600 group-hover:text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex space-x-4 p-4 hover:bg-blue-50 rounded-xl transition-all duration-300 group cursor-pointer"
                    >
                      <div
                        className={`p-2 bg-gray-100 rounded-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        <activity.icon
                          className={`w-5 h-5 ${activity.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          {activity.user}
                        </p>
                        <p className="text-xs text-gray-600 mb-1">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={usermessages}
                  className="w-full mt-6 py-3 bg-green-500 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View User Messages
                </button>

                <button className="w-full mt-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  View Doctors Activity
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Admin;
