/**
 * 
 * @returns {import("next").MetadataRoute.sitemap} 
 */

export default function sitemap(){

    return [
            {

                url: 'http://localhost3000/',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8
            }, 
            {

                url: 'http://localhost3000/',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8
            }
            

    ]
}