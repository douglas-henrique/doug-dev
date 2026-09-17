export const descriptions = {
  'en/home':
    'Personal site of Douglas Pereira: notes on engineering, dated writing, and selected open-source work.',
  'pt/home':
    'Site pessoal de Douglas Pereira: notas de engenharia, textos datados e trabalho open-source selecionado.',
  'en/blog':
    'Technical essays on coding agents, complexity, CSS, tests, and how to ship software.',
  'pt/blog':
    'Ensaios técnicos sobre agentes de código, complexidade, CSS, testes e como entregar software.',
  'en/work':
    'Selected repositories: a Python RAG stack, a Next.js template, and an Expo Router starter.',
  'pt/work':
    'Repositórios selecionados: uma stack RAG em Python, um template Next.js e um starter Expo Router.',
  'en/blog/rebuilding-this-site':
    'Why this site is file-based MDX on the Next.js App Router, with no CMS and a Rust MDX compiler.',
  'pt/blog/rebuilding-this-site':
    'Por que este site é MDX por arquivo no App Router do Next.js, sem CMS e com o compiler Rust.',
  'en/blog/coding-agents':
    'Treat coding agents like juniors: small briefs, git as the eval loop, and SWE-bench as the benchmark.',
  'pt/blog/coding-agents':
    'Trate agentes de código como júniores: brief pequeno, git como eval e SWE-bench como benchmark.',
  'en/blog/complexity-budget':
    'Abstractions are loans. Essential vs accidental complexity, connascence, and when a layer must pay rent.',
  'pt/blog/complexity-budget':
    'Abstrações são empréstimos. Complexidade essencial vs acidental, connascence e quando a camada paga aluguel.',
  'en/blog/boring-stack':
    'Innovation tokens, Postgres as default, TypeScript at boundaries — why the boring stack still ships on Tuesday.',
  'pt/blog/boring-stack':
    'Innovation tokens, Postgres como default, TypeScript na borda — por que a stack chata ainda entrega na terça.',
  'en/blog/pull-requests':
    'What I read first in a PR: intent, diff size, Conventional Comments, and tests that name the invariant.',
  'pt/blog/pull-requests':
    'O que eu leio primeiro num PR: intenção, tamanho do diff, Conventional Comments e testes que nomeiam o invariante.',
  'en/blog/teaching-while-shipping':
    'A feature is not shipped until the how-to, reference, and 6pm runbook exist. Diátaxis, ADRs, bus factor.',
  'pt/blog/teaching-while-shipping':
    'Feature não está entregue até existir how-to, referência e runbook das 18h. Diátaxis, ADR, bus factor.',
  'en/blog/css-i-use':
    'The CSS I actually reach for: grid and subgrid, @layer, container queries, light-dark(), text-wrap.',
  'pt/blog/css-i-use':
    'O CSS que eu de fato uso: grid e subgrid, @layer, container queries, light-dark(), text-wrap.',
  'en/blog/small-tools':
    'Unix philosophy for side projects: one job, no auth, hardcoded is a feature. Worse is Better.',
  'pt/blog/small-tools':
    'Filosofia Unix para side project: um trabalho, sem auth, hardcoded é feature. Worse is Better.',
  'en/blog/reading-code':
    'Reading is the job. Characterization tests, git pickaxe, call paths, and why agents made attention scarce.',
  'pt/blog/reading-code':
    'Ler é o trabalho. Characterization tests, git pickaxe, call paths e por que agentes tornaram a atenção escassa.',
  'en/blog/tests-still-matter':
    'A mean little suite beats a museum of mocks. Pyramid vs trophy, determinism, and tests that fail at 11pm.',
  'pt/blog/tests-still-matter':
    'Uma suíte pequena e maldosa ganha de museu de mock. Pirâmide vs troféu, determinismo e testes que quebram às 23h.',
  'en/n/beliefs':
    'Working notes on shipping, writing, tools that disappear, and leading by doing the work.',
  'pt/n/beliefs':
    'Notas de trabalho sobre entregar, escrever, ferramentas que desaparecem e liderar fazendo o trabalho.',
  'en/n/ai':
    'AI as a tool, not a teammate: context windows, the skill of the question, and keeping taste.',
  'pt/n/ai':
    'IA como ferramenta, não colega: janela de contexto, a habilidade da pergunta e guardar o gosto.',
  'en/n/dx':
    'Developer experience as respect: obvious happy paths, fast feedback, docs as the product.',
  'pt/n/dx':
    'Experiência de desenvolvimento como respeito: caminho feliz óbvio, feedback rápido, docs como produto.',
  'en/n/shipping':
    'Land it. Shrink the first version. The loop is the strategy; momentum compounds.',
  'pt/n/shipping':
    'Faz pousar. Encolhe a primeira versão. O ciclo é a estratégia; momentum acumula.',
  'en/n/writing':
    'Writing is thinking. Notes beat memory. Direct is not rude.',
  'pt/n/writing':
    'Escrever é pensar. Nota ganha de memória. Direto não é grosso.',
  'en/n/personal-software':
    'One user is a valid market. Small on purpose. Personal software is how you keep taste.',
  'pt/n/personal-software':
    'Um usuário é mercado válido. Pequeno de propósito. Software pessoal é como o gosto se mantém.',
  'en/n/code-review':
    'Review the change, not the person. Small diffs, comments that teach, approve when it is better.',
  'pt/n/code-review':
    'Revisa a mudança, não a pessoa. Diff pequeno, comentário que ensina, aprova quando está melhor.',
  'en/n/product-engineers':
    'Own the outcome. Design is not a handoff. Taste is the differentiator.',
  'pt/n/product-engineers':
    'Dono do resultado. Design não é handoff. Gosto é o diferencial.',
  'en/n/docs':
    'Write the beginner path. Tutorials are not reference. Keep docs next to the code.',
  'pt/n/docs':
    'Escreve o caminho de quem começa. Tutorial não é referência. Doc perto do código.',
  'en/n/leading':
    'Still do the work. Clarity is the gift. Hire for slope; make others louder.',
  'pt/n/leading':
    'Continua fazendo o trabalho. Clareza é o presente. Contrate pela inclinação; deixa os outros mais altos.'
} as const

export type DescriptionKey = keyof typeof descriptions

export function desc(key: DescriptionKey) {
  return descriptions[key]
}
