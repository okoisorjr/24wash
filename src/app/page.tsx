import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
    {/*   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}

      {/** ****************************************LANDING | HERO SECTION ********************************************* */}
      <div className='text-center'>
        <p className='text-5xl font-extrabold bg-gradient-to-r from-[#FDC48F] to-[#6540DD] text-transparent bg-clip-text'>Professional Cleaning<br/><span>Service at your Convenience.</span></p><br/>
        <span className='text-lg'>Experience Seamless Laundry Excellence Tailored to Your Schedule. We Pick and <br/>deliver every Saturdays and Sundays.</span>
      </div>

      <div className='my-5 flex flex-col items-center'>
        <span className='bg-[#6540DD] text-[#FFF] p-3 rounded-md mb-5'><Link href="/auth/signup">Get Started</Link></span>
        <Image src="/assets/hero-img.png" alt="" width={842} height={751}/>
      </div>

      {/* *********************************************SERVICES SECTION************************************************* */}

      <div className='flex flex-col'>
        <p className='text-5xl text-center font-extrabold text-[#6540DD]'>Our Services</p>
        <span className='text-xl text-center font-extralight'>Why choose us</span>
      </div>

      <div className='grid grid-cols-3 gap-10 px-24 my-10'>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 group rounded-lg border border-1 border-[#6540DD] p-10 transition-colors'>
          <Image src="/assets/dispatch-image.png" alt="" width={80} height={80}/>
          <p className='text-sm font-extralight'>Convenient Weekly Home Pickup and Delivery Services</p>
        </div>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 group rounded-lg border border-1 border-[#6540DD] p-10 transition-colors'>
          <Image src="/assets/laundry-image.png" alt="" width={80} height={80}/>
          <p className='text-sm font-extralight'>Garments enhancement with Expert Washing, Fabric Starching and Precision Ironing</p>
        </div>
        <div className='cols-span-3 md: col-span-3 lg:col-span-1 group rounded-lg border border-1 border-[#6540DD] p-10 transition-colors'>
          <Image src="/assets/support-image.png" alt="" width={80} height={80}/>
          <p className='text-sm font-extralight'>24 hours Customer Service Support</p>
        </div>
      </div>

      {/* *****************************************************SUBSCRIPTION SECTION************************************* */}

      <div className='flex flex-col'>
        <p className='text-5xl text-center font-extrabold text-[#6540DD] my-5'>Subscription Plan</p><br/>
        <span className='text-xl text-center font-extralight'>Affordable Rates for High-Quality Services. </span>
      </div>

      <div className='grid grid-cols-3 gap-10 px-24 my-10'>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 group rounded-lg border border-1 border-[#6540DD] p-10 transition-colors'>
          <p className='text-lg font-extrabold text-[#6540DD] my-5'>Basic</p>
          <ul className='flex flex-col gap-5'>
            <li><span className='font-extralight'>5 Clothes per week</span></li>
            <li>Monthly Subscription - <span className="text-[#6540DD] font-extrabold">10,000 Naira</span></li>
            <li>10% off Annual Subscription</li>
          </ul>
          <button className='bg-[#6540DD] text-[#FFF] text-lg p-2 w-full my-10 rounded-md'>Subscribe</button>
        </div>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 group rounded-lg border border-1 border-[#6540DD] p-10 transition-colors'>
          <span className='flex justify-between my-5'>
            <p className='text-lg font-extrabold text-[#6540DD]'>Golden</p>
            <button className='text-xs px-2 border border-1 border-gray-500 rounded-full'>RECOMMENDED</button>
          </span>
          <ul className='flex flex-col gap-5'>
            <li>Monthly Subscription - <span className="text-[#6540DD] font-extrabold">18,000 Naira</span></li>
            <li>10% off Annual Subscription</li>
          </ul>
          <button className='bg-[#6540DD] text-[#FFF] text-lg p-2 w-full my-10 rounded-md'>Subscribe</button>
        </div>
        <div className='col-span-3 md:col-span-3 lg:col-span-1 group rounded-lg border border-1 border-[#6540DD] p-10 transition-colors'>
          <p className='text-lg font-extrabold text-[#6540DD]'>Custom</p>
        </div>
      </div>

      {/** ****************************************************CONTACT SECTION******************************************* */}
      <div className='flex flex-col'>
        <p className='text-5xl text-center font-extrabold text-[#6540DD] my-5'>Contact Us</p><br/>
        <span className='text-xl text-center font-extralight'>Affordable Rates for High-Quality Services. </span>
      </div>

      <div className='my-10'>
      </div>
    </main>
  )
}
