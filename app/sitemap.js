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

                url: 'http://localhost3000/seasons',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6
            },
            {

                url: 'http://localhost3000/scans',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8
            },
            {

                url: 'http://localhost3000/contact',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.3
            },
            {

            url: 'http://localhost3000/magazine1',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
           },
           {

            url: 'http://localhost3000/magazine2',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
           },

    ]
}