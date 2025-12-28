import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  ArrowLeft,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import axios from "axios";

function Products() {
  // State management
  const [displayProducts, setDisplayProducts] = useState([]);
  const [productCounts, setProductCounts] = useState({
    all: 0,
    tablet: 0,
    capsule: 0,
    syrup: 0,
    injection: 0,
    infusion: 0,
  });
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 50;

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); // Reset to page 1 on new search
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch product counts
  const fetchCounts = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (debouncedSearch) params.append("search", debouncedSearch);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/medicines/counts?${params}`,
        { withCredentials: true }
      );

      setProductCounts(
        response.data?.counts || {
          all: 0,
          tablet: 0,
          capsule: 0,
          syrup: 0,
          injection: 0,
          infusion: 0,
        }
      );
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  }, [debouncedSearch]);

  // Fetch products with pagination
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });

      if (debouncedSearch) params.append("search", debouncedSearch);
      if (selectedType !== "all") params.append("type", selectedType);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/medicines?${params}`,
        { withCredentials: true }
      );

      setDisplayProducts(response.data?.data || []);
      setTotalPages(response.data?.pagination?.totalPages || 1);
      setTotalItems(response.data?.pagination?.totalItems || 0);
    } catch (error) {
      console.error("Error fetching medicines:", error);
      setError("Failed to load medicines. Please try again later.");
      setDisplayProducts([]);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }, [currentPage, debouncedSearch, selectedType]);

  // Fetch products when dependencies change
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Fetch counts when search changes
  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  // Backend handles pagination, so we just use displayProducts directly
  const paginatedProducts = displayProducts;

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Clear search and filters
  const clearSearch = () => {
    setSearchTerm("");
    setSelectedType("all");
    setCurrentPage(1);
  };

  // Render pagination numbers
  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];

    // Always show first page
    if (currentPage > 2) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="w-10 h-10 rounded-lg font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
        >
          1
        </button>
      );
      if (currentPage > 3) {
        pageNumbers.push(
          <span key="ellipsis-start" className="text-gray-400 px-2">
            ...
          </span>
        );
      }
    }

    // Show current page and neighbors
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
            i === currentPage
              ? "bg-blue-600 text-white shadow-lg scale-110"
              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`}
        >
          {i}
        </button>
      );
    }

    // Always show last page
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        pageNumbers.push(
          <span key="ellipsis-end" className="text-gray-400 px-2">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="w-10 h-10 rounded-lg font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
              Our Products
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pharmaceutical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Explore our comprehensive range of pharmaceutical products
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-sm"
              />

              {/* Clear button */}
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-all duration-300"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Loading indicator */}
              {loading && (
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>

            {/* Search Info */}
            {searchTerm && !initialLoading && (
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Found{" "}
                  <span className="font-semibold text-blue-600">
                    {totalItems}
                  </span>{" "}
                  result{totalItems !== 1 ? "s" : ""} for "
                  <span className="font-semibold">{searchTerm}</span>"
                </p>
              </div>
            )}

            {/* Type Filter Buttons */}
            <div className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Select Type:
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { key: "all", label: "All" },
                  { key: "tablet", label: "Tablets" },
                  { key: "capsule", label: "Capsules" },
                  { key: "injection", label: "Injections" },
                  { key: "infusion", label: "Infusions" },
                  { key: "syrup", label: "Syrups" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedType(key)}
                    className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 border-2 ${
                      selectedType === key
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {label} ({productCounts[key]})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900">Error</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
              <button
                onClick={fetchProducts}
                className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Retry
              </button>
            </div>
          )}

          {/* Initial Loading State */}
          {initialLoading ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
              </div>
              <p className="text-xl text-gray-600">Loading products...</p>
            </div>
          ) : paginatedProducts.length > 0 ? (
            <>
              {/* Products Table */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-linear-to-r from-blue-700 to-indigo-700 text-white">
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          S.No
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          Product Name
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          Strength
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {paginatedProducts.map((product, index) => (
                        <tr
                          key={product._id || `product-${index}`}
                          className="hover:bg-blue-50 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 text-gray-900 font-medium">
                            {product.S_NO || index + 1}
                          </td>
                          <td className="px-6 py-4 text-gray-900 font-medium">
                            {product.PRODUCT || "N/A"}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {product.MG_VALUE || "N/A"}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                              {product.MEDICINE_TYPE || "N/A"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                              View Product
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden divide-y divide-gray-100">
                  {paginatedProducts.map((product, index) => (
                    <div
                      key={product._id || `product-mobile-${index}`}
                      className="p-6 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-bold text-blue-700 bg-blue-100 rounded-full mb-2">
                            #{product.S_NO || index + 1}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900">
                            {product.PRODUCT || "N/A"}
                          </h3>
                        </div>
                        <span className="inline-flex px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                          {product.MEDICINE_TYPE || "N/A"}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        <span className="font-semibold">Strength:</span>{" "}
                        {product.MG_VALUE || "N/A"}
                      </p>
                      <button className="w-full px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md">
                        View Product
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100 p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-md"
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                      {renderPageNumbers()}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === totalPages
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-md"
                      }`}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Page Info */}
                  <div className="mt-4 text-center text-sm text-gray-600">
                    {searchTerm || selectedType !== "all" ? (
                      <>
                        Showing page{" "}
                        <span className="font-semibold text-blue-600">
                          {currentPage}
                        </span>{" "}
                        of <span className="font-semibold">{totalPages}</span> •{" "}
                        <span className="font-semibold">
                          {paginatedProducts.length}
                        </span>{" "}
                        of <span className="font-semibold">{totalItems}</span>{" "}
                        filtered results
                      </>
                    ) : (
                      <>
                        Page{" "}
                        <span className="font-semibold text-blue-600">
                          {currentPage}
                        </span>{" "}
                        of <span className="font-semibold">{totalPages}</span> •
                        Showing{" "}
                        <span className="font-semibold">
                          {paginatedProducts.length}
                        </span>{" "}
                        of <span className="font-semibold">{totalItems}</span>{" "}
                        total products
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            // No Products Message
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {searchTerm ? (
                  <>
                    No products match "
                    <span className="font-semibold">{searchTerm}</span>".
                    <br />
                    We searched across all {totalItems} products.
                  </>
                ) : selectedType !== "all" ? (
                  "No products match your selected type."
                ) : (
                  "No products available at the moment."
                )}
              </p>
              {(searchTerm || selectedType !== "all") && (
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage:
                    "radial-linear(circle, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need More Information?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our team for detailed product information and inquiries
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
