import "./globals.css";
import { Geist, Geist_Mono, Manrope} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope= Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "PTS Diagnostics",
  description: "PTS Diagnostics Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WNF04M649E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WNF04M649E'); 
</script>
      </head> 
      <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable}  antialiased`}>
        <Navbar />
        {children}
        
        <Footer />
        
      </body>
    </html>
  );
}
