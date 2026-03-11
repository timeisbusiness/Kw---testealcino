import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Home, 
  Grid, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  Phone,
  User,
  Tag,
  Maximize
} from 'lucide-react';

// --- Types ---
type Page = 'accueil' | 'collections' | 'commande';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  { id: 1, name: "Robe de Soirée Émeraude", price: "120€", category: "Robes", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Costume Slim Fit Bleu", price: "250€", category: "Costumes", image: "https://images.unsplash.com/photo-1594932224828-b4b05a2a97dd?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Sac à Main Cuir Noir", price: "85€", category: "Accessoires", image: "https://images.unsplash.com/photo-1584917033904-493bb3c37155?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Montre Classique Or", price: "150€", category: "Accessoires", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Escarpins Satin", price: "95€", category: "Chaussures", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Veste en Lin", price: "110€", category: "Vestes", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800" },
];

const SECTIONS = ["Toutes", "Robes", "Costumes", "Accessoires", "Chaussures", "Vestes"];

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string; icon: any }[] = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'collections', label: 'Nos Collections', icon: Grid },
    { id: 'commande', label: 'Commande', icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold tracking-tighter text-black">LUXE.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-black ${
                  currentPage === item.id ? 'text-black border-b-2 border-black' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
          alt="Fashion Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif text-white mb-6"
        >
          L'Élégance <br /> 
          <span className="italic">Redéfinie</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl font-light tracking-wide"
        >
          Découvrez une collection exclusive conçue pour ceux qui ne font aucun compromis sur le style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10"
        >
          <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Explorer la Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const CollectionsPage = () => {
  const [activeSection, setActiveSection] = useState("Toutes");

  const filteredProducts = activeSection === "Toutes" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeSection);

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-serif mb-4">Nos Collections</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === section 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={product.id}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur p-2 rounded-full shadow-lg">
                  <Maximize size={18} className="text-black" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="text-gray-500 font-light">{product.category} • {product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    modele: '',
    taille: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "33600000000"; // Replace with your WhatsApp number
    const message = `Bonjour ! Je souhaite commander :
- Nom: ${formData.nom}
- Prénom: ${formData.prenom}
- Téléphone: ${formData.telephone}
- Modèle: ${formData.modele}
- Taille: ${formData.taille}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-black/5 p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
            <ShoppingBag size={32} />
          </div>
          <h2 className="text-3xl font-serif">Passer une Commande</h2>
          <p className="text-gray-500 mt-2">Remplissez le formulaire pour finaliser votre achat sur WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User size={16} /> Prénom
              </label>
              <input
                required
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User size={16} /> Nom
              </label>
              <input
                required
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Phone size={16} /> Numéro de téléphone
            </label>
            <input
              required
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+33 6 00 00 00 00"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Tag size={16} /> Modèle
              </label>
              <input
                required
                type="text"
                name="modele"
                value={formData.modele}
                onChange={handleChange}
                placeholder="Ex: Robe Émeraude"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Maximize size={16} /> Taille
              </label>
              <select
                required
                name="taille"
                value={formData.taille}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Choisir une taille</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10"
          >
            <MessageCircle size={20} />
            Commander via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-black/5 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">LUXE.</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            L'excellence du style à portée de main. Nous créons des pièces uniques pour des moments inoubliables.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Légal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Politique de Confidentialité</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Conditions Générales de Vente</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white border border-black/5 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white border border-black/5 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white border border-black/5 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/5 text-center text-xs text-gray-400">
        © 2026 LUXE. Tous droits réservés.
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('accueil');

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'accueil' && (
            <motion.div
              key="accueil"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage />
            </motion.div>
          )}

          {currentPage === 'collections' && (
            <motion.div
              key="collections"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CollectionsPage />
            </motion.div>
          )}

          {currentPage === 'commande' && (
            <motion.div
              key="commande"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <OrderPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
