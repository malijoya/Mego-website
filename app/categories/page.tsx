'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { 
  Car, Home, Smartphone, Laptop, Shirt, Gamepad2, 
  Dumbbell, Book, Sofa, Watch, Camera, Headphones,
  Bike, Baby, PawPrint, Music, Palette, Wrench, Sprout, Trophy
} from 'lucide-react';

const categories = [
  { name: 'Vehicles', icon: Car, color: 'bg-blue-500', count: '12K+', slug: 'vehicles' },
  { name: 'Property', icon: Home, color: 'bg-green-500', count: '8K+', slug: 'property' },
  { name: 'Mobiles', icon: Smartphone, color: 'bg-purple-500', count: '15K+', slug: 'mobiles' },
  { name: 'Electronics', icon: Laptop, color: 'bg-red-500', count: '10K+', slug: 'electronics' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-500', count: '7K+', slug: 'fashion' },
  { name: 'Gaming', icon: Gamepad2, color: 'bg-yellow-500', count: '5K+', slug: 'gaming' },
  { name: 'Sports', icon: Dumbbell, color: 'bg-orange-500', count: '4K+', slug: 'sports' },
  { name: 'Books', icon: Book, color: 'bg-indigo-500', count: '3K+', slug: 'books' },
  { name: 'Furniture', icon: Sofa, color: 'bg-teal-500', count: '6K+', slug: 'furniture' },
  { name: 'Watches', icon: Watch, color: 'bg-cyan-500', count: '2K+', slug: 'watches' },
  { name: 'Cameras', icon: Camera, color: 'bg-gray-500', count: '3K+', slug: 'cameras' },
  { name: 'Audio', icon: Headphones, color: 'bg-rose-500', count: '4K+', slug: 'audio' },
  { name: 'Motorcycles', icon: Bike, color: 'bg-blue-600', count: '5K+', slug: 'motorcycles' },
  { name: 'Baby Items', icon: Baby, color: 'bg-pink-400', count: '2K+', slug: 'baby' },
  { name: 'Pets', icon: PawPrint, color: 'bg-amber-500', count: '3K+', slug: 'pets' },
  { name: 'Musical Instruments', icon: Music, color: 'bg-violet-500', count: '1K+', slug: 'musical' },
  { name: 'Art & Collectibles', icon: Palette, color: 'bg-rose-400', count: '1K+', slug: 'art' },
  { name: 'Tools & Hardware', icon: Wrench, color: 'bg-slate-500', count: '4K+', slug: 'tools' },
  { name: 'Garden & Outdoor', icon: Sprout, color: 'bg-emerald-500', count: '2K+', slug: 'garden' },
  { name: 'Sports Equipment', icon: Trophy, color: 'bg-orange-600', count: '3K+', slug: 'sports-equipment' },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse All Categories
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Find exactly what you&apos;re looking for
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                href={`/search?category=${category.name}`}
                className="group p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 card-hover text-center"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count} ads
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Post a buyer request and let sellers come to you!
          </p>
          <Link
            href="/buyer-requests"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <span>Post Buyer Request</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}




