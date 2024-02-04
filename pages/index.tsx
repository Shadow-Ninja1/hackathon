"use client"
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
import { Testimonials } from '../components/Testimonials';
import va from '@vercel/analytics';
import {useState, useEffect} from 'react';

const inputStyles = {
  borderWidth: 0

};

const Home: NextPage = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [imageExists, setImageExists] = useState(false);

  useEffect ( () => {
    setImageExists(false);
    setLatitude(37.5237290848104);
    setLongitude(-121.96867997538217);
    const plants=["Box Elder", "Yarrow", "Buckeye", "Alder, White", "Serviceberry", "Hoary Manzanita", "Arroyo de la Cruz Manzanita", "Little Sur Manzanita", "Big Berry Manzanita"];
    const plantImage=["Acer_negundo_fulltree-removebg-preview", "firefly-sunshine-yarrow-plant-yellow-yarrow-proven-winners_16801-removebg-preview", "aesculus-ca-removebg-preview", "A087-11-removebg-preview", "serve-removebg-preview", "hoary_manzanita-removebg-preview", "arctostaphylos_edmundsii_carmel_sur_manzanita-1-removebg-preview", "bert-removebg-preview", "G168-16-removebg-preview"];
  }, [])

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFile =async  (e) => {
    console.log(e.target.files[0])

    const result = await readFileAsBase64(e.target.files[0])
    setImage(result);
    setImageExists(true);
  }

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>InstaGrow</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20">
        <a
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Visualize the <span className="font-semibold">future</span>   
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Unlock the{' '}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">potential</span>
          </span>{' '}
          of your garden.
        </h1>
        <div className="flex justify-center space-x-4 mb-10">
          <a
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            href="https://www.roomgpt.io/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
            <input type="file" onChange = {handleFile} style={inputStyles}/>
              Begin Growing
            </div>
          </a>

        </div>
        
        {imageExists ? (
          <div>
            <Image 
              width={400}
              height={400}
              src={image}
              className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
            />

<section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10 w-full"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            Now select your plants.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
            Based on your location, here are some plants you can chose from.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >

      <div className="w-full">

      <a 
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Morning Glory
             
        </h2>
        <p className={`m-0  text-sm opacity-50`}>
          Flowering Plant
        </p>
      </a>
      <a
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Yarrow
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Tree
        </p>
      </a>
      <a
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Buckeye
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Tree
        </p>
      </a>
      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Alder
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Tree
        </p>
      </a>
      <a
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Serviceberry
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Bush
        </p>
      </a>
      <a
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Hoary
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Bush
        </p>
      </a>
      <a
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Little Sur Manzanita
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Shrub
        </p>
      </a>
      <a
        className="  group rounded-lg border border-transparent px-5 py-4 transition-colors   "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Big Berry Manzanita
             
        </h2>
        <p className={`m-0    text-sm opacity-50`}>
          Shrub
        </p>
      </a>

      </div>
        </ul>
      </div>
    </section>
          </div>

          ) : null}

      </main>
      <Footer />
    </div>
  );
};

export default Home;



