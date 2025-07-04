'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogContent = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://seobot.centilio.com/blog?org_id=441&slug=${slug}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Get the blog-parent div and append the content
                const blogParent = document.getElementById('blog-parent');
                if (blogParent) {
                    // If the API returns HTML content directly
                    if (typeof data === 'string' || data.content) {
                        blogParent.innerHTML = data.content || data;
                    } else {
                        // If the API returns JSON, you might need to format it
                        blogParent.innerHTML = `${data.data[0].Content}`;
                    }
                }
                
                setError(null);
            } catch (err) {
                console.error('Error fetching blog content:', err);
                setError(err.message);
                
                // Display error in the blog-parent div
                const blogParent = document.getElementById('blog-parent');
                if (blogParent) {
                    blogParent.innerHTML = `
                        <div class="error-message p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                            <h2>Error Loading Content</h2>
                            <p>${err.message}</p>
                        </div>
                    `;
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBlogContent();
    }, [slug]);

    return (
        <div className="relative container mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
            {loading && (
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            )}
            <div id="blog-parent">
                {/* Content will be dynamically inserted here */}
            </div>
        </div>
    );
}