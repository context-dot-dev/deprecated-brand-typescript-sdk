// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Batch extends APIResource {}

/**
 * Page failures sharing one error code.
 */
export interface ErrorCount {
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
 * Why the batch failed.
 */
export interface Error {
  /**
   * Batch error code.
   */
  code: string;

  /**
   * Batch error message.
   */
  message: string;
}

export declare namespace Batch {
  export { type ErrorCount as ErrorCount, type Error as Error };
}
