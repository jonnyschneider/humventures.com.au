import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { 
  getCategories, 
  getFeaturedPosts, 
  getPosts, 
  getPostsCount 
} from '@/sanity/queries'
import { image } from '@/sanity/image'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Strategic insights, product development wisdom, and lessons from the field.',
}

export const revalidate = 900 // 15 minutes

const postsPerPage = 5

async function FeaturedPosts() {
  let { data: featuredPosts } = await getFeaturedPosts(3)

  if (featuredPosts.length === 0) {
    return
  }

  return (
    <div className="mt-16 bg-white lg:bg-driftwood-500 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-display font-medium tracking-tight text-daintree-500 lg:text-white">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post: any) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={image(post.mainImage).size(1170, 780).url()}
                  className="aspect-3/2 w-full rounded-lg object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-base/6 text-gray-700">
                  {dayjs(post.publishedAt).format('D MMM YYYY')}
                </div>
                <div className="mt-2 text-2xl/8 font-medium">
                  <Link href={`/insights/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-base/7 text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-base/6 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function Posts({ page, category }: { page: number; category?: string }) {
  let { data: posts } = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
  )

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>
  }

  return (
    <div className="mt-6">
      {posts.map((post: any) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-base/6 max-sm:text-gray-700 sm:font-medium">
              {dayjs(post.publishedAt).format('D MMM YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).width(64).height(64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-base/6 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-2xl/6 font-medium">{post.title}</h2>
            <p className="mt-3 text-base/7 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/insights/${post.slug}`}
                className="flex items-center gap-1 text-base/6 font-medium text-driftwood-500 hover:text-driftwood-400"
              >
                <span className="absolute inset-0" />
                Read more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({
  page,
  category,
}: {
  page: number
  category?: string
}) {
  function url(page: number) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/insights?${params.toString()}` : '/insights'
  }

  let totalPosts = (await getPostsCount(category)).data
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Link
        href={previousPageUrl || '#'}
        className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium border border-gray-300 ${
          !previousPageUrl 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        <span aria-hidden="true">←</span>
        Previous
      </Link>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            className={`size-7 rounded-lg text-center text-sm/7 font-medium ${
              i + 1 === page
                ? 'bg-daintree-500 text-white shadow-sm'
                : 'hover:bg-gray-100'
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Link
        href={nextPageUrl || '#'}
        className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium border border-gray-300 ${
          !nextPageUrl 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        Next
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}

export default async function Insights({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let page =
    'page' in params
      ? typeof params.page === 'string' && parseInt(params.page) > 1
        ? parseInt(params.page)
        : notFound()
      : 1

  let category =
    typeof params.category === 'string' ? params.category : undefined

  return (
    <div>
      <Navigation variant="light" position="relative" />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-driftwood-500">Insights</p>
            <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
              Notes from the trenches of Product Development
            </h1>
            <p className="mt-6 text-lg/8 text-gray-600">
              On Product Leadership, Customer Innovation, and Strategic Technology
            </p>
          </div>
        </div>
      </div>

      {page === 1 && !category && <FeaturedPosts />}
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 pb-24">
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </div>
    </div>
  )
}