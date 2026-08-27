// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Batch extends APIResource {}

/**
 * Page failures sharing one error code.
 */
export interface PageErrorCount {
  /**
   * Error code for these failures.
   */
  code: string;

  /**
   * Pages that failed with this code.
   */
  count: number;
}

/**
 * A failure of the batch as a whole, distinct from the per-page failures in
 * `page_errors`.
 */
export interface Failure {
  /**
   * Why the batch itself stopped.
   */
  code: string;

  /**
   * Human-readable explanation.
   */
  message: string;
}

/**
 * The crawl controls as submitted, so the limits requested can be compared against
 * what the crawl reached.
 */
export interface CrawlControls {
  /**
   * Whether links to subdomains were followed. Always false for a sitemap crawl.
   */
  follow_subdomains: boolean;

  /**
   * Link depth limit. Always 0 for a sitemap crawl, which never follows links off
   * its URLs; null when a `start_url` crawl set no limit.
   */
  max_depth: number | null;

  /**
   * The `maxUrls` submitted with the crawl. A sitemap crawl scrapes only the URLs
   * its sitemap actually lists, up to this many, so `input.reserved` is often lower.
   */
  max_pages: number;

  /**
   * Where the crawl started.
   */
  source: CrawlControls.StartURL | CrawlControls.Sitemap;

  /**
   * RE2 pattern URLs had to match to be crawled. Null when the crawl set none.
   */
  url_pattern: string | null;
}

export namespace CrawlControls {
  /**
   * The crawl discovered pages by following links from one URL.
   */
  export interface StartURL {
    type: 'start_url';

    /**
     * Page the crawl started from.
     */
    url: string;
  }

  /**
   * The crawl scraped the pages listed in the domain's sitemap.
   */
  export interface Sitemap {
    /**
     * Domain whose sitemap supplied the pages.
     */
    domain: string;

    type: 'sitemap';
  }
}

/**
 * What submission took in, and what it charged for.
 */
export interface Intake {
  /**
   * URLs dropped before reserving because another entry resolved to the same page.
   * Non-zero for sitemap crawls too, whose sitemaps routinely list a page more than
   * once.
   */
  duplicates: number;

  /**
   * URLs from your list rejected as unusable; the same ones are itemised in
   * `invalid_urls` at submission. Null for a crawl — a crawl that resolves no usable
   * page is rejected outright with a 400 rather than accepted with an empty list.
   */
  invalid: number | null;

  /**
   * Pages credits were reserved for. Everything else — progress, the refund, the
   * completion percentage — is measured against this.
   */
  reserved: number;

  /**
   * Whether `reserved` is an upper bound the batch may finish under. True only for a
   * crawl that follows links, whose reachable page count is unknowable until it
   * runs. False for a scrape and for a sitemap crawl, where `reserved` is an exact
   * page count.
   */
  reserved_is_ceiling: boolean;

  /**
   * URLs in the list you sent, before validation and de-duplication. Null for a
   * crawl, which is given a source rather than a list.
   */
  submitted: number | null;
}

export declare namespace Batch {
  export {
    type PageErrorCount as PageErrorCount,
    type Failure as Failure,
    type CrawlControls as CrawlControls,
    type Intake as Intake,
  };
}
