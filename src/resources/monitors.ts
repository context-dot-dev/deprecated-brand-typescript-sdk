// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Monitors extends APIResource {}

export interface WebhookDelivery {
  attempted_at: string;

  error: WebhookDelivery.Error | null;

  /**
   * The event this delivery carried. Deliveries recorded before event selection
   * existed report change.detected.
   */
  event: 'change.detected' | 'run.completed';

  /**
   * Identifier sent in the X-Context-Id header.
   */
  event_id: string;

  /**
   * The endpoint's final HTTP response status, or null when no response was
   * received.
   */
  http_status: number | null;

  /**
   * Delivery outcome. delivered means any 2xx response; rejected means a non-2xx
   * response; failed means no HTTP response was received; skipped_unsafe_url means
   * the URL failed the public-endpoint safety check.
   */
  status: 'delivered' | 'rejected' | 'failed' | 'skipped_unsafe_url';
}

export namespace WebhookDelivery {
  export interface Error {
    code: string;

    message: string;
  }
}

export declare namespace Monitors {
  export { type WebhookDelivery as WebhookDelivery };
}
