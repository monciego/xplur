import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <>
      <nav className='flex items-center justify-between px-6 py-4'>
        <h1 className='text-lg font-bold'>Xplur</h1>
        <div className='space-x-4'>
          <Button>Login</Button>
          <Button variant='outline'>Register</Button>
        </div>
      </nav>

      <main className='px-4 py-6'>
        <div className='h-[70vh] bg-slate-900 w-full rounded'></div>

        <section className='py-10'>
          <h2 className='text-lg font-bold mb-4'>Top places</h2>
          <div className='grid gap-4 sm:grid-cols-4 grid-cols-1'>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 1</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 2</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 3</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 4</Card>
            </Link>
          </div>
        </section>

        <section className='py-10'>
          <h2 className='text-lg font-bold mb-4'>Discover more</h2>
          <div className='grid gap-4 sm:grid-cols-6 grid-cols-1'>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 1</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 2</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 3</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 4</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 5</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Property 6</Card>
            </Link>
          </div>
        </section>

        <section className='py-10'>
          <h2 className='text-lg font-bold mb-4'>Blogs</h2>
          <div className='grid gap-4 sm:grid-cols-3 grid-cols-1'>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Blog 1</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Blog 2</Card>
            </Link>
            <Link className='col-span-1' to=''>
              <Card className='p-4'>Blog 3</Card>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
