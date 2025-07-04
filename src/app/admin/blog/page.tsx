"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'
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
  }
];

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<IBlogPost[]>(MOCK_POSTS)
  const [isEditing, setIsEditing] = useState(false)
  const [currentPost, setCurrentPost] = useState<IBlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    categories: '',
    tags: '',
    featuredImage: '',
    isPublished: false
  })

  const handleEdit = (post: IBlogPost) => {
    setCurrentPost(post)
    setFormData({
      title: post.title,
      description: post.description,
      content: post.content,
      categories: post.categories.join(', '),
      tags: post.tags.join(', '),
      featuredImage: post.featuredImage,
      isPublished: post.isPublished
    })
    setIsEditing(true)
  }

  const handleDelete = async (postId: string) => {
    // TODO: Implement delete functionality with API
    console.log('Delete post:', postId)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement save functionality with API
    console.log('Save post:', formData)
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
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
              Blog Management
            </h1>
            <p className="text-gray-400 text-lg">
              Manage your blog posts, create new content, and update existing articles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          {isEditing ? (
            // Edit Form
            <div className="bg-coinband-darkGray p-8 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {currentPost ? 'Edit Post' : 'New Post'}
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => setIsEditing(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="bg-coinband-dark border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="bg-coinband-dark border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-2">
                    Content
                  </label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    className="bg-coinband-dark border-gray-700 min-h-[200px]"
                  />
                </div>
                <div>
                  <label htmlFor="categories" className="block text-sm font-medium mb-2">
                    Categories (comma separated)
                  </label>
                  <Input
                    id="categories"
                    name="categories"
                    value={formData.categories}
                    onChange={handleChange}
                    required
                    className="bg-coinband-dark border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium mb-2">
                    Tags (comma separated)
                  </label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    required
                    className="bg-coinband-dark border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="featuredImage" className="block text-sm font-medium mb-2">
                    Featured Image URL
                  </label>
                  <Input
                    id="featuredImage"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleChange}
                    required
                    className="bg-coinband-dark border-gray-700"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isPublished"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-700 bg-coinband-dark text-coinband-green focus:ring-coinband-green"
                  />
                  <label htmlFor="isPublished" className="text-sm font-medium">
                    Publish immediately
                  </label>
                </div>
                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-coinband-green text-coinband-dark hover:bg-coinband-green/80"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            // Posts List
            <div className="space-y-6">
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    setCurrentPost(null)
                    setFormData({
                      title: '',
                      description: '',
                      content: '',
                      categories: '',
                      tags: '',
                      featuredImage: '',
                      isPublished: false
                    })
                    setIsEditing(true)
                  }}
                  className="bg-coinband-green text-coinband-dark hover:bg-coinband-green/80"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </div>

              <div className="bg-coinband-darkGray rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="px-6 py-4 text-left text-sm font-medium">Title</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Date</th>
                        <th className="px-6 py-4 text-right text-sm font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.slug} className="border-b border-gray-700">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium">{post.title}</div>
                            <div className="text-sm text-gray-400">{post.description}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              post.isPublished
                                ? 'bg-green-500/10 text-green-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                            }`}>
                              {post.isPublished ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-400">
                            {post.publishedDate.toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEdit(post)}
                                className="text-gray-400 hover:text-white"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(post.slug)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 