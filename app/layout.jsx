import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css';



/**
 * @type {import(next).Metadata}
 * 
 */
export const metadata = {
    title: "Magazine Scans",
    description: "website presenting different scans from multiple vintage magazines",
};


export default function RootLayout({ children }) {
    return <html lang="en">
        <body className={styles.body}>
            <Header />
          
          <main className={styles.main}>
        
                {children}   
             
                </main>
             
         <Footer />
            
        </body>
    </html>
}
