import Head from 'next/head';
import { useState } from 'react';
import { DialogOne } from './dialog-one';
import { Nested } from './nested';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Headless ui issue demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="py-4">
          <button
            className="cursor-pointer border-2 px-2 text-indigo-700"
            onClick={() => {
              setOpen(true);
            }}
          >
            Nest dialog
          </button>

          <Nested
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          />
        </div>
        <div>
          <button
            className="cursor-pointer border-2 px-2 text-indigo-700"
            onClick={() => {
              setOpen1(true);
            }}
          >
            Open Dialog One
            <DialogOne
              show={open1}
              onClose={() => {
                setOpen1(false);
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
