import { type NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { slug } = params;

    await connectToDatabase();

    const post = await BlogPost.findOne({ slug, isPublished: true }).lean();

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// Update a post
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { slug } = params;
    const data = await request.json();

    await connectToDatabase();

    const updatedPost = await BlogPost.findOneAndUpdate(
      { slug },
      { $set: data },
      { new: true }
    );

    if (!updatedPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// Delete a post
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { slug } = params;

    await connectToDatabase();

    const deletedPost = await BlogPost.findOneAndDelete({ slug });

    if (!deletedPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
