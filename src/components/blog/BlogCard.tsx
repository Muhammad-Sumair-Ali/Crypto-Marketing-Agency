"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Clock, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { IBlogPost } from '@/models/BlogPost'

interface BlogCardProps {
  post: IBlogPost
  index?: number
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl bg-coinband-darkGray h-full flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden h-48">
        <Image
          src={post.featuredImage || 'https://ext.same-assets.com/2987606905/1286088542.avif'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{format(new Date(post.publishedDate), 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="block mb-2">
          <h3 className="font-bold text-xl transition-colors group-hover:text-coinband-green">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
          {post.description}
        </p>

        <div className="mt-auto">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard
