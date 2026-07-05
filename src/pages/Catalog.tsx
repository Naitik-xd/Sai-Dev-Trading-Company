import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const catalogData = [
  {
    category: "Eye Wash",
    folder: "Eye Wash",
    files: ["IMG-20260703-WA0065.jpg","IMG-20260703-WA0066.jpg","IMG-20260703-WA0067.jpg","IMG-20260703-WA0068.jpg","IMG-20260703-WA0069.jpg","IMG-20260703-WA0070.jpg","IMG-20260703-WA0071.jpg","IMG-20260703-WA0072.jpg","IMG-20260703-WA0073.jpg","IMG-20260703-WA0074.jpg","IMG-20260703-WA0075.jpg","IMG-20260703-WA0076.jpg"]
  },
  {
    category: "Fire Goods",
    folder: "Fire Goods",
    files: ["IMG-20260703-WA0193.jpg","IMG-20260703-WA0194.jpg","IMG-20260703-WA0195.jpg","IMG-20260703-WA0196.jpg","IMG-20260703-WA0197.jpg","IMG-20260703-WA0198.jpg","IMG-20260703-WA0199.jpg","IMG-20260703-WA0200.jpg","IMG-20260703-WA0201.jpg","IMG-20260703-WA0202.jpg","IMG-20260703-WA0203.jpg","IMG-20260703-WA0204.jpg","IMG-20260703-WA0205.jpg","IMG-20260703-WA0206.jpg","IMG-20260703-WA0207.jpg","IMG-20260703-WA0208.jpg","IMG-20260703-WA0209.jpg","IMG-20260703-WA0210.jpg","IMG-20260703-WA0211.jpg","IMG-20260703-WA0212.jpg","IMG-20260703-WA0213.jpg","IMG-20260703-WA0214.jpg","IMG-20260703-WA0221.jpg","IMG-20260703-WA0222.jpg"]
  },
  {
    category: "Gen Goods",
    folder: "Gen Goods",
    files: ["IMG-20260703-WA0215.jpg","IMG-20260703-WA0216.jpg","IMG-20260703-WA0217.jpg","IMG-20260703-WA0218.jpg","IMG-20260703-WA0219.jpg","IMG-20260703-WA0220.jpg","IMG-20260703-WA0221.jpg","IMG-20260703-WA0222.jpg","IMG-20260703-WA0223.jpg","IMG-20260703-WA0224.jpg","IMG-20260703-WA0225.jpg","IMG-20260703-WA0226.jpg","IMG-20260703-WA0227.jpg","IMG-20260703-WA0228.jpg","IMG-20260703-WA0229.jpg","IMG-20260703-WA0230.jpg","IMG-20260703-WA0231.jpg","IMG-20260703-WA0232.jpg","IMG-20260703-WA0233.jpg","IMG-20260703-WA0234.jpg","IMG-20260703-WA0235.jpg","IMG-20260703-WA0236.jpg","IMG-20260703-WA0237.jpg","IMG-20260703-WA0238.jpg","IMG-20260703-WA0239.jpg","IMG-20260703-WA0240.jpg"]
  },
  {
    category: "Hand Gloves",
    folder: "Hand Gloves ",
    files: ["IMG-20260703-WA0025.jpg","IMG-20260703-WA0026.jpg","IMG-20260703-WA0027.jpg","IMG-20260703-WA0028.jpg","IMG-20260703-WA0029.jpg","IMG-20260703-WA0030.jpg","IMG-20260703-WA0031.jpg","IMG-20260703-WA0032.jpg","IMG-20260703-WA0033.jpg","IMG-20260703-WA0034.jpg","IMG-20260703-WA0035.jpg","IMG-20260703-WA0036.jpg","IMG-20260703-WA0037.jpg","IMG-20260703-WA0038.jpg","IMG-20260703-WA0039.jpg","IMG-20260703-WA0040.jpg","IMG-20260703-WA0041.jpg","IMG-20260703-WA0042.jpg","IMG-20260703-WA0043.jpg","IMG-20260703-WA0044.jpg","IMG-20260703-WA0045.jpg","IMG-20260703-WA0046.jpg","IMG-20260703-WA0047.jpg","IMG-20260703-WA0048.jpg","IMG-20260703-WA0049.jpg","IMG-20260703-WA0050.jpg","IMG-20260703-WA0051.jpg","IMG-20260703-WA0052.jpg","IMG-20260703-WA0053.jpg"]
  },
  {
    category: "Loto Goods",
    folder: "Loto Goods ",
    files: ["IMG-20260703-WA0077.jpg","IMG-20260703-WA0078.jpg","IMG-20260703-WA0079.jpg","IMG-20260703-WA0080.jpg","IMG-20260703-WA0081.jpg","IMG-20260703-WA0082.jpg","IMG-20260703-WA0083.jpg","IMG-20260703-WA0084.jpg","IMG-20260703-WA0085.jpg","IMG-20260703-WA0086.jpg","IMG-20260703-WA0087.jpg","IMG-20260703-WA0088.jpg","IMG-20260703-WA0089.jpg","IMG-20260703-WA0090.jpg","IMG-20260703-WA0091.jpg","IMG-20260703-WA0092.jpg","IMG-20260703-WA0093.jpg","IMG-20260703-WA0094.jpg","IMG-20260703-WA0095.jpg","IMG-20260703-WA0096.jpg","IMG-20260703-WA0097.jpg","IMG-20260703-WA0098.jpg","IMG-20260703-WA0099.jpg","IMG-20260703-WA0100.jpg","IMG-20260703-WA0101.jpg","IMG-20260703-WA0102.jpg","IMG-20260703-WA0103.jpg","IMG-20260703-WA0104.jpg","IMG-20260703-WA0105.jpg","IMG-20260703-WA0106.jpg","IMG-20260703-WA0107.jpg","IMG-20260703-WA0108.jpg","IMG-20260703-WA0109.jpg","IMG-20260703-WA0110.jpg","IMG-20260703-WA0111.jpg","IMG-20260703-WA0112.jpg"]
  },
  {
    category: "Road Safety",
    folder: "Road Safety ",
    files: ["IMG-20260703-WA0113.jpg","IMG-20260703-WA0114.jpg","IMG-20260703-WA0115.jpg","IMG-20260703-WA0116.jpg","IMG-20260703-WA0117.jpg","IMG-20260703-WA0118.jpg","IMG-20260703-WA0119.jpg","IMG-20260703-WA0120.jpg","IMG-20260703-WA0121.jpg","IMG-20260703-WA0122.jpg","IMG-20260703-WA0123.jpg","IMG-20260703-WA0124.jpg","IMG-20260703-WA0125.jpg","IMG-20260703-WA0126.jpg","IMG-20260703-WA0127.jpg","IMG-20260703-WA0128.jpg","IMG-20260703-WA0129.jpg","IMG-20260703-WA0130.jpg","IMG-20260703-WA0131.jpg","IMG-20260703-WA0132.jpg","IMG-20260703-WA0133.jpg","IMG-20260703-WA0134.jpg","IMG-20260703-WA0135.jpg","IMG-20260703-WA0136.jpg","IMG-20260703-WA0137.jpg","IMG-20260703-WA0138.jpg","IMG-20260703-WA0139.jpg","IMG-20260703-WA0140.jpg","IMG-20260703-WA0141.jpg","IMG-20260703-WA0142.jpg","IMG-20260703-WA0143.jpg","IMG-20260703-WA0149.jpg","IMG-20260703-WA0150.jpg","IMG-20260703-WA0151.jpg","IMG-20260703-WA0152.jpg","IMG-20260703-WA0153.jpg","IMG-20260703-WA0154.jpg","IMG-20260703-WA0155.jpg","IMG-20260703-WA0156.jpg","IMG-20260703-WA0157.jpg","IMG-20260703-WA0158.jpg","IMG-20260703-WA0159.jpg","IMG-20260703-WA0160.jpg","IMG-20260703-WA0161.jpg","IMG-20260703-WA0162.jpg","IMG-20260703-WA0163.jpg","IMG-20260703-WA0164.jpg","IMG-20260703-WA0165.jpg","IMG-20260703-WA0166.jpg","IMG-20260703-WA0167.jpg","IMG-20260703-WA0168.jpg","IMG-20260703-WA0169.jpg"]
  },
  {
    category: "Safety Harness",
    folder: "Safety Harness ",
    files: ["IMG-20260703-WA0007.jpg","IMG-20260703-WA0008.jpg","IMG-20260703-WA0009.jpg","IMG-20260703-WA0010.jpg"]
  },
  {
    category: "Safety Helmet",
    folder: "Safety Helmet ",
    files: ["IMG-20260703-WA0000.jpg","IMG-20260703-WA0001.jpg","IMG-20260703-WA0002.jpg","IMG-20260703-WA0003.jpg","IMG-20260703-WA0004.jpg","IMG-20260703-WA0005.jpg","IMG-20260703-WA0006.jpg"]
  },
  {
    category: "Safety Jacket",
    folder: "Safety Jacket ",
    files: ["IMG-20260703-WA0170.jpg","IMG-20260703-WA0171.jpg","IMG-20260703-WA0172.jpg","IMG-20260703-WA0173.jpg","IMG-20260703-WA0174.jpg","IMG-20260703-WA0175.jpg","IMG-20260703-WA0176.jpg","IMG-20260703-WA0177.jpg","IMG-20260703-WA0178.jpg","IMG-20260703-WA0179.jpg","IMG-20260703-WA0180.jpg","IMG-20260703-WA0181.jpg","IMG-20260703-WA0182.jpg","IMG-20260703-WA0183.jpg","IMG-20260703-WA0184.jpg","IMG-20260703-WA0185.jpg","IMG-20260703-WA0186.jpg"]
  },
  {
    category: "Safety Nets",
    folder: "Safety Nets ",
    files: ["IMG-20260703-WA0241.jpg","IMG-20260703-WA0242.jpg","IMG-20260703-WA0243.jpg","IMG-20260703-WA0244.jpg","IMG-20260703-WA0245.jpg","IMG-20260703-WA0246.jpg","IMG-20260703-WA0247.jpg","IMG-20260703-WA0248.jpg","IMG-20260703-WA0249.jpg","IMG-20260703-WA0250.jpg","IMG-20260703-WA0251.jpg","IMG-20260703-WA0252.jpg","IMG-20260703-WA0253.jpg","IMG-20260703-WA0254.jpg","IMG-20260703-WA0255.jpg","IMG-20260703-WA0256.jpg"]
  },
  {
    category: "Safety Shoe",
    folder: "Safety Shoe",
    files: ["IMG-20260703-WA0011.jpg","IMG-20260703-WA0012.jpg","IMG-20260703-WA0013.jpg","IMG-20260703-WA0014.jpg","IMG-20260703-WA0015.jpg","IMG-20260703-WA0016.jpg","IMG-20260703-WA0017.jpg","IMG-20260703-WA0018.jpg","IMG-20260703-WA0019.jpg","IMG-20260703-WA0020.jpg","IMG-20260703-WA0021.jpg","IMG-20260703-WA0022.jpg","IMG-20260703-WA0023.jpg","IMG-20260703-WA0024.jpg"]
  },
  {
    category: "Trolley Wheels",
    folder: "Trolley Wheels",
    files: ["IMG-20260703-WA0139.jpg","IMG-20260703-WA0143.jpg","IMG-20260703-WA0144.jpg","IMG-20260703-WA0145.jpg","IMG-20260703-WA0146.jpg","IMG-20260703-WA0147.jpg","IMG-20260703-WA0148.jpg"]
  }
];

function ProductCarousel({ data }: { data: { category: string, folder: string, files: string[] } }) {
  const { category, folder, files } = data;
  const items = files.length > 0 
    ? files.map((file, i) => ({ id: i, image: `/web/${encodeURIComponent(folder)}/${encodeURIComponent(file)}` }))
    : [{ id: 0, image: null }];
  
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > Math.floor(items.length / 2)) diff -= items.length;
    if (diff < -Math.floor(items.length / 2)) diff += items.length;
    return diff;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 border-b border-white/5 last:border-b-0">
      <h3 className="font-display text-2xl md:text-3xl text-cta-color uppercase tracking-wider mb-8 text-center">
        {category}
      </h3>
      
      <div 
        className="relative h-[450px] md:h-[400px] w-full max-w-4xl mx-auto flex items-center justify-center mt-10"
        style={{ perspective: "1200px" }}
        ref={containerRef}
      >
        {items.map((item, index) => {
          const offset = getOffset(index);
          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= 2;
          const isCenter = offset === 0;
            
          return (
            <motion.div
              key={item.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              onClick={() => isVisible && setActiveIndex(index)}
              initial={false}
              className="absolute w-full max-w-[280px] md:max-w-[320px] cursor-pointer touch-pan-y"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                x: `${offset * (isMobile ? 60 : 75)}%`,
                y: 0,
                z: -absOffset * (isMobile ? 150 : 250),
                rotateY: -offset * (isMobile ? 20 : 35),
                rotateX: 0,
                scale: isCenter ? 1 : 0.85,
                opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                zIndex: 20 - absOffset,
                pointerEvents: isVisible ? "auto" : "none"
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div 
                className={`bg-white shadow-2xl flex flex-col h-[360px] md:h-[400px] relative overflow-hidden group transition-colors duration-500 rounded-lg ${isCenter ? 'ring-2 ring-cta-color' : ''}`}
              >
                {item.image ? (
                  <img src={item.image} alt={category} className="w-full h-full object-contain p-4" />
                ) : (
                  <div className="flex-grow flex flex-col items-center justify-center text-gray-400 p-8">
                    <ImageIcon size={48} strokeWidth={1} className="mb-4" />
                    <span className="text-xl font-medium uppercase tracking-wider">Coming Soon</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Navigation Controls */}
        {items.length > 1 && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-8 z-[60]">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 text-white hover:bg-cta-color hover:text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.3)] active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-8 z-[60]">
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 text-white hover:bg-cta-color hover:text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.3)] active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </>
        )}
      </div>
      
      {/* Indicators */}
      {items.length > 1 && (
        <div className="flex items-center space-x-2 mt-8">
          {items.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? 'bg-cta-color w-8' 
                  : 'bg-cta-color/20 w-2 hover:bg-cta-color/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Catalog() {
  return (
    <main className="flex-grow bg-[#050A12] text-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            Product <span className="text-cta-color">Catalog</span>
          </h1>
          <div className="w-16 h-1 bg-cta-color mx-auto mb-6"></div>
          <p className="text-cta-color text-lg md:text-xl font-medium">
            We have many more products available. For enquiries, call <a href="tel:+918126085044" className="hover:underline hover:text-white transition-colors">Amit Kumar: +91 8126085044</a> or <a href="tel:+918630006168" className="hover:underline hover:text-white transition-colors">Kush: +91 8630006168</a>
          </p>
        </div>

        <div className="flex flex-col">
          {catalogData.map(data => (
            <ProductCarousel key={data.category} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
}
