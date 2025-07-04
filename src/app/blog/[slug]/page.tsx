"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { IBlogPost } from '@/models/BlogPost'
import { MOCK_POSTS } from '../mockData'

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = params;
  const [post, setPost] = useState<IBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch data from the API
    // For now, we're using the mock data
    const foundPost = MOCK_POSTS.find(p => p.slug === slug);

    // Simulate network delay
    setTimeout(() => {
      setPost(foundPost || null);
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container">
          <div className="flex items-center justify-center min-h-[40vh]">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-700 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container">
          <div className="text-center py-24">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-400 mb-8">
              The blog post you are looking for could not be found.
            </p>
            <Button className="bg-coinband-green text-coinband-dark hover:bg-coinband-green/80" asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 z-0" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coinband-green/10 rounded-full blur-[100px] z-0" />

        {/* Back Button */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className="mb-6 hover:bg-coinband-green/10 hover:text-coinband-green"
              asChild
            >
              <Link href="/blog" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to all posts
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{format(new Date(post.publishedDate), 'MMM d, yyyy')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="text-coinband-green border-coinband-green hover:bg-coinband-green/10"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Featured Image */}
            {post.featuredImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 relative rounded-lg overflow-hidden h-[400px]"
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-invert max-w-none prose-lg"
            >
              {/* This would normally come from the post.content field and be processed by a markdown renderer */}
              <p className="text-lg mb-6">{post.description}</p>
              <p className="mb-6">
                This is a sample blog post content. In a real implementation, this content would be rendered from the post's
                content field, likely in Markdown format.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Sample Heading</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam,
                nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies aliquam.
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>First item in a list</li>
                <li>Second item in a list</li>
                <li>Third item in a list</li>
              </ul>
              <p className="mb-6">
                Nulla facilisi. Duis auctor, nisl eget ultricies aliquam, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
              </p>
            </motion.div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 mb-8"
              >
                <h3 className="text-lg font-medium mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-coinband-darkGray">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts - This would use real data in a production app */}
      <section className="py-16 bg-coinband-darkGray">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_POSTS
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block relative overflow-hidden rounded-xl h-48 mb-4">
                    <Image
                      src={relatedPost.featuredImage || 'https://ext.same-assets.com/2987606905/1286088542.avif'}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <Link href={`/blog/${relatedPost.slug}`} className="block mb-2">
                    <h3 className="font-bold text-lg group-hover:text-coinband-green transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{format(new Date(relatedPost.publishedDate), 'MMM d, yyyy')}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
