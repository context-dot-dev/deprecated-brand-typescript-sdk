// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Brand extends APIResource {
  /**
   * Retrieve logos, backdrops, colors, industry, description, and more from any
   * domain
   */
  retrieve(query: BrandRetrieveParams, options?: RequestOptions): APIPromise<BrandRetrieveResponse> {
    return this._client.get('/brand/retrieve', { query, ...options });
  }

  /**
   * Given a single URL, determines if it is a product page and extracts the product
   * information.
   */
  aiProduct(body: BrandAIProductParams, options?: RequestOptions): APIPromise<BrandAIProductResponse> {
    return this._client.post('/brand/ai/product', { body, ...options });
  }

  /**
   * Extract product information from a brand's website. We will analyze the website
   * and return a list of products with details such as name, description, image,
   * pricing, features, and more.
   */
  aiProducts(body: BrandAIProductsParams, options?: RequestOptions): APIPromise<BrandAIProductsResponse> {
    return this._client.post('/brand/ai/products', { body, ...options });
  }

  /**
   * Use AI to extract specific data points from a brand's website. The AI will crawl
   * the website and extract the requested information based on the provided data
   * points.
   */
  aiQuery(body: BrandAIQueryParams, options?: RequestOptions): APIPromise<BrandAIQueryResponse> {
    return this._client.post('/brand/ai/query', { body, ...options });
  }

  /**
   * Endpoint specially designed for platforms that want to identify transaction data
   * by the transaction title.
   */
  identifyFromTransaction(
    query: BrandIdentifyFromTransactionParams,
    options?: RequestOptions,
  ): APIPromise<BrandIdentifyFromTransactionResponse> {
    return this._client.get('/brand/transaction_identifier', { query, ...options });
  }

  /**
   * Signal that you may fetch brand data for a particular domain soon to improve
   * latency.
   */
  prefetch(body: BrandPrefetchParams, options?: RequestOptions): APIPromise<BrandPrefetchResponse> {
    return this._client.post('/brand/prefetch', { body, ...options });
  }

  /**
   * Signal that you may fetch brand data for a particular domain soon to improve
   * latency. This endpoint accepts an email address, extracts the domain from it,
   * validates that it's not a disposable or free email provider, and queues the
   * domain for prefetching.
   */
  prefetchByEmail(
    body: BrandPrefetchByEmailParams,
    options?: RequestOptions,
  ): APIPromise<BrandPrefetchByEmailResponse> {
    return this._client.post('/brand/prefetch-by-email', { body, ...options });
  }

  /**
   * Retrieve brand information using an email address while detecting disposable and
   * free email addresses. Disposable and free email addresses (like gmail.com,
   * yahoo.com) will throw a 422 error.
   */
  retrieveByEmail(
    query: BrandRetrieveByEmailParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByEmailResponse> {
    return this._client.get('/brand/retrieve-by-email', { query, ...options });
  }

  /**
   * Retrieve brand information using an ISIN (International Securities
   * Identification Number).
   */
  retrieveByIsin(
    query: BrandRetrieveByIsinParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByIsinResponse> {
    return this._client.get('/brand/retrieve-by-isin', { query, ...options });
  }

  /**
   * Retrieve brand information using a company name.
   */
  retrieveByName(
    query: BrandRetrieveByNameParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByNameResponse> {
    return this._client.get('/brand/retrieve-by-name', { query, ...options });
  }

  /**
   * Retrieve brand information using a stock ticker symbol.
   */
  retrieveByTicker(
    query: BrandRetrieveByTickerParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByTickerResponse> {
    return this._client.get('/brand/retrieve-by-ticker', { query, ...options });
  }

  /**
   * Returns a simplified version of brand data containing only essential
   * information: domain, title, colors, logos, and backdrops. Optimized for faster
   * responses and reduced data transfer.
   */
  retrieveSimplified(
    query: BrandRetrieveSimplifiedParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveSimplifiedResponse> {
    return this._client.get('/brand/retrieve-simplified', { query, ...options });
  }

  /**
   * Scrapes the given URL and returns the raw HTML content of the page.
   */
  webScrapeHTML(
    query: BrandWebScrapeHTMLParams,
    options?: RequestOptions,
  ): APIPromise<BrandWebScrapeHTMLResponse> {
    return this._client.get('/web/scrape/html', { query, ...options });
  }

  /**
   * Scrapes all images from the given URL. Extracts images from img, svg,
   * picture/source, link, and video elements including inline SVGs, base64 data
   * URIs, and standard URLs.
   */
  webScrapeImages(
    query: BrandWebScrapeImagesParams,
    options?: RequestOptions,
  ): APIPromise<BrandWebScrapeImagesResponse> {
    return this._client.get('/web/scrape/images', { query, ...options });
  }

  /**
   * Scrapes the given URL into LLM usable Markdown.
   */
  webScrapeMd(query: BrandWebScrapeMdParams, options?: RequestOptions): APIPromise<BrandWebScrapeMdResponse> {
    return this._client.get('/web/scrape/markdown', { query, ...options });
  }

  /**
   * Crawl an entire website's sitemap and return all discovered page URLs.
   */
  webScrapeSitemap(
    query: BrandWebScrapeSitemapParams,
    options?: RequestOptions,
  ): APIPromise<BrandWebScrapeSitemapResponse> {
    return this._client.get('/web/scrape/sitemap', { query, ...options });
  }
}

export interface BrandRetrieveResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * Company email address
     */
    email?: string;

    /**
     * Industry classification information for the brand
     */
    industries?: Brand.Industries;

    /**
     * Indicates whether the brand content is not safe for work (NSFW)
     */
    is_nsfw?: boolean;

    /**
     * Important website links for the brand
     */
    links?: Brand.Links;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * Company phone number
     */
    phone?: string;

    /**
     * The primary language of the brand's website content. Detected from the HTML lang
     * tag, page content analysis, or social media descriptions.
     */
    primary_language?:
      | 'afrikaans'
      | 'albanian'
      | 'amharic'
      | 'arabic'
      | 'armenian'
      | 'assamese'
      | 'aymara'
      | 'azeri'
      | 'basque'
      | 'belarusian'
      | 'bengali'
      | 'bosnian'
      | 'bulgarian'
      | 'burmese'
      | 'cantonese'
      | 'catalan'
      | 'cebuano'
      | 'chinese'
      | 'corsican'
      | 'croatian'
      | 'czech'
      | 'danish'
      | 'dutch'
      | 'english'
      | 'esperanto'
      | 'estonian'
      | 'farsi'
      | 'fijian'
      | 'finnish'
      | 'french'
      | 'galician'
      | 'georgian'
      | 'german'
      | 'greek'
      | 'guarani'
      | 'gujarati'
      | 'haitian-creole'
      | 'hausa'
      | 'hawaiian'
      | 'hebrew'
      | 'hindi'
      | 'hmong'
      | 'hungarian'
      | 'icelandic'
      | 'igbo'
      | 'indonesian'
      | 'irish'
      | 'italian'
      | 'japanese'
      | 'javanese'
      | 'kannada'
      | 'kazakh'
      | 'khmer'
      | 'kinyarwanda'
      | 'korean'
      | 'kurdish'
      | 'kyrgyz'
      | 'lao'
      | 'latin'
      | 'latvian'
      | 'lingala'
      | 'lithuanian'
      | 'luxembourgish'
      | 'macedonian'
      | 'malagasy'
      | 'malay'
      | 'malayalam'
      | 'maltese'
      | 'maori'
      | 'marathi'
      | 'mongolian'
      | 'nepali'
      | 'norwegian'
      | 'odia'
      | 'oromo'
      | 'pashto'
      | 'pidgin'
      | 'polish'
      | 'portuguese'
      | 'punjabi'
      | 'quechua'
      | 'romanian'
      | 'russian'
      | 'samoan'
      | 'scottish-gaelic'
      | 'serbian'
      | 'sesotho'
      | 'shona'
      | 'sindhi'
      | 'sinhala'
      | 'slovak'
      | 'slovene'
      | 'somali'
      | 'spanish'
      | 'sundanese'
      | 'swahili'
      | 'swedish'
      | 'tagalog'
      | 'tajik'
      | 'tamil'
      | 'tatar'
      | 'telugu'
      | 'thai'
      | 'tibetan'
      | 'tigrinya'
      | 'tongan'
      | 'tswana'
      | 'turkish'
      | 'turkmen'
      | 'ukrainian'
      | 'urdu'
      | 'uyghur'
      | 'uzbek'
      | 'vietnamese'
      | 'welsh'
      | 'wolof'
      | 'xhosa'
      | 'yiddish'
      | 'yoruba'
      | 'zulu'
      | null;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    /**
     * Industry classification information for the brand
     */
    export interface Industries {
      /**
       * Easy Industry Classification - array of industry and subindustry pairs
       */
      eic?: Array<Industries.Eic>;
    }

    export namespace Industries {
      export interface Eic {
        /**
         * Industry classification enum
         */
        industry:
          | 'Aerospace & Defense'
          | 'Technology'
          | 'Finance'
          | 'Healthcare'
          | 'Retail & E-commerce'
          | 'Entertainment'
          | 'Education'
          | 'Government & Nonprofit'
          | 'Industrial & Energy'
          | 'Automotive & Transportation'
          | 'Lifestyle & Leisure'
          | 'Luxury & Fashion'
          | 'News & Media'
          | 'Sports'
          | 'Real Estate & PropTech'
          | 'Legal & Compliance'
          | 'Telecommunications'
          | 'Agriculture & Food'
          | 'Professional Services & Agencies'
          | 'Chemicals & Materials'
          | 'Logistics & Supply Chain'
          | 'Hospitality & Tourism'
          | 'Construction & Built Environment'
          | 'Consumer Packaged Goods (CPG)';

        /**
         * Subindustry classification enum
         */
        subindustry:
          | 'Defense Systems & Military Hardware'
          | 'Aerospace Manufacturing'
          | 'Avionics & Navigation Technology'
          | 'Subsea & Naval Defense Systems'
          | 'Space & Satellite Technology'
          | 'Defense IT & Systems Integration'
          | 'Software (B2B)'
          | 'Software (B2C)'
          | 'Cloud Infrastructure & DevOps'
          | 'Cybersecurity'
          | 'Artificial Intelligence & Machine Learning'
          | 'Data Infrastructure & Analytics'
          | 'Hardware & Semiconductors'
          | 'Fintech Infrastructure'
          | 'eCommerce & Marketplace Platforms'
          | 'Developer Tools & APIs'
          | 'Web3 & Blockchain'
          | 'XR & Spatial Computing'
          | 'Banking & Lending'
          | 'Investment Management & WealthTech'
          | 'Insurance & InsurTech'
          | 'Payments & Money Movement'
          | 'Accounting, Tax & Financial Planning Tools'
          | 'Capital Markets & Trading Platforms'
          | 'Financial Infrastructure & APIs'
          | 'Credit Scoring & Risk Management'
          | 'Cryptocurrency & Digital Assets'
          | 'BNPL & Alternative Financing'
          | 'Healthcare Providers & Services'
          | 'Pharmaceuticals & Drug Development'
          | 'Medical Devices & Diagnostics'
          | 'Biotechnology & Genomics'
          | 'Digital Health & Telemedicine'
          | 'Health Insurance & Benefits Tech'
          | 'Clinical Trials & Research Platforms'
          | 'Mental Health & Wellness'
          | 'Healthcare IT & EHR Systems'
          | 'Consumer Health & Wellness Products'
          | 'Online Marketplaces'
          | 'Direct-to-Consumer (DTC) Brands'
          | 'Retail Tech & Point-of-Sale Systems'
          | 'Omnichannel & In-Store Retail'
          | 'E-commerce Enablement & Infrastructure'
          | 'Subscription & Membership Commerce'
          | 'Social Commerce & Influencer Platforms'
          | 'Fashion & Apparel Retail'
          | 'Food, Beverage & Grocery E-commerce'
          | 'Streaming Platforms (Video, Music, Audio)'
          | 'Gaming & Interactive Entertainment'
          | 'Creator Economy & Influencer Platforms'
          | 'Advertising, Adtech & Media Buying'
          | 'Film, TV & Production Studios'
          | 'Events, Venues & Live Entertainment'
          | 'Virtual Worlds & Metaverse Experiences'
          | 'K-12 Education Platforms & Tools'
          | 'Higher Education & University Tech'
          | 'Online Learning & MOOCs'
          | 'Test Prep & Certification'
          | 'Corporate Training & Upskilling'
          | 'Tutoring & Supplemental Learning'
          | 'Education Management Systems (LMS/SIS)'
          | 'Language Learning'
          | 'Creator-Led & Cohort-Based Courses'
          | 'Special Education & Accessibility Tools'
          | 'Government Technology & Digital Services'
          | 'Civic Engagement & Policy Platforms'
          | 'International Development & Humanitarian Aid'
          | 'Philanthropy & Grantmaking'
          | 'Nonprofit Operations & Fundraising Tools'
          | 'Public Health & Social Services'
          | 'Education & Youth Development Programs'
          | 'Environmental & Climate Action Organizations'
          | 'Legal Aid & Social Justice Advocacy'
          | 'Municipal & Infrastructure Services'
          | 'Manufacturing & Industrial Automation'
          | 'Energy Production (Oil, Gas, Nuclear)'
          | 'Renewable Energy & Cleantech'
          | 'Utilities & Grid Infrastructure'
          | 'Industrial IoT & Monitoring Systems'
          | 'Construction & Heavy Equipment'
          | 'Mining & Natural Resources'
          | 'Environmental Engineering & Sustainability'
          | 'Energy Storage & Battery Technology'
          | 'Automotive OEMs & Vehicle Manufacturing'
          | 'Electric Vehicles (EVs) & Charging Infrastructure'
          | 'Mobility-as-a-Service (MaaS)'
          | 'Fleet Management'
          | 'Public Transit & Urban Mobility'
          | 'Autonomous Vehicles & ADAS'
          | 'Aftermarket Parts & Services'
          | 'Telematics & Vehicle Connectivity'
          | 'Aviation & Aerospace Transport'
          | 'Maritime Shipping'
          | 'Fitness & Wellness'
          | 'Beauty & Personal Care'
          | 'Home & Living'
          | 'Dating & Relationships'
          | 'Hobbies, Crafts & DIY'
          | 'Outdoor & Recreational Gear'
          | 'Events, Experiences & Ticketing Platforms'
          | 'Designer & Luxury Apparel'
          | 'Accessories, Jewelry & Watches'
          | 'Footwear & Leather Goods'
          | 'Beauty, Fragrance & Skincare'
          | 'Fashion Marketplaces & Retail Platforms'
          | 'Sustainable & Ethical Fashion'
          | 'Resale, Vintage & Circular Fashion'
          | 'Fashion Tech & Virtual Try-Ons'
          | 'Streetwear & Emerging Luxury'
          | 'Couture & Made-to-Measure'
          | 'News Publishing & Journalism'
          | 'Digital Media & Content Platforms'
          | 'Broadcasting (TV & Radio)'
          | 'Podcasting & Audio Media'
          | 'News Aggregators & Curation Tools'
          | 'Independent & Creator-Led Media'
          | 'Newsletters & Substack-Style Platforms'
          | 'Political & Investigative Media'
          | 'Trade & Niche Publications'
          | 'Media Monitoring & Analytics'
          | 'Professional Teams & Leagues'
          | 'Sports Media & Broadcasting'
          | 'Sports Betting & Fantasy Sports'
          | 'Fitness & Athletic Training Platforms'
          | 'Sportswear & Equipment'
          | 'Esports & Competitive Gaming'
          | 'Sports Venues & Event Management'
          | 'Athlete Management & Talent Agencies'
          | 'Sports Tech & Performance Analytics'
          | 'Youth, Amateur & Collegiate Sports'
          | 'Real Estate Marketplaces'
          | 'Property Management Software'
          | 'Rental Platforms'
          | 'Mortgage & Lending Tech'
          | 'Real Estate Investment Platforms'
          | 'Law Firms & Legal Services'
          | 'Legal Tech & Automation'
          | 'Regulatory Compliance'
          | 'E-Discovery & Litigation Tools'
          | 'Contract Management'
          | 'Governance, Risk & Compliance (GRC)'
          | 'IP & Trademark Management'
          | 'Legal Research & Intelligence'
          | 'Compliance Training & Certification'
          | 'Whistleblower & Ethics Reporting'
          | 'Mobile & Wireless Networks (3G/4G/5G)'
          | 'Broadband & Fiber Internet'
          | 'Satellite & Space-Based Communications'
          | 'Network Equipment & Infrastructure'
          | 'Telecom Billing & OSS/BSS Systems'
          | 'VoIP & Unified Communications'
          | 'Internet Service Providers (ISPs)'
          | 'Edge Computing & Network Virtualization'
          | 'IoT Connectivity Platforms'
          | 'Precision Agriculture & AgTech'
          | 'Crop & Livestock Production'
          | 'Food & Beverage Manufacturing & Processing'
          | 'Food Distribution'
          | 'Restaurants & Food Service'
          | 'Agricultural Inputs & Equipment'
          | 'Sustainable & Regenerative Agriculture'
          | 'Seafood & Aquaculture'
          | 'Management Consulting'
          | 'Marketing & Advertising Agencies'
          | 'Design, Branding & Creative Studios'
          | 'IT Services & Managed Services'
          | 'Staffing, Recruiting & Talent'
          | 'Accounting & Tax Firms'
          | 'Public Relations & Communications'
          | 'Business Process Outsourcing (BPO)'
          | 'Professional Training & Coaching'
          | 'Specialty Chemicals'
          | 'Commodity & Petrochemicals'
          | 'Polymers, Plastics & Rubber'
          | 'Coatings, Adhesives & Sealants'
          | 'Industrial Gases'
          | 'Advanced Materials & Composites'
          | 'Battery Materials & Energy Storage'
          | 'Electronic Materials & Semiconductor Chemicals'
          | 'Agrochemicals & Fertilizers'
          | 'Freight & Transportation Tech'
          | 'Last-Mile Delivery'
          | 'Warehouse Automation'
          | 'Supply Chain Visibility Platforms'
          | 'Logistics Marketplaces'
          | 'Shipping & Freight Forwarding'
          | 'Cold Chain Logistics'
          | 'Reverse Logistics & Returns'
          | 'Cross-Border Trade Tech'
          | 'Transportation Management Systems (TMS)'
          | 'Hotels & Accommodation'
          | 'Vacation Rentals & Short-Term Stays'
          | 'Restaurant Tech & Management'
          | 'Travel Booking Platforms'
          | 'Tourism Experiences & Activities'
          | 'Cruise Lines & Marine Tourism'
          | 'Hospitality Management Systems'
          | 'Event & Venue Management'
          | 'Corporate Travel Management'
          | 'Travel Insurance & Protection'
          | 'Construction Management Software'
          | 'BIM/CAD & Design Tools'
          | 'Construction Marketplaces'
          | 'Equipment Rental & Management'
          | 'Building Materials & Procurement'
          | 'Construction Workforce Management'
          | 'Project Estimation & Bidding'
          | 'Modular & Prefab Construction'
          | 'Construction Safety & Compliance'
          | 'Smart Building Technology'
          | 'Food & Beverage CPG'
          | 'Home & Personal Care CPG'
          | 'CPG Analytics & Insights'
          | 'Direct-to-Consumer CPG Brands'
          | 'CPG Supply Chain & Distribution'
          | 'Private Label Manufacturing'
          | 'CPG Retail Intelligence'
          | 'Sustainable CPG & Packaging'
          | 'Beauty & Cosmetics CPG'
          | 'Health & Wellness CPG';
      }
    }

    /**
     * Important website links for the brand
     */
    export interface Links {
      /**
       * URL to the brand's blog or news page
       */
      blog?: string | null;

      /**
       * URL to the brand's careers or job opportunities page
       */
      careers?: string | null;

      /**
       * URL to the brand's contact or contact us page
       */
      contact?: string | null;

      /**
       * URL to the brand's pricing or plans page
       */
      pricing?: string | null;

      /**
       * URL to the brand's privacy policy page
       */
      privacy?: string | null;

      /**
       * URL to the brand's terms of service or terms and conditions page
       */
      terms?: string | null;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media platform
       */
      type?:
        | 'x'
        | 'facebook'
        | 'instagram'
        | 'linkedin'
        | 'youtube'
        | 'pinterest'
        | 'tiktok'
        | 'dribbble'
        | 'github'
        | 'behance'
        | 'snapchat'
        | 'whatsapp'
        | 'telegram'
        | 'line'
        | 'discord'
        | 'twitch'
        | 'vimeo'
        | 'imdb'
        | 'tumblr'
        | 'flickr'
        | 'giphy'
        | 'medium'
        | 'spotify'
        | 'soundcloud'
        | 'tripadvisor'
        | 'yelp'
        | 'producthunt'
        | 'reddit'
        | 'crunchbase'
        | 'appstore'
        | 'playstore';

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandAIProductResponse {
  /**
   * Whether the given URL is a product detail page
   */
  is_product_page?: boolean;

  /**
   * The detected ecommerce platform, or null if not a product page
   */
  platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic' | null;

  /**
   * The extracted product data, or null if not a product page
   */
  product?: BrandAIProductResponse.Product | null;
}

export namespace BrandAIProductResponse {
  /**
   * The extracted product data, or null if not a product page
   */
  export interface Product {
    /**
     * Description of the product
     */
    description: string;

    /**
     * List of product features
     */
    features: Array<string>;

    /**
     * URLs to product images on the page (up to 7)
     */
    images: Array<string>;

    /**
     * Name of the product
     */
    name: string;

    /**
     * Stock Keeping Unit (product identifier). Null if no identifier is found.
     */
    sku: string | null;

    /**
     * Tags associated with the product
     */
    tags: Array<string>;

    /**
     * Target audience for the product (array of strings)
     */
    target_audience: Array<string>;

    /**
     * Billing frequency for the product
     */
    billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based' | null;

    /**
     * Category of the product
     */
    category?: string | null;

    /**
     * Currency code for the price (e.g., USD, EUR)
     */
    currency?: string | null;

    /**
     * URL to the product image
     */
    image_url?: string | null;

    /**
     * Price of the product
     */
    price?: number | null;

    /**
     * Pricing model for the product
     */
    pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom' | null;

    /**
     * URL to the product page
     */
    url?: string | null;
  }
}

export interface BrandAIProductsResponse {
  /**
   * Array of products extracted from the website
   */
  products?: Array<BrandAIProductsResponse.Product>;
}

export namespace BrandAIProductsResponse {
  export interface Product {
    /**
     * Description of the product
     */
    description: string;

    /**
     * List of product features
     */
    features: Array<string>;

    /**
     * URLs to product images on the page (up to 7)
     */
    images: Array<string>;

    /**
     * Name of the product
     */
    name: string;

    /**
     * Stock Keeping Unit (product identifier). Null if no identifier is found.
     */
    sku: string | null;

    /**
     * Tags associated with the product
     */
    tags: Array<string>;

    /**
     * Target audience for the product (array of strings)
     */
    target_audience: Array<string>;

    /**
     * Billing frequency for the product
     */
    billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based' | null;

    /**
     * Category of the product
     */
    category?: string | null;

    /**
     * Currency code for the price (e.g., USD, EUR)
     */
    currency?: string | null;

    /**
     * URL to the product image
     */
    image_url?: string | null;

    /**
     * Price of the product
     */
    price?: number | null;

    /**
     * Pricing model for the product
     */
    pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom' | null;

    /**
     * URL to the product page
     */
    url?: string | null;
  }
}

export interface BrandAIQueryResponse {
  /**
   * Array of extracted data points
   */
  data_extracted?: Array<BrandAIQueryResponse.DataExtracted>;

  /**
   * The domain that was analyzed
   */
  domain?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * List of URLs that were analyzed
   */
  urls_analyzed?: Array<string>;
}

export namespace BrandAIQueryResponse {
  export interface DataExtracted {
    /**
     * Name of the extracted data point
     */
    datapoint_name?: string;

    /**
     * Value of the extracted data point. Can be a primitive type, an array of
     * primitives, or an array of objects when datapoint_list_type is 'object'.
     */
    datapoint_value?: string | number | boolean | Array<string> | Array<number> | Array<unknown>;
  }
}

export interface BrandIdentifyFromTransactionResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandIdentifyFromTransactionResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandIdentifyFromTransactionResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * Company email address
     */
    email?: string;

    /**
     * Industry classification information for the brand
     */
    industries?: Brand.Industries;

    /**
     * Indicates whether the brand content is not safe for work (NSFW)
     */
    is_nsfw?: boolean;

    /**
     * Important website links for the brand
     */
    links?: Brand.Links;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * Company phone number
     */
    phone?: string;

    /**
     * The primary language of the brand's website content. Detected from the HTML lang
     * tag, page content analysis, or social media descriptions.
     */
    primary_language?:
      | 'afrikaans'
      | 'albanian'
      | 'amharic'
      | 'arabic'
      | 'armenian'
      | 'assamese'
      | 'aymara'
      | 'azeri'
      | 'basque'
      | 'belarusian'
      | 'bengali'
      | 'bosnian'
      | 'bulgarian'
      | 'burmese'
      | 'cantonese'
      | 'catalan'
      | 'cebuano'
      | 'chinese'
      | 'corsican'
      | 'croatian'
      | 'czech'
      | 'danish'
      | 'dutch'
      | 'english'
      | 'esperanto'
      | 'estonian'
      | 'farsi'
      | 'fijian'
      | 'finnish'
      | 'french'
      | 'galician'
      | 'georgian'
      | 'german'
      | 'greek'
      | 'guarani'
      | 'gujarati'
      | 'haitian-creole'
      | 'hausa'
      | 'hawaiian'
      | 'hebrew'
      | 'hindi'
      | 'hmong'
      | 'hungarian'
      | 'icelandic'
      | 'igbo'
      | 'indonesian'
      | 'irish'
      | 'italian'
      | 'japanese'
      | 'javanese'
      | 'kannada'
      | 'kazakh'
      | 'khmer'
      | 'kinyarwanda'
      | 'korean'
      | 'kurdish'
      | 'kyrgyz'
      | 'lao'
      | 'latin'
      | 'latvian'
      | 'lingala'
      | 'lithuanian'
      | 'luxembourgish'
      | 'macedonian'
      | 'malagasy'
      | 'malay'
      | 'malayalam'
      | 'maltese'
      | 'maori'
      | 'marathi'
      | 'mongolian'
      | 'nepali'
      | 'norwegian'
      | 'odia'
      | 'oromo'
      | 'pashto'
      | 'pidgin'
      | 'polish'
      | 'portuguese'
      | 'punjabi'
      | 'quechua'
      | 'romanian'
      | 'russian'
      | 'samoan'
      | 'scottish-gaelic'
      | 'serbian'
      | 'sesotho'
      | 'shona'
      | 'sindhi'
      | 'sinhala'
      | 'slovak'
      | 'slovene'
      | 'somali'
      | 'spanish'
      | 'sundanese'
      | 'swahili'
      | 'swedish'
      | 'tagalog'
      | 'tajik'
      | 'tamil'
      | 'tatar'
      | 'telugu'
      | 'thai'
      | 'tibetan'
      | 'tigrinya'
      | 'tongan'
      | 'tswana'
      | 'turkish'
      | 'turkmen'
      | 'ukrainian'
      | 'urdu'
      | 'uyghur'
      | 'uzbek'
      | 'vietnamese'
      | 'welsh'
      | 'wolof'
      | 'xhosa'
      | 'yiddish'
      | 'yoruba'
      | 'zulu'
      | null;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    /**
     * Industry classification information for the brand
     */
    export interface Industries {
      /**
       * Easy Industry Classification - array of industry and subindustry pairs
       */
      eic?: Array<Industries.Eic>;
    }

    export namespace Industries {
      export interface Eic {
        /**
         * Industry classification enum
         */
        industry:
          | 'Aerospace & Defense'
          | 'Technology'
          | 'Finance'
          | 'Healthcare'
          | 'Retail & E-commerce'
          | 'Entertainment'
          | 'Education'
          | 'Government & Nonprofit'
          | 'Industrial & Energy'
          | 'Automotive & Transportation'
          | 'Lifestyle & Leisure'
          | 'Luxury & Fashion'
          | 'News & Media'
          | 'Sports'
          | 'Real Estate & PropTech'
          | 'Legal & Compliance'
          | 'Telecommunications'
          | 'Agriculture & Food'
          | 'Professional Services & Agencies'
          | 'Chemicals & Materials'
          | 'Logistics & Supply Chain'
          | 'Hospitality & Tourism'
          | 'Construction & Built Environment'
          | 'Consumer Packaged Goods (CPG)';

        /**
         * Subindustry classification enum
         */
        subindustry:
          | 'Defense Systems & Military Hardware'
          | 'Aerospace Manufacturing'
          | 'Avionics & Navigation Technology'
          | 'Subsea & Naval Defense Systems'
          | 'Space & Satellite Technology'
          | 'Defense IT & Systems Integration'
          | 'Software (B2B)'
          | 'Software (B2C)'
          | 'Cloud Infrastructure & DevOps'
          | 'Cybersecurity'
          | 'Artificial Intelligence & Machine Learning'
          | 'Data Infrastructure & Analytics'
          | 'Hardware & Semiconductors'
          | 'Fintech Infrastructure'
          | 'eCommerce & Marketplace Platforms'
          | 'Developer Tools & APIs'
          | 'Web3 & Blockchain'
          | 'XR & Spatial Computing'
          | 'Banking & Lending'
          | 'Investment Management & WealthTech'
          | 'Insurance & InsurTech'
          | 'Payments & Money Movement'
          | 'Accounting, Tax & Financial Planning Tools'
          | 'Capital Markets & Trading Platforms'
          | 'Financial Infrastructure & APIs'
          | 'Credit Scoring & Risk Management'
          | 'Cryptocurrency & Digital Assets'
          | 'BNPL & Alternative Financing'
          | 'Healthcare Providers & Services'
          | 'Pharmaceuticals & Drug Development'
          | 'Medical Devices & Diagnostics'
          | 'Biotechnology & Genomics'
          | 'Digital Health & Telemedicine'
          | 'Health Insurance & Benefits Tech'
          | 'Clinical Trials & Research Platforms'
          | 'Mental Health & Wellness'
          | 'Healthcare IT & EHR Systems'
          | 'Consumer Health & Wellness Products'
          | 'Online Marketplaces'
          | 'Direct-to-Consumer (DTC) Brands'
          | 'Retail Tech & Point-of-Sale Systems'
          | 'Omnichannel & In-Store Retail'
          | 'E-commerce Enablement & Infrastructure'
          | 'Subscription & Membership Commerce'
          | 'Social Commerce & Influencer Platforms'
          | 'Fashion & Apparel Retail'
          | 'Food, Beverage & Grocery E-commerce'
          | 'Streaming Platforms (Video, Music, Audio)'
          | 'Gaming & Interactive Entertainment'
          | 'Creator Economy & Influencer Platforms'
          | 'Advertising, Adtech & Media Buying'
          | 'Film, TV & Production Studios'
          | 'Events, Venues & Live Entertainment'
          | 'Virtual Worlds & Metaverse Experiences'
          | 'K-12 Education Platforms & Tools'
          | 'Higher Education & University Tech'
          | 'Online Learning & MOOCs'
          | 'Test Prep & Certification'
          | 'Corporate Training & Upskilling'
          | 'Tutoring & Supplemental Learning'
          | 'Education Management Systems (LMS/SIS)'
          | 'Language Learning'
          | 'Creator-Led & Cohort-Based Courses'
          | 'Special Education & Accessibility Tools'
          | 'Government Technology & Digital Services'
          | 'Civic Engagement & Policy Platforms'
          | 'International Development & Humanitarian Aid'
          | 'Philanthropy & Grantmaking'
          | 'Nonprofit Operations & Fundraising Tools'
          | 'Public Health & Social Services'
          | 'Education & Youth Development Programs'
          | 'Environmental & Climate Action Organizations'
          | 'Legal Aid & Social Justice Advocacy'
          | 'Municipal & Infrastructure Services'
          | 'Manufacturing & Industrial Automation'
          | 'Energy Production (Oil, Gas, Nuclear)'
          | 'Renewable Energy & Cleantech'
          | 'Utilities & Grid Infrastructure'
          | 'Industrial IoT & Monitoring Systems'
          | 'Construction & Heavy Equipment'
          | 'Mining & Natural Resources'
          | 'Environmental Engineering & Sustainability'
          | 'Energy Storage & Battery Technology'
          | 'Automotive OEMs & Vehicle Manufacturing'
          | 'Electric Vehicles (EVs) & Charging Infrastructure'
          | 'Mobility-as-a-Service (MaaS)'
          | 'Fleet Management'
          | 'Public Transit & Urban Mobility'
          | 'Autonomous Vehicles & ADAS'
          | 'Aftermarket Parts & Services'
          | 'Telematics & Vehicle Connectivity'
          | 'Aviation & Aerospace Transport'
          | 'Maritime Shipping'
          | 'Fitness & Wellness'
          | 'Beauty & Personal Care'
          | 'Home & Living'
          | 'Dating & Relationships'
          | 'Hobbies, Crafts & DIY'
          | 'Outdoor & Recreational Gear'
          | 'Events, Experiences & Ticketing Platforms'
          | 'Designer & Luxury Apparel'
          | 'Accessories, Jewelry & Watches'
          | 'Footwear & Leather Goods'
          | 'Beauty, Fragrance & Skincare'
          | 'Fashion Marketplaces & Retail Platforms'
          | 'Sustainable & Ethical Fashion'
          | 'Resale, Vintage & Circular Fashion'
          | 'Fashion Tech & Virtual Try-Ons'
          | 'Streetwear & Emerging Luxury'
          | 'Couture & Made-to-Measure'
          | 'News Publishing & Journalism'
          | 'Digital Media & Content Platforms'
          | 'Broadcasting (TV & Radio)'
          | 'Podcasting & Audio Media'
          | 'News Aggregators & Curation Tools'
          | 'Independent & Creator-Led Media'
          | 'Newsletters & Substack-Style Platforms'
          | 'Political & Investigative Media'
          | 'Trade & Niche Publications'
          | 'Media Monitoring & Analytics'
          | 'Professional Teams & Leagues'
          | 'Sports Media & Broadcasting'
          | 'Sports Betting & Fantasy Sports'
          | 'Fitness & Athletic Training Platforms'
          | 'Sportswear & Equipment'
          | 'Esports & Competitive Gaming'
          | 'Sports Venues & Event Management'
          | 'Athlete Management & Talent Agencies'
          | 'Sports Tech & Performance Analytics'
          | 'Youth, Amateur & Collegiate Sports'
          | 'Real Estate Marketplaces'
          | 'Property Management Software'
          | 'Rental Platforms'
          | 'Mortgage & Lending Tech'
          | 'Real Estate Investment Platforms'
          | 'Law Firms & Legal Services'
          | 'Legal Tech & Automation'
          | 'Regulatory Compliance'
          | 'E-Discovery & Litigation Tools'
          | 'Contract Management'
          | 'Governance, Risk & Compliance (GRC)'
          | 'IP & Trademark Management'
          | 'Legal Research & Intelligence'
          | 'Compliance Training & Certification'
          | 'Whistleblower & Ethics Reporting'
          | 'Mobile & Wireless Networks (3G/4G/5G)'
          | 'Broadband & Fiber Internet'
          | 'Satellite & Space-Based Communications'
          | 'Network Equipment & Infrastructure'
          | 'Telecom Billing & OSS/BSS Systems'
          | 'VoIP & Unified Communications'
          | 'Internet Service Providers (ISPs)'
          | 'Edge Computing & Network Virtualization'
          | 'IoT Connectivity Platforms'
          | 'Precision Agriculture & AgTech'
          | 'Crop & Livestock Production'
          | 'Food & Beverage Manufacturing & Processing'
          | 'Food Distribution'
          | 'Restaurants & Food Service'
          | 'Agricultural Inputs & Equipment'
          | 'Sustainable & Regenerative Agriculture'
          | 'Seafood & Aquaculture'
          | 'Management Consulting'
          | 'Marketing & Advertising Agencies'
          | 'Design, Branding & Creative Studios'
          | 'IT Services & Managed Services'
          | 'Staffing, Recruiting & Talent'
          | 'Accounting & Tax Firms'
          | 'Public Relations & Communications'
          | 'Business Process Outsourcing (BPO)'
          | 'Professional Training & Coaching'
          | 'Specialty Chemicals'
          | 'Commodity & Petrochemicals'
          | 'Polymers, Plastics & Rubber'
          | 'Coatings, Adhesives & Sealants'
          | 'Industrial Gases'
          | 'Advanced Materials & Composites'
          | 'Battery Materials & Energy Storage'
          | 'Electronic Materials & Semiconductor Chemicals'
          | 'Agrochemicals & Fertilizers'
          | 'Freight & Transportation Tech'
          | 'Last-Mile Delivery'
          | 'Warehouse Automation'
          | 'Supply Chain Visibility Platforms'
          | 'Logistics Marketplaces'
          | 'Shipping & Freight Forwarding'
          | 'Cold Chain Logistics'
          | 'Reverse Logistics & Returns'
          | 'Cross-Border Trade Tech'
          | 'Transportation Management Systems (TMS)'
          | 'Hotels & Accommodation'
          | 'Vacation Rentals & Short-Term Stays'
          | 'Restaurant Tech & Management'
          | 'Travel Booking Platforms'
          | 'Tourism Experiences & Activities'
          | 'Cruise Lines & Marine Tourism'
          | 'Hospitality Management Systems'
          | 'Event & Venue Management'
          | 'Corporate Travel Management'
          | 'Travel Insurance & Protection'
          | 'Construction Management Software'
          | 'BIM/CAD & Design Tools'
          | 'Construction Marketplaces'
          | 'Equipment Rental & Management'
          | 'Building Materials & Procurement'
          | 'Construction Workforce Management'
          | 'Project Estimation & Bidding'
          | 'Modular & Prefab Construction'
          | 'Construction Safety & Compliance'
          | 'Smart Building Technology'
          | 'Food & Beverage CPG'
          | 'Home & Personal Care CPG'
          | 'CPG Analytics & Insights'
          | 'Direct-to-Consumer CPG Brands'
          | 'CPG Supply Chain & Distribution'
          | 'Private Label Manufacturing'
          | 'CPG Retail Intelligence'
          | 'Sustainable CPG & Packaging'
          | 'Beauty & Cosmetics CPG'
          | 'Health & Wellness CPG';
      }
    }

    /**
     * Important website links for the brand
     */
    export interface Links {
      /**
       * URL to the brand's blog or news page
       */
      blog?: string | null;

      /**
       * URL to the brand's careers or job opportunities page
       */
      careers?: string | null;

      /**
       * URL to the brand's contact or contact us page
       */
      contact?: string | null;

      /**
       * URL to the brand's pricing or plans page
       */
      pricing?: string | null;

      /**
       * URL to the brand's privacy policy page
       */
      privacy?: string | null;

      /**
       * URL to the brand's terms of service or terms and conditions page
       */
      terms?: string | null;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media platform
       */
      type?:
        | 'x'
        | 'facebook'
        | 'instagram'
        | 'linkedin'
        | 'youtube'
        | 'pinterest'
        | 'tiktok'
        | 'dribbble'
        | 'github'
        | 'behance'
        | 'snapchat'
        | 'whatsapp'
        | 'telegram'
        | 'line'
        | 'discord'
        | 'twitch'
        | 'vimeo'
        | 'imdb'
        | 'tumblr'
        | 'flickr'
        | 'giphy'
        | 'medium'
        | 'spotify'
        | 'soundcloud'
        | 'tripadvisor'
        | 'yelp'
        | 'producthunt'
        | 'reddit'
        | 'crunchbase'
        | 'appstore'
        | 'playstore';

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandPrefetchResponse {
  /**
   * The domain that was queued for prefetching
   */
  domain?: string;

  /**
   * Success message
   */
  message?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export interface BrandPrefetchByEmailResponse {
  /**
   * The domain that was queued for prefetching
   */
  domain?: string;

  /**
   * Success message
   */
  message?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export interface BrandRetrieveByEmailResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveByEmailResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveByEmailResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * Company email address
     */
    email?: string;

    /**
     * Industry classification information for the brand
     */
    industries?: Brand.Industries;

    /**
     * Indicates whether the brand content is not safe for work (NSFW)
     */
    is_nsfw?: boolean;

    /**
     * Important website links for the brand
     */
    links?: Brand.Links;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * Company phone number
     */
    phone?: string;

    /**
     * The primary language of the brand's website content. Detected from the HTML lang
     * tag, page content analysis, or social media descriptions.
     */
    primary_language?:
      | 'afrikaans'
      | 'albanian'
      | 'amharic'
      | 'arabic'
      | 'armenian'
      | 'assamese'
      | 'aymara'
      | 'azeri'
      | 'basque'
      | 'belarusian'
      | 'bengali'
      | 'bosnian'
      | 'bulgarian'
      | 'burmese'
      | 'cantonese'
      | 'catalan'
      | 'cebuano'
      | 'chinese'
      | 'corsican'
      | 'croatian'
      | 'czech'
      | 'danish'
      | 'dutch'
      | 'english'
      | 'esperanto'
      | 'estonian'
      | 'farsi'
      | 'fijian'
      | 'finnish'
      | 'french'
      | 'galician'
      | 'georgian'
      | 'german'
      | 'greek'
      | 'guarani'
      | 'gujarati'
      | 'haitian-creole'
      | 'hausa'
      | 'hawaiian'
      | 'hebrew'
      | 'hindi'
      | 'hmong'
      | 'hungarian'
      | 'icelandic'
      | 'igbo'
      | 'indonesian'
      | 'irish'
      | 'italian'
      | 'japanese'
      | 'javanese'
      | 'kannada'
      | 'kazakh'
      | 'khmer'
      | 'kinyarwanda'
      | 'korean'
      | 'kurdish'
      | 'kyrgyz'
      | 'lao'
      | 'latin'
      | 'latvian'
      | 'lingala'
      | 'lithuanian'
      | 'luxembourgish'
      | 'macedonian'
      | 'malagasy'
      | 'malay'
      | 'malayalam'
      | 'maltese'
      | 'maori'
      | 'marathi'
      | 'mongolian'
      | 'nepali'
      | 'norwegian'
      | 'odia'
      | 'oromo'
      | 'pashto'
      | 'pidgin'
      | 'polish'
      | 'portuguese'
      | 'punjabi'
      | 'quechua'
      | 'romanian'
      | 'russian'
      | 'samoan'
      | 'scottish-gaelic'
      | 'serbian'
      | 'sesotho'
      | 'shona'
      | 'sindhi'
      | 'sinhala'
      | 'slovak'
      | 'slovene'
      | 'somali'
      | 'spanish'
      | 'sundanese'
      | 'swahili'
      | 'swedish'
      | 'tagalog'
      | 'tajik'
      | 'tamil'
      | 'tatar'
      | 'telugu'
      | 'thai'
      | 'tibetan'
      | 'tigrinya'
      | 'tongan'
      | 'tswana'
      | 'turkish'
      | 'turkmen'
      | 'ukrainian'
      | 'urdu'
      | 'uyghur'
      | 'uzbek'
      | 'vietnamese'
      | 'welsh'
      | 'wolof'
      | 'xhosa'
      | 'yiddish'
      | 'yoruba'
      | 'zulu'
      | null;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    /**
     * Industry classification information for the brand
     */
    export interface Industries {
      /**
       * Easy Industry Classification - array of industry and subindustry pairs
       */
      eic?: Array<Industries.Eic>;
    }

    export namespace Industries {
      export interface Eic {
        /**
         * Industry classification enum
         */
        industry:
          | 'Aerospace & Defense'
          | 'Technology'
          | 'Finance'
          | 'Healthcare'
          | 'Retail & E-commerce'
          | 'Entertainment'
          | 'Education'
          | 'Government & Nonprofit'
          | 'Industrial & Energy'
          | 'Automotive & Transportation'
          | 'Lifestyle & Leisure'
          | 'Luxury & Fashion'
          | 'News & Media'
          | 'Sports'
          | 'Real Estate & PropTech'
          | 'Legal & Compliance'
          | 'Telecommunications'
          | 'Agriculture & Food'
          | 'Professional Services & Agencies'
          | 'Chemicals & Materials'
          | 'Logistics & Supply Chain'
          | 'Hospitality & Tourism'
          | 'Construction & Built Environment'
          | 'Consumer Packaged Goods (CPG)';

        /**
         * Subindustry classification enum
         */
        subindustry:
          | 'Defense Systems & Military Hardware'
          | 'Aerospace Manufacturing'
          | 'Avionics & Navigation Technology'
          | 'Subsea & Naval Defense Systems'
          | 'Space & Satellite Technology'
          | 'Defense IT & Systems Integration'
          | 'Software (B2B)'
          | 'Software (B2C)'
          | 'Cloud Infrastructure & DevOps'
          | 'Cybersecurity'
          | 'Artificial Intelligence & Machine Learning'
          | 'Data Infrastructure & Analytics'
          | 'Hardware & Semiconductors'
          | 'Fintech Infrastructure'
          | 'eCommerce & Marketplace Platforms'
          | 'Developer Tools & APIs'
          | 'Web3 & Blockchain'
          | 'XR & Spatial Computing'
          | 'Banking & Lending'
          | 'Investment Management & WealthTech'
          | 'Insurance & InsurTech'
          | 'Payments & Money Movement'
          | 'Accounting, Tax & Financial Planning Tools'
          | 'Capital Markets & Trading Platforms'
          | 'Financial Infrastructure & APIs'
          | 'Credit Scoring & Risk Management'
          | 'Cryptocurrency & Digital Assets'
          | 'BNPL & Alternative Financing'
          | 'Healthcare Providers & Services'
          | 'Pharmaceuticals & Drug Development'
          | 'Medical Devices & Diagnostics'
          | 'Biotechnology & Genomics'
          | 'Digital Health & Telemedicine'
          | 'Health Insurance & Benefits Tech'
          | 'Clinical Trials & Research Platforms'
          | 'Mental Health & Wellness'
          | 'Healthcare IT & EHR Systems'
          | 'Consumer Health & Wellness Products'
          | 'Online Marketplaces'
          | 'Direct-to-Consumer (DTC) Brands'
          | 'Retail Tech & Point-of-Sale Systems'
          | 'Omnichannel & In-Store Retail'
          | 'E-commerce Enablement & Infrastructure'
          | 'Subscription & Membership Commerce'
          | 'Social Commerce & Influencer Platforms'
          | 'Fashion & Apparel Retail'
          | 'Food, Beverage & Grocery E-commerce'
          | 'Streaming Platforms (Video, Music, Audio)'
          | 'Gaming & Interactive Entertainment'
          | 'Creator Economy & Influencer Platforms'
          | 'Advertising, Adtech & Media Buying'
          | 'Film, TV & Production Studios'
          | 'Events, Venues & Live Entertainment'
          | 'Virtual Worlds & Metaverse Experiences'
          | 'K-12 Education Platforms & Tools'
          | 'Higher Education & University Tech'
          | 'Online Learning & MOOCs'
          | 'Test Prep & Certification'
          | 'Corporate Training & Upskilling'
          | 'Tutoring & Supplemental Learning'
          | 'Education Management Systems (LMS/SIS)'
          | 'Language Learning'
          | 'Creator-Led & Cohort-Based Courses'
          | 'Special Education & Accessibility Tools'
          | 'Government Technology & Digital Services'
          | 'Civic Engagement & Policy Platforms'
          | 'International Development & Humanitarian Aid'
          | 'Philanthropy & Grantmaking'
          | 'Nonprofit Operations & Fundraising Tools'
          | 'Public Health & Social Services'
          | 'Education & Youth Development Programs'
          | 'Environmental & Climate Action Organizations'
          | 'Legal Aid & Social Justice Advocacy'
          | 'Municipal & Infrastructure Services'
          | 'Manufacturing & Industrial Automation'
          | 'Energy Production (Oil, Gas, Nuclear)'
          | 'Renewable Energy & Cleantech'
          | 'Utilities & Grid Infrastructure'
          | 'Industrial IoT & Monitoring Systems'
          | 'Construction & Heavy Equipment'
          | 'Mining & Natural Resources'
          | 'Environmental Engineering & Sustainability'
          | 'Energy Storage & Battery Technology'
          | 'Automotive OEMs & Vehicle Manufacturing'
          | 'Electric Vehicles (EVs) & Charging Infrastructure'
          | 'Mobility-as-a-Service (MaaS)'
          | 'Fleet Management'
          | 'Public Transit & Urban Mobility'
          | 'Autonomous Vehicles & ADAS'
          | 'Aftermarket Parts & Services'
          | 'Telematics & Vehicle Connectivity'
          | 'Aviation & Aerospace Transport'
          | 'Maritime Shipping'
          | 'Fitness & Wellness'
          | 'Beauty & Personal Care'
          | 'Home & Living'
          | 'Dating & Relationships'
          | 'Hobbies, Crafts & DIY'
          | 'Outdoor & Recreational Gear'
          | 'Events, Experiences & Ticketing Platforms'
          | 'Designer & Luxury Apparel'
          | 'Accessories, Jewelry & Watches'
          | 'Footwear & Leather Goods'
          | 'Beauty, Fragrance & Skincare'
          | 'Fashion Marketplaces & Retail Platforms'
          | 'Sustainable & Ethical Fashion'
          | 'Resale, Vintage & Circular Fashion'
          | 'Fashion Tech & Virtual Try-Ons'
          | 'Streetwear & Emerging Luxury'
          | 'Couture & Made-to-Measure'
          | 'News Publishing & Journalism'
          | 'Digital Media & Content Platforms'
          | 'Broadcasting (TV & Radio)'
          | 'Podcasting & Audio Media'
          | 'News Aggregators & Curation Tools'
          | 'Independent & Creator-Led Media'
          | 'Newsletters & Substack-Style Platforms'
          | 'Political & Investigative Media'
          | 'Trade & Niche Publications'
          | 'Media Monitoring & Analytics'
          | 'Professional Teams & Leagues'
          | 'Sports Media & Broadcasting'
          | 'Sports Betting & Fantasy Sports'
          | 'Fitness & Athletic Training Platforms'
          | 'Sportswear & Equipment'
          | 'Esports & Competitive Gaming'
          | 'Sports Venues & Event Management'
          | 'Athlete Management & Talent Agencies'
          | 'Sports Tech & Performance Analytics'
          | 'Youth, Amateur & Collegiate Sports'
          | 'Real Estate Marketplaces'
          | 'Property Management Software'
          | 'Rental Platforms'
          | 'Mortgage & Lending Tech'
          | 'Real Estate Investment Platforms'
          | 'Law Firms & Legal Services'
          | 'Legal Tech & Automation'
          | 'Regulatory Compliance'
          | 'E-Discovery & Litigation Tools'
          | 'Contract Management'
          | 'Governance, Risk & Compliance (GRC)'
          | 'IP & Trademark Management'
          | 'Legal Research & Intelligence'
          | 'Compliance Training & Certification'
          | 'Whistleblower & Ethics Reporting'
          | 'Mobile & Wireless Networks (3G/4G/5G)'
          | 'Broadband & Fiber Internet'
          | 'Satellite & Space-Based Communications'
          | 'Network Equipment & Infrastructure'
          | 'Telecom Billing & OSS/BSS Systems'
          | 'VoIP & Unified Communications'
          | 'Internet Service Providers (ISPs)'
          | 'Edge Computing & Network Virtualization'
          | 'IoT Connectivity Platforms'
          | 'Precision Agriculture & AgTech'
          | 'Crop & Livestock Production'
          | 'Food & Beverage Manufacturing & Processing'
          | 'Food Distribution'
          | 'Restaurants & Food Service'
          | 'Agricultural Inputs & Equipment'
          | 'Sustainable & Regenerative Agriculture'
          | 'Seafood & Aquaculture'
          | 'Management Consulting'
          | 'Marketing & Advertising Agencies'
          | 'Design, Branding & Creative Studios'
          | 'IT Services & Managed Services'
          | 'Staffing, Recruiting & Talent'
          | 'Accounting & Tax Firms'
          | 'Public Relations & Communications'
          | 'Business Process Outsourcing (BPO)'
          | 'Professional Training & Coaching'
          | 'Specialty Chemicals'
          | 'Commodity & Petrochemicals'
          | 'Polymers, Plastics & Rubber'
          | 'Coatings, Adhesives & Sealants'
          | 'Industrial Gases'
          | 'Advanced Materials & Composites'
          | 'Battery Materials & Energy Storage'
          | 'Electronic Materials & Semiconductor Chemicals'
          | 'Agrochemicals & Fertilizers'
          | 'Freight & Transportation Tech'
          | 'Last-Mile Delivery'
          | 'Warehouse Automation'
          | 'Supply Chain Visibility Platforms'
          | 'Logistics Marketplaces'
          | 'Shipping & Freight Forwarding'
          | 'Cold Chain Logistics'
          | 'Reverse Logistics & Returns'
          | 'Cross-Border Trade Tech'
          | 'Transportation Management Systems (TMS)'
          | 'Hotels & Accommodation'
          | 'Vacation Rentals & Short-Term Stays'
          | 'Restaurant Tech & Management'
          | 'Travel Booking Platforms'
          | 'Tourism Experiences & Activities'
          | 'Cruise Lines & Marine Tourism'
          | 'Hospitality Management Systems'
          | 'Event & Venue Management'
          | 'Corporate Travel Management'
          | 'Travel Insurance & Protection'
          | 'Construction Management Software'
          | 'BIM/CAD & Design Tools'
          | 'Construction Marketplaces'
          | 'Equipment Rental & Management'
          | 'Building Materials & Procurement'
          | 'Construction Workforce Management'
          | 'Project Estimation & Bidding'
          | 'Modular & Prefab Construction'
          | 'Construction Safety & Compliance'
          | 'Smart Building Technology'
          | 'Food & Beverage CPG'
          | 'Home & Personal Care CPG'
          | 'CPG Analytics & Insights'
          | 'Direct-to-Consumer CPG Brands'
          | 'CPG Supply Chain & Distribution'
          | 'Private Label Manufacturing'
          | 'CPG Retail Intelligence'
          | 'Sustainable CPG & Packaging'
          | 'Beauty & Cosmetics CPG'
          | 'Health & Wellness CPG';
      }
    }

    /**
     * Important website links for the brand
     */
    export interface Links {
      /**
       * URL to the brand's blog or news page
       */
      blog?: string | null;

      /**
       * URL to the brand's careers or job opportunities page
       */
      careers?: string | null;

      /**
       * URL to the brand's contact or contact us page
       */
      contact?: string | null;

      /**
       * URL to the brand's pricing or plans page
       */
      pricing?: string | null;

      /**
       * URL to the brand's privacy policy page
       */
      privacy?: string | null;

      /**
       * URL to the brand's terms of service or terms and conditions page
       */
      terms?: string | null;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media platform
       */
      type?:
        | 'x'
        | 'facebook'
        | 'instagram'
        | 'linkedin'
        | 'youtube'
        | 'pinterest'
        | 'tiktok'
        | 'dribbble'
        | 'github'
        | 'behance'
        | 'snapchat'
        | 'whatsapp'
        | 'telegram'
        | 'line'
        | 'discord'
        | 'twitch'
        | 'vimeo'
        | 'imdb'
        | 'tumblr'
        | 'flickr'
        | 'giphy'
        | 'medium'
        | 'spotify'
        | 'soundcloud'
        | 'tripadvisor'
        | 'yelp'
        | 'producthunt'
        | 'reddit'
        | 'crunchbase'
        | 'appstore'
        | 'playstore';

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandRetrieveByIsinResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveByIsinResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveByIsinResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * Company email address
     */
    email?: string;

    /**
     * Industry classification information for the brand
     */
    industries?: Brand.Industries;

    /**
     * Indicates whether the brand content is not safe for work (NSFW)
     */
    is_nsfw?: boolean;

    /**
     * Important website links for the brand
     */
    links?: Brand.Links;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * Company phone number
     */
    phone?: string;

    /**
     * The primary language of the brand's website content. Detected from the HTML lang
     * tag, page content analysis, or social media descriptions.
     */
    primary_language?:
      | 'afrikaans'
      | 'albanian'
      | 'amharic'
      | 'arabic'
      | 'armenian'
      | 'assamese'
      | 'aymara'
      | 'azeri'
      | 'basque'
      | 'belarusian'
      | 'bengali'
      | 'bosnian'
      | 'bulgarian'
      | 'burmese'
      | 'cantonese'
      | 'catalan'
      | 'cebuano'
      | 'chinese'
      | 'corsican'
      | 'croatian'
      | 'czech'
      | 'danish'
      | 'dutch'
      | 'english'
      | 'esperanto'
      | 'estonian'
      | 'farsi'
      | 'fijian'
      | 'finnish'
      | 'french'
      | 'galician'
      | 'georgian'
      | 'german'
      | 'greek'
      | 'guarani'
      | 'gujarati'
      | 'haitian-creole'
      | 'hausa'
      | 'hawaiian'
      | 'hebrew'
      | 'hindi'
      | 'hmong'
      | 'hungarian'
      | 'icelandic'
      | 'igbo'
      | 'indonesian'
      | 'irish'
      | 'italian'
      | 'japanese'
      | 'javanese'
      | 'kannada'
      | 'kazakh'
      | 'khmer'
      | 'kinyarwanda'
      | 'korean'
      | 'kurdish'
      | 'kyrgyz'
      | 'lao'
      | 'latin'
      | 'latvian'
      | 'lingala'
      | 'lithuanian'
      | 'luxembourgish'
      | 'macedonian'
      | 'malagasy'
      | 'malay'
      | 'malayalam'
      | 'maltese'
      | 'maori'
      | 'marathi'
      | 'mongolian'
      | 'nepali'
      | 'norwegian'
      | 'odia'
      | 'oromo'
      | 'pashto'
      | 'pidgin'
      | 'polish'
      | 'portuguese'
      | 'punjabi'
      | 'quechua'
      | 'romanian'
      | 'russian'
      | 'samoan'
      | 'scottish-gaelic'
      | 'serbian'
      | 'sesotho'
      | 'shona'
      | 'sindhi'
      | 'sinhala'
      | 'slovak'
      | 'slovene'
      | 'somali'
      | 'spanish'
      | 'sundanese'
      | 'swahili'
      | 'swedish'
      | 'tagalog'
      | 'tajik'
      | 'tamil'
      | 'tatar'
      | 'telugu'
      | 'thai'
      | 'tibetan'
      | 'tigrinya'
      | 'tongan'
      | 'tswana'
      | 'turkish'
      | 'turkmen'
      | 'ukrainian'
      | 'urdu'
      | 'uyghur'
      | 'uzbek'
      | 'vietnamese'
      | 'welsh'
      | 'wolof'
      | 'xhosa'
      | 'yiddish'
      | 'yoruba'
      | 'zulu'
      | null;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    /**
     * Industry classification information for the brand
     */
    export interface Industries {
      /**
       * Easy Industry Classification - array of industry and subindustry pairs
       */
      eic?: Array<Industries.Eic>;
    }

    export namespace Industries {
      export interface Eic {
        /**
         * Industry classification enum
         */
        industry:
          | 'Aerospace & Defense'
          | 'Technology'
          | 'Finance'
          | 'Healthcare'
          | 'Retail & E-commerce'
          | 'Entertainment'
          | 'Education'
          | 'Government & Nonprofit'
          | 'Industrial & Energy'
          | 'Automotive & Transportation'
          | 'Lifestyle & Leisure'
          | 'Luxury & Fashion'
          | 'News & Media'
          | 'Sports'
          | 'Real Estate & PropTech'
          | 'Legal & Compliance'
          | 'Telecommunications'
          | 'Agriculture & Food'
          | 'Professional Services & Agencies'
          | 'Chemicals & Materials'
          | 'Logistics & Supply Chain'
          | 'Hospitality & Tourism'
          | 'Construction & Built Environment'
          | 'Consumer Packaged Goods (CPG)';

        /**
         * Subindustry classification enum
         */
        subindustry:
          | 'Defense Systems & Military Hardware'
          | 'Aerospace Manufacturing'
          | 'Avionics & Navigation Technology'
          | 'Subsea & Naval Defense Systems'
          | 'Space & Satellite Technology'
          | 'Defense IT & Systems Integration'
          | 'Software (B2B)'
          | 'Software (B2C)'
          | 'Cloud Infrastructure & DevOps'
          | 'Cybersecurity'
          | 'Artificial Intelligence & Machine Learning'
          | 'Data Infrastructure & Analytics'
          | 'Hardware & Semiconductors'
          | 'Fintech Infrastructure'
          | 'eCommerce & Marketplace Platforms'
          | 'Developer Tools & APIs'
          | 'Web3 & Blockchain'
          | 'XR & Spatial Computing'
          | 'Banking & Lending'
          | 'Investment Management & WealthTech'
          | 'Insurance & InsurTech'
          | 'Payments & Money Movement'
          | 'Accounting, Tax & Financial Planning Tools'
          | 'Capital Markets & Trading Platforms'
          | 'Financial Infrastructure & APIs'
          | 'Credit Scoring & Risk Management'
          | 'Cryptocurrency & Digital Assets'
          | 'BNPL & Alternative Financing'
          | 'Healthcare Providers & Services'
          | 'Pharmaceuticals & Drug Development'
          | 'Medical Devices & Diagnostics'
          | 'Biotechnology & Genomics'
          | 'Digital Health & Telemedicine'
          | 'Health Insurance & Benefits Tech'
          | 'Clinical Trials & Research Platforms'
          | 'Mental Health & Wellness'
          | 'Healthcare IT & EHR Systems'
          | 'Consumer Health & Wellness Products'
          | 'Online Marketplaces'
          | 'Direct-to-Consumer (DTC) Brands'
          | 'Retail Tech & Point-of-Sale Systems'
          | 'Omnichannel & In-Store Retail'
          | 'E-commerce Enablement & Infrastructure'
          | 'Subscription & Membership Commerce'
          | 'Social Commerce & Influencer Platforms'
          | 'Fashion & Apparel Retail'
          | 'Food, Beverage & Grocery E-commerce'
          | 'Streaming Platforms (Video, Music, Audio)'
          | 'Gaming & Interactive Entertainment'
          | 'Creator Economy & Influencer Platforms'
          | 'Advertising, Adtech & Media Buying'
          | 'Film, TV & Production Studios'
          | 'Events, Venues & Live Entertainment'
          | 'Virtual Worlds & Metaverse Experiences'
          | 'K-12 Education Platforms & Tools'
          | 'Higher Education & University Tech'
          | 'Online Learning & MOOCs'
          | 'Test Prep & Certification'
          | 'Corporate Training & Upskilling'
          | 'Tutoring & Supplemental Learning'
          | 'Education Management Systems (LMS/SIS)'
          | 'Language Learning'
          | 'Creator-Led & Cohort-Based Courses'
          | 'Special Education & Accessibility Tools'
          | 'Government Technology & Digital Services'
          | 'Civic Engagement & Policy Platforms'
          | 'International Development & Humanitarian Aid'
          | 'Philanthropy & Grantmaking'
          | 'Nonprofit Operations & Fundraising Tools'
          | 'Public Health & Social Services'
          | 'Education & Youth Development Programs'
          | 'Environmental & Climate Action Organizations'
          | 'Legal Aid & Social Justice Advocacy'
          | 'Municipal & Infrastructure Services'
          | 'Manufacturing & Industrial Automation'
          | 'Energy Production (Oil, Gas, Nuclear)'
          | 'Renewable Energy & Cleantech'
          | 'Utilities & Grid Infrastructure'
          | 'Industrial IoT & Monitoring Systems'
          | 'Construction & Heavy Equipment'
          | 'Mining & Natural Resources'
          | 'Environmental Engineering & Sustainability'
          | 'Energy Storage & Battery Technology'
          | 'Automotive OEMs & Vehicle Manufacturing'
          | 'Electric Vehicles (EVs) & Charging Infrastructure'
          | 'Mobility-as-a-Service (MaaS)'
          | 'Fleet Management'
          | 'Public Transit & Urban Mobility'
          | 'Autonomous Vehicles & ADAS'
          | 'Aftermarket Parts & Services'
          | 'Telematics & Vehicle Connectivity'
          | 'Aviation & Aerospace Transport'
          | 'Maritime Shipping'
          | 'Fitness & Wellness'
          | 'Beauty & Personal Care'
          | 'Home & Living'
          | 'Dating & Relationships'
          | 'Hobbies, Crafts & DIY'
          | 'Outdoor & Recreational Gear'
          | 'Events, Experiences & Ticketing Platforms'
          | 'Designer & Luxury Apparel'
          | 'Accessories, Jewelry & Watches'
          | 'Footwear & Leather Goods'
          | 'Beauty, Fragrance & Skincare'
          | 'Fashion Marketplaces & Retail Platforms'
          | 'Sustainable & Ethical Fashion'
          | 'Resale, Vintage & Circular Fashion'
          | 'Fashion Tech & Virtual Try-Ons'
          | 'Streetwear & Emerging Luxury'
          | 'Couture & Made-to-Measure'
          | 'News Publishing & Journalism'
          | 'Digital Media & Content Platforms'
          | 'Broadcasting (TV & Radio)'
          | 'Podcasting & Audio Media'
          | 'News Aggregators & Curation Tools'
          | 'Independent & Creator-Led Media'
          | 'Newsletters & Substack-Style Platforms'
          | 'Political & Investigative Media'
          | 'Trade & Niche Publications'
          | 'Media Monitoring & Analytics'
          | 'Professional Teams & Leagues'
          | 'Sports Media & Broadcasting'
          | 'Sports Betting & Fantasy Sports'
          | 'Fitness & Athletic Training Platforms'
          | 'Sportswear & Equipment'
          | 'Esports & Competitive Gaming'
          | 'Sports Venues & Event Management'
          | 'Athlete Management & Talent Agencies'
          | 'Sports Tech & Performance Analytics'
          | 'Youth, Amateur & Collegiate Sports'
          | 'Real Estate Marketplaces'
          | 'Property Management Software'
          | 'Rental Platforms'
          | 'Mortgage & Lending Tech'
          | 'Real Estate Investment Platforms'
          | 'Law Firms & Legal Services'
          | 'Legal Tech & Automation'
          | 'Regulatory Compliance'
          | 'E-Discovery & Litigation Tools'
          | 'Contract Management'
          | 'Governance, Risk & Compliance (GRC)'
          | 'IP & Trademark Management'
          | 'Legal Research & Intelligence'
          | 'Compliance Training & Certification'
          | 'Whistleblower & Ethics Reporting'
          | 'Mobile & Wireless Networks (3G/4G/5G)'
          | 'Broadband & Fiber Internet'
          | 'Satellite & Space-Based Communications'
          | 'Network Equipment & Infrastructure'
          | 'Telecom Billing & OSS/BSS Systems'
          | 'VoIP & Unified Communications'
          | 'Internet Service Providers (ISPs)'
          | 'Edge Computing & Network Virtualization'
          | 'IoT Connectivity Platforms'
          | 'Precision Agriculture & AgTech'
          | 'Crop & Livestock Production'
          | 'Food & Beverage Manufacturing & Processing'
          | 'Food Distribution'
          | 'Restaurants & Food Service'
          | 'Agricultural Inputs & Equipment'
          | 'Sustainable & Regenerative Agriculture'
          | 'Seafood & Aquaculture'
          | 'Management Consulting'
          | 'Marketing & Advertising Agencies'
          | 'Design, Branding & Creative Studios'
          | 'IT Services & Managed Services'
          | 'Staffing, Recruiting & Talent'
          | 'Accounting & Tax Firms'
          | 'Public Relations & Communications'
          | 'Business Process Outsourcing (BPO)'
          | 'Professional Training & Coaching'
          | 'Specialty Chemicals'
          | 'Commodity & Petrochemicals'
          | 'Polymers, Plastics & Rubber'
          | 'Coatings, Adhesives & Sealants'
          | 'Industrial Gases'
          | 'Advanced Materials & Composites'
          | 'Battery Materials & Energy Storage'
          | 'Electronic Materials & Semiconductor Chemicals'
          | 'Agrochemicals & Fertilizers'
          | 'Freight & Transportation Tech'
          | 'Last-Mile Delivery'
          | 'Warehouse Automation'
          | 'Supply Chain Visibility Platforms'
          | 'Logistics Marketplaces'
          | 'Shipping & Freight Forwarding'
          | 'Cold Chain Logistics'
          | 'Reverse Logistics & Returns'
          | 'Cross-Border Trade Tech'
          | 'Transportation Management Systems (TMS)'
          | 'Hotels & Accommodation'
          | 'Vacation Rentals & Short-Term Stays'
          | 'Restaurant Tech & Management'
          | 'Travel Booking Platforms'
          | 'Tourism Experiences & Activities'
          | 'Cruise Lines & Marine Tourism'
          | 'Hospitality Management Systems'
          | 'Event & Venue Management'
          | 'Corporate Travel Management'
          | 'Travel Insurance & Protection'
          | 'Construction Management Software'
          | 'BIM/CAD & Design Tools'
          | 'Construction Marketplaces'
          | 'Equipment Rental & Management'
          | 'Building Materials & Procurement'
          | 'Construction Workforce Management'
          | 'Project Estimation & Bidding'
          | 'Modular & Prefab Construction'
          | 'Construction Safety & Compliance'
          | 'Smart Building Technology'
          | 'Food & Beverage CPG'
          | 'Home & Personal Care CPG'
          | 'CPG Analytics & Insights'
          | 'Direct-to-Consumer CPG Brands'
          | 'CPG Supply Chain & Distribution'
          | 'Private Label Manufacturing'
          | 'CPG Retail Intelligence'
          | 'Sustainable CPG & Packaging'
          | 'Beauty & Cosmetics CPG'
          | 'Health & Wellness CPG';
      }
    }

    /**
     * Important website links for the brand
     */
    export interface Links {
      /**
       * URL to the brand's blog or news page
       */
      blog?: string | null;

      /**
       * URL to the brand's careers or job opportunities page
       */
      careers?: string | null;

      /**
       * URL to the brand's contact or contact us page
       */
      contact?: string | null;

      /**
       * URL to the brand's pricing or plans page
       */
      pricing?: string | null;

      /**
       * URL to the brand's privacy policy page
       */
      privacy?: string | null;

      /**
       * URL to the brand's terms of service or terms and conditions page
       */
      terms?: string | null;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media platform
       */
      type?:
        | 'x'
        | 'facebook'
        | 'instagram'
        | 'linkedin'
        | 'youtube'
        | 'pinterest'
        | 'tiktok'
        | 'dribbble'
        | 'github'
        | 'behance'
        | 'snapchat'
        | 'whatsapp'
        | 'telegram'
        | 'line'
        | 'discord'
        | 'twitch'
        | 'vimeo'
        | 'imdb'
        | 'tumblr'
        | 'flickr'
        | 'giphy'
        | 'medium'
        | 'spotify'
        | 'soundcloud'
        | 'tripadvisor'
        | 'yelp'
        | 'producthunt'
        | 'reddit'
        | 'crunchbase'
        | 'appstore'
        | 'playstore';

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandRetrieveByNameResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveByNameResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveByNameResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * Company email address
     */
    email?: string;

    /**
     * Industry classification information for the brand
     */
    industries?: Brand.Industries;

    /**
     * Indicates whether the brand content is not safe for work (NSFW)
     */
    is_nsfw?: boolean;

    /**
     * Important website links for the brand
     */
    links?: Brand.Links;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * Company phone number
     */
    phone?: string;

    /**
     * The primary language of the brand's website content. Detected from the HTML lang
     * tag, page content analysis, or social media descriptions.
     */
    primary_language?:
      | 'afrikaans'
      | 'albanian'
      | 'amharic'
      | 'arabic'
      | 'armenian'
      | 'assamese'
      | 'aymara'
      | 'azeri'
      | 'basque'
      | 'belarusian'
      | 'bengali'
      | 'bosnian'
      | 'bulgarian'
      | 'burmese'
      | 'cantonese'
      | 'catalan'
      | 'cebuano'
      | 'chinese'
      | 'corsican'
      | 'croatian'
      | 'czech'
      | 'danish'
      | 'dutch'
      | 'english'
      | 'esperanto'
      | 'estonian'
      | 'farsi'
      | 'fijian'
      | 'finnish'
      | 'french'
      | 'galician'
      | 'georgian'
      | 'german'
      | 'greek'
      | 'guarani'
      | 'gujarati'
      | 'haitian-creole'
      | 'hausa'
      | 'hawaiian'
      | 'hebrew'
      | 'hindi'
      | 'hmong'
      | 'hungarian'
      | 'icelandic'
      | 'igbo'
      | 'indonesian'
      | 'irish'
      | 'italian'
      | 'japanese'
      | 'javanese'
      | 'kannada'
      | 'kazakh'
      | 'khmer'
      | 'kinyarwanda'
      | 'korean'
      | 'kurdish'
      | 'kyrgyz'
      | 'lao'
      | 'latin'
      | 'latvian'
      | 'lingala'
      | 'lithuanian'
      | 'luxembourgish'
      | 'macedonian'
      | 'malagasy'
      | 'malay'
      | 'malayalam'
      | 'maltese'
      | 'maori'
      | 'marathi'
      | 'mongolian'
      | 'nepali'
      | 'norwegian'
      | 'odia'
      | 'oromo'
      | 'pashto'
      | 'pidgin'
      | 'polish'
      | 'portuguese'
      | 'punjabi'
      | 'quechua'
      | 'romanian'
      | 'russian'
      | 'samoan'
      | 'scottish-gaelic'
      | 'serbian'
      | 'sesotho'
      | 'shona'
      | 'sindhi'
      | 'sinhala'
      | 'slovak'
      | 'slovene'
      | 'somali'
      | 'spanish'
      | 'sundanese'
      | 'swahili'
      | 'swedish'
      | 'tagalog'
      | 'tajik'
      | 'tamil'
      | 'tatar'
      | 'telugu'
      | 'thai'
      | 'tibetan'
      | 'tigrinya'
      | 'tongan'
      | 'tswana'
      | 'turkish'
      | 'turkmen'
      | 'ukrainian'
      | 'urdu'
      | 'uyghur'
      | 'uzbek'
      | 'vietnamese'
      | 'welsh'
      | 'wolof'
      | 'xhosa'
      | 'yiddish'
      | 'yoruba'
      | 'zulu'
      | null;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    /**
     * Industry classification information for the brand
     */
    export interface Industries {
      /**
       * Easy Industry Classification - array of industry and subindustry pairs
       */
      eic?: Array<Industries.Eic>;
    }

    export namespace Industries {
      export interface Eic {
        /**
         * Industry classification enum
         */
        industry:
          | 'Aerospace & Defense'
          | 'Technology'
          | 'Finance'
          | 'Healthcare'
          | 'Retail & E-commerce'
          | 'Entertainment'
          | 'Education'
          | 'Government & Nonprofit'
          | 'Industrial & Energy'
          | 'Automotive & Transportation'
          | 'Lifestyle & Leisure'
          | 'Luxury & Fashion'
          | 'News & Media'
          | 'Sports'
          | 'Real Estate & PropTech'
          | 'Legal & Compliance'
          | 'Telecommunications'
          | 'Agriculture & Food'
          | 'Professional Services & Agencies'
          | 'Chemicals & Materials'
          | 'Logistics & Supply Chain'
          | 'Hospitality & Tourism'
          | 'Construction & Built Environment'
          | 'Consumer Packaged Goods (CPG)';

        /**
         * Subindustry classification enum
         */
        subindustry:
          | 'Defense Systems & Military Hardware'
          | 'Aerospace Manufacturing'
          | 'Avionics & Navigation Technology'
          | 'Subsea & Naval Defense Systems'
          | 'Space & Satellite Technology'
          | 'Defense IT & Systems Integration'
          | 'Software (B2B)'
          | 'Software (B2C)'
          | 'Cloud Infrastructure & DevOps'
          | 'Cybersecurity'
          | 'Artificial Intelligence & Machine Learning'
          | 'Data Infrastructure & Analytics'
          | 'Hardware & Semiconductors'
          | 'Fintech Infrastructure'
          | 'eCommerce & Marketplace Platforms'
          | 'Developer Tools & APIs'
          | 'Web3 & Blockchain'
          | 'XR & Spatial Computing'
          | 'Banking & Lending'
          | 'Investment Management & WealthTech'
          | 'Insurance & InsurTech'
          | 'Payments & Money Movement'
          | 'Accounting, Tax & Financial Planning Tools'
          | 'Capital Markets & Trading Platforms'
          | 'Financial Infrastructure & APIs'
          | 'Credit Scoring & Risk Management'
          | 'Cryptocurrency & Digital Assets'
          | 'BNPL & Alternative Financing'
          | 'Healthcare Providers & Services'
          | 'Pharmaceuticals & Drug Development'
          | 'Medical Devices & Diagnostics'
          | 'Biotechnology & Genomics'
          | 'Digital Health & Telemedicine'
          | 'Health Insurance & Benefits Tech'
          | 'Clinical Trials & Research Platforms'
          | 'Mental Health & Wellness'
          | 'Healthcare IT & EHR Systems'
          | 'Consumer Health & Wellness Products'
          | 'Online Marketplaces'
          | 'Direct-to-Consumer (DTC) Brands'
          | 'Retail Tech & Point-of-Sale Systems'
          | 'Omnichannel & In-Store Retail'
          | 'E-commerce Enablement & Infrastructure'
          | 'Subscription & Membership Commerce'
          | 'Social Commerce & Influencer Platforms'
          | 'Fashion & Apparel Retail'
          | 'Food, Beverage & Grocery E-commerce'
          | 'Streaming Platforms (Video, Music, Audio)'
          | 'Gaming & Interactive Entertainment'
          | 'Creator Economy & Influencer Platforms'
          | 'Advertising, Adtech & Media Buying'
          | 'Film, TV & Production Studios'
          | 'Events, Venues & Live Entertainment'
          | 'Virtual Worlds & Metaverse Experiences'
          | 'K-12 Education Platforms & Tools'
          | 'Higher Education & University Tech'
          | 'Online Learning & MOOCs'
          | 'Test Prep & Certification'
          | 'Corporate Training & Upskilling'
          | 'Tutoring & Supplemental Learning'
          | 'Education Management Systems (LMS/SIS)'
          | 'Language Learning'
          | 'Creator-Led & Cohort-Based Courses'
          | 'Special Education & Accessibility Tools'
          | 'Government Technology & Digital Services'
          | 'Civic Engagement & Policy Platforms'
          | 'International Development & Humanitarian Aid'
          | 'Philanthropy & Grantmaking'
          | 'Nonprofit Operations & Fundraising Tools'
          | 'Public Health & Social Services'
          | 'Education & Youth Development Programs'
          | 'Environmental & Climate Action Organizations'
          | 'Legal Aid & Social Justice Advocacy'
          | 'Municipal & Infrastructure Services'
          | 'Manufacturing & Industrial Automation'
          | 'Energy Production (Oil, Gas, Nuclear)'
          | 'Renewable Energy & Cleantech'
          | 'Utilities & Grid Infrastructure'
          | 'Industrial IoT & Monitoring Systems'
          | 'Construction & Heavy Equipment'
          | 'Mining & Natural Resources'
          | 'Environmental Engineering & Sustainability'
          | 'Energy Storage & Battery Technology'
          | 'Automotive OEMs & Vehicle Manufacturing'
          | 'Electric Vehicles (EVs) & Charging Infrastructure'
          | 'Mobility-as-a-Service (MaaS)'
          | 'Fleet Management'
          | 'Public Transit & Urban Mobility'
          | 'Autonomous Vehicles & ADAS'
          | 'Aftermarket Parts & Services'
          | 'Telematics & Vehicle Connectivity'
          | 'Aviation & Aerospace Transport'
          | 'Maritime Shipping'
          | 'Fitness & Wellness'
          | 'Beauty & Personal Care'
          | 'Home & Living'
          | 'Dating & Relationships'
          | 'Hobbies, Crafts & DIY'
          | 'Outdoor & Recreational Gear'
          | 'Events, Experiences & Ticketing Platforms'
          | 'Designer & Luxury Apparel'
          | 'Accessories, Jewelry & Watches'
          | 'Footwear & Leather Goods'
          | 'Beauty, Fragrance & Skincare'
          | 'Fashion Marketplaces & Retail Platforms'
          | 'Sustainable & Ethical Fashion'
          | 'Resale, Vintage & Circular Fashion'
          | 'Fashion Tech & Virtual Try-Ons'
          | 'Streetwear & Emerging Luxury'
          | 'Couture & Made-to-Measure'
          | 'News Publishing & Journalism'
          | 'Digital Media & Content Platforms'
          | 'Broadcasting (TV & Radio)'
          | 'Podcasting & Audio Media'
          | 'News Aggregators & Curation Tools'
          | 'Independent & Creator-Led Media'
          | 'Newsletters & Substack-Style Platforms'
          | 'Political & Investigative Media'
          | 'Trade & Niche Publications'
          | 'Media Monitoring & Analytics'
          | 'Professional Teams & Leagues'
          | 'Sports Media & Broadcasting'
          | 'Sports Betting & Fantasy Sports'
          | 'Fitness & Athletic Training Platforms'
          | 'Sportswear & Equipment'
          | 'Esports & Competitive Gaming'
          | 'Sports Venues & Event Management'
          | 'Athlete Management & Talent Agencies'
          | 'Sports Tech & Performance Analytics'
          | 'Youth, Amateur & Collegiate Sports'
          | 'Real Estate Marketplaces'
          | 'Property Management Software'
          | 'Rental Platforms'
          | 'Mortgage & Lending Tech'
          | 'Real Estate Investment Platforms'
          | 'Law Firms & Legal Services'
          | 'Legal Tech & Automation'
          | 'Regulatory Compliance'
          | 'E-Discovery & Litigation Tools'
          | 'Contract Management'
          | 'Governance, Risk & Compliance (GRC)'
          | 'IP & Trademark Management'
          | 'Legal Research & Intelligence'
          | 'Compliance Training & Certification'
          | 'Whistleblower & Ethics Reporting'
          | 'Mobile & Wireless Networks (3G/4G/5G)'
          | 'Broadband & Fiber Internet'
          | 'Satellite & Space-Based Communications'
          | 'Network Equipment & Infrastructure'
          | 'Telecom Billing & OSS/BSS Systems'
          | 'VoIP & Unified Communications'
          | 'Internet Service Providers (ISPs)'
          | 'Edge Computing & Network Virtualization'
          | 'IoT Connectivity Platforms'
          | 'Precision Agriculture & AgTech'
          | 'Crop & Livestock Production'
          | 'Food & Beverage Manufacturing & Processing'
          | 'Food Distribution'
          | 'Restaurants & Food Service'
          | 'Agricultural Inputs & Equipment'
          | 'Sustainable & Regenerative Agriculture'
          | 'Seafood & Aquaculture'
          | 'Management Consulting'
          | 'Marketing & Advertising Agencies'
          | 'Design, Branding & Creative Studios'
          | 'IT Services & Managed Services'
          | 'Staffing, Recruiting & Talent'
          | 'Accounting & Tax Firms'
          | 'Public Relations & Communications'
          | 'Business Process Outsourcing (BPO)'
          | 'Professional Training & Coaching'
          | 'Specialty Chemicals'
          | 'Commodity & Petrochemicals'
          | 'Polymers, Plastics & Rubber'
          | 'Coatings, Adhesives & Sealants'
          | 'Industrial Gases'
          | 'Advanced Materials & Composites'
          | 'Battery Materials & Energy Storage'
          | 'Electronic Materials & Semiconductor Chemicals'
          | 'Agrochemicals & Fertilizers'
          | 'Freight & Transportation Tech'
          | 'Last-Mile Delivery'
          | 'Warehouse Automation'
          | 'Supply Chain Visibility Platforms'
          | 'Logistics Marketplaces'
          | 'Shipping & Freight Forwarding'
          | 'Cold Chain Logistics'
          | 'Reverse Logistics & Returns'
          | 'Cross-Border Trade Tech'
          | 'Transportation Management Systems (TMS)'
          | 'Hotels & Accommodation'
          | 'Vacation Rentals & Short-Term Stays'
          | 'Restaurant Tech & Management'
          | 'Travel Booking Platforms'
          | 'Tourism Experiences & Activities'
          | 'Cruise Lines & Marine Tourism'
          | 'Hospitality Management Systems'
          | 'Event & Venue Management'
          | 'Corporate Travel Management'
          | 'Travel Insurance & Protection'
          | 'Construction Management Software'
          | 'BIM/CAD & Design Tools'
          | 'Construction Marketplaces'
          | 'Equipment Rental & Management'
          | 'Building Materials & Procurement'
          | 'Construction Workforce Management'
          | 'Project Estimation & Bidding'
          | 'Modular & Prefab Construction'
          | 'Construction Safety & Compliance'
          | 'Smart Building Technology'
          | 'Food & Beverage CPG'
          | 'Home & Personal Care CPG'
          | 'CPG Analytics & Insights'
          | 'Direct-to-Consumer CPG Brands'
          | 'CPG Supply Chain & Distribution'
          | 'Private Label Manufacturing'
          | 'CPG Retail Intelligence'
          | 'Sustainable CPG & Packaging'
          | 'Beauty & Cosmetics CPG'
          | 'Health & Wellness CPG';
      }
    }

    /**
     * Important website links for the brand
     */
    export interface Links {
      /**
       * URL to the brand's blog or news page
       */
      blog?: string | null;

      /**
       * URL to the brand's careers or job opportunities page
       */
      careers?: string | null;

      /**
       * URL to the brand's contact or contact us page
       */
      contact?: string | null;

      /**
       * URL to the brand's pricing or plans page
       */
      pricing?: string | null;

      /**
       * URL to the brand's privacy policy page
       */
      privacy?: string | null;

      /**
       * URL to the brand's terms of service or terms and conditions page
       */
      terms?: string | null;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media platform
       */
      type?:
        | 'x'
        | 'facebook'
        | 'instagram'
        | 'linkedin'
        | 'youtube'
        | 'pinterest'
        | 'tiktok'
        | 'dribbble'
        | 'github'
        | 'behance'
        | 'snapchat'
        | 'whatsapp'
        | 'telegram'
        | 'line'
        | 'discord'
        | 'twitch'
        | 'vimeo'
        | 'imdb'
        | 'tumblr'
        | 'flickr'
        | 'giphy'
        | 'medium'
        | 'spotify'
        | 'soundcloud'
        | 'tripadvisor'
        | 'yelp'
        | 'producthunt'
        | 'reddit'
        | 'crunchbase'
        | 'appstore'
        | 'playstore';

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandRetrieveByTickerResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveByTickerResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveByTickerResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * Company email address
     */
    email?: string;

    /**
     * Industry classification information for the brand
     */
    industries?: Brand.Industries;

    /**
     * Indicates whether the brand content is not safe for work (NSFW)
     */
    is_nsfw?: boolean;

    /**
     * Important website links for the brand
     */
    links?: Brand.Links;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * Company phone number
     */
    phone?: string;

    /**
     * The primary language of the brand's website content. Detected from the HTML lang
     * tag, page content analysis, or social media descriptions.
     */
    primary_language?:
      | 'afrikaans'
      | 'albanian'
      | 'amharic'
      | 'arabic'
      | 'armenian'
      | 'assamese'
      | 'aymara'
      | 'azeri'
      | 'basque'
      | 'belarusian'
      | 'bengali'
      | 'bosnian'
      | 'bulgarian'
      | 'burmese'
      | 'cantonese'
      | 'catalan'
      | 'cebuano'
      | 'chinese'
      | 'corsican'
      | 'croatian'
      | 'czech'
      | 'danish'
      | 'dutch'
      | 'english'
      | 'esperanto'
      | 'estonian'
      | 'farsi'
      | 'fijian'
      | 'finnish'
      | 'french'
      | 'galician'
      | 'georgian'
      | 'german'
      | 'greek'
      | 'guarani'
      | 'gujarati'
      | 'haitian-creole'
      | 'hausa'
      | 'hawaiian'
      | 'hebrew'
      | 'hindi'
      | 'hmong'
      | 'hungarian'
      | 'icelandic'
      | 'igbo'
      | 'indonesian'
      | 'irish'
      | 'italian'
      | 'japanese'
      | 'javanese'
      | 'kannada'
      | 'kazakh'
      | 'khmer'
      | 'kinyarwanda'
      | 'korean'
      | 'kurdish'
      | 'kyrgyz'
      | 'lao'
      | 'latin'
      | 'latvian'
      | 'lingala'
      | 'lithuanian'
      | 'luxembourgish'
      | 'macedonian'
      | 'malagasy'
      | 'malay'
      | 'malayalam'
      | 'maltese'
      | 'maori'
      | 'marathi'
      | 'mongolian'
      | 'nepali'
      | 'norwegian'
      | 'odia'
      | 'oromo'
      | 'pashto'
      | 'pidgin'
      | 'polish'
      | 'portuguese'
      | 'punjabi'
      | 'quechua'
      | 'romanian'
      | 'russian'
      | 'samoan'
      | 'scottish-gaelic'
      | 'serbian'
      | 'sesotho'
      | 'shona'
      | 'sindhi'
      | 'sinhala'
      | 'slovak'
      | 'slovene'
      | 'somali'
      | 'spanish'
      | 'sundanese'
      | 'swahili'
      | 'swedish'
      | 'tagalog'
      | 'tajik'
      | 'tamil'
      | 'tatar'
      | 'telugu'
      | 'thai'
      | 'tibetan'
      | 'tigrinya'
      | 'tongan'
      | 'tswana'
      | 'turkish'
      | 'turkmen'
      | 'ukrainian'
      | 'urdu'
      | 'uyghur'
      | 'uzbek'
      | 'vietnamese'
      | 'welsh'
      | 'wolof'
      | 'xhosa'
      | 'yiddish'
      | 'yoruba'
      | 'zulu'
      | null;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    /**
     * Industry classification information for the brand
     */
    export interface Industries {
      /**
       * Easy Industry Classification - array of industry and subindustry pairs
       */
      eic?: Array<Industries.Eic>;
    }

    export namespace Industries {
      export interface Eic {
        /**
         * Industry classification enum
         */
        industry:
          | 'Aerospace & Defense'
          | 'Technology'
          | 'Finance'
          | 'Healthcare'
          | 'Retail & E-commerce'
          | 'Entertainment'
          | 'Education'
          | 'Government & Nonprofit'
          | 'Industrial & Energy'
          | 'Automotive & Transportation'
          | 'Lifestyle & Leisure'
          | 'Luxury & Fashion'
          | 'News & Media'
          | 'Sports'
          | 'Real Estate & PropTech'
          | 'Legal & Compliance'
          | 'Telecommunications'
          | 'Agriculture & Food'
          | 'Professional Services & Agencies'
          | 'Chemicals & Materials'
          | 'Logistics & Supply Chain'
          | 'Hospitality & Tourism'
          | 'Construction & Built Environment'
          | 'Consumer Packaged Goods (CPG)';

        /**
         * Subindustry classification enum
         */
        subindustry:
          | 'Defense Systems & Military Hardware'
          | 'Aerospace Manufacturing'
          | 'Avionics & Navigation Technology'
          | 'Subsea & Naval Defense Systems'
          | 'Space & Satellite Technology'
          | 'Defense IT & Systems Integration'
          | 'Software (B2B)'
          | 'Software (B2C)'
          | 'Cloud Infrastructure & DevOps'
          | 'Cybersecurity'
          | 'Artificial Intelligence & Machine Learning'
          | 'Data Infrastructure & Analytics'
          | 'Hardware & Semiconductors'
          | 'Fintech Infrastructure'
          | 'eCommerce & Marketplace Platforms'
          | 'Developer Tools & APIs'
          | 'Web3 & Blockchain'
          | 'XR & Spatial Computing'
          | 'Banking & Lending'
          | 'Investment Management & WealthTech'
          | 'Insurance & InsurTech'
          | 'Payments & Money Movement'
          | 'Accounting, Tax & Financial Planning Tools'
          | 'Capital Markets & Trading Platforms'
          | 'Financial Infrastructure & APIs'
          | 'Credit Scoring & Risk Management'
          | 'Cryptocurrency & Digital Assets'
          | 'BNPL & Alternative Financing'
          | 'Healthcare Providers & Services'
          | 'Pharmaceuticals & Drug Development'
          | 'Medical Devices & Diagnostics'
          | 'Biotechnology & Genomics'
          | 'Digital Health & Telemedicine'
          | 'Health Insurance & Benefits Tech'
          | 'Clinical Trials & Research Platforms'
          | 'Mental Health & Wellness'
          | 'Healthcare IT & EHR Systems'
          | 'Consumer Health & Wellness Products'
          | 'Online Marketplaces'
          | 'Direct-to-Consumer (DTC) Brands'
          | 'Retail Tech & Point-of-Sale Systems'
          | 'Omnichannel & In-Store Retail'
          | 'E-commerce Enablement & Infrastructure'
          | 'Subscription & Membership Commerce'
          | 'Social Commerce & Influencer Platforms'
          | 'Fashion & Apparel Retail'
          | 'Food, Beverage & Grocery E-commerce'
          | 'Streaming Platforms (Video, Music, Audio)'
          | 'Gaming & Interactive Entertainment'
          | 'Creator Economy & Influencer Platforms'
          | 'Advertising, Adtech & Media Buying'
          | 'Film, TV & Production Studios'
          | 'Events, Venues & Live Entertainment'
          | 'Virtual Worlds & Metaverse Experiences'
          | 'K-12 Education Platforms & Tools'
          | 'Higher Education & University Tech'
          | 'Online Learning & MOOCs'
          | 'Test Prep & Certification'
          | 'Corporate Training & Upskilling'
          | 'Tutoring & Supplemental Learning'
          | 'Education Management Systems (LMS/SIS)'
          | 'Language Learning'
          | 'Creator-Led & Cohort-Based Courses'
          | 'Special Education & Accessibility Tools'
          | 'Government Technology & Digital Services'
          | 'Civic Engagement & Policy Platforms'
          | 'International Development & Humanitarian Aid'
          | 'Philanthropy & Grantmaking'
          | 'Nonprofit Operations & Fundraising Tools'
          | 'Public Health & Social Services'
          | 'Education & Youth Development Programs'
          | 'Environmental & Climate Action Organizations'
          | 'Legal Aid & Social Justice Advocacy'
          | 'Municipal & Infrastructure Services'
          | 'Manufacturing & Industrial Automation'
          | 'Energy Production (Oil, Gas, Nuclear)'
          | 'Renewable Energy & Cleantech'
          | 'Utilities & Grid Infrastructure'
          | 'Industrial IoT & Monitoring Systems'
          | 'Construction & Heavy Equipment'
          | 'Mining & Natural Resources'
          | 'Environmental Engineering & Sustainability'
          | 'Energy Storage & Battery Technology'
          | 'Automotive OEMs & Vehicle Manufacturing'
          | 'Electric Vehicles (EVs) & Charging Infrastructure'
          | 'Mobility-as-a-Service (MaaS)'
          | 'Fleet Management'
          | 'Public Transit & Urban Mobility'
          | 'Autonomous Vehicles & ADAS'
          | 'Aftermarket Parts & Services'
          | 'Telematics & Vehicle Connectivity'
          | 'Aviation & Aerospace Transport'
          | 'Maritime Shipping'
          | 'Fitness & Wellness'
          | 'Beauty & Personal Care'
          | 'Home & Living'
          | 'Dating & Relationships'
          | 'Hobbies, Crafts & DIY'
          | 'Outdoor & Recreational Gear'
          | 'Events, Experiences & Ticketing Platforms'
          | 'Designer & Luxury Apparel'
          | 'Accessories, Jewelry & Watches'
          | 'Footwear & Leather Goods'
          | 'Beauty, Fragrance & Skincare'
          | 'Fashion Marketplaces & Retail Platforms'
          | 'Sustainable & Ethical Fashion'
          | 'Resale, Vintage & Circular Fashion'
          | 'Fashion Tech & Virtual Try-Ons'
          | 'Streetwear & Emerging Luxury'
          | 'Couture & Made-to-Measure'
          | 'News Publishing & Journalism'
          | 'Digital Media & Content Platforms'
          | 'Broadcasting (TV & Radio)'
          | 'Podcasting & Audio Media'
          | 'News Aggregators & Curation Tools'
          | 'Independent & Creator-Led Media'
          | 'Newsletters & Substack-Style Platforms'
          | 'Political & Investigative Media'
          | 'Trade & Niche Publications'
          | 'Media Monitoring & Analytics'
          | 'Professional Teams & Leagues'
          | 'Sports Media & Broadcasting'
          | 'Sports Betting & Fantasy Sports'
          | 'Fitness & Athletic Training Platforms'
          | 'Sportswear & Equipment'
          | 'Esports & Competitive Gaming'
          | 'Sports Venues & Event Management'
          | 'Athlete Management & Talent Agencies'
          | 'Sports Tech & Performance Analytics'
          | 'Youth, Amateur & Collegiate Sports'
          | 'Real Estate Marketplaces'
          | 'Property Management Software'
          | 'Rental Platforms'
          | 'Mortgage & Lending Tech'
          | 'Real Estate Investment Platforms'
          | 'Law Firms & Legal Services'
          | 'Legal Tech & Automation'
          | 'Regulatory Compliance'
          | 'E-Discovery & Litigation Tools'
          | 'Contract Management'
          | 'Governance, Risk & Compliance (GRC)'
          | 'IP & Trademark Management'
          | 'Legal Research & Intelligence'
          | 'Compliance Training & Certification'
          | 'Whistleblower & Ethics Reporting'
          | 'Mobile & Wireless Networks (3G/4G/5G)'
          | 'Broadband & Fiber Internet'
          | 'Satellite & Space-Based Communications'
          | 'Network Equipment & Infrastructure'
          | 'Telecom Billing & OSS/BSS Systems'
          | 'VoIP & Unified Communications'
          | 'Internet Service Providers (ISPs)'
          | 'Edge Computing & Network Virtualization'
          | 'IoT Connectivity Platforms'
          | 'Precision Agriculture & AgTech'
          | 'Crop & Livestock Production'
          | 'Food & Beverage Manufacturing & Processing'
          | 'Food Distribution'
          | 'Restaurants & Food Service'
          | 'Agricultural Inputs & Equipment'
          | 'Sustainable & Regenerative Agriculture'
          | 'Seafood & Aquaculture'
          | 'Management Consulting'
          | 'Marketing & Advertising Agencies'
          | 'Design, Branding & Creative Studios'
          | 'IT Services & Managed Services'
          | 'Staffing, Recruiting & Talent'
          | 'Accounting & Tax Firms'
          | 'Public Relations & Communications'
          | 'Business Process Outsourcing (BPO)'
          | 'Professional Training & Coaching'
          | 'Specialty Chemicals'
          | 'Commodity & Petrochemicals'
          | 'Polymers, Plastics & Rubber'
          | 'Coatings, Adhesives & Sealants'
          | 'Industrial Gases'
          | 'Advanced Materials & Composites'
          | 'Battery Materials & Energy Storage'
          | 'Electronic Materials & Semiconductor Chemicals'
          | 'Agrochemicals & Fertilizers'
          | 'Freight & Transportation Tech'
          | 'Last-Mile Delivery'
          | 'Warehouse Automation'
          | 'Supply Chain Visibility Platforms'
          | 'Logistics Marketplaces'
          | 'Shipping & Freight Forwarding'
          | 'Cold Chain Logistics'
          | 'Reverse Logistics & Returns'
          | 'Cross-Border Trade Tech'
          | 'Transportation Management Systems (TMS)'
          | 'Hotels & Accommodation'
          | 'Vacation Rentals & Short-Term Stays'
          | 'Restaurant Tech & Management'
          | 'Travel Booking Platforms'
          | 'Tourism Experiences & Activities'
          | 'Cruise Lines & Marine Tourism'
          | 'Hospitality Management Systems'
          | 'Event & Venue Management'
          | 'Corporate Travel Management'
          | 'Travel Insurance & Protection'
          | 'Construction Management Software'
          | 'BIM/CAD & Design Tools'
          | 'Construction Marketplaces'
          | 'Equipment Rental & Management'
          | 'Building Materials & Procurement'
          | 'Construction Workforce Management'
          | 'Project Estimation & Bidding'
          | 'Modular & Prefab Construction'
          | 'Construction Safety & Compliance'
          | 'Smart Building Technology'
          | 'Food & Beverage CPG'
          | 'Home & Personal Care CPG'
          | 'CPG Analytics & Insights'
          | 'Direct-to-Consumer CPG Brands'
          | 'CPG Supply Chain & Distribution'
          | 'Private Label Manufacturing'
          | 'CPG Retail Intelligence'
          | 'Sustainable CPG & Packaging'
          | 'Beauty & Cosmetics CPG'
          | 'Health & Wellness CPG';
      }
    }

    /**
     * Important website links for the brand
     */
    export interface Links {
      /**
       * URL to the brand's blog or news page
       */
      blog?: string | null;

      /**
       * URL to the brand's careers or job opportunities page
       */
      careers?: string | null;

      /**
       * URL to the brand's contact or contact us page
       */
      contact?: string | null;

      /**
       * URL to the brand's pricing or plans page
       */
      pricing?: string | null;

      /**
       * URL to the brand's privacy policy page
       */
      privacy?: string | null;

      /**
       * URL to the brand's terms of service or terms and conditions page
       */
      terms?: string | null;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media platform
       */
      type?:
        | 'x'
        | 'facebook'
        | 'instagram'
        | 'linkedin'
        | 'youtube'
        | 'pinterest'
        | 'tiktok'
        | 'dribbble'
        | 'github'
        | 'behance'
        | 'snapchat'
        | 'whatsapp'
        | 'telegram'
        | 'line'
        | 'discord'
        | 'twitch'
        | 'vimeo'
        | 'imdb'
        | 'tumblr'
        | 'flickr'
        | 'giphy'
        | 'medium'
        | 'spotify'
        | 'soundcloud'
        | 'tripadvisor'
        | 'yelp'
        | 'producthunt'
        | 'reddit'
        | 'crunchbase'
        | 'appstore'
        | 'playstore';

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandRetrieveSimplifiedResponse {
  /**
   * Simplified brand information
   */
  brand?: BrandRetrieveSimplifiedResponse.Brand;

  /**
   * HTTP status code of the response
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveSimplifiedResponse {
  /**
   * Simplified brand information
   */
  export interface Brand {
    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Indicates when this logo is best used: 'light' = best for light mode, 'dark' =
       * best for dark mode, 'has_opaque_background' = can be used for either as image
       * has its own background
       */
      mode?: 'light' | 'dark' | 'has_opaque_background';

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * Type of the logo based on resolution (e.g., 'icon', 'logo')
       */
      type?: 'icon' | 'logo';

      /**
       * CDN hosted url of the logo (ready for display)
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }
  }
}

export interface BrandWebScrapeHTMLResponse {
  /**
   * Raw HTML content of the page
   */
  html: string;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;
}

export interface BrandWebScrapeImagesResponse {
  /**
   * Array of scraped images
   */
  images: Array<BrandWebScrapeImagesResponse.Image>;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;
}

export namespace BrandWebScrapeImagesResponse {
  export interface Image {
    /**
     * Alt text of the image, or null if not present
     */
    alt: string | null;

    /**
     * The HTML element the image was found in
     */
    element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background';

    /**
     * The image source - can be a URL, inline HTML (for SVGs), or a base64 data URI
     */
    src: string;

    /**
     * The type/format of the src value
     */
    type: 'url' | 'html' | 'base64';
  }
}

export interface BrandWebScrapeMdResponse {
  /**
   * Page content converted to GitHub Flavored Markdown
   */
  markdown: string;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;
}

export interface BrandWebScrapeSitemapResponse {
  /**
   * The normalized domain that was crawled
   */
  domain: string;

  /**
   * Metadata about the sitemap crawl operation
   */
  meta: BrandWebScrapeSitemapResponse.Meta;

  /**
   * Indicates success
   */
  success: true;

  /**
   * Array of discovered page URLs from the sitemap (max 500)
   */
  urls: Array<string>;
}

export namespace BrandWebScrapeSitemapResponse {
  /**
   * Metadata about the sitemap crawl operation
   */
  export interface Meta {
    /**
     * Number of errors encountered during crawling
     */
    errors: number;

    /**
     * Total number of sitemap files discovered
     */
    sitemapsDiscovered: number;

    /**
     * Number of sitemap files successfully fetched and parsed
     */
    sitemapsFetched: number;

    /**
     * Number of sitemap files skipped (due to errors, timeouts, or limits)
     */
    sitemapsSkipped: number;
  }
}

export interface BrandRetrieveParams {
  /**
   * Domain name to retrieve brand data for (e.g., 'example.com', 'google.com').
   * Cannot be used with name or ticker parameters.
   */
  domain: string;

  /**
   * Optional parameter to force the language of the retrieved brand data.
   */
  force_language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'armenian'
    | 'assamese'
    | 'aymara'
    | 'azeri'
    | 'basque'
    | 'belarusian'
    | 'bengali'
    | 'bosnian'
    | 'bulgarian'
    | 'burmese'
    | 'cantonese'
    | 'catalan'
    | 'cebuano'
    | 'chinese'
    | 'corsican'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'esperanto'
    | 'estonian'
    | 'farsi'
    | 'fijian'
    | 'finnish'
    | 'french'
    | 'galician'
    | 'georgian'
    | 'german'
    | 'greek'
    | 'guarani'
    | 'gujarati'
    | 'haitian-creole'
    | 'hausa'
    | 'hawaiian'
    | 'hebrew'
    | 'hindi'
    | 'hmong'
    | 'hungarian'
    | 'icelandic'
    | 'igbo'
    | 'indonesian'
    | 'irish'
    | 'italian'
    | 'japanese'
    | 'javanese'
    | 'kannada'
    | 'kazakh'
    | 'khmer'
    | 'kinyarwanda'
    | 'korean'
    | 'kurdish'
    | 'kyrgyz'
    | 'lao'
    | 'latin'
    | 'latvian'
    | 'lingala'
    | 'lithuanian'
    | 'luxembourgish'
    | 'macedonian'
    | 'malagasy'
    | 'malay'
    | 'malayalam'
    | 'maltese'
    | 'maori'
    | 'marathi'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'odia'
    | 'oromo'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'punjabi'
    | 'quechua'
    | 'romanian'
    | 'russian'
    | 'samoan'
    | 'scottish-gaelic'
    | 'serbian'
    | 'sesotho'
    | 'shona'
    | 'sindhi'
    | 'sinhala'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'sundanese'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'tajik'
    | 'tamil'
    | 'tatar'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'tigrinya'
    | 'tongan'
    | 'tswana'
    | 'turkish'
    | 'turkmen'
    | 'ukrainian'
    | 'urdu'
    | 'uyghur'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh'
    | 'wolof'
    | 'xhosa'
    | 'yiddish'
    | 'yoruba'
    | 'zulu';

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data. Works with all three lookup methods.
   */
  maxSpeed?: boolean;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandAIProductParams {
  /**
   * The product page URL to extract product data from.
   */
  url: string;

  /**
   * Return a cached result if a prior scrape for the same parameters exists and is
   * younger than this many milliseconds. Defaults to 7 days (604800000 ms) when
   * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
   */
  maxAgeMs?: number;

  /**
   * Optional timeout in milliseconds for the request. Maximum allowed value is
   * 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export type BrandAIProductsParams = BrandAIProductsParams.ByDomain | BrandAIProductsParams.ByDirectURL;

export declare namespace BrandAIProductsParams {
  export interface ByDomain {
    /**
     * The domain name to analyze.
     */
    domain: string;

    /**
     * Return a cached result if a prior scrape for the same parameters exists and is
     * younger than this many milliseconds. Defaults to 7 days (604800000 ms) when
     * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
     */
    maxAgeMs?: number;

    /**
     * Maximum number of products to extract.
     */
    maxProducts?: number;

    /**
     * Optional timeout in milliseconds for the request. Maximum allowed value is
     * 300000ms (5 minutes).
     */
    timeoutMS?: number;
  }

  export interface ByDirectURL {
    /**
     * A specific URL to use directly as the starting point for extraction without
     * domain resolution.
     */
    directUrl: string;

    /**
     * Return a cached result if a prior scrape for the same parameters exists and is
     * younger than this many milliseconds. Defaults to 7 days (604800000 ms) when
     * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
     */
    maxAgeMs?: number;

    /**
     * Maximum number of products to extract.
     */
    maxProducts?: number;

    /**
     * Optional timeout in milliseconds for the request. Maximum allowed value is
     * 300000ms (5 minutes).
     */
    timeoutMS?: number;
  }
}

export interface BrandAIQueryParams {
  /**
   * Array of data points to extract from the website
   */
  data_to_extract: Array<BrandAIQueryParams.DataToExtract>;

  /**
   * The domain name to analyze
   */
  domain: string;

  /**
   * Optional object specifying which pages to analyze
   */
  specific_pages?: BrandAIQueryParams.SpecificPages;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export namespace BrandAIQueryParams {
  export interface DataToExtract {
    /**
     * Description of what to extract
     */
    datapoint_description: string;

    /**
     * Example of the expected value
     */
    datapoint_example: string;

    /**
     * Name of the data point to extract
     */
    datapoint_name: string;

    /**
     * Type of the data point
     */
    datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url';

    /**
     * Type of items in the list when datapoint_type is 'list'. Defaults to 'string'.
     * Use 'object' to extract an array of objects matching a schema.
     */
    datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object';

    /**
     * Schema definition for objects when datapoint_list_type is 'object'. Provide a
     * map of field names to their scalar types.
     */
    datapoint_object_schema?: { [key: string]: 'string' | 'number' | 'date' | 'boolean' };
  }

  /**
   * Optional object specifying which pages to analyze
   */
  export interface SpecificPages {
    /**
     * Whether to analyze the about us page
     */
    about_us?: boolean;

    /**
     * Whether to analyze the blog
     */
    blog?: boolean;

    /**
     * Whether to analyze the careers page
     */
    careers?: boolean;

    /**
     * Whether to analyze the contact us page
     */
    contact_us?: boolean;

    /**
     * Whether to analyze the FAQ page
     */
    faq?: boolean;

    /**
     * Whether to analyze the home page
     */
    home_page?: boolean;

    /**
     * Whether to analyze the pricing page
     */
    pricing?: boolean;

    /**
     * Whether to analyze the privacy policy page
     */
    privacy_policy?: boolean;

    /**
     * Whether to analyze the terms and conditions page
     */
    terms_and_conditions?: boolean;
  }
}

export interface BrandIdentifyFromTransactionParams {
  /**
   * Transaction information to identify the brand
   */
  transaction_info: string;

  /**
   * Optional city name to prioritize when searching for the brand.
   */
  city?: string;

  /**
   * Optional country code (GL parameter) to specify the country. This affects the
   * geographic location used for search queries.
   */
  country_gl?:
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'an'
    | 'ao'
    | 'aq'
    | 'ar'
    | 'as'
    | 'at'
    | 'au'
    | 'aw'
    | 'az'
    | 'ba'
    | 'bb'
    | 'bd'
    | 'be'
    | 'bf'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bj'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'bt'
    | 'bv'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cc'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'ck'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cu'
    | 'cv'
    | 'cx'
    | 'cy'
    | 'cz'
    | 'de'
    | 'dj'
    | 'dk'
    | 'dm'
    | 'do'
    | 'dz'
    | 'ec'
    | 'ee'
    | 'eg'
    | 'eh'
    | 'er'
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fk'
    | 'fm'
    | 'fo'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gh'
    | 'gi'
    | 'gl'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gs'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hm'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'io'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'ki'
    | 'km'
    | 'kn'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
    | 'li'
    | 'lk'
    | 'lr'
    | 'ls'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'ly'
    | 'ma'
    | 'mc'
    | 'md'
    | 'mg'
    | 'mh'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mp'
    | 'mq'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'mu'
    | 'mv'
    | 'mw'
    | 'mx'
    | 'my'
    | 'mz'
    | 'na'
    | 'nc'
    | 'ne'
    | 'nf'
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nr'
    | 'nu'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pm'
    | 'pn'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'pw'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sb'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'sh'
    | 'si'
    | 'sj'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'st'
    | 'sv'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tf'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tk'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'to'
    | 'tr'
    | 'tt'
    | 'tv'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'um'
    | 'us'
    | 'uy'
    | 'uz'
    | 'va'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'vu'
    | 'wf'
    | 'ws'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';

  /**
   * Optional parameter to force the language of the retrieved brand data.
   */
  force_language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'armenian'
    | 'assamese'
    | 'aymara'
    | 'azeri'
    | 'basque'
    | 'belarusian'
    | 'bengali'
    | 'bosnian'
    | 'bulgarian'
    | 'burmese'
    | 'cantonese'
    | 'catalan'
    | 'cebuano'
    | 'chinese'
    | 'corsican'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'esperanto'
    | 'estonian'
    | 'farsi'
    | 'fijian'
    | 'finnish'
    | 'french'
    | 'galician'
    | 'georgian'
    | 'german'
    | 'greek'
    | 'guarani'
    | 'gujarati'
    | 'haitian-creole'
    | 'hausa'
    | 'hawaiian'
    | 'hebrew'
    | 'hindi'
    | 'hmong'
    | 'hungarian'
    | 'icelandic'
    | 'igbo'
    | 'indonesian'
    | 'irish'
    | 'italian'
    | 'japanese'
    | 'javanese'
    | 'kannada'
    | 'kazakh'
    | 'khmer'
    | 'kinyarwanda'
    | 'korean'
    | 'kurdish'
    | 'kyrgyz'
    | 'lao'
    | 'latin'
    | 'latvian'
    | 'lingala'
    | 'lithuanian'
    | 'luxembourgish'
    | 'macedonian'
    | 'malagasy'
    | 'malay'
    | 'malayalam'
    | 'maltese'
    | 'maori'
    | 'marathi'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'odia'
    | 'oromo'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'punjabi'
    | 'quechua'
    | 'romanian'
    | 'russian'
    | 'samoan'
    | 'scottish-gaelic'
    | 'serbian'
    | 'sesotho'
    | 'shona'
    | 'sindhi'
    | 'sinhala'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'sundanese'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'tajik'
    | 'tamil'
    | 'tatar'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'tigrinya'
    | 'tongan'
    | 'tswana'
    | 'turkish'
    | 'turkmen'
    | 'ukrainian'
    | 'urdu'
    | 'uyghur'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh'
    | 'wolof'
    | 'xhosa'
    | 'yiddish'
    | 'yoruba'
    | 'zulu';

  /**
   * When set to true, the API will perform an additional verification steps to
   * ensure the identified brand matches the transaction with high confidence.
   */
  high_confidence_only?: boolean;

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional Merchant Category Code (MCC) to help identify the business
   * category/industry.
   */
  mcc?: string;

  /**
   * Optional phone number from the transaction to help verify brand match.
   */
  phone?: number;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandPrefetchParams {
  /**
   * Domain name to prefetch brand data for
   */
  domain: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandPrefetchByEmailParams {
  /**
   * Email address to prefetch brand data for. The domain will be extracted from the
   * email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email
   * addresses are not allowed.
   */
  email: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveByEmailParams {
  /**
   * Email address to retrieve brand data for (e.g., 'contact@example.com'). The
   * domain will be extracted from the email. Free email providers (gmail.com,
   * yahoo.com, etc.) and disposable email addresses are not allowed.
   */
  email: string;

  /**
   * Optional parameter to force the language of the retrieved brand data.
   */
  force_language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'armenian'
    | 'assamese'
    | 'aymara'
    | 'azeri'
    | 'basque'
    | 'belarusian'
    | 'bengali'
    | 'bosnian'
    | 'bulgarian'
    | 'burmese'
    | 'cantonese'
    | 'catalan'
    | 'cebuano'
    | 'chinese'
    | 'corsican'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'esperanto'
    | 'estonian'
    | 'farsi'
    | 'fijian'
    | 'finnish'
    | 'french'
    | 'galician'
    | 'georgian'
    | 'german'
    | 'greek'
    | 'guarani'
    | 'gujarati'
    | 'haitian-creole'
    | 'hausa'
    | 'hawaiian'
    | 'hebrew'
    | 'hindi'
    | 'hmong'
    | 'hungarian'
    | 'icelandic'
    | 'igbo'
    | 'indonesian'
    | 'irish'
    | 'italian'
    | 'japanese'
    | 'javanese'
    | 'kannada'
    | 'kazakh'
    | 'khmer'
    | 'kinyarwanda'
    | 'korean'
    | 'kurdish'
    | 'kyrgyz'
    | 'lao'
    | 'latin'
    | 'latvian'
    | 'lingala'
    | 'lithuanian'
    | 'luxembourgish'
    | 'macedonian'
    | 'malagasy'
    | 'malay'
    | 'malayalam'
    | 'maltese'
    | 'maori'
    | 'marathi'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'odia'
    | 'oromo'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'punjabi'
    | 'quechua'
    | 'romanian'
    | 'russian'
    | 'samoan'
    | 'scottish-gaelic'
    | 'serbian'
    | 'sesotho'
    | 'shona'
    | 'sindhi'
    | 'sinhala'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'sundanese'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'tajik'
    | 'tamil'
    | 'tatar'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'tigrinya'
    | 'tongan'
    | 'tswana'
    | 'turkish'
    | 'turkmen'
    | 'ukrainian'
    | 'urdu'
    | 'uyghur'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh'
    | 'wolof'
    | 'xhosa'
    | 'yiddish'
    | 'yoruba'
    | 'zulu';

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveByIsinParams {
  /**
   * ISIN (International Securities Identification Number) to retrieve brand data for
   * (e.g., 'AU000000IMD5', 'US0378331005'). Must be exactly 12 characters: 2 letters
   * followed by 9 alphanumeric characters and ending with a digit.
   */
  isin: string;

  /**
   * Optional parameter to force the language of the retrieved brand data.
   */
  force_language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'armenian'
    | 'assamese'
    | 'aymara'
    | 'azeri'
    | 'basque'
    | 'belarusian'
    | 'bengali'
    | 'bosnian'
    | 'bulgarian'
    | 'burmese'
    | 'cantonese'
    | 'catalan'
    | 'cebuano'
    | 'chinese'
    | 'corsican'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'esperanto'
    | 'estonian'
    | 'farsi'
    | 'fijian'
    | 'finnish'
    | 'french'
    | 'galician'
    | 'georgian'
    | 'german'
    | 'greek'
    | 'guarani'
    | 'gujarati'
    | 'haitian-creole'
    | 'hausa'
    | 'hawaiian'
    | 'hebrew'
    | 'hindi'
    | 'hmong'
    | 'hungarian'
    | 'icelandic'
    | 'igbo'
    | 'indonesian'
    | 'irish'
    | 'italian'
    | 'japanese'
    | 'javanese'
    | 'kannada'
    | 'kazakh'
    | 'khmer'
    | 'kinyarwanda'
    | 'korean'
    | 'kurdish'
    | 'kyrgyz'
    | 'lao'
    | 'latin'
    | 'latvian'
    | 'lingala'
    | 'lithuanian'
    | 'luxembourgish'
    | 'macedonian'
    | 'malagasy'
    | 'malay'
    | 'malayalam'
    | 'maltese'
    | 'maori'
    | 'marathi'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'odia'
    | 'oromo'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'punjabi'
    | 'quechua'
    | 'romanian'
    | 'russian'
    | 'samoan'
    | 'scottish-gaelic'
    | 'serbian'
    | 'sesotho'
    | 'shona'
    | 'sindhi'
    | 'sinhala'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'sundanese'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'tajik'
    | 'tamil'
    | 'tatar'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'tigrinya'
    | 'tongan'
    | 'tswana'
    | 'turkish'
    | 'turkmen'
    | 'ukrainian'
    | 'urdu'
    | 'uyghur'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh'
    | 'wolof'
    | 'xhosa'
    | 'yiddish'
    | 'yoruba'
    | 'zulu';

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveByNameParams {
  /**
   * Company name to retrieve brand data for (e.g., 'Apple Inc', 'Microsoft
   * Corporation'). Must be 3-30 characters.
   */
  name: string;

  /**
   * Optional country code hint (GL parameter) to specify the country for the company
   * name.
   */
  country_gl?:
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'an'
    | 'ao'
    | 'aq'
    | 'ar'
    | 'as'
    | 'at'
    | 'au'
    | 'aw'
    | 'az'
    | 'ba'
    | 'bb'
    | 'bd'
    | 'be'
    | 'bf'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bj'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'bt'
    | 'bv'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cc'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'ck'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cu'
    | 'cv'
    | 'cx'
    | 'cy'
    | 'cz'
    | 'de'
    | 'dj'
    | 'dk'
    | 'dm'
    | 'do'
    | 'dz'
    | 'ec'
    | 'ee'
    | 'eg'
    | 'eh'
    | 'er'
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fk'
    | 'fm'
    | 'fo'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gh'
    | 'gi'
    | 'gl'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gs'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hm'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'io'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'ki'
    | 'km'
    | 'kn'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
    | 'li'
    | 'lk'
    | 'lr'
    | 'ls'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'ly'
    | 'ma'
    | 'mc'
    | 'md'
    | 'mg'
    | 'mh'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mp'
    | 'mq'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'mu'
    | 'mv'
    | 'mw'
    | 'mx'
    | 'my'
    | 'mz'
    | 'na'
    | 'nc'
    | 'ne'
    | 'nf'
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nr'
    | 'nu'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pm'
    | 'pn'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'pw'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sb'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'sh'
    | 'si'
    | 'sj'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'st'
    | 'sv'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tf'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tk'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'to'
    | 'tr'
    | 'tt'
    | 'tv'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'um'
    | 'us'
    | 'uy'
    | 'uz'
    | 'va'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'vu'
    | 'wf'
    | 'ws'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';

  /**
   * Optional parameter to force the language of the retrieved brand data.
   */
  force_language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'armenian'
    | 'assamese'
    | 'aymara'
    | 'azeri'
    | 'basque'
    | 'belarusian'
    | 'bengali'
    | 'bosnian'
    | 'bulgarian'
    | 'burmese'
    | 'cantonese'
    | 'catalan'
    | 'cebuano'
    | 'chinese'
    | 'corsican'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'esperanto'
    | 'estonian'
    | 'farsi'
    | 'fijian'
    | 'finnish'
    | 'french'
    | 'galician'
    | 'georgian'
    | 'german'
    | 'greek'
    | 'guarani'
    | 'gujarati'
    | 'haitian-creole'
    | 'hausa'
    | 'hawaiian'
    | 'hebrew'
    | 'hindi'
    | 'hmong'
    | 'hungarian'
    | 'icelandic'
    | 'igbo'
    | 'indonesian'
    | 'irish'
    | 'italian'
    | 'japanese'
    | 'javanese'
    | 'kannada'
    | 'kazakh'
    | 'khmer'
    | 'kinyarwanda'
    | 'korean'
    | 'kurdish'
    | 'kyrgyz'
    | 'lao'
    | 'latin'
    | 'latvian'
    | 'lingala'
    | 'lithuanian'
    | 'luxembourgish'
    | 'macedonian'
    | 'malagasy'
    | 'malay'
    | 'malayalam'
    | 'maltese'
    | 'maori'
    | 'marathi'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'odia'
    | 'oromo'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'punjabi'
    | 'quechua'
    | 'romanian'
    | 'russian'
    | 'samoan'
    | 'scottish-gaelic'
    | 'serbian'
    | 'sesotho'
    | 'shona'
    | 'sindhi'
    | 'sinhala'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'sundanese'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'tajik'
    | 'tamil'
    | 'tatar'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'tigrinya'
    | 'tongan'
    | 'tswana'
    | 'turkish'
    | 'turkmen'
    | 'ukrainian'
    | 'urdu'
    | 'uyghur'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh'
    | 'wolof'
    | 'xhosa'
    | 'yiddish'
    | 'yoruba'
    | 'zulu';

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveByTickerParams {
  /**
   * Stock ticker symbol to retrieve brand data for (e.g., 'AAPL', 'GOOGL', 'BRK.A').
   * Must be 1-15 characters, letters/numbers/dots only.
   */
  ticker: string;

  /**
   * Optional parameter to force the language of the retrieved brand data.
   */
  force_language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'armenian'
    | 'assamese'
    | 'aymara'
    | 'azeri'
    | 'basque'
    | 'belarusian'
    | 'bengali'
    | 'bosnian'
    | 'bulgarian'
    | 'burmese'
    | 'cantonese'
    | 'catalan'
    | 'cebuano'
    | 'chinese'
    | 'corsican'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'esperanto'
    | 'estonian'
    | 'farsi'
    | 'fijian'
    | 'finnish'
    | 'french'
    | 'galician'
    | 'georgian'
    | 'german'
    | 'greek'
    | 'guarani'
    | 'gujarati'
    | 'haitian-creole'
    | 'hausa'
    | 'hawaiian'
    | 'hebrew'
    | 'hindi'
    | 'hmong'
    | 'hungarian'
    | 'icelandic'
    | 'igbo'
    | 'indonesian'
    | 'irish'
    | 'italian'
    | 'japanese'
    | 'javanese'
    | 'kannada'
    | 'kazakh'
    | 'khmer'
    | 'kinyarwanda'
    | 'korean'
    | 'kurdish'
    | 'kyrgyz'
    | 'lao'
    | 'latin'
    | 'latvian'
    | 'lingala'
    | 'lithuanian'
    | 'luxembourgish'
    | 'macedonian'
    | 'malagasy'
    | 'malay'
    | 'malayalam'
    | 'maltese'
    | 'maori'
    | 'marathi'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'odia'
    | 'oromo'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'punjabi'
    | 'quechua'
    | 'romanian'
    | 'russian'
    | 'samoan'
    | 'scottish-gaelic'
    | 'serbian'
    | 'sesotho'
    | 'shona'
    | 'sindhi'
    | 'sinhala'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'sundanese'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'tajik'
    | 'tamil'
    | 'tatar'
    | 'telugu'
    | 'thai'
    | 'tibetan'
    | 'tigrinya'
    | 'tongan'
    | 'tswana'
    | 'turkish'
    | 'turkmen'
    | 'ukrainian'
    | 'urdu'
    | 'uyghur'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh'
    | 'wolof'
    | 'xhosa'
    | 'yiddish'
    | 'yoruba'
    | 'zulu';

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional stock exchange for the ticker. Defaults to NASDAQ if not specified.
   */
  ticker_exchange?:
    | 'AMEX'
    | 'AMS'
    | 'AQS'
    | 'ASX'
    | 'ATH'
    | 'BER'
    | 'BME'
    | 'BRU'
    | 'BSE'
    | 'BUD'
    | 'BUE'
    | 'BVC'
    | 'CBOE'
    | 'CNQ'
    | 'CPH'
    | 'DFM'
    | 'DOH'
    | 'DUB'
    | 'DUS'
    | 'DXE'
    | 'EGX'
    | 'FSX'
    | 'HAM'
    | 'HEL'
    | 'HKSE'
    | 'HOSE'
    | 'ICE'
    | 'IOB'
    | 'IST'
    | 'JKT'
    | 'JNB'
    | 'JPX'
    | 'KLS'
    | 'KOE'
    | 'KSC'
    | 'KUW'
    | 'LIS'
    | 'LSE'
    | 'MCX'
    | 'MEX'
    | 'MIL'
    | 'MUN'
    | 'NASDAQ'
    | 'NEO'
    | 'NSE'
    | 'NYSE'
    | 'NZE'
    | 'OSL'
    | 'OTC'
    | 'PAR'
    | 'PNK'
    | 'PRA'
    | 'RIS'
    | 'SAO'
    | 'SAU'
    | 'SES'
    | 'SET'
    | 'SGO'
    | 'SHH'
    | 'SHZ'
    | 'SIX'
    | 'STO'
    | 'STU'
    | 'TAI'
    | 'TAL'
    | 'TLV'
    | 'TSX'
    | 'TSXV'
    | 'TWO'
    | 'VIE'
    | 'WSE'
    | 'XETRA';

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveSimplifiedParams {
  /**
   * Domain name to retrieve simplified brand data for
   */
  domain: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandWebScrapeHTMLParams {
  /**
   * Full URL to scrape (must include http:// or https:// protocol)
   */
  url: string;

  /**
   * Return a cached result if a prior scrape for the same parameters exists and is
   * younger than this many milliseconds. Defaults to 1 day (86400000 ms) when
   * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
   */
  maxAgeMs?: number;

  /**
   * When true (default), PDF URLs are fetched and their text layer is extracted and
   * returned wrapped in <html><pdf>…</pdf></html>. When false, PDF URLs are skipped
   * and a 400 WEBSITE_ACCESS_ERROR is returned.
   */
  parsePDF?: boolean;
}

export interface BrandWebScrapeImagesParams {
  /**
   * Full URL to scrape images from (must include http:// or https:// protocol)
   */
  url: string;
}

export interface BrandWebScrapeMdParams {
  /**
   * Full URL to scrape into LLM usable Markdown (must include http:// or https://
   * protocol)
   */
  url: string;

  /**
   * Include image references in Markdown output
   */
  includeImages?: boolean;

  /**
   * Preserve hyperlinks in Markdown output
   */
  includeLinks?: boolean;

  /**
   * Return a cached result if a prior scrape for the same parameters exists and is
   * younger than this many milliseconds. Defaults to 1 day (86400000 ms) when
   * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
   */
  maxAgeMs?: number;

  /**
   * When true (default), PDF URLs are fetched and their text layer is extracted and
   * converted to Markdown. When false, PDF URLs are skipped and a 400
   * WEBSITE_ACCESS_ERROR is returned.
   */
  parsePDF?: boolean;

  /**
   * Shorten base64-encoded image data in the Markdown output
   */
  shortenBase64Images?: boolean;

  /**
   * Extract only the main content of the page, excluding headers, footers, sidebars,
   * and navigation
   */
  useMainContentOnly?: boolean;
}

export interface BrandWebScrapeSitemapParams {
  /**
   * Domain to build a sitemap for
   */
  domain: string;

  /**
   * Maximum number of links to return from the sitemap crawl. Defaults to 10,000.
   * Minimum is 1, maximum is 100,000.
   */
  maxLinks?: number;

  /**
   * Optional RE2-compatible regex pattern. Only URLs matching this pattern are
   * returned and counted against maxLinks.
   */
  urlRegex?: string;
}

export declare namespace Brand {
  export {
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandAIProductResponse as BrandAIProductResponse,
    type BrandAIProductsResponse as BrandAIProductsResponse,
    type BrandAIQueryResponse as BrandAIQueryResponse,
    type BrandIdentifyFromTransactionResponse as BrandIdentifyFromTransactionResponse,
    type BrandPrefetchResponse as BrandPrefetchResponse,
    type BrandPrefetchByEmailResponse as BrandPrefetchByEmailResponse,
    type BrandRetrieveByEmailResponse as BrandRetrieveByEmailResponse,
    type BrandRetrieveByIsinResponse as BrandRetrieveByIsinResponse,
    type BrandRetrieveByNameResponse as BrandRetrieveByNameResponse,
    type BrandRetrieveByTickerResponse as BrandRetrieveByTickerResponse,
    type BrandRetrieveSimplifiedResponse as BrandRetrieveSimplifiedResponse,
    type BrandWebScrapeHTMLResponse as BrandWebScrapeHTMLResponse,
    type BrandWebScrapeImagesResponse as BrandWebScrapeImagesResponse,
    type BrandWebScrapeMdResponse as BrandWebScrapeMdResponse,
    type BrandWebScrapeSitemapResponse as BrandWebScrapeSitemapResponse,
    type BrandRetrieveParams as BrandRetrieveParams,
    type BrandAIProductParams as BrandAIProductParams,
    type BrandAIProductsParams as BrandAIProductsParams,
    type BrandAIQueryParams as BrandAIQueryParams,
    type BrandIdentifyFromTransactionParams as BrandIdentifyFromTransactionParams,
    type BrandPrefetchParams as BrandPrefetchParams,
    type BrandPrefetchByEmailParams as BrandPrefetchByEmailParams,
    type BrandRetrieveByEmailParams as BrandRetrieveByEmailParams,
    type BrandRetrieveByIsinParams as BrandRetrieveByIsinParams,
    type BrandRetrieveByNameParams as BrandRetrieveByNameParams,
    type BrandRetrieveByTickerParams as BrandRetrieveByTickerParams,
    type BrandRetrieveSimplifiedParams as BrandRetrieveSimplifiedParams,
    type BrandWebScrapeHTMLParams as BrandWebScrapeHTMLParams,
    type BrandWebScrapeImagesParams as BrandWebScrapeImagesParams,
    type BrandWebScrapeMdParams as BrandWebScrapeMdParams,
    type BrandWebScrapeSitemapParams as BrandWebScrapeSitemapParams,
  };
}
