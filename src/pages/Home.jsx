import Layout from './Layout'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsCursorFill } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const getRandomValue = (range) => Math.random() * range;

const getRandomTranslation = () => ({
  x: getRandomValue(100) - getRandomValue(60),
  y: getRandomValue(100) - getRandomValue(60),
  z: getRandomValue(100) - getRandomValue(60),
});

export default function Home() {
  const [unaivanTranslation, setUnaivanTranslation] = useState(getRandomTranslation());
  const [sellaTranslation, setSellaTranslation] = useState(getRandomTranslation());
  const [annaTranslation, setAnnaTranslation] = useState(getRandomTranslation());
  const [jaredTranslation, setJaredTranslation] = useState(getRandomTranslation());
  const [dirgaTranslation, setDirgaTranslation] = useState(getRandomTranslation());
  const [halimahTranslation, setHalimahTranslation] = useState(getRandomTranslation());

  useEffect(() => {
    const unaivanInterval = setInterval(() => {
      setUnaivanTranslation(getRandomTranslation());
    }, 1500); // Set an interval for unaivan

    return () => clearInterval(unaivanInterval);
  }, []);

  useEffect(() => {
    const sellaInterval = setInterval(() => {
      setSellaTranslation(getRandomTranslation());
    }, 2500); // Set a different interval for sella

    return () => clearInterval(sellaInterval);
  }, []);

  useEffect(() => {
    const annaInterval = setInterval(() => {
      setAnnaTranslation(getRandomTranslation());
    }, 1200); // Set a different interval for sella

    return () => clearInterval(annaInterval);
  }, []);

  useEffect(() => {
    const dirgaInterval = setInterval(() => {
      setDirgaTranslation(getRandomTranslation());
    }, 2700); // Set a different interval for sella

    return () => clearInterval(dirgaInterval);
  }, []);

  useEffect(() => {
    const jaredInterval = setInterval(() => {
      setJaredTranslation(getRandomTranslation());
    }, 2200); // Set a different interval for sella

    return () => clearInterval(jaredInterval);
  }, []);

  useEffect(() => {
    const halimahInterval = setInterval(() => {
      setHalimahTranslation(getRandomTranslation());
    }, 1800); // Set a different interval for sella

    return () => clearInterval(halimahInterval);
  }, []);

  return (
    <Layout>
    <div className='h-screen relative bg-[#6cde5b] container py-12'>
      <h1 className='text-[3rem] md:text-[5rem] font-bold'>Introduction</h1>
      <h1 className='text-xl md:text-4xl font-semibold underline'>This Brutalism style offers reusable components that you can copy and paste into your application, restyled from <a href='https://ui.shadcn.com/' target='_blank'><span className='bg-violet-400'>shadcn/ui</span></a> to fit the brutalism style. They are accessible, customizable, and open source.</h1>

      <Button className='my-12 text-4xl py-8' size="lg"><a href="/accordion">Get Started</a></Button>
      <p>References</p>
      <div className='flex flex-col gap-x-2'>
        <a href='https://neo-brutalism-ui-library.vercel.app/' target='_blank' className='font-semibold text-4xl flex items-center hover:underline'>NEO-UI <ArrowUpRight className='w-12 h-12' /></a>
        <a href='https://ui.shadcn.com/' target='_blank' className='font-semibold text-4xl flex items-center hover:underline'>Shadcn/UI <ArrowUpRight className='w-12 h-12' /></a>
      </div>
      <motion.div
        className='absolute top-[55vh] right-[12vw]'
        animate={{
          x: unaivanTranslation.x,
          y: unaivanTranslation.y,
          z: unaivanTranslation.z,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
      >
        <div className='flex gap-x-1'>
          <BsCursorFill className='scale-x-[-1] h-4 w-4' />
          <div className='mt-4 -ml-2 py-1 px-2 bg-purple-600 rounded-md flex items-center gap-x-2 w-fit'>
            <p className='text-white text-[.6rem] capitalize'>unaivan</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='absolute top-[69vh] left-[22vw]'
        animate={{
          x: sellaTranslation.x,
          y: sellaTranslation.y,
          z: sellaTranslation.z,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
      >
        <div className='flex gap-x-1'>
          <BsCursorFill className='scale-x-[-1] h-4 w-4' />
          <div className='mt-4 -ml-2 py-1 px-2 bg-lime-600 rounded-md flex items-center gap-x-2 w-fit'>
            <p className='text-white text-[.6rem] capitalize'>sella</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-[62vh] left-[12vw]'
        animate={{
          x: annaTranslation.x,
          y: annaTranslation.y,
          z: annaTranslation.z,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
      >
        <div className='flex gap-x-1'>
          <BsCursorFill className='scale-x-[-1] h-4 w-4' />
          <div className='mt-4 -ml-2 py-1 px-2 bg-orange-600 rounded-md flex items-center gap-x-2 w-fit'>
            <p className='text-white text-[.6rem] capitalize'>anna</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-[62vh] right-[18vw]'
        animate={{
          x: jaredTranslation.x,
          y: jaredTranslation.y,
          z: jaredTranslation.z,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
      >
        <div className='flex gap-x-1'>
          <BsCursorFill className='scale-x-[-1] h-4 w-4' />
          <div className='mt-4 -ml-2 py-1 px-2 bg-sky-600 rounded-md flex items-center gap-x-2 w-fit'>
            <p className='text-white text-[.6rem] capitalize'>jared</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-[72vh] right-[52vw]'
        animate={{
          x: dirgaTranslation.x,
          y: dirgaTranslation.y,
          z: dirgaTranslation.z,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
      >
        <div className='flex gap-x-1'>
          <BsCursorFill className='scale-x-[-1] h-4 w-4' />
          <div className='mt-4 -ml-2 py-1 px-2 bg-red-600 rounded-md flex items-center gap-x-2 w-fit'>
            <p className='text-white text-[.6rem] capitalize'>dirga</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-[77vh] right-[30vw]'
        animate={{
          x: halimahTranslation.x,
          y: halimahTranslation.y,
          z: halimahTranslation.z,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
      >
        <div className='flex gap-x-1'>
          <BsCursorFill className='scale-x-[-1] h-4 w-4' />
          <div className='mt-4 -ml-2 py-1 px-2 bg-pink-500 rounded-md flex items-center gap-x-2 w-fit'>
            <p className='text-white text-[.6rem] capitalize'>halimah</p>
          </div>
        </div>
      </motion.div>

    </div>
    </Layout>
  )
}