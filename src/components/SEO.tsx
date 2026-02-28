import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
    keywords?: string;
}

export default function SEO({
    title,
    description,
    name = 'GreatWork Academy',
    type = 'website',
    image = 'https://greatwork.in/default-og-image.jpg',
    url = 'https://greatwork.in',
    keywords = 'learning, courses, education, training, online classes'
}: SEOProps) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title} | {name}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
            <meta property="og:title" content={`${title} | ${name}`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | ${name}`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical tag */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
