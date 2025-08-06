import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { image } from '@/sanity/image'
import { getPost } from '@/sanity/queries'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  let { data: post } = await getPost((await params).slug)

  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { data: post } = await getPost((await params).slug)
  if (!post) notFound()

  return (
    <div>
      <Navigation variant="light" position="relative" />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24">
            <div className="text-center mb-8">
              <p className="text-base/7 font-semibold text-driftwood-500">
                {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
              </p>
              <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                {post.title}
              </h1>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
              <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
                {post.author && (
                  <div className="flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
                {Array.isArray(post.categories) && (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/insights?category=${category.slug}`}
                        className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500 hover:bg-gray-100"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-gray-700">
                <div className="max-w-2xl xl:mx-auto">
                  {post.mainImage && (
                    <img
                      alt={post.mainImage.alt || ''}
                      src={image(post.mainImage).size(2016, 1344).url()}
                      className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
                    />
                  )}
                  {post.body && (
                    <PortableText
                      value={post.body}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                              {children}
                            </p>
                          ),
                          h2: ({ children }) => (
                            <h2 className="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-daintree-500 first:mt-0 last:mb-0">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-daintree-500 first:mt-0 last:mb-0">
                              {children}
                            </h3>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="my-10 border-l-2 border-l-driftwood-500 pl-6 text-base/8 text-gray-700 first:mt-0 last:mb-0">
                              {children}
                            </blockquote>
                          ),
                        },
                        types: {
                          image: ({ value }) => (
                            <img
                              alt={value.alt || ''}
                              src={image(value).width(2000).url()}
                              className="w-full rounded-2xl my-8"
                            />
                          ),
                          separator: ({ value }) => {
                            switch (value.style) {
                              case 'line':
                                return (
                                  <hr className="my-8 border-t border-gray-200" />
                                )
                              case 'space':
                                return <div className="my-8" />
                              default:
                                return null
                            }
                          },
                        },
                        list: {
                          bullet: ({ children }) => (
                            <ul className="list-disc pl-4 text-base/8 marker:text-gray-400 my-6">
                              {children}
                            </ul>
                          ),
                          number: ({ children }) => (
                            <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400 my-6">
                              {children}
                            </ol>
                          ),
                        },
                        listItem: {
                          bullet: ({ children }) => {
                            return (
                              <li className="my-2 pl-2 has-[br]:mb-8">
                                {children}
                              </li>
                            )
                          },
                          number: ({ children }) => {
                            return (
                              <li className="my-2 pl-2 has-[br]:mb-8">
                                {children}
                              </li>
                            )
                          },
                        },
                        marks: {
                          strong: ({ children }) => (
                            <strong className="font-semibold text-gray-950">
                              {children}
                            </strong>
                          ),
                          code: ({ children }) => (
                            <>
                              <span aria-hidden>`</span>
                              <code className="text-[15px]/8 font-semibold text-daintree-500 bg-gray-100 px-1 py-0.5 rounded">
                                {children}
                              </code>
                              <span aria-hidden>`</span>
                            </>
                          ),
                          link: ({ value, children }) => {
                            return (
                              <Link
                                href={value.href}
                                className="font-medium text-driftwood-500 underline decoration-driftwood-400 underline-offset-4 hover:decoration-driftwood-600"
                              >
                                {children}
                              </Link>
                            )
                          },
                        },
                      }}
                    />
                  )}
                  <div className="mt-10">
                    <Link
                      href="/insights"
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <span aria-hidden="true">←</span>
                      Back to insights
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}