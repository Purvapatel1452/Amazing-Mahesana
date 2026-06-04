import React from 'react';
import { motion } from 'framer-motion';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface BrandData {
  name: string;
  category: string;
  initials: string;
  gradient: string;
  logo?: string;
}

/* Tailwind gradient class → SVG hex pair */
const colorMap: Record<string, [string, string]> = {
  'from-primary to-red-600':    ['#FFAA00', '#B45309'],
  'from-orange-600 to-primary': ['#D97706', '#FFAA00'],
  'from-red-600 to-orange-500': ['#B45309', '#D97706'],
  'from-primary to-secondary':  ['#FFAA00', '#FFD000'],
  'from-orange-700 to-primary': ['#92400E', '#FFAA00'],
  'from-red-500 to-orange-600': ['#CA8A04', '#D97706'],
};

/* ── Row 1 – F&B, Food & Hospitality ── */
const brandsRow1: BrandData[] = [
  { name: 'The Shake Maker',         category: 'Beverages',    initials: 'TS', gradient: 'from-primary to-red-600',    logo: '/logos/TheShakeMaker.png'          },
  { name: 'Milku',                   category: 'Dairy',        initials: 'MK', gradient: 'from-orange-600 to-primary', logo: '/logos/Milku.jpeg'                 },
  { name: 'Lala Paraman',            category: 'Street Food',  initials: 'LP', gradient: 'from-red-600 to-orange-500', logo: '/logos/LalaParaman.webp'           },
  { name: 'Mathawala',               category: 'Restaurant',   initials: 'MA', gradient: 'from-primary to-secondary',  logo: '/logos/Mathawala.png'              },
  { name: 'Mangleshwar Puff',        category: 'Bakery',       initials: 'MP', gradient: 'from-orange-700 to-primary', logo: '/logos/MangleshwarPuff.jpeg'       },
  { name: 'Williamjohns Pizza',      category: 'Pizza',        initials: 'WJ', gradient: 'from-red-500 to-orange-600', logo: '/logos/WilliamjohnsPizza.jpeg'     },
  { name: 'The Shake Fusion',        category: 'Beverages',    initials: 'SF', gradient: 'from-primary to-red-600',    logo: '/logos/TheShakeFusion.jpeg'        },
  { name: 'Barcelona',               category: 'Cafe',         initials: 'BC', gradient: 'from-orange-600 to-primary', logo: '/logos/Barcelona.png'              },
  { name: 'Patti Vadapav',           category: 'Street Food',  initials: 'PV', gradient: 'from-red-600 to-orange-500', logo: '/logos/PattiVadapav.jpeg'          },
  { name: 'Mumbaiya',                category: 'Restaurant',   initials: 'MB', gradient: 'from-primary to-secondary',  logo: '/logos/Mumbaiya.jpeg'              },
  { name: 'Puffiza',                 category: 'Bakery',       initials: 'PZ', gradient: 'from-orange-700 to-primary', logo: '/logos/Puffiza.jpeg'               },
  { name: 'Namaste Restaurant',      category: 'Restaurant',   initials: 'NR', gradient: 'from-red-500 to-orange-600', logo: '/logos/NamasteRestaurant.jpeg'     },
  { name: 'Sauratra Ganthiya',       category: 'Snacks',       initials: 'SG', gradient: 'from-primary to-red-600',    logo: '/logos/SaustraGanthiya.jpeg'       },
  { name: 'Meera Ice Cream',         category: 'Ice Cream',    initials: 'MI', gradient: 'from-orange-600 to-primary', logo: '/logos/MeeraIceCream.jpeg'         },
  { name: 'Dhabakaro',               category: 'Restaurant',   initials: 'DB', gradient: 'from-red-600 to-orange-500', logo: '/logos/Dhabakaro.jpg'              },
  { name: 'Ram Ratan Hotel',         category: 'Hotel',        initials: 'RH', gradient: 'from-primary to-secondary',  logo: '/logos/RamRatanHotel.png'          },
  { name: 'Laalo',                   category: 'F&B',          initials: 'LL', gradient: 'from-orange-700 to-primary', logo: '/logos/Laalo.avif'                 },
  { name: 'Embellish Saloon',        category: 'Beauty',       initials: 'ES', gradient: 'from-red-500 to-orange-600', logo: '/logos/EmbellishSaloon.png'        },
  { name: 'Mumbaiwala Patel Jewels', category: 'Jewellery',    initials: 'PJ', gradient: 'from-primary to-red-600',    logo: '/logos/MumbaiwalaPatelJewels.jpg'  },
  { name: 'Swagat Mall',             category: 'Retail',       initials: 'SM', gradient: 'from-orange-600 to-primary', logo: '/logos/SwagatMall.jpeg'            },
  { name: 'Ash Gym',                 category: 'Fitness',      initials: 'AG', gradient: 'from-red-600 to-orange-500', logo: '/logos/AshGym.png'                 },
  { name: 'Dharoi Dam',              category: 'Tourism',      initials: 'DH', gradient: 'from-primary to-secondary',  logo: '/logos/DharoiDam.avif'             },
  { name: 'Deodap',                  category: 'E-commerce',   initials: 'DD', gradient: 'from-orange-700 to-primary', logo: '/logos/Deodap.jpeg'                },
];

/* ── Row 2 – Products, Brands, Fashion, Mobile, Business ── */
const brandsRow2: BrandData[] = [
  { name: 'Vivo',                  category: 'Mobile',           initials: 'VI', gradient: 'from-red-500 to-orange-600', logo: '/logos/Vivo.jpeg'                },
  { name: 'LG',                    category: 'Electronics',      initials: 'LG', gradient: 'from-primary to-secondary',  logo: '/logos/LG.svg'                   },
  { name: 'Axe',                   category: 'Personal Care',    initials: 'AX', gradient: 'from-orange-700 to-primary', logo: '/logos/Axe.png'                  },
  { name: 'Reliance',              category: 'Corporate',        initials: 'RL', gradient: 'from-red-500 to-orange-600', logo: '/logos/Reliance.png'             },
  { name: 'Ather EV',              category: 'Electric Vehicle', initials: 'AE', gradient: 'from-primary to-red-600',    logo: '/logos/AtherEV.jpeg'             },
  { name: 'Vivo x200fe',           category: 'Mobile',           initials: 'VX', gradient: 'from-orange-600 to-primary', logo: '/logos/Vivo.jpeg'                },
  { name: 'Safari',                category: 'Fashion',          initials: 'SA', gradient: 'from-red-600 to-orange-500', logo: '/logos/Safari.png'               },
  { name: 'Trendy Fashion',        category: 'Fashion',          initials: 'TF', gradient: 'from-primary to-secondary',  logo: '/logos/TrendyFashion.png'        },
  { name: 'Phonewale',             category: 'Mobile',           initials: 'PW', gradient: 'from-orange-700 to-primary', logo: '/logos/Phonewale.jpeg'           },
  { name: 'HP Mobile',             category: 'Mobile',           initials: 'HP', gradient: 'from-red-500 to-orange-600', logo: '/logos/HPMobile.jpeg'            },
  { name: 'Shivalik',              category: 'Real Estate',      initials: 'SV', gradient: 'from-primary to-red-600',    logo: '/logos/Shivalik.jpg'             },
  { name: 'Vivo v60',              category: 'Mobile',           initials: 'V6', gradient: 'from-orange-600 to-primary', logo: '/logos/Vivo.jpeg'                },
  { name: 'Martinoz',              category: 'Fashion',          initials: 'MZ', gradient: 'from-red-600 to-orange-500', logo: '/logos/Martinoz.png'             },
  { name: 'Samarth Group',         category: 'Business',         initials: 'SR', gradient: 'from-primary to-secondary',  logo: '/logos/SamarthGroup.jpeg'        },
  { name: 'RJ International',      category: 'Business',         initials: 'RI', gradient: 'from-orange-700 to-primary', logo: '/logos/RJInternational.jpeg'     },
  { name: 'NamoiHub / DKOverseas', category: 'Business',         initials: 'NK', gradient: 'from-red-500 to-orange-600', logo: '/logos/NamoiHub.jpeg'            },
  { name: 'Sahaj',                 category: 'Business',         initials: 'SJ', gradient: 'from-primary to-red-600',    logo: '/logos/Sahaj.png'                },
  { name: 'Vivo x300 Pro',         category: 'Mobile',           initials: 'VP', gradient: 'from-orange-600 to-primary', logo: '/logos/Vivo.jpeg'                },
  { name: 'Alinor',                category: 'Business',         initials: 'AL', gradient: 'from-red-600 to-orange-500', logo: '/logos/Alinor.jpeg'              },
  { name: 'C85 Realms',            category: 'Real Estate',      initials: 'CR', gradient: 'from-primary to-secondary'                                           },
  { name: 'Mehta Agency',          category: 'Agency',           initials: 'ME', gradient: 'from-orange-700 to-primary', logo: '/logos/MehtaAgency.jpeg'         },
  { name: 'MMC',                   category: 'Business',         initials: 'MC', gradient: 'from-red-500 to-orange-600', logo: '/logos/MMC.jpeg'                 },
  { name: 'Achievers',             category: 'Education',        initials: 'AC', gradient: 'from-primary to-red-600',    logo: '/logos/Achievers.jpeg'           },
];

/* ── Row 3 – Media, Events, NGO, Entertainment, Education, Government ── */
const brandsRow3: BrandData[] = [
  { name: 'Open Mic',                 category: 'Events',        initials: 'OM', gradient: 'from-orange-700 to-primary', logo: '/logos/OpenMic.jpg'                },
  { name: 'Maru Mehsana',             category: 'Media',         initials: 'MM', gradient: 'from-red-500 to-orange-600', logo: '/logos/MaruMehsana.jpeg'           },
  { name: 'RNG Gujarat',              category: 'Media',         initials: 'RN', gradient: 'from-primary to-red-600'                                               },
  { name: 'Informative Gujarat',      category: 'Media',         initials: 'IG', gradient: 'from-orange-600 to-primary', logo: '/logos/InformativeGujarat.jpeg'    },
  { name: 'Rangoli',                  category: 'Events',        initials: 'RG', gradient: 'from-red-600 to-orange-500', logo: '/logos/Rangoli.jpeg'               },
  { name: 'Namostav',                 category: 'Festival',      initials: 'NS', gradient: 'from-primary to-secondary',  logo: '/logos/Namostav.jpeg'              },
  { name: 'Range Khushi',             category: 'Events',        initials: 'RK', gradient: 'from-orange-700 to-primary', logo: '/logos/RangeKhushi.jpeg'           },
  { name: 'Saptrang Event',           category: 'Events',        initials: 'SE', gradient: 'from-red-500 to-orange-600', logo: '/logos/SaptrangEvent.png'          },
  { name: 'Connplex',                 category: 'Cinema',        initials: 'CX', gradient: 'from-primary to-red-600',    logo: '/logos/Connplex.png'               },
  { name: 'Bicharo Bachelor',         category: 'Entertainment', initials: 'BB', gradient: 'from-orange-600 to-primary', logo: '/logos/BicharoBachelor.avif'       },
  { name: 'Behrupio',                 category: 'Theatre',       initials: 'BH', gradient: 'from-red-600 to-orange-500', logo: '/logos/Behrupio.avif'              },
  { name: 'Khuman',                   category: 'Entertainment', initials: 'KH', gradient: 'from-primary to-secondary',  logo: '/logos/Khuman.png'                 },
  { name: 'The Lighting Word',        category: 'Education',     initials: 'TL', gradient: 'from-orange-700 to-primary', logo: '/logos/TheLightingWord.jpg'        },
  { name: 'Collector of Mehsana',     category: 'Government',    initials: 'CM', gradient: 'from-red-500 to-orange-600', logo: '/logos/CollectorMehsana.jpg'       },
  { name: 'DDO of Mehsana',           category: 'Government',    initials: 'DM', gradient: 'from-primary to-red-600'                                               },
  { name: 'Vishwa Umiya Foundation',  category: 'NGO',           initials: 'VU', gradient: 'from-orange-600 to-primary', logo: '/logos/VishwaUmiyaFoundation.jpg'  },
  { name: 'Ganpat College',           category: 'Education',     initials: 'GC', gradient: 'from-red-600 to-orange-500', logo: '/logos/GanpatClg.png'              },
  { name: 'GTU ITR',                  category: 'Education',     initials: 'GT', gradient: 'from-primary to-secondary',  logo: '/logos/GtuItr.jpeg'                },
  { name: 'Jeev',                     category: 'NGO',           initials: 'JV', gradient: 'from-orange-700 to-primary', logo: '/logos/Jeev.avif'                  },
  { name: 'SFW',                      category: 'Foundation',    initials: 'SW', gradient: 'from-red-500 to-orange-600', logo: '/logos/SFW.jpg'                    },
  { name: 'UPF',                      category: 'Foundation',    initials: 'UF', gradient: 'from-primary to-red-600',    logo: '/logos/UPF.jpeg'                   },
  { name: 'Blue Buddha',              category: 'Wellness',      initials: 'BU', gradient: 'from-orange-600 to-primary', logo: '/logos/BlueBuddha.png'             },
  { name: 'Fly Bit',                  category: 'Tech',          initials: 'FB', gradient: 'from-red-600 to-orange-500', logo: '/logos/FlyBit.jpeg'                },
];

/* ── SVG logo mark — 6 design variants cycling across all brands ── */
const BrandLogo: React.FC<{ brand: BrandData; chipId: number }> = ({ brand, chipId }) => {
  const variant = chipId % 6;
  const [c1, c2] = colorMap[brand.gradient] ?? ['#FF5722', '#FF8A65'];
  const gradId = `lg-${chipId}`;
  const fs = brand.initials.length === 1 ? 20 : 14;
  const ty = brand.initials.length === 1 ? 27 : 26;

  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>

      {/* Background shape — varies by variant */}
      {(variant === 0 || variant === 1 || variant === 3) && (
        <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      )}
      {variant === 2 && (
        <rect width="40" height="40" rx="20" fill={`url(#${gradId})`} />
      )}
      {variant === 4 && (
        <path d="M20 2 L38 12 L38 28 L20 38 L2 28 L2 12 Z" fill={`url(#${gradId})`} />
      )}
      {variant === 5 && (
        <rect width="40" height="40" rx="4" fill={`url(#${gradId})`} />
      )}

      {/* Decorative accent */}
      {variant === 0 && (
        <circle cx="33" cy="7" r="3.5" fill="rgba(255,255,255,0.22)" />
      )}
      {variant === 1 && (
        <rect x="5" y="33.5" width="30" height="2.5" rx="1.25" fill="rgba(255,255,255,0.25)" />
      )}
      {variant === 2 && (
        <circle cx="20" cy="20" r="15" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
      )}
      {variant === 3 && (
        <>
          <circle cx="31.5" cy="9"  r="1.8" fill="rgba(255,255,255,0.3)" />
          <circle cx="31.5" cy="14" r="1.8" fill="rgba(255,255,255,0.3)" />
          <circle cx="36.5" cy="9"  r="1.8" fill="rgba(255,255,255,0.3)" />
          <circle cx="36.5" cy="14" r="1.8" fill="rgba(255,255,255,0.3)" />
        </>
      )}
      {variant === 4 && (
        <path d="M20 6 L34 13.5 L34 26.5 L20 34 L6 26.5 L6 13.5 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      )}
      {variant === 5 && (
        <>
          <path d="M5 14 L5 5 L14 5" stroke="rgba(255,255,255,0.28)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 35 L35 35 L35 26" stroke="rgba(255,255,255,0.28)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {/* Initials */}
      <text
        x="20"
        y={ty}
        textAnchor="middle"
        fill="white"
        fontSize={fs}
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing={brand.initials.length > 1 ? '0.5' : '0'}
      >
        {brand.initials}
      </text>
    </svg>
  );
};

/* ── Brand chip ── */
const BrandChip: React.FC<{ brand: BrandData; chipId: number }> = ({ brand, chipId }) => (
  <div className="flex items-center gap-3 px-4 py-3 bg-dark-lighter border border-white/10 rounded-xl flex-shrink-0 mx-2.5 hover:border-primary/40 hover:bg-white/5 transition-all duration-200 cursor-default select-none">
    {brand.logo ? (
      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-7 h-7 object-contain"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
    ) : (
      <BrandLogo brand={brand} chipId={chipId} />
    )}
    <div>
      <p className="text-white font-semibold text-sm whitespace-nowrap">{brand.name}</p>
      <p className="text-white/40 text-xs">{brand.category}</p>
    </div>
  </div>
);

/* ── Marquee row ── */
const MarqueeRow: React.FC<{
  brands: BrandData[];
  reverse?: boolean;
  speed?: number;
  startIndex?: number;
}> = ({ brands, reverse = false, speed = 40, startIndex = 0 }) => {
  const doubled = [...brands, ...brands];
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee-forward'} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((brand, i) => (
          <BrandChip
            key={`${brand.name}-${i}`}
            brand={brand}
            chipId={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main section ── */
const Brands: React.FC = () => {
  const row1Start = 0;
  const row2Start = brandsRow1.length * 2;
  const row3Start = row2Start + brandsRow2.length * 2;

  return (
    <>
      <style>{`
        @keyframes marquee-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section id="brands" className="section-padding bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
              >
                Trusted By
              </motion.span>
              <h2 className="heading-lg text-white mb-4">Brand Collaborations</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Proudly partnered with 65+ businesses across Mahesana and Gujarat — from local startups to national brands.
              </p>
            </div>

            {/* Marquee rows */}
            <div className="space-y-4 mb-14 -mx-4 md:-mx-8 lg:-mx-16">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
                <MarqueeRow brands={brandsRow1} speed={50} startIndex={row1Start} />
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
                <MarqueeRow brands={brandsRow2} reverse speed={45} startIndex={row2Start} />
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
                <MarqueeRow brands={brandsRow3} speed={55} startIndex={row3Start} />
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {[
                { value: '65+',  label: 'Brands Served'   },
                { value: '15+',  label: 'Industries'      },
                { value: '3+',   label: 'Years of Trust'  },
                { value: '100%', label: 'Client Retention'},
              ].map((stat) => (
                <div key={stat.label} className="text-center p-5 bg-dark-lighter rounded-xl border border-primary/15 hover:border-primary/35 transition-all">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Industry tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-lighter rounded-2xl border border-primary/15 p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <BuildingOfficeIcon className="w-5 h-5 text-primary" />
                <h3 className="text-white font-bold">Industries We Serve</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'F&B & Restaurants', 'Fashion & Lifestyle', 'Real Estate', 'Education',
                  'Mobile & Electronics', 'Events & Entertainment', 'Media & News',
                  'NGO & Foundation', 'Government', 'Fitness & Wellness',
                  'Cinema & Theatre', 'Tourism', 'Jewellery', 'Beauty & Salon', 'Corporate',
                ].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 bg-dark border border-white/10 rounded-full text-white/60 text-xs font-medium hover:border-primary/40 hover:text-white/80 transition-all"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Brands;
