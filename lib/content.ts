import type { NoteListItem } from '@/components/note-list'
import type { PostListItem } from '@/components/post-list'

export const notes = {
  en: [
    { title: 'Things I believe', href: '/en/n/beliefs' },
    { title: 'Understanding AI', href: '/en/n/ai' },
    { title: 'Developer experience', href: '/en/n/dx' },
    { title: 'Shipping', href: '/en/n/shipping' },
    { title: 'Clear writing', href: '/en/n/writing' },
    { title: 'Personal software', href: '/en/n/personal-software' },
    { title: 'Code review', href: '/en/n/code-review' },
    { title: 'Product engineers', href: '/en/n/product-engineers' },
    { title: 'Documentation', href: '/en/n/docs' },
    { title: 'Leading engineers', href: '/en/n/leading' }
  ] satisfies NoteListItem[],
  pt: [
    { title: 'Coisas em que acredito', href: '/pt/n/beliefs' },
    { title: 'Entendendo IA', href: '/pt/n/ai' },
    { title: 'Experiência de desenvolvimento', href: '/pt/n/dx' },
    { title: 'Entregar', href: '/pt/n/shipping' },
    { title: 'Escrever claro', href: '/pt/n/writing' },
    { title: 'Software pessoal', href: '/pt/n/personal-software' },
    { title: 'Code review', href: '/pt/n/code-review' },
    { title: 'Engenheiros de produto', href: '/pt/n/product-engineers' },
    { title: 'Documentação', href: '/pt/n/docs' },
    { title: 'Liderar engenheiros', href: '/pt/n/leading' }
  ] satisfies NoteListItem[]
}

export const blogPosts = {
  en: [
    {
      title: 'Why I rebuilt this site in MDX',
      href: '/en/blog/rebuilding-this-site',
      date: 'September 2026'
    },
    {
      title: 'Coding agents and the size of the task',
      href: '/en/blog/coding-agents',
      date: 'August 2026'
    },
    {
      title: 'Complexity has to earn its place',
      href: '/en/blog/complexity-budget',
      date: 'July 2026'
    },
    {
      title: 'The boring stack still wins',
      href: '/en/blog/boring-stack',
      date: 'June 2026'
    },
    {
      title: 'What I look for in a pull request',
      href: '/en/blog/pull-requests',
      date: 'May 2026'
    },
    {
      title: 'Teaching is part of shipping',
      href: '/en/blog/teaching-while-shipping',
      date: 'April 2026'
    },
    {
      title: 'The CSS I actually use',
      href: '/en/blog/css-i-use',
      date: 'March 2026'
    },
    {
      title: 'Keep the side project small',
      href: '/en/blog/small-tools',
      date: 'February 2026'
    },
    {
      title: 'Reading code is the job',
      href: '/en/blog/reading-code',
      date: 'January 2026'
    },
    {
      title: 'I still write tests',
      href: '/en/blog/tests-still-matter',
      date: 'December 2025'
    }
  ] satisfies PostListItem[],
  pt: [
    {
      title: 'Por que reconstruí este site em MDX',
      href: '/pt/blog/rebuilding-this-site',
      date: 'Setembro 2026'
    },
    {
      title: 'Agentes de código e o tamanho da tarefa',
      href: '/pt/blog/coding-agents',
      date: 'Agosto 2026'
    },
    {
      title: 'Complexidade precisa merecer o lugar',
      href: '/pt/blog/complexity-budget',
      date: 'Julho 2026'
    },
    {
      title: 'A stack chata ainda ganha',
      href: '/pt/blog/boring-stack',
      date: 'Junho 2026'
    },
    {
      title: 'O que eu procuro num pull request',
      href: '/pt/blog/pull-requests',
      date: 'Maio 2026'
    },
    {
      title: 'Ensinar faz parte de entregar',
      href: '/pt/blog/teaching-while-shipping',
      date: 'Abril 2026'
    },
    {
      title: 'O CSS que eu de fato uso',
      href: '/pt/blog/css-i-use',
      date: 'Março 2026'
    },
    {
      title: 'Deixa o side project pequeno',
      href: '/pt/blog/small-tools',
      date: 'Fevereiro 2026'
    },
    {
      title: 'Ler código é o trabalho',
      href: '/pt/blog/reading-code',
      date: 'Janeiro 2026'
    },
    {
      title: 'Eu ainda escrevo testes',
      href: '/pt/blog/tests-still-matter',
      date: 'Dezembro 2025'
    }
  ] satisfies PostListItem[]
}
