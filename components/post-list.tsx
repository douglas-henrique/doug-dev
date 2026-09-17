'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Avatar } from '@/components/avatar'
import { Pagination } from '@/components/pagination'
import { SITE_INITIALS } from '@/lib/site'
import { DEFAULT_PAGE_SIZE, usePagination } from '@/lib/pagination'

export type PostListItem = {
  title: string
  href: string
  date: string
}

export function PostList({
  posts,
  showAuthor = false,
  pageSize = DEFAULT_PAGE_SIZE,
  pageParam = 'page'
}: {
  posts: PostListItem[]
  showAuthor?: boolean
  pageSize?: number
  pageParam?: string
}) {
  return (
    <Suspense
      fallback={
        <PostListItems
          posts={posts.slice(0, pageSize)}
          showAuthor={showAuthor}
        />
      }
    >
      <PostListPaged
        posts={posts}
        showAuthor={showAuthor}
        pageSize={pageSize}
        pageParam={pageParam}
      />
    </Suspense>
  )
}

function PostListPaged({
  posts,
  showAuthor,
  pageSize,
  pageParam
}: {
  posts: PostListItem[]
  showAuthor: boolean
  pageSize: number
  pageParam: string
}) {
  const { page, pageCount, slice, hrefFor } = usePagination(
    posts,
    pageSize,
    pageParam
  )

  return (
    <div>
      <PostListItems posts={slice} showAuthor={showAuthor} />
      <Pagination page={page} pageCount={pageCount} hrefFor={hrefFor} />
    </div>
  )
}

function PostListItems({
  posts,
  showAuthor
}: {
  posts: PostListItem[]
  showAuthor: boolean
}) {
  return (
    <ul className="border-t border-neutral-200 dark:border-neutral-800">
      {posts.map((post) => (
        <li key={post.href}>
          <Link
            href={post.href}
            className="group flex items-center justify-between gap-4 py-4 no-underline"
          >
            <span className="flex min-w-0 items-center gap-2.5">
              {showAuthor ? (
                <>
                  <Avatar size={23} />
                  <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                    {SITE_INITIALS}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-neutral-300 dark:text-neutral-600"
                  >
                    |
                  </span>
                </>
              ) : null}
              <span className="min-w-0 text-neutral-700 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100">
                {post.title}
              </span>
            </span>
            <time className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
              {post.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  )
}
