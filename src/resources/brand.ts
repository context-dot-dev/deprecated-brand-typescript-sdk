// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Brand extends APIResource {
  /**
   * Retrieve logos, backdrops, colors, industry, description, and more from any
   * domain
   *
   * @example
   * ```ts
   * const brand = await client.brand.retrieve();
   * ```
   */
  retrieve(
    query: BrandRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveResponse> {
    return this._client.get('/brand/retrieve', { query, ...options });
  }

  /**
   * Given a single URL, determines if it is a product page and extracts the product
   * information.
   *
   * @example
   * ```ts
   * const response = await client.brand.aiProduct({
   *   url: 'https://example.com',
   * });
   * ```
   */
  aiProduct(body: BrandAIProductParams, options?: RequestOptions): APIPromise<BrandAIProductResponse> {
    return this._client.post('/brand/ai/product', { body, ...options });
  }

  /**
   * Extract product information from a brand's website. We will analyze the website
   * and return a list of products with details such as name, description, image,
   * pricing, features, and more.
   *
   * @example
   * ```ts
   * const response = await client.brand.aiProducts({
   *   domain: 'domain',
   * });
   * ```
   */
  aiProducts(body: BrandAIProductsParams, options?: RequestOptions): APIPromise<BrandAIProductsResponse> {
    return this._client.post('/brand/ai/products', { body, ...options });
  }

  /**
   * Use AI to extract specific data points from a brand's website. The AI will crawl
   * the website and extract the requested information based on the provided data
   * points.
   *
   * @example
   * ```ts
   * const response = await client.brand.aiQuery({
   *   data_to_extract: [
   *     {
   *       datapoint_description: 'datapoint_description',
   *       datapoint_example: 'datapoint_example',
   *       datapoint_name: 'datapoint_name',
   *       datapoint_type: 'text',
   *     },
   *   ],
   *   domain: 'domain',
   * });
   * ```
   */
  aiQuery(body: BrandAIQueryParams, options?: RequestOptions): APIPromise<BrandAIQueryResponse> {
    return this._client.post('/brand/ai/query', { body, ...options });
  }

  /**
   * Scrape font information from a website including font families, usage
   * statistics, fallbacks, and element/word counts.
   *
   * @example
   * ```ts
   * const response = await client.brand.fonts();
   * ```
   */
  fonts(
    query: BrandFontsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandFontsResponse> {
    return this._client.get('/web/fonts', { query, ...options });
  }

  /**
   * Endpoint specially designed for platforms that want to identify transaction data
   * by the transaction title.
   *
   * @example
   * ```ts
   * const response = await client.brand.identifyFromTransaction(
   *   { transaction_info: 'xxx' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.brand.prefetch({
   *   domain: 'domain',
   * });
   * ```
   */
  prefetch(body: BrandPrefetchParams, options?: RequestOptions): APIPromise<BrandPrefetchResponse> {
    return this._client.post('/brand/prefetch', { body, ...options });
  }

  /**
   * Signal that you may fetch brand data for a particular domain soon to improve
   * latency. This endpoint accepts an email address, extracts the domain from it,
   * validates that it's not a disposable or free email provider, and queues the
   * domain for prefetching.
   *
   * @example
   * ```ts
   * const response = await client.brand.prefetchByEmail({
   *   email: 'dev@stainless.com',
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.brand.retrieveByEmail({
   *   email: 'dev@stainless.com',
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.brand.retrieveByIsin({
   *   isin: 'SE60513A9993',
   * });
   * ```
   */
  retrieveByIsin(
    query: BrandRetrieveByIsinParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByIsinResponse> {
    return this._client.get('/brand/retrieve-by-isin', { query, ...options });
  }

  /**
   * Retrieve brand information using a company name.
   *
   * @example
   * ```ts
   * const response = await client.brand.retrieveByName({
   *   name: 'xxx',
   * });
   * ```
   */
  retrieveByName(
    query: BrandRetrieveByNameParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByNameResponse> {
    return this._client.get('/brand/retrieve-by-name', { query, ...options });
  }

  /**
   * Retrieve brand information using a stock ticker symbol.
   *
   * @example
   * ```ts
   * const response = await client.brand.retrieveByTicker({
   *   ticker: 'ticker',
   * });
   * ```
   */
  retrieveByTicker(
    query: BrandRetrieveByTickerParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByTickerResponse> {
    return this._client.get('/brand/retrieve-by-ticker', { query, ...options });
  }

  /**
   * Classify any brand into 2022 NAICS industry codes from its domain or name.
   *
   * @example
   * ```ts
   * const response = await client.brand.retrieveNaics({
   *   input: 'xxxx',
   * });
   * ```
   */
  retrieveNaics(
    query: BrandRetrieveNaicsParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveNaicsResponse> {
    return this._client.get('/web/naics', { query, ...options });
  }

  /**
   * Returns a simplified version of brand data containing only essential
   * information: domain, title, colors, logos, and backdrops. Optimized for faster
   * responses and reduced data transfer.
   *
   * @example
   * ```ts
   * const response = await client.brand.retrieveSimplified({
   *   domain: 'xxx',
   * });
   * ```
   */
  retrieveSimplified(
    query: BrandRetrieveSimplifiedParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveSimplifiedResponse> {
    return this._client.get('/brand/retrieve-simplified', { query, ...options });
  }

  /**
   * Capture a screenshot of a website.
   *
   * @example
   * ```ts
   * const response = await client.brand.screenshot();
   * ```
   */
  screenshot(
    query: BrandScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandScreenshotResponse> {
    return this._client.get('/web/screenshot', { query, ...options });
  }

  /**
   * Extract a comprehensive design system from a website including colors,
   * typography, spacing, shadows, and UI components.
   *
   * @example
   * ```ts
   * const response = await client.brand.styleguide();
   * ```
   */
  styleguide(
    query: BrandStyleguideParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandStyleguideResponse> {
    return this._client.get('/web/styleguide', { query, ...options });
  }

  /**
   * Scrapes the given URL and returns the raw HTML content of the page. The base
   * request costs 1 credit; requests with browser actions cost 2 credits.
   *
   * @example
   * ```ts
   * const response = await client.brand.webScrapeHTML({
   *   url: 'https://example.com',
   * });
   * ```
   */
  webScrapeHTML(
    query: BrandWebScrapeHTMLParams,
    options?: RequestOptions,
  ): APIPromise<BrandWebScrapeHTMLResponse> {
    return this._client.get('/web/scrape/html', { query, ...options });
  }

  /**
   * Extract image assets from a web page, including standard URLs, inline SVGs, data
   * URIs, responsive image sources, metadata, CSS backgrounds, video posters, and
   * embeds. The base request costs 1 credit, or 2 credits with browser actions. When
   * enrichment is enabled, the entire call costs 5 credits, including requests that
   * also use actions.
   *
   * @example
   * ```ts
   * const response = await client.brand.webScrapeImages({
   *   url: 'https://example.com',
   * });
   * ```
   */
  webScrapeImages(
    query: BrandWebScrapeImagesParams,
    options?: RequestOptions,
  ): APIPromise<BrandWebScrapeImagesResponse> {
    return this._client.get('/web/scrape/images', { query, ...options });
  }

  /**
   * Scrapes the given URL into LLM usable Markdown. Inspect key_metadata on JSON
   * responses from a recognized API key; use error_code to distinguish stable
   * failure categories.
   *
   * ### YouTube
   *
   * YouTube URLs return the video or channel itself rather than the surrounding
   * player and navigation chrome. A URL addressing a single video (`/watch`,
   * `youtu.be`, `/shorts`, `/embed`, `/live`) returns its title, channel, duration,
   * view count, keywords, full description, and the transcript when the video has
   * captions that can be retrieved; videos without captions return everything except
   * the transcript. A channel URL (`/channel/UC…`, `/@handle`, `/c/…`, `/user/…`)
   * returns its name, handle, subscriber count, video count, and full description.
   * When `includeImages=true`, video responses also include the thumbnail and
   * channel responses include the avatar. Costs the same as any other scrape.
   *
   * ### Billing & errors
   *
   * | HTTP status | Billed?                                   | Meaning                                                                                                                                                                                                                                                                                                       |
   * | ----------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | 200         | Yes — 1 credit, or 2 credits with actions | Successful scrape, including a zero-length result when includeSelectors matched nothing                                                                                                                                                                                                                       |
   * | 400         | No                                        | Invalid input, skipped PDF, or the page could not be scraped. error_code WEBSITE_BLOCKED specifically means the site answered with an anti-bot challenge, CAPTCHA wall, or login shell instead of the page (even when the site returned HTTP 200) — retrying later or from another country sometimes succeeds |
   * | 401 / 403   | No                                        | Invalid/disabled key, insufficient permissions, or credits exhausted; inspect error_code                                                                                                                                                                                                                      |
   * | 404         | No                                        | Target page returned or fingerprinted as not found                                                                                                                                                                                                                                                            |
   * | 408         | No                                        | Request timed out                                                                                                                                                                                                                                                                                             |
   * | 413         | No                                        | Target content exceeds the maximum supported size (20 MB)                                                                                                                                                                                                                                                     |
   * | 415         | No                                        | Unsupported content type                                                                                                                                                                                                                                                                                      |
   * | 429         | No                                        | Per-minute rate limit exceeded; honor Retry-After                                                                                                                                                                                                                                                             |
   * | 500         | No                                        | Internal error                                                                                                                                                                                                                                                                                                |
   *
   * @example
   * ```ts
   * const response = await client.brand.webScrapeMd({
   *   url: 'https://example.com',
   * });
   * ```
   */
  webScrapeMd(query: BrandWebScrapeMdParams, options?: RequestOptions): APIPromise<BrandWebScrapeMdResponse> {
    return this._client.get('/web/scrape/markdown', { query, ...options });
  }

  /**
   * Crawl an entire website's sitemap and return all discovered page URLs. Pass
   * `search` to have the crawled sitemap filtered down to the pages about a phrase
   * (for example `pricing and plans` or `api authentication docs`), most relevant
   * first — a searched crawl scans the whole sitemap and costs 2 credits instead
   * of 1.
   *
   * @example
   * ```ts
   * const response = await client.brand.webScrapeSitemap({
   *   domain: 'xxx',
   * });
   * ```
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveResponse.KeyMetadata;

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
     * Employee headcount information for the brand (will be null if unknown)
     */
    employees?: Brand.Employees;

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
     * Language to force for the retrieved brand data.
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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
    }

    /**
     * Employee headcount information for the brand (will be null if unknown)
     */
    export interface Employees {
      /**
       * Exact employee count when a precise headcount is known
       */
      exact?: number;

      /**
       * Employee count range for the brand (e.g. '11 to 50')
       */
      range?:
        | '1 to 10'
        | '11 to 50'
        | '51 to 200'
        | '201 to 500'
        | '501 to 1000'
        | '1001 to 5000'
        | '5001 to 10000'
        | '10001+';
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
          | 'Advertising, Adtech & Media Buying'
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandAIProductResponse {
  /**
   * Whether the given URL is a product detail page
   */
  is_product_page?: boolean;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandAIProductResponse.KeyMetadata;

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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }

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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandAIProductsResponse.KeyMetadata;

  /**
   * Array of products extracted from the website
   */
  products?: Array<BrandAIProductsResponse.Product>;
}

export namespace BrandAIProductsResponse {
  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }

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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandAIQueryResponse.KeyMetadata;

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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandFontsResponse {
  /**
   * HTTP status code, e.g., 200
   */
  code: number;

  /**
   * The normalized domain that was processed
   */
  domain: string;

  /**
   * Array of font usage information
   */
  fonts: Array<BrandFontsResponse.Font>;

  /**
   * Status of the response, e.g., 'ok'
   */
  status: string;

  /**
   * Font assets keyed by family name as it appears in the fonts array (non-generic
   * names only). Clients match entries in fonts to pick a file URL from files.
   * Omitted when no families resolve to Google or custom @font-face URLs.
   */
  fontLinks?: { [key: string]: BrandFontsResponse.FontLinks };

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandFontsResponse.KeyMetadata;
}

export namespace BrandFontsResponse {
  export interface Font {
    /**
     * Array of fallback font families
     */
    fallbacks: Array<string>;

    /**
     * Font family name
     */
    font: string;

    /**
     * Number of elements using this font
     */
    num_elements: number;

    /**
     * Number of words using this font
     */
    num_words: number;

    /**
     * Percentage of elements using this font
     */
    percent_elements: number;

    /**
     * Percentage of words using this font
     */
    percent_words: number;

    /**
     * Array of CSS selectors or element types where this font is used
     */
    uses: Array<string>;
  }

  export interface FontLinks {
    /**
     * Upright font files keyed by weight string (e.g. "400" for regular, "500",
     * "700"). Values are absolute URLs.
     */
    files: { [key: string]: string };

    type: 'google' | 'custom';

    /**
     * Google Fonts category when type is google (e.g. sans-serif, serif, monospace,
     * display, handwriting). Omitted for custom fonts when unknown.
     */
    category?: string;

    /**
     * Present when type is custom: human-readable name derived from the fontLinks key
     * (strip build/hash suffixes, split camelCase / PascalCase, normalize separators).
     * Google entries omit this.
     */
    displayName?: string;
  }

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandIdentifyFromTransactionResponse.KeyMetadata;

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
     * Employee headcount information for the brand (will be null if unknown)
     */
    employees?: Brand.Employees;

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
     * Language to force for the retrieved brand data.
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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
    }

    /**
     * Employee headcount information for the brand (will be null if unknown)
     */
    export interface Employees {
      /**
       * Exact employee count when a precise headcount is known
       */
      exact?: number;

      /**
       * Employee count range for the brand (e.g. '11 to 50')
       */
      range?:
        | '1 to 10'
        | '11 to 50'
        | '51 to 200'
        | '201 to 500'
        | '501 to 1000'
        | '1001 to 5000'
        | '5001 to 10000'
        | '10001+';
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
          | 'Advertising, Adtech & Media Buying'
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandPrefetchResponse {
  /**
   * The domain that was queued for prefetching
   */
  domain?: string;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandPrefetchResponse.KeyMetadata;

  /**
   * Success message
   */
  message?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandPrefetchResponse {
  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandPrefetchByEmailResponse {
  /**
   * The domain that was queued for prefetching
   */
  domain?: string;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandPrefetchByEmailResponse.KeyMetadata;

  /**
   * Success message
   */
  message?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandPrefetchByEmailResponse {
  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveByEmailResponse.KeyMetadata;

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
     * Employee headcount information for the brand (will be null if unknown)
     */
    employees?: Brand.Employees;

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
     * Language to force for the retrieved brand data.
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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
    }

    /**
     * Employee headcount information for the brand (will be null if unknown)
     */
    export interface Employees {
      /**
       * Exact employee count when a precise headcount is known
       */
      exact?: number;

      /**
       * Employee count range for the brand (e.g. '11 to 50')
       */
      range?:
        | '1 to 10'
        | '11 to 50'
        | '51 to 200'
        | '201 to 500'
        | '501 to 1000'
        | '1001 to 5000'
        | '5001 to 10000'
        | '10001+';
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
          | 'Advertising, Adtech & Media Buying'
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveByIsinResponse.KeyMetadata;

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
     * Employee headcount information for the brand (will be null if unknown)
     */
    employees?: Brand.Employees;

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
     * Language to force for the retrieved brand data.
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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
    }

    /**
     * Employee headcount information for the brand (will be null if unknown)
     */
    export interface Employees {
      /**
       * Exact employee count when a precise headcount is known
       */
      exact?: number;

      /**
       * Employee count range for the brand (e.g. '11 to 50')
       */
      range?:
        | '1 to 10'
        | '11 to 50'
        | '51 to 200'
        | '201 to 500'
        | '501 to 1000'
        | '1001 to 5000'
        | '5001 to 10000'
        | '10001+';
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
          | 'Advertising, Adtech & Media Buying'
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveByNameResponse.KeyMetadata;

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
     * Employee headcount information for the brand (will be null if unknown)
     */
    employees?: Brand.Employees;

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
     * Language to force for the retrieved brand data.
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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
    }

    /**
     * Employee headcount information for the brand (will be null if unknown)
     */
    export interface Employees {
      /**
       * Exact employee count when a precise headcount is known
       */
      exact?: number;

      /**
       * Employee count range for the brand (e.g. '11 to 50')
       */
      range?:
        | '1 to 10'
        | '11 to 50'
        | '51 to 200'
        | '201 to 500'
        | '501 to 1000'
        | '1001 to 5000'
        | '5001 to 10000'
        | '10001+';
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
          | 'Advertising, Adtech & Media Buying'
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveByTickerResponse.KeyMetadata;

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
     * Employee headcount information for the brand (will be null if unknown)
     */
    employees?: Brand.Employees;

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
     * Language to force for the retrieved brand data.
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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
    }

    /**
     * Employee headcount information for the brand (will be null if unknown)
     */
    export interface Employees {
      /**
       * Exact employee count when a precise headcount is known
       */
      exact?: number;

      /**
       * Employee count range for the brand (e.g. '11 to 50')
       */
      range?:
        | '1 to 10'
        | '11 to 50'
        | '51 to 200'
        | '201 to 500'
        | '501 to 1000'
        | '1001 to 5000'
        | '5001 to 10000'
        | '10001+';
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
          | 'Advertising, Adtech & Media Buying'
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandRetrieveNaicsResponse {
  /**
   * Array of NAICS codes and titles.
   */
  codes?: Array<BrandRetrieveNaicsResponse.Code>;

  /**
   * Domain found for the brand
   */
  domain?: string;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveNaicsResponse.KeyMetadata;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * Industry classification type, for naics api it will be `naics`
   */
  type?: string;
}

export namespace BrandRetrieveNaicsResponse {
  export interface Code {
    /**
     * NAICS code
     */
    code: string;

    /**
     * Confidence level for how well this NAICS code matches the company description
     */
    confidence: 'high' | 'medium' | 'low';

    /**
     * NAICS title
     */
    name: string;
  }

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
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
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandRetrieveSimplifiedResponse.KeyMetadata;

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

      /**
       * Where the color was observed: 'site' colors come from the website's own theme
       * signals (rendered page colors, manifest, theme-color meta), 'logo' colors from
       * logo image pixels.
       */
      source?: 'site' | 'logo';
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandScreenshotResponse {
  /**
   * HTTP status code
   */
  code?: number;

  /**
   * The normalized domain that was processed
   */
  domain?: string;

  /**
   * Height in pixels of the returned screenshot image
   */
  height?: number;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandScreenshotResponse.KeyMetadata;

  /**
   * Public image URL for standard requests, or an in-memory data URL when ZDR is
   * enabled.
   */
  screenshot?: string;

  /**
   * Type of screenshot that was captured
   */
  screenshotType?: 'viewport' | 'fullPage';

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * Width in pixels of the returned screenshot image
   */
  width?: number;
}

export namespace BrandScreenshotResponse {
  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandStyleguideResponse {
  /**
   * HTTP status code
   */
  code?: number;

  /**
   * The normalized domain that was processed
   */
  domain?: string;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandStyleguideResponse.KeyMetadata;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * Comprehensive styleguide data extracted from the website
   */
  styleguide?: BrandStyleguideResponse.Styleguide;
}

export namespace BrandStyleguideResponse {
  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }

  /**
   * Comprehensive styleguide data extracted from the website
   */
  export interface Styleguide {
    /**
     * Primary colors used on the website
     */
    colors: Styleguide.Colors;

    /**
     * UI component styles
     */
    components: Styleguide.Components;

    /**
     * Spacing system used on the website
     */
    elementSpacing: Styleguide.ElementSpacing;

    /**
     * Font assets keyed by family name as it appears in fontFamily/fontFallbacks
     * (non-generic names only). Clients match typography.fontFamily / fontWeight or
     * button styles to pick a file URL from files.
     */
    fontLinks: { [key: string]: Styleguide.FontLinks };

    /**
     * The primary color mode of the website design
     */
    mode: 'light' | 'dark';

    /**
     * Shadow styles used on the website
     */
    shadows: Styleguide.Shadows;

    /**
     * Typography styles used on the website
     */
    typography: Styleguide.Typography;
  }

  export namespace Styleguide {
    /**
     * Primary colors used on the website
     */
    export interface Colors {
      /**
       * Accent color (hex format)
       */
      accent: string;

      /**
       * Background color (hex format)
       */
      background: string;

      /**
       * Text color (hex format)
       */
      text: string;
    }

    /**
     * UI component styles
     */
    export interface Components {
      /**
       * Button component styles
       */
      button: Components.Button;

      /**
       * Card component style
       */
      card?: Components.Card;
    }

    export namespace Components {
      /**
       * Button component styles
       */
      export interface Button {
        link?: Button.Link;

        primary?: Button.Primary;

        secondary?: Button.Secondary;
      }

      export namespace Button {
        export interface Link {
          backgroundColor: string;

          /**
           * Border color as CSS hex (#RRGGBB or #RRGGBBAA when computed border-color has
           * alpha)
           */
          borderColor: string;

          borderRadius: string;

          borderStyle: string;

          borderWidth: string;

          /**
           * Computed box-shadow (comma-separated layers when present)
           */
          boxShadow: string;

          color: string;

          /**
           * Ready-to-use CSS declaration block for this component style
           */
          css: string;

          fontSize: string;

          fontWeight: number;

          /**
           * Sampled minimum height of the button box (typically px)
           */
          minHeight: string;

          /**
           * Sampled minimum width of the button box (typically px)
           */
          minWidth: string;

          padding: string;

          textDecoration: string;

          /**
           * Full ordered font list from computed font-family
           */
          fontFallbacks?: Array<string>;

          /**
           * Primary button typeface (first in fontFallbacks)
           */
          fontFamily?: string;

          /**
           * Hex color of the underline when it differs from the text color
           */
          textDecorationColor?: string;
        }

        export interface Primary {
          backgroundColor: string;

          /**
           * Border color as CSS hex (#RRGGBB or #RRGGBBAA when computed border-color has
           * alpha)
           */
          borderColor: string;

          borderRadius: string;

          borderStyle: string;

          borderWidth: string;

          /**
           * Computed box-shadow (comma-separated layers when present)
           */
          boxShadow: string;

          color: string;

          /**
           * Ready-to-use CSS declaration block for this component style
           */
          css: string;

          fontSize: string;

          fontWeight: number;

          /**
           * Sampled minimum height of the button box (typically px)
           */
          minHeight: string;

          /**
           * Sampled minimum width of the button box (typically px)
           */
          minWidth: string;

          padding: string;

          textDecoration: string;

          /**
           * Full ordered font list from computed font-family
           */
          fontFallbacks?: Array<string>;

          /**
           * Primary button typeface (first in fontFallbacks)
           */
          fontFamily?: string;

          /**
           * Hex color of the underline when it differs from the text color
           */
          textDecorationColor?: string;
        }

        export interface Secondary {
          backgroundColor: string;

          /**
           * Border color as CSS hex (#RRGGBB or #RRGGBBAA when computed border-color has
           * alpha)
           */
          borderColor: string;

          borderRadius: string;

          borderStyle: string;

          borderWidth: string;

          /**
           * Computed box-shadow (comma-separated layers when present)
           */
          boxShadow: string;

          color: string;

          /**
           * Ready-to-use CSS declaration block for this component style
           */
          css: string;

          fontSize: string;

          fontWeight: number;

          /**
           * Sampled minimum height of the button box (typically px)
           */
          minHeight: string;

          /**
           * Sampled minimum width of the button box (typically px)
           */
          minWidth: string;

          padding: string;

          textDecoration: string;

          /**
           * Full ordered font list from computed font-family
           */
          fontFallbacks?: Array<string>;

          /**
           * Primary button typeface (first in fontFallbacks)
           */
          fontFamily?: string;

          /**
           * Hex color of the underline when it differs from the text color
           */
          textDecorationColor?: string;
        }
      }

      /**
       * Card component style
       */
      export interface Card {
        backgroundColor: string;

        /**
         * Border color as CSS hex (#RRGGBB or #RRGGBBAA when computed border-color has
         * alpha)
         */
        borderColor: string;

        borderRadius: string;

        borderStyle: string;

        borderWidth: string;

        boxShadow: string;

        /**
         * Ready-to-use CSS declaration block for this component style
         */
        css: string;

        padding: string;

        textColor: string;
      }
    }

    /**
     * Spacing system used on the website
     */
    export interface ElementSpacing {
      lg: string;

      md: string;

      sm: string;

      xl: string;

      xs: string;
    }

    export interface FontLinks {
      /**
       * Upright font files keyed by weight string (e.g. "400" for regular, "500",
       * "700"). Values are absolute URLs.
       */
      files: { [key: string]: string };

      type: 'google' | 'custom';

      /**
       * Google Fonts category when type is google (e.g. sans-serif, serif, monospace,
       * display, handwriting). Omitted for custom fonts when unknown.
       */
      category?: string;

      /**
       * Present when type is custom: human-readable name derived from the fontLinks key
       * (strip build/hash suffixes, split camelCase / PascalCase, normalize separators).
       * Google entries omit this.
       */
      displayName?: string;
    }

    /**
     * Shadow styles used on the website
     */
    export interface Shadows {
      inner: string;

      lg: string;

      md: string;

      sm: string;

      xl: string;
    }

    /**
     * Typography styles used on the website
     */
    export interface Typography {
      /**
       * Heading styles
       */
      headings: Typography.Headings;

      p?: Typography.P;
    }

    export namespace Typography {
      /**
       * Heading styles
       */
      export interface Headings {
        h1?: Headings.H1;

        h2?: Headings.H2;

        h3?: Headings.H3;

        h4?: Headings.H4;
      }

      export namespace Headings {
        export interface H1 {
          /**
           * Full ordered font list from resolved computed font-family
           */
          fontFallbacks: Array<string>;

          /**
           * Primary face (first family in the computed stack)
           */
          fontFamily: string;

          fontSize: string;

          fontWeight: number;

          letterSpacing: string;

          lineHeight: string;
        }

        export interface H2 {
          /**
           * Full ordered font list from resolved computed font-family
           */
          fontFallbacks: Array<string>;

          /**
           * Primary face (first family in the computed stack)
           */
          fontFamily: string;

          fontSize: string;

          fontWeight: number;

          letterSpacing: string;

          lineHeight: string;
        }

        export interface H3 {
          /**
           * Full ordered font list from resolved computed font-family
           */
          fontFallbacks: Array<string>;

          /**
           * Primary face (first family in the computed stack)
           */
          fontFamily: string;

          fontSize: string;

          fontWeight: number;

          letterSpacing: string;

          lineHeight: string;
        }

        export interface H4 {
          /**
           * Full ordered font list from resolved computed font-family
           */
          fontFallbacks: Array<string>;

          /**
           * Primary face (first family in the computed stack)
           */
          fontFamily: string;

          fontSize: string;

          fontWeight: number;

          letterSpacing: string;

          lineHeight: string;
        }
      }

      export interface P {
        /**
         * Full ordered font list from resolved computed font-family
         */
        fontFallbacks: Array<string>;

        /**
         * Primary face (first family in the computed stack)
         */
        fontFamily: string;

        fontSize: string;

        fontWeight: number;

        letterSpacing: string;

        lineHeight: string;
      }
    }
  }
}

export interface BrandWebScrapeHTMLResponse {
  /**
   * The scraped content of the page. For normal pages this is the raw HTML. When the
   * page is a sitemap or feed served behind an XSL stylesheet (which browsers render
   * into HTML), this is the underlying XML instead — see the `type` field.
   */
  html: string;

  /**
   * Metadata extracted from the scraped page HTML.
   */
  metadata: BrandWebScrapeHTMLResponse.Metadata;

  /**
   * Indicates success
   */
  success: true;

  /**
   * Detected content type of the returned `html` field. Sitemaps and feeds are
   * surfaced as `xml`; ordinary pages are `html`. Excel workbooks are surfaced as
   * `xlsx`/`xls` with the extracted sheets as HTML tables; PowerPoint presentations
   * are surfaced as `pptx`/`ppt` with the extracted slides as HTML.
   */
  type:
    | 'html'
    | 'xml'
    | 'json'
    | 'text'
    | 'csv'
    | 'markdown'
    | 'svg'
    | 'pdf'
    | 'docx'
    | 'doc'
    | 'xlsx'
    | 'xls'
    | 'pptx'
    | 'ppt';

  /**
   * The URL that was scraped
   */
  url: string;

  /**
   * One verified outcome per requested browser action, in request order.
   */
  actionsApplied?: Array<BrandWebScrapeHTMLResponse.ActionsApplied>;

  /**
   * True when an action was applied but the returned content could not be refreshed
   * afterward.
   */
  actionsHtmlStale?: boolean;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandWebScrapeHTMLResponse.KeyMetadata;
}

export namespace BrandWebScrapeHTMLResponse {
  /**
   * Metadata extracted from the scraped page HTML.
   */
  export interface Metadata {
    /**
     * Final URL scraped after redirects or scraper fallback, when known. Falls back to
     * sourceUrl when unavailable.
     */
    finalUrl: string;

    /**
     * Original URL requested by the caller.
     */
    sourceUrl: string;

    /**
     * Additional non-social meta tags not promoted to top-level metadata fields.
     */
    additionalMeta?: { [key: string]: string | Array<string> };

    /**
     * Resolved alternate links from link rel=alternate tags.
     */
    alternates?: Array<Metadata.Alternate>;

    /**
     * Author metadata, when present.
     */
    author?: string;

    /**
     * Resolved canonical URL, when present.
     */
    canonicalUrl?: string;

    /**
     * Best description extracted from standard, Open Graph, or Twitter metadata.
     */
    description?: string;

    /**
     * Resolved favicon URL, when present.
     */
    favicon?: string;

    /**
     * Page headings (h1–h6) in document order, extracted from the unfiltered document.
     * Capped at the first 500 headings. Omitted when the page has none.
     */
    headings?: Array<Metadata.Heading>;

    /**
     * Primary resolved preview image from Open Graph, Twitter, or image metadata.
     */
    image?: string;

    /**
     * JSON-LD structured data blocks parsed from the page.
     */
    jsonLd?: Array<{ [key: string]: unknown }>;

    /**
     * Keywords extracted from the page's keywords meta tag.
     */
    keywords?: Array<string>;

    /**
     * Language extracted from html lang or language meta tags.
     */
    language?: string;

    /**
     * Modified timestamp/date from page metadata, when present.
     */
    modifiedTime?: string;

    /**
     * Open Graph metadata with the og: prefix removed and keys camel-cased.
     */
    openGraph?: { [key: string]: string | Array<string> };

    /**
     * Published timestamp/date from page metadata, when present.
     */
    publishedTime?: string;

    /**
     * Robots meta directive, when present.
     */
    robots?: string;

    /**
     * Site or application name from page metadata.
     */
    siteName?: string;

    /**
     * Best title extracted from the page.
     */
    title?: string;

    /**
     * Twitter card metadata with the twitter: prefix removed and keys camel-cased.
     */
    twitter?: { [key: string]: string | Array<string> };
  }

  export namespace Metadata {
    export interface Alternate {
      /**
       * Resolved alternate URL.
       */
      href: string;

      /**
       * Language or locale for the alternate URL, when present.
       */
      hreflang?: string;

      /**
       * Alternate resource title, when present.
       */
      title?: string;

      /**
       * Alternate resource MIME type, when present.
       */
      type?: string;
    }

    export interface Heading {
      /**
       * Heading level, 1–6 (from h1–h6).
       */
      level: number;

      /**
       * Heading text with whitespace collapsed, truncated to 1000 characters.
       */
      text: string;
    }
  }

  export interface ActionsApplied {
    instruction: string;

    /**
     * Applied means the requested page state was visibly verified. Failed means it was
     * not verified. Skipped means it was not attempted.
     */
    status: 'applied' | 'failed' | 'skipped';

    /**
     * Visible page evidence used to verify an applied action.
     */
    completionEvidence?: string;

    durationMs?: number;

    error?: string;

    method?: string;

    targetDescription?: string;
  }

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandWebScrapeImagesResponse {
  /**
   * Images found on the page.
   */
  images: Array<BrandWebScrapeImagesResponse.Image>;

  /**
   * Always true on success.
   */
  success: true;

  /**
   * Page URL that was scraped.
   */
  url: string;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandWebScrapeImagesResponse.KeyMetadata;
}

export namespace BrandWebScrapeImagesResponse {
  export interface Image {
    /**
     * Image alt text, or null when unavailable.
     */
    alt: string | null;

    /**
     * Where the image was found.
     */
    element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background';

    /**
     * Original image value: URL, inline SVG or HTML, or base64 data URI.
     */
    src: string;

    /**
     * Format of src.
     */
    type: 'url' | 'html' | 'base64';

    /**
     * Requested metadata for images that could be processed.
     */
    enrichment?: Image.Enrichment;
  }

  export namespace Image {
    /**
     * Requested metadata for images that could be processed.
     */
    export interface Enrichment {
      /**
       * Image height in pixels, when measured.
       */
      height?: number;

      /**
       * Detected MIME type, when hosted.
       */
      mimetype?: string;

      /**
       * Visual asset category, when classified.
       */
      type?: 'photography' | 'illustration' | 'logo' | 'wordmark' | 'icon' | 'pattern' | 'graphic' | 'other';

      /**
       * Brand.dev CDN URL, when hosted.
       */
      url?: string;

      /**
       * Image width in pixels, when measured.
       */
      width?: number;
    }
  }

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandWebScrapeMdResponse {
  /**
   * UTF-8 byte length of the returned Markdown. Use 0 to identify an empty result
   * and compare small values against your workload's minimum useful-content
   * threshold.
   */
  contentLength: number;

  /**
   * Page content converted to GitHub Flavored Markdown
   */
  markdown: string;

  /**
   * Metadata extracted from the scraped page HTML.
   */
  metadata: BrandWebScrapeMdResponse.Metadata;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;

  /**
   * One verified outcome per requested browser action, in request order.
   */
  actionsApplied?: Array<BrandWebScrapeMdResponse.ActionsApplied>;

  /**
   * True when an action was applied but the returned content could not be refreshed
   * afterward.
   */
  actionsHtmlStale?: boolean;

  /**
   * Only present when includeHTML=true: the page HTML the Markdown was converted
   * from — the same body the Scrape HTML endpoint returns for the equivalent
   * request.
   */
  html?: string;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandWebScrapeMdResponse.KeyMetadata;
}

export namespace BrandWebScrapeMdResponse {
  /**
   * Metadata extracted from the scraped page HTML.
   */
  export interface Metadata {
    /**
     * Final URL scraped after redirects or scraper fallback, when known. Falls back to
     * sourceUrl when unavailable.
     */
    finalUrl: string;

    /**
     * Original URL requested by the caller.
     */
    sourceUrl: string;

    /**
     * Additional non-social meta tags not promoted to top-level metadata fields.
     */
    additionalMeta?: { [key: string]: string | Array<string> };

    /**
     * Resolved alternate links from link rel=alternate tags.
     */
    alternates?: Array<Metadata.Alternate>;

    /**
     * Author metadata, when present.
     */
    author?: string;

    /**
     * Resolved canonical URL, when present.
     */
    canonicalUrl?: string;

    /**
     * Best description extracted from standard, Open Graph, or Twitter metadata.
     */
    description?: string;

    /**
     * Resolved favicon URL, when present.
     */
    favicon?: string;

    /**
     * Page headings (h1–h6) in document order, extracted from the unfiltered document.
     * Capped at the first 500 headings. Omitted when the page has none.
     */
    headings?: Array<Metadata.Heading>;

    /**
     * Primary resolved preview image from Open Graph, Twitter, or image metadata.
     */
    image?: string;

    /**
     * JSON-LD structured data blocks parsed from the page.
     */
    jsonLd?: Array<{ [key: string]: unknown }>;

    /**
     * Keywords extracted from the page's keywords meta tag.
     */
    keywords?: Array<string>;

    /**
     * Language extracted from html lang or language meta tags.
     */
    language?: string;

    /**
     * Modified timestamp/date from page metadata, when present.
     */
    modifiedTime?: string;

    /**
     * Open Graph metadata with the og: prefix removed and keys camel-cased.
     */
    openGraph?: { [key: string]: string | Array<string> };

    /**
     * Published timestamp/date from page metadata, when present.
     */
    publishedTime?: string;

    /**
     * Robots meta directive, when present.
     */
    robots?: string;

    /**
     * Site or application name from page metadata.
     */
    siteName?: string;

    /**
     * Best title extracted from the page.
     */
    title?: string;

    /**
     * Twitter card metadata with the twitter: prefix removed and keys camel-cased.
     */
    twitter?: { [key: string]: string | Array<string> };
  }

  export namespace Metadata {
    export interface Alternate {
      /**
       * Resolved alternate URL.
       */
      href: string;

      /**
       * Language or locale for the alternate URL, when present.
       */
      hreflang?: string;

      /**
       * Alternate resource title, when present.
       */
      title?: string;

      /**
       * Alternate resource MIME type, when present.
       */
      type?: string;
    }

    export interface Heading {
      /**
       * Heading level, 1–6 (from h1–h6).
       */
      level: number;

      /**
       * Heading text with whitespace collapsed, truncated to 1000 characters.
       */
      text: string;
    }
  }

  export interface ActionsApplied {
    instruction: string;

    /**
     * Applied means the requested page state was visibly verified. Failed means it was
     * not verified. Skipped means it was not attempted.
     */
    status: 'applied' | 'failed' | 'skipped';

    /**
     * Visible page evidence used to verify an applied action.
     */
    completionEvidence?: string;

    durationMs?: number;

    error?: string;

    method?: string;

    targetDescription?: string;
  }

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
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
   * Discovered page URLs from the sitemap, up to `maxLinks`. When `search` is set
   * these are only the matching pages, most relevant first.
   */
  urls: Array<string>;

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  key_metadata?: BrandWebScrapeSitemapResponse.KeyMetadata;
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

  /**
   * Metadata about the API key used for the request. Included in every response
   * whenever a valid API key is provided, even when the response status is not 200.
   */
  export interface KeyMetadata {
    /**
     * The number of credits consumed by this request.
     */
    credits_consumed: number;

    /**
     * The number of credits remaining for your organization after this request.
     */
    credits_remaining: number;
  }
}

export interface BrandRetrieveParams {
  /**
   * Domain name to retrieve brand data for (e.g., 'example.com', 'google.com').
   * Cannot be used with name or ticker parameters.
   */
  domain?: string;

  /**
   * Language to force for the retrieved brand data.
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
    | 'zulu'
    | null;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data. Works with all three lookup methods.
   */
  maxSpeed?: boolean;

  /**
   * Company name to retrieve brand data for (e.g., 'Apple Inc'). Cannot be used with
   * domain or ticker parameters.
   */
  name?: string;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Stock ticker symbol to retrieve brand data for (e.g., 'AAPL'). Cannot be used
   * with domain or name parameters.
   */
  ticker?: string;

  /**
   * Stock exchange code.
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
   * Optional tags for tracking usage. Up to 20 tags, each 1 to 50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
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
     * Optional tags for tracking usage. Up to 20 tags, each 1 to 50 characters.
     */
    tags?: Array<string>;

    /**
     * Optional timeout in milliseconds for the request. If the request takes longer
     * than this value, it will be aborted with a 408 status code. Maximum allowed
     * value is 300000ms (5 minutes).
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
     * Optional tags for tracking usage. Up to 20 tags, each 1 to 50 characters.
     */
    tags?: Array<string>;

    /**
     * Optional timeout in milliseconds for the request. If the request takes longer
     * than this value, it will be aborted with a 408 status code. Maximum allowed
     * value is 300000ms (5 minutes).
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
   * Optional tags for tracking usage. Up to 20 tags, each 1 to 50 characters.
   */
  tags?: Array<string>;

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

export interface BrandFontsParams {
  /**
   * A specific URL to fetch fonts from directly, bypassing domain resolution (e.g.,
   * 'https://example.com/design-system'). When provided, fonts are extracted from
   * this exact URL. You must provide either 'domain' or 'directUrl', but not both.
   */
  directUrl?: string;

  /**
   * Domain name to extract fonts from (e.g., 'example.com', 'google.com'). The
   * domain will be automatically normalized and validated. You must provide either
   * 'domain' or 'directUrl', but not both.
   */
  domain?: string;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
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
   * Two-letter ISO 3166-1 alpha-2 country code (GL parameter) used to localize
   * search.
   */
  country_gl?:
    | 'af'
    | 'al'
    | 'dz'
    | 'as'
    | 'ad'
    | 'ao'
    | 'ai'
    | 'aq'
    | 'ag'
    | 'ar'
    | 'am'
    | 'aw'
    | 'au'
    | 'at'
    | 'az'
    | 'bs'
    | 'bh'
    | 'bd'
    | 'bb'
    | 'by'
    | 'be'
    | 'bz'
    | 'bj'
    | 'bm'
    | 'bt'
    | 'bo'
    | 'ba'
    | 'bw'
    | 'bv'
    | 'br'
    | 'io'
    | 'bn'
    | 'bg'
    | 'bf'
    | 'bi'
    | 'kh'
    | 'cm'
    | 'ca'
    | 'cv'
    | 'ky'
    | 'cf'
    | 'td'
    | 'cl'
    | 'cn'
    | 'cx'
    | 'cc'
    | 'co'
    | 'km'
    | 'cg'
    | 'cd'
    | 'ck'
    | 'cr'
    | 'ci'
    | 'hr'
    | 'cu'
    | 'cy'
    | 'cz'
    | 'dk'
    | 'dj'
    | 'dm'
    | 'do'
    | 'ec'
    | 'eg'
    | 'sv'
    | 'gq'
    | 'er'
    | 'ee'
    | 'et'
    | 'fk'
    | 'fo'
    | 'fj'
    | 'fi'
    | 'fr'
    | 'gf'
    | 'pf'
    | 'tf'
    | 'ga'
    | 'gm'
    | 'ge'
    | 'de'
    | 'gh'
    | 'gi'
    | 'gr'
    | 'gl'
    | 'gd'
    | 'gp'
    | 'gu'
    | 'gt'
    | 'gn'
    | 'gw'
    | 'gy'
    | 'ht'
    | 'hm'
    | 'va'
    | 'hn'
    | 'hk'
    | 'hu'
    | 'is'
    | 'in'
    | 'id'
    | 'ir'
    | 'iq'
    | 'ie'
    | 'il'
    | 'it'
    | 'jm'
    | 'jp'
    | 'jo'
    | 'kz'
    | 'ke'
    | 'ki'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'kg'
    | 'la'
    | 'lv'
    | 'lb'
    | 'ls'
    | 'lr'
    | 'ly'
    | 'li'
    | 'lt'
    | 'lu'
    | 'mo'
    | 'mk'
    | 'mg'
    | 'mw'
    | 'my'
    | 'mv'
    | 'ml'
    | 'mt'
    | 'mh'
    | 'mq'
    | 'mr'
    | 'mu'
    | 'yt'
    | 'mx'
    | 'fm'
    | 'md'
    | 'mc'
    | 'mn'
    | 'ms'
    | 'ma'
    | 'mz'
    | 'mm'
    | 'na'
    | 'nr'
    | 'np'
    | 'nl'
    | 'an'
    | 'nc'
    | 'nz'
    | 'ni'
    | 'ne'
    | 'ng'
    | 'nu'
    | 'nf'
    | 'mp'
    | 'no'
    | 'om'
    | 'pk'
    | 'pw'
    | 'ps'
    | 'pa'
    | 'pg'
    | 'py'
    | 'pe'
    | 'ph'
    | 'pn'
    | 'pl'
    | 'pt'
    | 'pr'
    | 'qa'
    | 're'
    | 'ro'
    | 'ru'
    | 'rw'
    | 'sh'
    | 'kn'
    | 'lc'
    | 'pm'
    | 'vc'
    | 'ws'
    | 'sm'
    | 'st'
    | 'sa'
    | 'sn'
    | 'rs'
    | 'sc'
    | 'sl'
    | 'sg'
    | 'sk'
    | 'si'
    | 'sb'
    | 'so'
    | 'za'
    | 'gs'
    | 'es'
    | 'lk'
    | 'sd'
    | 'sr'
    | 'sj'
    | 'sz'
    | 'se'
    | 'ch'
    | 'sy'
    | 'tw'
    | 'tj'
    | 'tz'
    | 'th'
    | 'tl'
    | 'tg'
    | 'tk'
    | 'to'
    | 'tt'
    | 'tn'
    | 'tr'
    | 'tm'
    | 'tc'
    | 'tv'
    | 'ug'
    | 'ua'
    | 'ae'
    | 'gb'
    | 'us'
    | 'um'
    | 'uy'
    | 'uz'
    | 'vu'
    | 've'
    | 'vn'
    | 'vg'
    | 'vi'
    | 'wf'
    | 'eh'
    | 'ye'
    | 'zm'
    | 'zw';

  /**
   * Language to force for the retrieved brand data.
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
    | 'zulu'
    | null;

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
  mcc?: string | number;

  /**
   * Optional phone number from the transaction to help verify brand match.
   */
  phone?: string | number;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

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
   * Optional tags for tracking usage. Up to 20 tags, each 1 to 50 characters.
   */
  tags?: Array<string>;

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
   * Optional tags for tracking usage. Up to 20 tags, each 1 to 50 characters.
   */
  tags?: Array<string>;

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
   * Language to force for the retrieved brand data.
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
    | 'zulu'
    | null;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

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
   * Language to force for the retrieved brand data.
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
    | 'zulu'
    | null;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

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
   * Two-letter ISO 3166-1 alpha-2 country code (GL parameter) used to localize
   * search.
   */
  country_gl?:
    | 'af'
    | 'al'
    | 'dz'
    | 'as'
    | 'ad'
    | 'ao'
    | 'ai'
    | 'aq'
    | 'ag'
    | 'ar'
    | 'am'
    | 'aw'
    | 'au'
    | 'at'
    | 'az'
    | 'bs'
    | 'bh'
    | 'bd'
    | 'bb'
    | 'by'
    | 'be'
    | 'bz'
    | 'bj'
    | 'bm'
    | 'bt'
    | 'bo'
    | 'ba'
    | 'bw'
    | 'bv'
    | 'br'
    | 'io'
    | 'bn'
    | 'bg'
    | 'bf'
    | 'bi'
    | 'kh'
    | 'cm'
    | 'ca'
    | 'cv'
    | 'ky'
    | 'cf'
    | 'td'
    | 'cl'
    | 'cn'
    | 'cx'
    | 'cc'
    | 'co'
    | 'km'
    | 'cg'
    | 'cd'
    | 'ck'
    | 'cr'
    | 'ci'
    | 'hr'
    | 'cu'
    | 'cy'
    | 'cz'
    | 'dk'
    | 'dj'
    | 'dm'
    | 'do'
    | 'ec'
    | 'eg'
    | 'sv'
    | 'gq'
    | 'er'
    | 'ee'
    | 'et'
    | 'fk'
    | 'fo'
    | 'fj'
    | 'fi'
    | 'fr'
    | 'gf'
    | 'pf'
    | 'tf'
    | 'ga'
    | 'gm'
    | 'ge'
    | 'de'
    | 'gh'
    | 'gi'
    | 'gr'
    | 'gl'
    | 'gd'
    | 'gp'
    | 'gu'
    | 'gt'
    | 'gn'
    | 'gw'
    | 'gy'
    | 'ht'
    | 'hm'
    | 'va'
    | 'hn'
    | 'hk'
    | 'hu'
    | 'is'
    | 'in'
    | 'id'
    | 'ir'
    | 'iq'
    | 'ie'
    | 'il'
    | 'it'
    | 'jm'
    | 'jp'
    | 'jo'
    | 'kz'
    | 'ke'
    | 'ki'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'kg'
    | 'la'
    | 'lv'
    | 'lb'
    | 'ls'
    | 'lr'
    | 'ly'
    | 'li'
    | 'lt'
    | 'lu'
    | 'mo'
    | 'mk'
    | 'mg'
    | 'mw'
    | 'my'
    | 'mv'
    | 'ml'
    | 'mt'
    | 'mh'
    | 'mq'
    | 'mr'
    | 'mu'
    | 'yt'
    | 'mx'
    | 'fm'
    | 'md'
    | 'mc'
    | 'mn'
    | 'ms'
    | 'ma'
    | 'mz'
    | 'mm'
    | 'na'
    | 'nr'
    | 'np'
    | 'nl'
    | 'an'
    | 'nc'
    | 'nz'
    | 'ni'
    | 'ne'
    | 'ng'
    | 'nu'
    | 'nf'
    | 'mp'
    | 'no'
    | 'om'
    | 'pk'
    | 'pw'
    | 'ps'
    | 'pa'
    | 'pg'
    | 'py'
    | 'pe'
    | 'ph'
    | 'pn'
    | 'pl'
    | 'pt'
    | 'pr'
    | 'qa'
    | 're'
    | 'ro'
    | 'ru'
    | 'rw'
    | 'sh'
    | 'kn'
    | 'lc'
    | 'pm'
    | 'vc'
    | 'ws'
    | 'sm'
    | 'st'
    | 'sa'
    | 'sn'
    | 'rs'
    | 'sc'
    | 'sl'
    | 'sg'
    | 'sk'
    | 'si'
    | 'sb'
    | 'so'
    | 'za'
    | 'gs'
    | 'es'
    | 'lk'
    | 'sd'
    | 'sr'
    | 'sj'
    | 'sz'
    | 'se'
    | 'ch'
    | 'sy'
    | 'tw'
    | 'tj'
    | 'tz'
    | 'th'
    | 'tl'
    | 'tg'
    | 'tk'
    | 'to'
    | 'tt'
    | 'tn'
    | 'tr'
    | 'tm'
    | 'tc'
    | 'tv'
    | 'ug'
    | 'ua'
    | 'ae'
    | 'gb'
    | 'us'
    | 'um'
    | 'uy'
    | 'uz'
    | 'vu'
    | 've'
    | 'vn'
    | 'vg'
    | 'vi'
    | 'wf'
    | 'eh'
    | 'ye'
    | 'zm'
    | 'zw';

  /**
   * Language to force for the retrieved brand data.
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
    | 'zulu'
    | null;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

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
   * Language to force for the retrieved brand data.
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
    | 'zulu'
    | null;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Stock exchange code.
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

export interface BrandRetrieveNaicsParams {
  /**
   * Brand domain or title to retrieve NAICS code for. If a valid domain is provided,
   * it will be used for classification, otherwise, we will search for the brand
   * using the provided title.
   */
  input: string;

  /**
   * Maximum number of NAICS codes to return. Must be between 1 and 10. Defaults
   * to 5.
   */
  maxResults?: number;

  /**
   * Minimum number of NAICS codes to return. Must be at least 1. Defaults to 1.
   */
  minResults?: number;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

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
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional theme preference used when selecting brand assets.
   */
  theme?: 'light' | 'dark';

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandScreenshotParams {
  /**
   * Optional parameter to choose the site's visual theme in the screenshot. Use
   * 'light' or 'dark' when the site offers both appearances.
   */
  colorScheme?: 'light' | 'dark';

  /**
   * Fetch the target page through a residential proxy in this country (ISO 3166-1
   * alpha-2).
   */
  country?:
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'ao'
    | 'ar'
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
    | 'bq'
    | 'br'
    | 'bs'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cv'
    | 'cw'
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
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gg'
    | 'gh'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'im'
    | 'in'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'je'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'kn'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
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
    | 'me'
    | 'mf'
    | 'mg'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mq'
    | 'mr'
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
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'ss'
    | 'st'
    | 'sv'
    | 'sx'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'tr'
    | 'tt'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'us'
    | 'uy'
    | 'uz'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';

  /**
   * A specific URL to screenshot directly, bypassing domain resolution (e.g.,
   * 'https://example.com/pricing'). When provided, the screenshot is taken of this
   * exact URL. You must provide either 'domain' or 'directUrl', but not both.
   */
  directUrl?: string;

  /**
   * Domain name to take screenshot of (e.g., 'example.com', 'google.com'). The
   * domain will be automatically normalized and validated. You must provide either
   * 'domain' or 'directUrl', but not both.
   */
  domain?: string;

  /**
   * Optional parameter to determine screenshot type. If 'true', takes a full page
   * screenshot capturing all content. If 'false' or not provided, takes a viewport
   * screenshot (standard browser view).
   */
  fullScreenshot?: 'true' | 'false';

  /**
   * Optional parameter to control cookie/consent popup handling. If 'true', we
   * dismiss cookie banner before capture. If 'false' or not provided, captures the
   * page without that step.
   */
  handleCookiePopup?: boolean;

  /**
   * Return a cached screenshot if a prior screenshot for the same parameters exists
   * and is younger than this many milliseconds. Defaults to 1 day (86400000 ms) when
   * omitted. Max is 30 days (2592000000 ms). Set to 0 to always capture fresh.
   */
  maxAgeMs?: number | null;

  /**
   * Optional parameter to specify which page type to screenshot. If provided, the
   * system will scrape the domain's links and use heuristics to find the most
   * appropriate URL for the specified page type (30 supported languages). If not
   * provided, screenshots the main domain landing page. Only applicable when using
   * 'domain', not 'directUrl'.
   */
  page?: 'login' | 'signup' | 'blog' | 'careers' | 'pricing' | 'terms' | 'privacy' | 'contact';

  /**
   * Optional vertical scroll offset in pixels for capturing a long page in
   * viewport-sized chunks. When provided, the full page is captured once and the
   * returned image is the viewport-sized slice that begins at this Y offset (e.g.
   * request scrollOffset=0, then 1080, then 2160 to walk a 1920x1080 landing page
   * top to bottom). The final slice may be shorter than the viewport height. Takes
   * precedence over fullScreenshot. Max: 100000.
   */
  scrollOffset?: number | null;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;

  /**
   * Optional browser viewport dimensions for the screenshot. Defaults to 1920x1080.
   */
  viewport?: BrandScreenshotParams.Viewport;

  /**
   * Optional browser wait time in milliseconds after initial page load before taking
   * the screenshot. Min: 0. Max: 30000 (30 seconds). Defaults to 3000 ms when
   * omitted.
   */
  waitForMs?: number | null;

  /**
   * Set to enabled to bypass shared caches and omit request and response content
   * from retained usage logs. Requires zero data retention to be enabled for your
   * organization (contact support@context.dev), otherwise the request fails with
   * ZDR_NOT_ENABLED. Successful ZDR responses include X-Context-ZDR: true.
   */
  zdr?: 'enabled' | 'disabled';
}

export namespace BrandScreenshotParams {
  /**
   * Optional browser viewport dimensions for the screenshot. Defaults to 1920x1080.
   */
  export interface Viewport {
    /**
     * Viewport height in pixels.
     */
    height?: number;

    /**
     * Viewport width in pixels.
     */
    width?: number;
  }
}

export interface BrandStyleguideParams {
  /**
   * Optional browser color scheme to emulate for websites that respond to
   * prefers-color-scheme. This value is part of the styleguide cache key.
   */
  colorScheme?: 'light' | 'dark';

  /**
   * A specific URL to fetch the styleguide from directly, bypassing domain
   * resolution (e.g., 'https://example.com/design-system'). When provided, the
   * styleguide is extracted from this exact URL. You must provide either 'domain' or
   * 'directUrl', but not both.
   */
  directUrl?: string;

  /**
   * Domain name to extract styleguide from (e.g., 'example.com', 'google.com'). The
   * domain will be automatically normalized and validated. You must provide either
   * 'domain' or 'directUrl', but not both.
   */
  domain?: string;

  /**
   * Maximum age in milliseconds for cached brand data before the API performs a hard
   * refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms)
   * are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1
   * year.
   */
  maxAgeMs?: number | null;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

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
   * Optional browser actions executed in array order after the page loads and before
   * content is captured. Requires a paid plan. Send a JSON array in the query
   * parameter. Maximum: 5 actions.
   */
  actions?: Array<
    BrandWebScrapeHTMLParams.WebScrapeWaitAction | BrandWebScrapeHTMLParams.WebScrapePerformAction
  > | null;

  /**
   * Fetch the target page through a residential proxy in this country (ISO 3166-1
   * alpha-2).
   */
  country?:
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'ao'
    | 'ar'
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
    | 'bq'
    | 'br'
    | 'bs'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cv'
    | 'cw'
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
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gg'
    | 'gh'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'im'
    | 'in'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'je'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'kn'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
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
    | 'me'
    | 'mf'
    | 'mg'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mq'
    | 'mr'
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
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'ss'
    | 'st'
    | 'sv'
    | 'sx'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'tr'
    | 'tt'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'us'
    | 'uy'
    | 'uz'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';

  /**
   * CSS selectors to remove from the result. Applied after includeSelectors.
   * Exclusion takes precedence: an element matching both is removed. Examples:
   * "nav", "footer", ".ad-banner", "[aria-hidden=true]".
   */
  excludeSelectors?: Array<string> | null;

  /**
   * Optional outbound HTTP headers forwarded only to the target URL, sent as
   * deep-object query params such as headers[X-Custom]=value. When provided, caching
   * is bypassed: the result is neither read from nor written to cache.
   */
  headers?: { [key: string]: string };

  /**
   * When true, iframes are rendered inline into the returned HTML.
   */
  includeFrames?: boolean;

  /**
   * CSS selectors. When provided, only matching subtrees (and their descendants) are
   * kept and everything else is dropped. When omitted, the entire document is kept.
   * Examples: "article.main", "#content", "[role=main]".
   */
  includeSelectors?: Array<string> | null;

  /**
   * Return a cached result if a prior scrape for the same parameters exists and is
   * younger than this many milliseconds. Defaults to 1 day (86400000 ms) when
   * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
   */
  maxAgeMs?: number | null;

  /**
   * PDF parsing controls. Use start/end to limit text extraction and embedded-image
   * detection/OCR to an inclusive 1-based page range.
   */
  pdf?: BrandWebScrapeHTMLParams.Pdf;

  /**
   * When true, waits briefly for CSS and transition animations to settle before
   * extracting HTML. Defaults to false. This adds a bit of latency in exchange for
   * more stable output on animated pages.
   */
  settleAnimations?: boolean;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;

  /**
   * When true, return only the page's main content in the HTML response, excluding
   * headers, footers, sidebars, and navigation when detectable.
   */
  useMainContentOnly?: boolean;

  /**
   * Optional browser wait time in milliseconds after initial page load. Min: 0. Max:
   * 30000 (30 seconds).
   */
  waitForMs?: number | null;

  /**
   * Set to enabled to bypass shared caches and omit request and response content
   * from retained usage logs. Requires zero data retention to be enabled for your
   * organization (contact support@context.dev), otherwise the request fails with
   * ZDR_NOT_ENABLED. Successful ZDR responses include X-Context-ZDR: true.
   */
  zdr?: 'enabled' | 'disabled';
}

export namespace BrandWebScrapeHTMLParams {
  /**
   * Pause for a fixed number of milliseconds before continuing to the next action.
   */
  export interface WebScrapeWaitAction {
    do: 'wait';

    timeMs: number;
  }

  /**
   * Resolve and perform one natural-language browser action.
   */
  export interface WebScrapePerformAction {
    action: string;

    do: 'perform';
  }

  /**
   * PDF parsing controls. Use start/end to limit text extraction and embedded-image
   * detection/OCR to an inclusive 1-based page range.
   */
  export interface Pdf {
    /**
     * Last 1-based PDF page to parse. When omitted, parsing ends at the last page.
     * Must be greater than or equal to start when both are provided.
     */
    end?: number;

    /**
     * When true, OCR the selected PDF pages that have no usable text layer (scans),
     * replacing each recovered page's text with the OCR result while pages with a real
     * text layer keep it. Billed at 1 credit per page OCR actually recovered, on top
     * of the base request cost. When false, no OCR runs.
     */
    ocr?: boolean;

    /**
     * When true, PDF URLs are fetched and parsed. When false, PDF URLs are skipped and
     * a 400 PDF_SKIPPED is returned.
     */
    shouldParse?: boolean;

    /**
     * First 1-based PDF page to parse. When omitted, parsing starts at the first page.
     */
    start?: number;
  }
}

export interface BrandWebScrapeImagesParams {
  /**
   * Page URL to inspect. Must include http:// or https://.
   */
  url: string;

  /**
   * Optional browser actions executed in array order after the page loads and before
   * content is captured. Requires a paid plan. Send a JSON array in the query
   * parameter. Maximum: 5 actions.
   */
  actions?: Array<
    BrandWebScrapeImagesParams.WebScrapeWaitAction | BrandWebScrapeImagesParams.WebScrapePerformAction
  > | null;

  /**
   * When true, visually duplicate images are removed: every image is loaded and
   * perceptually hashed, and only the highest-resolution copy of each duplicate
   * group is kept. Images that cannot be downloaded or hashed are kept. Default:
   * false.
   */
  dedupe?: boolean;

  /**
   * Optional per-image processing, sent as deep-object query params such as
   * enrichment[resolution]=true.
   */
  enrichment?: BrandWebScrapeImagesParams.Enrichment | null;

  /**
   * Optional outbound HTTP headers forwarded only to the target URL, sent as
   * deep-object query params such as headers[X-Custom]=value. When provided, caching
   * is bypassed: the result is neither read from nor written to cache.
   */
  headers?: { [key: string]: string };

  /**
   * Reuse a cached result this many milliseconds old or newer. Default: 86400000 (1
   * day). Set to 0 to bypass cache. Maximum: 2592000000 (30 days).
   */
  maxAgeMs?: number | null;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;

  /**
   * Optional browser wait time in milliseconds after initial page load before
   * collecting images. Min: 0. Max: 30000 (30 seconds).
   */
  waitForMs?: number | null;
}

export namespace BrandWebScrapeImagesParams {
  /**
   * Pause for a fixed number of milliseconds before continuing to the next action.
   */
  export interface WebScrapeWaitAction {
    do: 'wait';

    timeMs: number;
  }

  /**
   * Resolve and perform one natural-language browser action.
   */
  export interface WebScrapePerformAction {
    action: string;

    do: 'perform';
  }

  /**
   * Optional per-image processing, sent as deep-object query params such as
   * enrichment[resolution]=true.
   */
  export interface Enrichment {
    /**
     * Classify each image by visual asset type.
     */
    classification?: boolean;

    /**
     * Host materializable images on the Brand.dev CDN and return their URL and MIME
     * type.
     */
    hostedUrl?: boolean;

    /**
     * Per-image enrichment timeout in milliseconds. Default: 30000. Maximum: 60000.
     */
    maxTimePerMs?: number;

    /**
     * Measure image width and height when possible.
     */
    resolution?: boolean;
  }
}

export interface BrandWebScrapeMdParams {
  /**
   * Full URL to scrape into LLM usable Markdown (must include http:// or https://
   * protocol)
   */
  url: string;

  /**
   * Optional browser actions executed in array order after the page loads and before
   * content is captured. Requires a paid plan. Send a JSON array in the query
   * parameter. Maximum: 5 actions.
   */
  actions?: Array<
    BrandWebScrapeMdParams.WebScrapeWaitAction | BrandWebScrapeMdParams.WebScrapePerformAction
  > | null;

  /**
   * Fetch the target page through a residential proxy in this country (ISO 3166-1
   * alpha-2).
   */
  country?:
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'ao'
    | 'ar'
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
    | 'bq'
    | 'br'
    | 'bs'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cv'
    | 'cw'
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
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gg'
    | 'gh'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'im'
    | 'in'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'je'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'kn'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
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
    | 'me'
    | 'mf'
    | 'mg'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mq'
    | 'mr'
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
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'ss'
    | 'st'
    | 'sv'
    | 'sx'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'tr'
    | 'tt'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'us'
    | 'uy'
    | 'uz'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';

  /**
   * CSS selectors to remove before conversion to Markdown. Applied after
   * includeSelectors. Exclusion takes precedence: an element matching both is
   * removed. Examples: "nav", "footer", ".ad-banner", "[aria-hidden=true]".
   */
  excludeSelectors?: Array<string> | null;

  /**
   * Optional outbound HTTP headers forwarded only to the target URL, sent as
   * deep-object query params such as headers[X-Custom]=value. When provided, caching
   * is bypassed: the result is neither read from nor written to cache.
   */
  headers?: { [key: string]: string };

  /**
   * When true, the contents of iframes are rendered to Markdown.
   */
  includeFrames?: boolean;

  /**
   * When true, the response also includes an `html` field with the page HTML the
   * Markdown was converted from — the same body the Scrape HTML endpoint returns for
   * the equivalent request.
   */
  includeHTML?: boolean;

  /**
   * Include image references in Markdown output
   */
  includeImages?: boolean;

  /**
   * Preserve hyperlinks in Markdown output
   */
  includeLinks?: boolean;

  /**
   * CSS selectors. When provided, only matching HTML subtrees (and their
   * descendants) are kept before conversion to Markdown. When omitted, the entire
   * document is kept. Examples: "article.main", "#content", "[role=main]".
   */
  includeSelectors?: Array<string> | null;

  /**
   * Return a cached result if a prior scrape for the same parameters exists and is
   * younger than this many milliseconds. Defaults to 1 day (86400000 ms) when
   * omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.
   */
  maxAgeMs?: number | null;

  /**
   * PDF parsing controls. Use start/end to limit text extraction and embedded-image
   * detection/OCR to an inclusive 1-based page range.
   */
  pdf?: BrandWebScrapeMdParams.Pdf;

  /**
   * When true, waits briefly for CSS and transition animations to settle before
   * converting to Markdown. Defaults to false. This adds a bit of latency in
   * exchange for more stable output on animated pages.
   */
  settleAnimations?: boolean;

  /**
   * Shorten base64-encoded image data in the Markdown output
   */
  shortenBase64Images?: boolean;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;

  /**
   * Extract only the main content of the page, excluding headers, footers, sidebars,
   * and navigation
   */
  useMainContentOnly?: boolean;

  /**
   * Optional browser wait time in milliseconds after initial page load before
   * converting the page to Markdown. Min: 0. Max: 30000 (30 seconds).
   */
  waitForMs?: number | null;

  /**
   * Set to enabled to bypass shared caches and omit request and response content
   * from retained usage logs. Requires zero data retention to be enabled for your
   * organization (contact support@context.dev), otherwise the request fails with
   * ZDR_NOT_ENABLED. Successful ZDR responses include X-Context-ZDR: true.
   */
  zdr?: 'enabled' | 'disabled';
}

export namespace BrandWebScrapeMdParams {
  /**
   * Pause for a fixed number of milliseconds before continuing to the next action.
   */
  export interface WebScrapeWaitAction {
    do: 'wait';

    timeMs: number;
  }

  /**
   * Resolve and perform one natural-language browser action.
   */
  export interface WebScrapePerformAction {
    action: string;

    do: 'perform';
  }

  /**
   * PDF parsing controls. Use start/end to limit text extraction and embedded-image
   * detection/OCR to an inclusive 1-based page range.
   */
  export interface Pdf {
    /**
     * Last 1-based PDF page to parse. When omitted, parsing ends at the last page.
     * Must be greater than or equal to start when both are provided.
     */
    end?: number;

    /**
     * When true, OCR the selected PDF pages that have no usable text layer (scans),
     * replacing each recovered page's text with the OCR result while pages with a real
     * text layer keep it. Billed at 1 credit per page OCR actually recovered, on top
     * of the base request cost. When false, no OCR runs.
     */
    ocr?: boolean;

    /**
     * When true, PDF URLs are fetched and parsed. When false, PDF URLs are skipped and
     * a 400 PDF_SKIPPED is returned.
     */
    shouldParse?: boolean;

    /**
     * First 1-based PDF page to parse. When omitted, parsing starts at the first page.
     */
    start?: number;
  }
}

export interface BrandWebScrapeSitemapParams {
  /**
   * Domain to build a sitemap for
   */
  domain: string;

  /**
   * Optional outbound HTTP headers forwarded only to the target URL, sent as
   * deep-object query params such as headers[X-Custom]=value. When provided, caching
   * is bypassed: the result is neither read from nor written to cache.
   */
  headers?: { [key: string]: string };

  /**
   * Maximum number of links to return from the sitemap crawl. Defaults to 10,000.
   * Minimum is 1, maximum is 100,000.
   */
  maxLinks?: number;

  /**
   * Optional search phrase. When provided, the crawled sitemap is filtered to the
   * pages whose URLs are about that phrase, most relevant first, and the request
   * costs 2 credits instead of 1.
   */
  search?: string;

  /**
   * Optional explicit sitemap URL. When provided, exactly this sitemap is crawled
   * instead of discovering the domain's sitemaps.
   */
  sitemapUrl?: string;

  /**
   * Optional comma-separated caller-defined tags for tracking this request. Tags are
   * recorded on the request's usage log and can be used to filter usage on the
   * dashboard usage page. Up to 20 tags, each 1-50 characters.
   */
  tags?: Array<string>;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;

  /**
   * Optional RE2-compatible regex pattern. Only URLs matching this pattern are
   * returned and counted against maxLinks.
   */
  urlRegex?: string;

  /**
   * Set to enabled to bypass shared caches and omit request and response content
   * from retained usage logs. Requires zero data retention to be enabled for your
   * organization (contact support@context.dev), otherwise the request fails with
   * ZDR_NOT_ENABLED. Successful ZDR responses include X-Context-ZDR: true.
   */
  zdr?: 'enabled' | 'disabled';
}

export declare namespace Brand {
  export {
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandAIProductResponse as BrandAIProductResponse,
    type BrandAIProductsResponse as BrandAIProductsResponse,
    type BrandAIQueryResponse as BrandAIQueryResponse,
    type BrandFontsResponse as BrandFontsResponse,
    type BrandIdentifyFromTransactionResponse as BrandIdentifyFromTransactionResponse,
    type BrandPrefetchResponse as BrandPrefetchResponse,
    type BrandPrefetchByEmailResponse as BrandPrefetchByEmailResponse,
    type BrandRetrieveByEmailResponse as BrandRetrieveByEmailResponse,
    type BrandRetrieveByIsinResponse as BrandRetrieveByIsinResponse,
    type BrandRetrieveByNameResponse as BrandRetrieveByNameResponse,
    type BrandRetrieveByTickerResponse as BrandRetrieveByTickerResponse,
    type BrandRetrieveNaicsResponse as BrandRetrieveNaicsResponse,
    type BrandRetrieveSimplifiedResponse as BrandRetrieveSimplifiedResponse,
    type BrandScreenshotResponse as BrandScreenshotResponse,
    type BrandStyleguideResponse as BrandStyleguideResponse,
    type BrandWebScrapeHTMLResponse as BrandWebScrapeHTMLResponse,
    type BrandWebScrapeImagesResponse as BrandWebScrapeImagesResponse,
    type BrandWebScrapeMdResponse as BrandWebScrapeMdResponse,
    type BrandWebScrapeSitemapResponse as BrandWebScrapeSitemapResponse,
    type BrandRetrieveParams as BrandRetrieveParams,
    type BrandAIProductParams as BrandAIProductParams,
    type BrandAIProductsParams as BrandAIProductsParams,
    type BrandAIQueryParams as BrandAIQueryParams,
    type BrandFontsParams as BrandFontsParams,
    type BrandIdentifyFromTransactionParams as BrandIdentifyFromTransactionParams,
    type BrandPrefetchParams as BrandPrefetchParams,
    type BrandPrefetchByEmailParams as BrandPrefetchByEmailParams,
    type BrandRetrieveByEmailParams as BrandRetrieveByEmailParams,
    type BrandRetrieveByIsinParams as BrandRetrieveByIsinParams,
    type BrandRetrieveByNameParams as BrandRetrieveByNameParams,
    type BrandRetrieveByTickerParams as BrandRetrieveByTickerParams,
    type BrandRetrieveNaicsParams as BrandRetrieveNaicsParams,
    type BrandRetrieveSimplifiedParams as BrandRetrieveSimplifiedParams,
    type BrandScreenshotParams as BrandScreenshotParams,
    type BrandStyleguideParams as BrandStyleguideParams,
    type BrandWebScrapeHTMLParams as BrandWebScrapeHTMLParams,
    type BrandWebScrapeImagesParams as BrandWebScrapeImagesParams,
    type BrandWebScrapeMdParams as BrandWebScrapeMdParams,
    type BrandWebScrapeSitemapParams as BrandWebScrapeSitemapParams,
  };
}
