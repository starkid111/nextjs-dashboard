import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  weight: '400', // or any other weight you need
  subsets: ['latin'], // Specify the subsets you want to use
  preload: true, // Keep preloading enabled if needed
});

export default lusitana;