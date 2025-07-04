import { Suspense } from 'react';
import BlogDetailContent from '@/components/blog-detail/blog-detail.js';

export default function BlogDetailPage() {
    return (
        <Suspense fallback={
            <div className="relative container mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </div>
        }>
            <BlogDetailContent />
        </Suspense>
    );
}