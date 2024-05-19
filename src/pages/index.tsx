import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { api } from "~/utils/api";

export default function Home() {
  const { mutate, data, isPending } = api.calvin.askAQuestion.useMutation();
  const [question, setQuestion] = useState("");

  return (
    <>
      <Head>
        <title>Ask Calvin</title>
        <meta name="description" content="Sempre teve vontade de falar com João Calvino? Agora você pode!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6d0202] to-[#2c1515]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 xl:flex-row ">
          <Image src={"/calvino.jpeg"} alt="calvino" width={500} height={500} />
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              ASK CALVIN
            </h1>
            <Input
              placeholder="Faça uma pergunta a Calvino..."
              value={question}
              disabled={isPending}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button
              disabled={isPending}
              className="w-full p-4 text-lg"
              onClick={() => mutate({ question: question })}
            >
              Mandar pergunta
            </Button>
            <div>
              {data ? (
                <div>
                  <p className="text-xl font-bold text-white">{data}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
