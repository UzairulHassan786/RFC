import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppWidget = () => {
  return (
    <motion.a
  href="https://wa.me/3419487674"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
  title="Chat on WhatsApp"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="flex items-center justify-center"
  >
    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
  </motion.div>
  <span className="hidden sm:inline font-medium">Chat with us</span>
</motion.a>

  );
};
