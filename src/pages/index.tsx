import Head from 'next/head';
import { useState } from 'react';
import { useUI } from '../components';
import { Content } from '../components/content';
import { Nested } from '../components/nested';
import { Layout } from '../modules/layout';

export default function Home() {
  const [open, setOpen] = useState(false);
  const { openCartviewSidebar } = useUI();
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
          <button className="cursor-pointer border-2 px-2 text-indigo-700" onClick={openCartviewSidebar}>
            Open Sidebar
          </button>
        </div>
        <Content />
      </div>
    </div>
  );
}

Home.Layout = Layout;
