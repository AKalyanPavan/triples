"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { ShiningText } from "@/components/ui/shining-text"
import { Header } from "@/components/Header.js"
import BlogGrid from "./BlogGrid.js"
import Footer from "@/components/Footer.js"
import grid from "@/images/grid.png"
import technician from "@/images/technician.png"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { whyReadOurBlogs } from './Variables.js';

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-[50px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E6A424]"></div>
  </div>
);

// Loading overlay for pagination
const LoadingOverlay = () => (
  <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#E6A424]"></div>
  </div>
);

// Error Component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-[50px] text-center">
    <div className="text-red-500 mb-4">
      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
      <p className="text-gray-600 mb-4">{message}</p>
    </div>
    <button
      onClick={onRetry}
      className="bg-[#E6A424] text-white px-6 py-2 rounded-lg hover:bg-[#d4941f] transition-colors duration-200"
    >
      Try Again
    </button>
  </div>
);

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange, isLoading }) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-[50px] flex-wrap">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 ${
          currentPage === 1 || isLoading
            ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-[#E6A424] hover:text-white hover:border-[#E6A424]'
        }`}
      >
        {isLoading ? (
          <div className="animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"></div>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        )}
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <div key={index}>
          {page === '...' ? (
            <span className="flex items-center justify-center w-10 h-10 text-gray-500">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              disabled={isLoading}
              className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 font-medium ${
                currentPage === page
                  ? 'bg-[#E6A424] border-[#E6A424] text-white'
                  : isLoading
                  ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-[#E6A424] hover:text-white hover:border-[#E6A424]'
              }`}
            >
              {page}
            </button>
          )}
        </div>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200 ${
          currentPage === totalPages || isLoading
            ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-[#E6A424] hover:text-white hover:border-[#E6A424]'
        }`}
      >
        {isLoading ? (
          <div className="animate-spin w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full"></div>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </div>
  );
};

// Page Info Component
const PageInfo = ({ currentPage, totalPages, totalBlogs, startIndex, endIndex }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-[30px] text-sm text-gray-600">
      <div className="order-2 sm:order-1">
        Showing {startIndex + 1} to {Math.min(endIndex, totalBlogs)} of {totalBlogs} blogs
      </div>
      <div className="order-1 sm:order-2">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default function Blog() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API configuration
  const API_BASE_URL = 'https://seobot.centilio.com/blog';
  const ORG_ID = 441;
  const BLOGS_PER_PAGE = 6;
  
  // Calculate total pages based on API response
  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);
  
  // Calculate current page data
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;

  // API function to fetch blogs
  const fetchBlogs = async (page = 1, limit = BLOGS_PER_PAGE) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}?org_id=${ORG_ID}&limit=${limit}&cursor=${page}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.data);
        setTotalBlogs(data.total_records);
        return data;
      } else {
        throw new Error('API request was not successful');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError(error.message || 'Failed to fetch blogs');
      return null;
    } finally {
      setIsLoading(false);
      setInitialLoading(false);
    }
  };

  // useEffect to fetch initial blogs
  useEffect(() => {
    fetchBlogs(1);
  }, []);

  // Modified handlePageChange function
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    await fetchBlogs(page);
    
    // Scroll to top of blogs section
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  // Modified handleShowAllBlogs function
  const handleShowAllBlogs = async () => {
    setShowAllBlogs(true);
    setCurrentPage(1);
    await fetchBlogs(1); // Fetch first page of all blogs
  };

  // Retry function for error handling
  const handleRetry = () => {
    setError(null);
    fetchBlogs(currentPage);
  };

  return (
    <>
      <Header />
      <div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
        <ShiningText customStyle="sm:text-[48px] text-[36px] font-medium" textLeft={"Our "} textRight={"Blogs"} />
        <div className="font-[Exo] font-semibold text-[#24231D] uppercase tracking-[2.4px] my-[20px]">
          Solar Insights: Blogs & Success Stories
        </div>
        
        {/* Handle initial loading, error, and content states */}
        {initialLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={handleRetry} />
        ) : (
          <div className="relative">
            {isLoading && <LoadingOverlay />}
            <BlogGrid 
              blogs={blogs}
              showAllBlogs={showAllBlogs} 
              currentPage={currentPage}
              blogsPerPage={BLOGS_PER_PAGE}
              isLoading={isLoading}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </div>
        )}
        
        {/* Show pagination when all blogs are displayed and not in error state */}
        {showAllBlogs && !initialLoading && !error && (
          <>
            <PageInfo 
              currentPage={currentPage}
              totalPages={totalPages}
              totalBlogs={totalBlogs}
              startIndex={startIndex}
              endIndex={endIndex}
            />
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
          </>
        )}
        
        {/* Show the "Why Read Our Blogs" section only when not showing all blogs and not in error state */}
        {!showAllBlogs && !initialLoading && !error && (
          <div className="flex items-center justify-center gap-[50px] mt-[50px]">
            <div className="relative mt-[50px] w-max max-lg:hidden">
              <Image className="absolute z-[-1]" src={grid} alt="grid" />
              <div className="ml-[100px] bg-[#1E62AF] rounded-t-[100px] w-fit px-[50px]">
                <Image className="w-[250px]" src={technician} alt="technician" />
              </div>
            </div>
            {/* Why Read Our Blogs Section */}
            <div>
              <HeadingMultiColour customStyle="sm:text-[48px] text-[32px]" textLeft="Why Read " textRight="Our Blogs?" />
              <div className="flex flex-col gap-[30px] mt-[20px]">
                {whyReadOurBlogs.map((item, index) => (
                  <div className="flex items-center gap-[20px]" key={index}>
                    <Image src={item.imageUrl} alt={item.alt} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <div 
                className="bg-[#E6A424] w-fit flex items-center py-[10px] px-[30px] cursor-pointer sm:text-[18px] font-medium mt-[30px] rounded-l-full rounded-r-full hover:bg-[#d4941f] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed max-lg:mx-auto" 
                onClick={handleShowAllBlogs}
              >
                <span className="text-[#ffffff] ml-[10px] font-semibold">
                  <span className="">Read More Blogs</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}