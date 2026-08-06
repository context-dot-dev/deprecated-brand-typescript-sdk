// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BrandDev from 'brand.dev';

const client = new BrandDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brand', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.brand.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.brand.retrieve(
        {
          domain: 'xxx',
          force_language: 'afrikaans',
          maxAgeMs: 0,
          maxSpeed: 'true',
          name: 'xxx',
          tags: ['production', 'team-alpha'],
          ticker: 'ticker',
          ticker_exchange: 'AMEX',
          timeoutMS: 1000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BrandDev.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('aiProduct: only required params', async () => {
    const responsePromise = client.brand.aiProduct({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('aiProduct: required and optional params', async () => {
    const response = await client.brand.aiProduct({
      url: 'https://example.com',
      maxAgeMs: 0,
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('aiProducts: only required params', async () => {
    const responsePromise = client.brand.aiProducts({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('aiProducts: required and optional params', async () => {
    const response = await client.brand.aiProducts({
      domain: 'domain',
      maxAgeMs: 0,
      maxProducts: 1,
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('aiQuery: only required params', async () => {
    const responsePromise = client.brand.aiQuery({
      data_to_extract: [
        {
          datapoint_description: 'datapoint_description',
          datapoint_example: 'datapoint_example',
          datapoint_name: 'datapoint_name',
          datapoint_type: 'text',
        },
      ],
      domain: 'domain',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('aiQuery: required and optional params', async () => {
    const response = await client.brand.aiQuery({
      data_to_extract: [
        {
          datapoint_description: 'datapoint_description',
          datapoint_example: 'datapoint_example',
          datapoint_name: 'datapoint_name',
          datapoint_type: 'text',
          datapoint_list_type: 'string',
          datapoint_object_schema: { testimonial_text: 'string', testimonial_author: 'string' },
        },
      ],
      domain: 'domain',
      specific_pages: {
        about_us: true,
        blog: true,
        careers: true,
        contact_us: true,
        faq: true,
        home_page: true,
        pricing: true,
        privacy_policy: true,
        terms_and_conditions: true,
      },
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('fonts', async () => {
    const responsePromise = client.brand.fonts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('fonts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.brand.fonts(
        {
          directUrl: 'https://example.com',
          domain: 'xxx',
          maxAgeMs: 0,
          tags: ['production', 'team-alpha'],
          timeoutMS: 1000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BrandDev.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('identifyFromTransaction: only required params', async () => {
    const responsePromise = client.brand.identifyFromTransaction({ transaction_info: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('identifyFromTransaction: required and optional params', async () => {
    const response = await client.brand.identifyFromTransaction({
      transaction_info: 'xxx',
      city: 'city',
      country_gl: 'af',
      force_language: 'afrikaans',
      high_confidence_only: 'true',
      maxSpeed: 'true',
      mcc: 'string',
      phone: 'string',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('prefetch: only required params', async () => {
    const responsePromise = client.brand.prefetch({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('prefetch: required and optional params', async () => {
    const response = await client.brand.prefetch({
      domain: 'domain',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('prefetchByEmail: only required params', async () => {
    const responsePromise = client.brand.prefetchByEmail({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('prefetchByEmail: required and optional params', async () => {
    const response = await client.brand.prefetchByEmail({
      email: 'dev@stainless.com',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByEmail: only required params', async () => {
    const responsePromise = client.brand.retrieveByEmail({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByEmail: required and optional params', async () => {
    const response = await client.brand.retrieveByEmail({
      email: 'dev@stainless.com',
      force_language: 'afrikaans',
      maxAgeMs: 0,
      maxSpeed: 'true',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByIsin: only required params', async () => {
    const responsePromise = client.brand.retrieveByIsin({ isin: 'SE60513A9993' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByIsin: required and optional params', async () => {
    const response = await client.brand.retrieveByIsin({
      isin: 'SE60513A9993',
      force_language: 'afrikaans',
      maxAgeMs: 0,
      maxSpeed: 'true',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByName: only required params', async () => {
    const responsePromise = client.brand.retrieveByName({ name: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByName: required and optional params', async () => {
    const response = await client.brand.retrieveByName({
      name: 'xxx',
      country_gl: 'af',
      force_language: 'afrikaans',
      maxAgeMs: 0,
      maxSpeed: 'true',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByTicker: only required params', async () => {
    const responsePromise = client.brand.retrieveByTicker({ ticker: 'ticker' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByTicker: required and optional params', async () => {
    const response = await client.brand.retrieveByTicker({
      ticker: 'ticker',
      force_language: 'afrikaans',
      maxAgeMs: 0,
      maxSpeed: 'true',
      tags: ['production', 'team-alpha'],
      ticker_exchange: 'AMEX',
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveNaics: only required params', async () => {
    const responsePromise = client.brand.retrieveNaics({ input: 'xxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveNaics: required and optional params', async () => {
    const response = await client.brand.retrieveNaics({
      input: 'xxxx',
      maxResults: 1,
      minResults: 1,
      tags: ['production', 'team-alpha'],
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveSimplified: only required params', async () => {
    const responsePromise = client.brand.retrieveSimplified({ domain: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveSimplified: required and optional params', async () => {
    const response = await client.brand.retrieveSimplified({
      domain: 'xxx',
      maxAgeMs: 0,
      tags: ['production', 'team-alpha'],
      theme: 'light',
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('screenshot', async () => {
    const responsePromise = client.brand.screenshot();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('screenshot: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.brand.screenshot(
        {
          colorScheme: 'light',
          country: 'de',
          directUrl: 'https://example.com',
          domain: 'xxx',
          fullScreenshot: 'true',
          handleCookiePopup: 'true',
          maxAgeMs: 0,
          page: 'login',
          scrollOffset: 0,
          tags: ['production', 'team-alpha'],
          timeoutMS: 1,
          viewport: { height: 240, width: 240 },
          waitForMs: 0,
          zdr: 'enabled',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BrandDev.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('styleguide', async () => {
    const responsePromise = client.brand.styleguide();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('styleguide: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.brand.styleguide(
        {
          colorScheme: 'light',
          directUrl: 'https://example.com',
          domain: 'xxx',
          maxAgeMs: 0,
          tags: ['production', 'team-alpha'],
          timeoutMS: 1000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BrandDev.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('webScrapeHTML: only required params', async () => {
    const responsePromise = client.brand.webScrapeHTML({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeHTML: required and optional params', async () => {
    const response = await client.brand.webScrapeHTML({
      url: 'https://example.com',
      actions: [{ do: 'wait', timeMs: 0 }],
      country: 'de',
      excludeSelectors: ['x'],
      headers: { foo: 'J!' },
      includeFrames: 'true',
      includeSelectors: ['x'],
      maxAgeMs: 0,
      pdf: {
        end: 1,
        ocr: 'true',
        shouldParse: 'true',
        start: 1,
      },
      settleAnimations: 'true',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1,
      useMainContentOnly: 'true',
      waitForMs: 0,
      zdr: 'enabled',
    });
  });

  // Mock server tests are disabled
  test.skip('webScrapeImages: only required params', async () => {
    const responsePromise = client.brand.webScrapeImages({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeImages: required and optional params', async () => {
    const response = await client.brand.webScrapeImages({
      url: 'https://example.com',
      actions: [{ do: 'wait', timeMs: 0 }],
      dedupe: 'true',
      enrichment: {
        classification: 'true',
        hostedUrl: 'true',
        maxTimePerMs: 1,
        resolution: 'true',
      },
      headers: { foo: 'J!' },
      maxAgeMs: 0,
      tags: ['production', 'team-alpha'],
      timeoutMS: 1,
      waitForMs: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('webScrapeMd: only required params', async () => {
    const responsePromise = client.brand.webScrapeMd({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeMd: required and optional params', async () => {
    const response = await client.brand.webScrapeMd({
      url: 'https://example.com',
      actions: [{ do: 'wait', timeMs: 0 }],
      country: 'de',
      excludeSelectors: ['x'],
      headers: { foo: 'J!' },
      includeFrames: 'true',
      includeImages: 'true',
      includeLinks: 'true',
      includeSelectors: ['x'],
      maxAgeMs: 0,
      pdf: {
        end: 1,
        ocr: 'true',
        shouldParse: 'true',
        start: 1,
      },
      settleAnimations: 'true',
      shortenBase64Images: 'true',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1,
      useMainContentOnly: 'true',
      waitForMs: 0,
      zdr: 'enabled',
    });
  });

  // Mock server tests are disabled
  test.skip('webScrapeSitemap: only required params', async () => {
    const responsePromise = client.brand.webScrapeSitemap({ domain: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeSitemap: required and optional params', async () => {
    const response = await client.brand.webScrapeSitemap({
      domain: 'xxx',
      headers: { foo: 'J!' },
      maxLinks: 1,
      search: 'help center and troubleshooting articles',
      sitemapUrl: 'https://example.com',
      tags: ['production', 'team-alpha'],
      timeoutMS: 1,
      urlRegex: '^https?://[^/]+/blog/',
      zdr: 'enabled',
    });
  });
});
