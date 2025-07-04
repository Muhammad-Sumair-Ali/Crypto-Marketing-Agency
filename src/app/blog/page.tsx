"use client"

import type React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BlogCard from '@/components/blog/BlogCard'
import type { IBlogPost } from '@/models/BlogPost'

// Mock data for now (will be replaced with real data from API)
const MOCK_POSTS: IBlogPost[] = [
  {
    title: 'Casino Marketing Strategies That Work: Ideas, Plans, Campaigns',
    slug: 'casino-marketing-strategies-that-work-ideas-plans-campaigns',
    description: 'Explore innovative online gaming marketing strategies to elevate your casino business. Discover tailored online casino marketing plans and ideas today!',
    content: 'Full content here...',
    author: {
      name: 'Artur Shustov',
      avatar: 'https://ext.same-assets.com/2851087811/188489082.avif',
      title: 'Founder & CEO'
    },
    publishedDate: new Date('2025-04-25'),
    readTime: 9,
    categories: ['Marketing', 'Market Research'],
    tags: ['casino', 'marketing', 'strategies'],
    featuredImage: 'https://cdn.prod.website-files.com/6512bed6467a26a956cfed9d/6807a47835fbb350b1b80fce_Other%20platforms.png',
    isPublished: true,
    createdAt: new Date('2025-04-25'),
    updatedAt: new Date('2025-04-25')
  },
  {
    title: 'Top 11 Crypto Presales (ICO) in 2025',
    slug: 'top-11-crypto-presales-ico-in-2025',
    description: 'Discover the most promising crypto presales of 2025. Our guide explores the top ICO opportunities for investors looking to get in early.',
    content: 'Full content here...',
    author: {
      name: 'Artur Shustov',
      avatar: 'https://ext.same-assets.com/2851087811/188489082.avif',
      title: 'Founder & CEO'
    },
    publishedDate: new Date('2025-04-23'),
    readTime: 16,
    categories: ['Guides'],
    tags: ['ICO', 'presales', 'crypto'],
    featuredImage: 'https://cdn.prod.website-files.com/6512bed6467a26a956cfed9d/6807ad2b047bbe4d0b5b52f9_Main%20banner.png',
    isPublished: true,
    createdAt: new Date('2025-04-23'),
    updatedAt: new Date('2025-04-23')
  },
  {
    title: 'Top 10 NFT Digital Marketing Agencies & Companies for 2025',
    slug: 'nft-marketing-agencies',
    description: 'Find the best NFT marketing agencies for your project in 2025. Our comprehensive guide helps you choose the right partner for your NFT marketing needs.',
    content: 'Full content here...',
    author: {
      name: 'Artur Shustov',
      avatar: 'https://ext.same-assets.com/2851087811/188489082.avif',
      title: 'Founder & CEO'
    },
    publishedDate: new Date('2025-03-03'),
    readTime: 9,
    categories: ['Marketing', 'NFT'],
    tags: ['NFT', 'marketing', 'agencies'],
    featuredImage: 'https://ext.same-assets.com/2338849469/1604099616.avif',
    isPublished: true,
    createdAt: new Date('2025-03-03'),
    updatedAt: new Date('2025-03-03')
  }
];

const categories = [
  'All',
  'DeFi',
  'GameFi',
  'NFT',
  'Marketing',
  'SEO',
  'Paid Ads',
  'PR & Media',
  'Influencer Marketing',
  'Community Management',
  'SMM',
  'Market Research',
  'Guides',
  'Token sale',
  'Listicles'
];

export default function BlogPage() {
  const [posts, setPosts] = useState<IBlogPost[]>(MOCK_POSTS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // In a real implementation, this would fetch from the API based on category and search
  useEffect(() => {
    // Filter posts based on category and search query
    let filteredPosts = MOCK_POSTS;

    if (activeCategory !== 'All') {
      filteredPosts = filteredPosts.filter(post =>
        post.categories.includes(activeCategory)
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }

    setPosts(filteredPosts);
  }, [activeCategory, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 z-0" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coinband-green/10 rounded-full blur-[100px] z-0" />

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Crypto & Web 3.0 Marketing Blog
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-coinband-darkGray border-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-coinband-green text-coinband-dark hover:bg-coinband-green/80">
                Search
              </Button>
            </form>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="w-full flex overflow-x-auto pb-2 justify-start space-x-2 bg-transparent">
              {categories.map(category => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className={`data-[state=active]:bg-coinband-green data-[state=active]:text-coinband-dark`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No posts found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}

          {/* Pagination - to be implemented with real data */}
          {posts.length > 0 && (
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mr-2">
                Previous
              </Button>
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1 bg-coinband-green text-coinband-dark">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="ml-2">
                Next
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
