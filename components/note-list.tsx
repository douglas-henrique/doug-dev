'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Pagination } from '@/components/pagination'
import { usePagination } from '@/lib/pagination'

export type NoteListItem = {
  title: string
  href: string
}

export function NoteList({
  notes,
  pageSize = 6,
  pageParam = 'notes'
}: {
  notes: NoteListItem[]
  pageSize?: number
  pageParam?: string
}) {
  return (
    <Suspense
      fallback={<NoteListItems notes={notes.slice(0, pageSize)} />}
    >
      <NoteListPaged
        notes={notes}
        pageSize={pageSize}
        pageParam={pageParam}
      />
    </Suspense>
  )
}

function NoteListPaged({
  notes,
  pageSize,
  pageParam
}: {
  notes: NoteListItem[]
  pageSize: number
  pageParam: string
}) {
  const { page, pageCount, slice, hrefFor } = usePagination(
    notes,
    pageSize,
    pageParam
  )

  return (
    <div>
      <NoteListItems notes={slice} />
      <Pagination page={page} pageCount={pageCount} hrefFor={hrefFor} />
    </div>
  )
}

function NoteListItems({ notes }: { notes: NoteListItem[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
      {notes.map((note) => (
        <li key={note.href} className="flex items-start gap-2.5">
          <span
            aria-hidden="true"
            className="mt-1.5 size-1.5 shrink-0 bg-neutral-400 dark:bg-neutral-500"
          />
          <Link
            href={note.href}
            className="cursor-pointer text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-200"
          >
            {note.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
