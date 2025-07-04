import { type NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get('page') || '1');
    const limit = Number.parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category') || '';
    const tag = searchParams.get('tag') || '';
    const search = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    await connectToDatabase();

    // Build query
    const query: any = { isPublished: true };

    if (category) {
      query.categories = category;
    }

    if (tag) {
      query.tags = tag;
    }

    if (search) {
      query.$text = { $search: search };
    }

    // Get posts
    const posts = await BlogPost.find(query)
      .sort({ publishedDate: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const totalPosts = await BlogPost.countDocuments(query);
    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json({
      posts,
      pagination: {
        current: page,
        total: totalPages,
        totalPosts
      }
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const data = await request.json();

    // Create new blog post
    const newPost = await BlogPost.create(data);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
