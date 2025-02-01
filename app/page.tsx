"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-4 space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
        Template para o Next.js com Tailwindcss v4
      </h1>

      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Este é um template para o Next.js com Tailwindcss v4. Ele inclui o
        Tailwindcss v4, o PostCSS 8 e o JIT mode.
      </p>

      <section className="space-y-4">
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Clone este projeto utilizando:
          </p>

          <CodeBlock>
            {
              "git clone 'https://github.com/leandrordg/next-app-tailwindcss-v4' <diretório>"
            }
          </CodeBlock>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Ou crie um novo projeto com o template utilizando o comando abaixo:
        </p>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Adicione utilizando o comando:
          </p>

          <CodeBlock>{"pnpm create next-app@latest <diretório>"}</CodeBlock>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Instale as dependências do Tailwindcss v4 utilizando:
          </p>

          <CodeBlock>
            {"pnpm add tailwindcss @tailwindcss/postcss postcss"}
          </CodeBlock>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            postcss.config.mjs
          </p>

          <CodeBlock>
            {`const config = { plugins: { "@tailwindcss/postcss": {} } };

export default config;`}
          </CodeBlock>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            app/globals.css
          </p>

          <CodeBlock>{`import "@tailwindcss";`}</CodeBlock>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Execute o projeto utilizando:
          </p>

          <CodeBlock>pnpm dev</CodeBlock>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Acesse o meu perfil no GitHub para mais informações:
          </p>

          <div className="flex items-center gap-1 text-sm">
            <Image
              src="/images/github.svg"
              width={12}
              height={12}
              alt="GitHub"
              className="dark:invert"
            />
            <Link target="_blank" href="https://github.com/leandrordg">
              leandrordg
            </Link>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} - Leandro Rodrigues
          </p>
        </div>
      </section>
    </main>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <pre className="bg-neutral-200/50 dark:bg-neutral-800 p-2 pr-8 rounded-md text-sm relative text-balance break-all">
      {children}
      <button
        popoverTarget="success"
        onClick={copyToClipboard.bind(null, children as string)}
        className="bg-neutral-200/50 dark:bg-neutral-800 absolute top-0.5 right-0.5 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md"
      >
        <Image
          src="/images/copy.svg"
          width={16}
          height={16}
          alt="Copy"
          className="dark:invert"
        />
      </button>
    </pre>
  );
}
